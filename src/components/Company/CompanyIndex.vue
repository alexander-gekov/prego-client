<template>
    <div class="flex-column min-h-screen">
        <div class="flex p-24">
            <div class="w-1/3 p-2">
                <!--                -->
                <!--                IMAGE OF THE COMPANY-->
                <!--                -->
                <img :src="company_logo"
                     alt="">
            </div>
            <div class="flex-1 px-12">
                <div class="text-5xl font-bold mb-10">{{company_name}}</div>
                <div class="text-2xl font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
                    assumenda blanditiis consequuntur corporis cupiditate, debitis dolorem eaque eius enim error esse
                    harum illum impedit in libero, magni maiores minima minus natus nihil officiis perspiciatis placeat
                    quam quisquam quod, sit ullam veritatis? Alias consequuntur distinctio ea magni nihil officia
                    repellendus sint.
                </div>
                <div class="flex mt-10">
                    <router-link :to="'/company/' + company_name + '/register'" class="bg-blue-500 px-10 py-3 rounded-full shadow-lg hover:bg-blue-600 text-white mr-8 focus:outline-none">
                        <span class="text-xl">Pre-register</span></router-link>
                    <button class="bg-white px-10 py-3 border border-blue-500 rounded-full shadow-lg hover:bg-gray-200 text-blue-500 focus:outline-none">
                        <span class="text-xl">Email</span></button>
                </div>
            </div>
        </div>
        <div class="flex p-24 bg-white">
            <div class="flex-1 px-12">
                <div class="text-4xl font-bold mb-10">About us</div>
                <div class="text-2xl font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
                    assumenda blanditiis consequuntur corporis cupiditate, debitis dolorem eaque eius enim error esse
                    harum illum impedit in libero, magni maiores minima minus natus nihil officiis perspiciatis placeat
                    quam quisquam quod, sit ullam veritatis? Alias consequuntur distinctio ea magni nihil officia
                    repellendus sint.
                </div>
            </div>
            <div class="w-1/3 bg-white rounded-lg shadow-lg">
                <!--                -->
                <!--                IMAGE OF THE COMPANY-->
                <!--                -->
                <img src="https://www.simac.com/uploads/media/5652f8b130907/Simac%20logo%20full%20colour%20rgb.jpg"
                     alt="">
            </div>
        </div>
        <vueper-slides autoplay>
            <vueper-slide v-for="(slide, i) in slides"
                          :key="i"
                          :image="slide.image"
                          :title="slide.title"
                          :content="slide.content" class="text-white text-3xl shadow-lg"/>
        </vueper-slides>
    </div>
</template>

<script>
    import {VueperSlide, VueperSlides} from 'vueperslides'
    import 'vueperslides/dist/vueperslides.css'
    import axios from 'axios'

    export default {
        name: "CompanyIndex",
        components: {VueperSlides, VueperSlide},
        created() {
            //make request to get info about company
            axios.get('http://localhost:8000/api/companies/?name=' + this.$route.params.company_name)
            .then(response => {
                console.log(response.data)
                this.company_name = response.data[0].company_name
                this.company_logo = response.data[0].logo_img
            })
        },
        data() {
            return {
                company_name: '',
                company_logo: '',
                slides: [
                    {
                        title: 'Slide 1',
                        content: 'Photo',
                        // You can also provide a URL for the image.
                        image: 'https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                    },
                    {
                        title: 'Slide 2',
                        content: 'Photo',
                        // You can also provide a URL for the image.
                        image: 'https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                    },
                    {
                        title: 'Slide 3',
                        content: 'Photo',
                        // You can also provide a URL for the image.
                        image: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'
                    }
                ]
            }
        },
    }
</script>

<style scoped>

</style>
