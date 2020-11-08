<template>
    <div class="container mx-auto min-h-screen h-screen flex mt-10 text-gray-800"
         :style="`--main-bg-color: ${accentColor};`">
        <div class="flex-1 flex overflow-hidden">
            <div @click="selectedElement=''"
                 class="flex flex-col items-center flex-1 bg-white rounded-lg rounded-l-none overflow-y-scroll py-8">
                <div v-if="show===false" class="text-3xl mb-8 font-sans text-gray-800">{{formName}}</div>
                <FormulateForm v-if="show===false" v-model="values">
                            <div class="flex mb-8"
                                 v-for="(item,index) in items"
                                 :key="index">
                                <FormulateInput
                                        v-bind="item"
                                >
                                </FormulateInput>
                                <div class="flex">
                                    <button class="text-green-500 ml-5 self-start focus:outline-none"
                                            @click="selectedEl = index">
                                        <svg class="w-6 h-6 transform hover:-translate-y-1  hover:scale-110 transition duration-500 ease-in-out hover:text-green-600"
                                             fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                                        </svg>
                                    </button>
                                    <button class="text-red-500 ml-5 self-start focus:outline-none"
                                            v-if="item.type != 'submit' && items.length > 2" @click="items.splice(index,1)">
                                        <svg class="w-6 h-6 transform hover:-translate-y-1  hover:scale-110 transition duration-500 ease-in-out hover:text-red-600"
                                             fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                </FormulateForm>
            </div>
        </div>
    </div>
</template>

<script>
    import VueFormulate from '@braid/vue-formulate'
    import Vue from 'vue'
    import axios from 'axios'


    Vue.use(VueFormulate)

    export default {
        name: "FormCreator",
        components: {
        },
        created() {
            axios.get('/api/companies/' + this.$route.params.company_name + '/form',)
        },
        data() {
            return {
                show: true,
                formName: '',
                accentColor: '',
                validation: [],
                values: {},
                items: [],
                drag: false
            }
        },
        methods: {

        },
    }
</script>

<style scoped>
</style>
