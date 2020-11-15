<template>
    <div class="container mx-auto min-h-screen h-screen flex mt-10 text-gray-800"
         :style="`--main-bg-color: ${accentColor};`">
        <div class="flex-1 flex overflow-hidden">
            <div @click="selectedElement=''"
                 class="flex flex-col items-center flex-1 bg-white rounded-lg rounded-l-none overflow-y-scroll py-8">
                <div class="text-3xl mb-8 font-sans text-gray-800">{{formName}}</div>
                <FormulateForm v-model="values">
                            <div class="flex mb-8"
                                 v-for="(item,index) in items"
                                 :key="index">
                                <FormulateInput
                                        v-bind="item"
                                >
                                </FormulateInput>
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
            axios.get('http://localhost:8000/api/companies/?name=' + this.$route.params.company_name)
                .then(response => {
                    console.log(response.data)
                    this.company_id = response.data[0].id
                    axios.get('/api/companies/' + response.data[0].id + '/form')
                        .then(response => {
                            this.items = JSON.parse(response.data[0].json_form);
                            this.accentColor = response.data[0].accent_color;
                            this.formName = response.data[0].form_name;
                            console.log(response.data[0])
                        })
                })

        },
        data() {
            return {
                show: true,
                company_id: '',
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
