<template>

    <div class="square w-1/5 shadow-md text-center max-w-sm ">
        <div class="content mb-8">
            <div class="p-4  flex justify-center items-center">
                <img :src="company.logo_img"
                     class="image w-3/4 " alt="Company logo">
            </div>
            <div class="flex flex-wrap w-full">
                <h4 class="text-center mx-auto mb-4">{{company.company_name}}</h4>
            </div>
            <router-link class="w-1/2 mx-auto bg-blue-500 px-4 py-2 text-white rounded-lg"
                         :to="'/company/' + company.company_name">
                Visit
            </router-link>
        </div>
    </div>

</template>

<script>

    export default {
        props: {
            company: Object
        },
    }
</script>


<style scoped>
    .square {
        position: relative;
    }

    .square:hover {
        background-color: ghostwhite;
    }

</style>
