import axios from 'axios';
import useAuth from './useAuth';

const axiosInstance = axios.create({
    baseURL: `https://knowledge-server-xhu2.onrender.com`,
})
const UseAxiosSecure = () => {
    const { user, logOut } = useAuth();

    axiosInstance.interceptors.request.use(config => {
        config.headers.authorization = `Bearer ${user?.accessToken}`;
        return config;
    })

    axiosInstance.interceptors.response.use(response => response, async error => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
            await logOut();
            console.error("Unauthorized or Forbidden response - logging out user.");
        }
        return Promise.reject(error);
    });
    return axiosInstance;
};

export default UseAxiosSecure;