import axiosClient from "./axiosClient";


const DogAPi = {

     sub_id : 'not-user-113',

    getPaginationList: (currentPage) => {
        const params = {
            limit: 15,
            page: currentPage,
        }
        const url = '/breeds';
        return axiosClient.get(url, { params });
    },

    getListOfDogImage: (params) => {

        const url = '/images/search';
        return axiosClient.get(url, { params });
    },






    // favourites action
    postFavouritesDog: function (image_id) {

        const params = {
            sub_id: this.sub_id,
            image_id
        }
        const url = "/favourites";

        return axiosClient.post(url, params).then(() => {
            alert('Successfully save to your favourites pictures!!!')
        });

    },

    //vote action

    postVote: function (image_id, value) {

        const params = {
            sub_id: this.sub_id,
            image_id,
            value
        }
        const url = "/votes";

        return axiosClient.post(url, params).then(() => {
            alert(value === 1 ?'Post your votes done up!!!' : 'Post your votes done down!!!')
        });

    }

}
// const productApi = new ProductApi();
export default DogAPi;