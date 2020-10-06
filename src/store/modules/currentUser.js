import axios from 'axios';

const state = {
    user: {}
};
const getters = {};
const actions = {
    // eslint-disable-next-line no-empty-pattern
    loginUser( {}, user){
        axios.post("http://localhost:8000/api/login",{
            email: user.email,
            password: user.password,
            password_confirmation: user.password
        }).then(response => {
            console.log(response.data)
            if(response.data.token){
                //save token
                localStorage.setItem(
                    "user_token",
                    response.data.token
                )
                window.location.replace("/")
            }
        })
    }
};
const mutations = {};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

