import axios from 'axios';

const axiosInstance = axios.create({
});

axiosInstance.defaults.headers.common = {
  "Content-Type": "application/json"
}

axiosInstance.interceptors.request.use(request => {
    console.log('Starting Request', request);
    return request;
  });
  
axiosInstance.interceptors.response.use(response => {
  console.log('Response:', response);
  return response;
});
  
export default axiosInstance;