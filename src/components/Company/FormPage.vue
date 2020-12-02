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
                                :disabled="item.type==='submit'? !dateIsValid : false"
                                @change="handleChange"
                                :validation="item.name==='date-start' ? 'dateIsValid' : item.validation"
                                :validation-rules="{
                                dateIsValid: ({}) => dateIsValid
                                }"
                                :validation-messages="{
                                dateIsValid: 'Time slot unavailable.'
                                }"
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
                unavailable: [],
                validation: [],
                dateValid: true,
                drag: false
            }
        },
        computed: {
            date_end: function() {
                let date_end = new Date(this.values['date-start'])
                return date_end.setMinutes(date_end.getMinutes() + this.values['duration'])
            },
            dateIsValid: function(){
                return this.dateValid;
            }
        },
        methods: {
            submitForm() {
                this.values["date-start"] = new moment(this.values["date-start"])
                this.values["date-end"] = new moment(this.values["date-start"]).add(this.values["duration"], 'minutes')

                let data = {
                    "employee_id": this.values["employee"],
                    "answers": JSON.stringify(this.values)
                }
                console.log(data);
                axios.post(`http://localhost:8000/api/appointments`, data)
                    .then(r => {
                        console.log(r.data);
                        this.$router.back();
                    })
                    .catch()
            },
            handleChange() {
                if (this.values['date-start'] && this.values['employee']) {
                    axios.get('http://localhost:8000/api/appointments/unavailable/', {
                        params: {
                            date_start: this.values['date-start'],
                            employee_id: this.values['employee']
                        }
                    }).then(response => {
                        this.unavailable = response.data;
                        let date = new Date(this.values['date-start'])
                        let date_end = new moment(this.values["date-start"]).add(this.values["duration"], 'minutes')
                        this.unavailable.every(x => {
                            let start = new Date(x.date_start);
                            let end = new Date(x.date_end);
                            console.log('start ' + start)
                            console.log('date ' + date)
                            console.log('end ' + end)
                            console.log('date_end '+ date_end.toDate())
                            console.log(this.values['duration'])
                            if (date.getTime() > start.getTime() && date.getTime() < end.getTime()) {
                                this.dateValid = false;
                                return false;
                            } else if (date_end > start.getTime() && date_end < end.getTime()) {
                                this.dateValid = false;
                                return false;
                            } else {
                                this.dateValid = true;
                                return true;
                            }
                        })
                    })

                }
            },

        },
    }
</script>

<style scoped>
</style>
