<template>
    <div class="container mx-auto min-h-screen h-screen flex mt-10 text-gray-800"
         :style="`--main-bg-color: ${accentColor};`">
        <div class="flex-1 flex overflow-hidden">
            <div @click="selectedElement=''"
                 class="flex flex-col flex-1 items-center bg-white rounded-lg rounded-l-none border-gray-400 border-4 overflow-y-scroll overflow-x-hidden py-8">
                <div class="text-3xl mb-8 font-sans text-gray-800">{{formName}}</div>
                <FormulateForm @submit="submitForm" v-model="values">
                    <div class="mb-8"
                         v-for="(item,index) in items"
                         :key="index">
                        <FormulateInput
                                v-bind="item"
                                :options="item.name === 'employee' ? employeesArray : item.options"
                                v-if="item.name != 'duration' || (item.name === 'duration' && values.isLonger === true)"
                                :input-class="['w-128']"
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
    import moment from 'moment'


    Vue.use(VueFormulate)

    export default {
        name: "FormCreator",
        components: {},
        created() {
            axios.get('/api/companies/' + this.$route.params.id + '/form')
                .then(response => {
                    this.items = JSON.parse(response.data[0].json_form);
                    this.accentColor = response.data[0].accent_color;
                    this.formName = response.data[0].form_name;
                    this.employees = response.data[0].company.employees;
                    this.employees.forEach(emp => {
                        this.employeesArray.push({
                            label: emp.first_name,
                            value: emp.id
                        })
                    })
                })
        },
        data() {
            return {
                show: true,
                // company_id: '',
                values: {},
                accentColor: '',
                formName: '',
                items: [],
                employees: [],
                employeesArray: [],
                validation: [],
                drag: false
            }
        },
        methods: {
            submitForm() {

                this.values["date-start"] = new moment(this.values["date-start"])
                this.values["date-end"] = new moment(this.values["date-start"]).add(this.values["duration"], 'minutes')

                let data = {
                    "employee_id" : this.values["employee"].value,
                    "answers" : JSON.stringify(this.values)
                }
                console.log(data);
                axios.post(`http://localhost:8000/api/appointments`, data)
                    .then(r => {
                        console.log(r.data);
                        this.$router.back();
                    })
                    .catch()
            }
        },
    }
</script>

<style scoped>
</style>
