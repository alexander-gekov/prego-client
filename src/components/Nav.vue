<template>
    <div class="md:container mx-auto flex p-4 pb-6 justify-between">
        <router-link to="/">
            <img src="@/assets/img/Preg.png" width="64" alt="">
        </router-link>
        <div class="flex">
            <router-link to="/" class="lg:mr-8">
                <h2 class="p-4 text-gray-700 rounded-lg hover:bg-gray-300">Home</h2>
            </router-link>
          <router-link to="/companies" class="lg:mr-8">
            <h2 class="p-4 text-gray-700 rounded-lg hover:bg-gray-300">Companies</h2>
          </router-link>
          <router-link v-if="isLoggedIn && (role==='1')" to="/admin/dashboard" class="lg:mr-8">
            <h2 class="p-4 text-gray-700 rounded-lg hover:bg-gray-300">Dashboard</h2>
          </router-link>
            <router-link v-if="isLoggedIn && (role==='2')" to="/building/dashboard" class="lg:mr-8">
                <h2 class="p-4 text-gray-700 rounded-lg hover:bg-gray-300">Dashboard</h2>
            </router-link>
          <router-link v-if="isLoggedIn && (role==='3')" to="/office/dashboard" class="lg:mr-8">
            <h2 class="p-4 text-gray-700 rounded-lg hover:bg-gray-300">Dashboard</h2>
          </router-link>
          <router-link v-if="isLoggedIn && (role==='4')" to="/employee/dashboard" class="lg:mr-8">
            <h2 class="p-4 text-gray-700 rounded-lg hover:bg-gray-300">Dashboard</h2>
          </router-link>
            <router-link v-if="!isLoggedIn" to="/login" class="lg:mr-8">
                <h2 class="p-4 text-gray-700 rounded-lg hover:bg-gray-300">Log in</h2>
            </router-link>
            <div v-if="isLoggedIn" class="lg:mr-8">
                <button @click.prevent="logout" class="p-4 text-gray-700 rounded-lg hover:bg-gray-300 align-middle">Log
                    Out
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    let token = localStorage.getItem('token')
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token

    export default {
        name: "Nav",
        computed: {
            isLoggedIn: function () {
                return this.$store.getters.isLoggedIn;
            },
            role: () => {
                return localStorage.getItem('role_id');
            }
        },
        methods: {
            // logout() {
            //     this.$store.dispatch('currentUser/logout')
            //     this.$router.push('/login')
            // }
            logout: function () {
                this.$store.dispatch('logout')
                    .then(() => {
                        this.$router.push('/login')

                    })
            }
        }
    }
</script>

<style scoped>

</style>
