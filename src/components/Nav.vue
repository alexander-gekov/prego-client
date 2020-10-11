<template>
    <div class="flex p-4 pb-10 justify-between">
        <router-link to="/">
            <img src="@/assets/img/Preg.png" width="64" alt="">
        </router-link>
        <div class="flex">
            <router-link to="/" class="lg:mr-16">
                <h2 class="p-4 text-gray-700 rounded-lg hover:bg-gray-300">Back</h2>
            </router-link>
            <router-link to="/company/create" class="lg:mr-16">
                <h2 class="p-4 text-gray-700 rounded-lg hover:bg-gray-300">Create company</h2>
            </router-link>
            <router-link to="/employee/create" class="lg:mr-16">
                <h2 class="p-4 text-gray-700 rounded-lg hover:bg-gray-300">Create employee</h2>
            </router-link>
            <router-link to="/login" class="lg:mr-16">
                <h2 class="p-4 text-gray-700 rounded-lg hover:bg-gray-300">Log in</h2>
            </router-link>
          <router-link to="/admin/dashboard" class="lg:mr-16">
            <h2 class="p-4 text-gray-700 rounded-lg hover:bg-gray-300">Dashboard</h2>
          </router-link>
          <router-link to="/companies" class="lg:mr-16">
            <h2 class="p-4 text-gray-700 rounded-lg hover:bg-gray-300">Companies Home</h2>
          </router-link>


        </div>
    </div>
</template>

<script>
    export default {
        name: "Nav"
    }
</script>

<style scoped>

</style>
