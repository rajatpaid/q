import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://talentsavvy-be.talentsavvy-dev.svc.cluster.local:8080",
  headers: {
    'Content-Security-Policy': 'upgrade-insecure-requests'
  }
});
const authToken = localStorage.getItem("token");


apiClient.interceptors.request.use(
  (request) => {
    request.headers["Content-Type"] = "application/json";
     request.headers['Authorization'] = 'Bearer '+ authToken 
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    if(error.response.status===400){
    // alert("Invalid req")
    
    }
  }
);

export default apiClient;
