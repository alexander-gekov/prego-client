<template>

    <div class="flex justify-center">
        <div class="form flex flex-col justify-center">
            <div class="text-center text-5xl text-gray-700 mb-4">Log in</div>
            <div class="text-center text-gray-600 text-sm mb-10">Welcome to Prego building registration manager! <br>
            </div>
            <form class="mb-4 flex flex-col justify-between">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Username
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 md:pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           id="username" v-model="user.email" type="text" placeholder="Enter your username">
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 md:pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           id="password" v-model="user.password" :type="type" placeholder="Enter your password">
                    <label class="inline-flex items-center mt-3">
                        <input class="mr-2 form-checkbox h-5 w-5 text-purple-600" type="checkbox" @click="showPassword">{{
                        messagePassword }}</label>
                </div>

                <div class="mb-4 mt-4 flex justify-center">
                    <button @click.prevent="login" class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-16 rounded focus:outline-none focus:shadow-outline"
                            type="button">
                        Log in
                    </button>
                </div>
            </form>
            <footer class="flex flex-col md:flex-row text-center">
                <a class="inline-block align-baseline font-bold text-sm text-gray-600 hover:text-gray-800 mr-4"
                   href="#">
                    Forgot Password?
                </a>
                <a class="inline-block align-baseline font-bold text-sm text-gray-600 hover:text-gray-800" href="#">
                    Terms and Conditions
                </a>
            </footer>
        </div>


    </div>


</template>

<script>
    export default {

        name: "LogIn",

        data() {
            return {
                type: 'password',
                messagePassword: 'Show Password',
                user: {
                    email: '',
                    password: '',
                }
            }
        },

        methods: {

            showPassword() {
                if (this.type === 'password') {
                    this.type = 'text'
                    this.messagePassword = 'Hide Password'
                } else {
                    this.type = 'password'
                    this.messagePassword = 'Show Password'
                }
            },
            login() {
              this.$store.dispatch('currentUser/loginUser',this.user)
            }
        }
    }

</script>


<style scoped>

</style>
