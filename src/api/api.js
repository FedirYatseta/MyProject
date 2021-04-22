import * as axios from "axios";


const instance = axios.create({
    baseURL: 'http://localhost:4000/',
});


export const studentAPI = {
    getUsers() {
        return instance.get('users')
            .then(response => {
                return response.data;
            })
    },


    createUser(name, address, email, contact, gender) {
        return instance.post('users/create', { name, address, email, contact, gender })

    },

    deleteUser(id) {
        return instance.delete('users/user/' + id)
    },

    getUserID(id) {
        debugger;
        return instance.get('users/user/' + id)
    }
}