import axios from "axios"
import { fetchFail, fetchStart, loginSuccess, logoutSuccess, registerSuccess } from "../features/authSlice";
import { useDispatch } from "react-redux";

const BASE_URL="https://clarusway.pythonanywhere.com/";

const useAuthCall = () => {
    const dispatch= useDispatch();

    const login = async (userInfo) => {
        try {
            dispatch(fetchStart());
            const {data} = await axios.post(`${BASE_URL}account/auth/login/`, userInfo);
            dispatch(loginSuccess(data));
            
        } catch (error) {
            console.log(error)
            dispatch(fetchFail());
            
        }
        };

        const logout = async () => {
            dispatch(fetchStart());
            try {
              await axios.post(`${BASE_URL}account/auth/logout/`);
              dispatch(logoutSuccess());
            } catch (error) {
              console.log(error);
              dispatch(fetchFail());
            }
          };

          const register = async (userInfo) => {
            try {
                dispatch(fetchStart());
                const {data} = await axios.post(`${BASE_URL}account/auth/register/`, userInfo);
                dispatch(registerSuccess(data));
                
            } catch (error) {
                console.log(error)
                dispatch(fetchFail());
                
            }
            };
        
          return { login, logout, register };
    
}

export default useAuthCall


