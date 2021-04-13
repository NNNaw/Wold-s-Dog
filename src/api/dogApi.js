import axiosClient from "./axiosClient";


const DogAPi = {

    getPaginationList: (params) => {
        const url = '/breeds';
        return axiosClient.get(url, { params });
    }

}
// const productApi = new ProductApi();
export default DogAPi;