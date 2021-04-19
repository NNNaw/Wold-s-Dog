import axios from 'axios';
import queryString from 'query-string';

// Set up default config for http requests here

// Please have a look at here `https://github.com/axios/axios#request-
//config` for the full list of configs

const { REACT_APP_API_URL, REACT_APP_API_KEY } = process.env;


const axiosClient = axios.create({
    baseURL: REACT_APP_API_URL,
   
    headers: {
        'content-type': 'application/json',
        "X-Api-Key": REACT_APP_API_KEY
    },
    paramsSerializer: params => queryString.stringify(params),
});


axiosClient.interceptors.request.use(async (config) => {
    console.log(config);
    return config;
})
axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {

        return response.data;
    }
    return response;
}, (error) => {
    // Handle errors
    throw error;
});
export default axiosClient;