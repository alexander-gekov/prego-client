<template>
    <div class="dashboard">
        <vue-confirm-dialog></vue-confirm-dialog>
        <div class="min-h-screen p-4 flex justify-center items-start">
            <div class="bg-white w-full md:max-w-6xl rounded-lg shadow">
                <div class="h-12 flex justify-between items-center border-b border-gray-200 m-4">
                    <div>
                        <div class="text-xl font-bold text-gray-700">{{ $t('dashboardBuildingOwner.content.title') }}</div>
                        <div class="text-sm font-base text-gray-500">{{ $t('dashboardBuildingOwner.content.subtitle') }}</div>
                    </div>
                    <div>
                        <div class="flex items-center justify-center w-full  shadow-md rounded-full">
                            <label class="flex items-center cursor-pointer"></label>
                            <div class="flex items-center">
                                <button @click='openModal'
                                        class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                    {{ $t('dashboardBuildingOwner.content.addNewButton') }}
                                </button>
                            </div>

                            <!--        Modal       -->
                            <div v-if="toggleModal"
                                 class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50">
                                <div class="relative mx-auto w-1/3">
                                    <div class="bg-white w-full rounded shadow-2xl flex flex-col p-5">
                                        <div class="text-2xl font-bold text-center">{{ $t('dashboardBuildingOwner.content.title') }}</div>
                                        <form class="bg-white rounded px-8 pt-6 pb-8 mb-4">
                                            <div class="mb-4">
                                                <label class="block text-gray-700 text-sm font-bold mb-2"
                                                       for="companyname">
                                                    {{ $t('dashboardBuildingOwner.crudCompanyForms.companyName') }}
                                                </label>
                                                <input
                                                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                        id="companyname" v-model="form.company_name" required
                                                        type="text" placeholder="Company Name">
                                            </div>
                                            <div class="mb-4">
                                                <label class="block text-gray-700 text-sm font-bold mb-2"
                                                       for="officenumber">
                                                    {{ $t('dashboardBuildingOwner.crudCompanyForms.officeNumber') }}
                                                </label>
                                                <input
                                                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                        id="officenumber" v-model="form.office_number" required
                                                        type="text" placeholder="Office number">
                                            </div>
                                            <div class="mb-4">
                                                <label class="block text-gray-700 text-sm font-bold mb-2"
                                                       for="ownername">
                                                    {{ $t('dashboardBuildingOwner.crudCompanyForms.managerName') }}
                                                </label>
                                                <input
                                                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                        id="ownername" v-model="form.manager_name" required type="text"
                                                        placeholder="Manager Name">
                                            </div>
                                            <div class="mb-4">
                                                <label class="block text-gray-700 text-sm font-bold mb-2"
                                                       for="owneremail">
                                                    {{ $t('dashboardBuildingOwner.crudCompanyForms.ownerEmail') }}
                                                </label>
                                                <input
                                                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                        id="owneremail" v-model="form.owner_email" required type="email"
                                                        placeholder="Owner Email">
                                            </div>
                                            <br>

                                            <div class="flex items-center justify-between">
                                                <button
                                                        @click="addCompany"
                                                        class="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline right"
                                                        type="button">
                                                    {{ $t('dashboardBuildingOwner.crudCompanyForms.submitButton') }}
                                                </button>
                                                <button
                                                        class="bg-red-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                                        @click="toggleModal = false" type="button">
                                                    {{ $t('dashboardBuildingOwner.crudCompanyForms.closeButton') }}
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <!--        <div v-if="toggleModal" class="absolute insert-0 z-40 opacity-25 bg-black"></div>-->
                        </div>
                    </div>
                </div>
                <div class="px-6">
                    <div v-for="(company,index) in companies" :key="company.id"
                         class="flex justify-between items-center h-16 p-4 my-6  rounded-lg border border-gray-100 shadow-md">
                        <div class="flex items-center">
                            <img class="rounded-full h-12 w-12"
                                 :src="getImage(company.logo_img)"
                                 alt="Logo"/>
                            <div class="ml-4 flex">
                                <div v-if="!editing" class="font-semibold text-gray-600 mr-6">{{company.company_name}}
                                </div>
                                <input class="w-1/2 mr-6 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                       v-if="editing" v-model="company.company_name" type="text">
                                <div v-if="!editing" class="font-light text-gray-500">{{company.office_number}}</div>
                                <input class="w-1/2 mr-6 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                       v-if="editing" v-model="company.office_number" type="text">
                            </div>
                            <button v-if="editing" @click="save(company)"
                                    class="bg-purple-500 hover:bg-purple-700 text-white px-4 p-2 m-4 rounded-full shadow-md flex justify-center items-center focus:outline-none">
                                {{ $t('dashboardBuildingOwner.crudCompanyForms.saveButton') }}
                            </button>
                        </div>

                        <div class="flex items-center">
                            <button @click="editing = !editing"
                                    class="bg-purple-500 hover:bg-purple-700 p-2 m-4 rounded-full shadow-md flex justify-center items-center focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                     width="24" height="24"
                                     viewBox="0 0 50 50"
                                     style=" fill:#ffffff;">
                                    <path d="M 43.125 2 C 41.878906 2 40.636719 2.488281 39.6875 3.4375 L 38.875 4.25 L 45.75 11.125 C 45.746094 11.128906 46.5625 10.3125 46.5625 10.3125 C 48.464844 8.410156 48.460938 5.335938 46.5625 3.4375 C 45.609375 2.488281 44.371094 2 43.125 2 Z M 37.34375 6.03125 C 37.117188 6.0625 36.90625 6.175781 36.75 6.34375 L 4.3125 38.8125 C 4.183594 38.929688 4.085938 39.082031 4.03125 39.25 L 2.03125 46.75 C 1.941406 47.09375 2.042969 47.457031 2.292969 47.707031 C 2.542969 47.957031 2.90625 48.058594 3.25 47.96875 L 10.75 45.96875 C 10.917969 45.914063 11.070313 45.816406 11.1875 45.6875 L 43.65625 13.25 C 44.054688 12.863281 44.058594 12.226563 43.671875 11.828125 C 43.285156 11.429688 42.648438 11.425781 42.25 11.8125 L 9.96875 44.09375 L 5.90625 40.03125 L 38.1875 7.75 C 38.488281 7.460938 38.578125 7.011719 38.410156 6.628906 C 38.242188 6.246094 37.855469 6.007813 37.4375 6.03125 C 37.40625 6.03125 37.375 6.03125 37.34375 6.03125 Z"></path>
                                </svg>
                            </button>
                            <button @click="deleteCompany(index,company.id)"
                                    class="bg-red-400 hover:bg-red-500 p-2 m-2 rounded-full shadow-md flex justify-center items-center focus:outline-none">
                                <svg class="text-white toggle__lock w-6 h-6" xmlns="http://www.w3.org/2000/svg"
                                     fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'CRUDCompany',
        data() {
            return {
                toggleModal: false,
                form: {
                    company_name: '',
                    office_number: '',
                    manager_name: '',
                    owner_email: '',
                    logo_img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/27fdad08-a2c2-4e0b-8983-448c39519643-profile_image-70x70.png'
                },
                companies: [],
                manager_id: '',
                editing: false,

            //  Password generation
              characters: [
                {
                  name: "Uppercase",
                  value: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                },
                {
                  name: "Numbers",
                  value: "0123456789",
                }
              ],
              password: "",
              gLength: 9,
              image: ''
            }
        },
        created() {
            axios.get('https://prego-api.herokuapp.com/api/' + localStorage.getItem('user_id') + '/companies')
                .then(response => {
                    this.companies = response.data
                })
                .catch(error => {
                    console.log(error.message);
                })
        },
        methods: {
          getImage(image){
            if((/\.(gif|jpg|jpeg|tiff|png)$/i).test(image)){
              return image = 'https://prego-api.herokuapp.com/images/' + image
            }else {
              return image
            }
          },            addCompany() {
                // eslint-disable-next-line no-unused-vars
                this.companies.push(this.form)
                this.toggleModal = false;

                axios.post('/api/register',{
                    "email": this.form.owner_email,
                    "password": this.generatePassword(),
                    "role_id": "3"
                }).then(response => {
                    console.log("registered")
                    this.manager_id = response.data.user.id;
                    console.log("manager id = " + this.manager_id)
                    axios.post('/api/companies', {
                        "building_owner_id": localStorage.getItem('user_id'),
                        "manager_id": this.manager_id,
                        "company_name": this.form.company_name,
                        "office_number": this.form.office_number,
                        "manager_name": this.form.manager_name,
                        "logo_img": "https://static-cdn.jtvnw.net/jtv_user_pictures/27fdad08-a2c2-4e0b-8983-448c39519643-profile_image-70x70.png"
                    })
                        .then(response => {
                            console.log("added company")
                            console.log(localStorage.getItem('user_id'))
                            console.log(response.data)
                        });
                })
            },
            save(company) {
                this.editing = false;
                console.log(this.form.company_name)
                axios.put('/api/companies/' + company.id, {
                    "company_name": company.company_name,
                    "office_number": company.office_number
                }).then(response => {
                    console.log(response.data)
                })
                    .catch(error => {
                        console.log(error.message)
                    })
            },
            deleteCompany(index, id) {
                this.$confirm(
                    {
                        message: this.$t('areYouSurePopUp.content'),
                        button: {
                            no: this.$t('areYouSurePopUp.no'),
                            yes: this.$t('areYouSurePopUp.yes')
                        },
                        /**
                         * Callback Function
                         * @param {Boolean} confirm
                         */
                        callback: confirm => {
                            if (confirm) {
                                this.companies.splice(index, 1)
                              // TODO -> should also delete in users
                                axios.delete('/api/companies/' + id)
                                    .then(response => {
                                        console.log(response.data)
                                    })
                                    .catch(error => {
                                        console.log(error.message)
                                    })
                            }
                        }
                    }
                )
            },
            openModal(){
                this.toggleModal = !this.toggleModal;
                this.editing = false;
                this.form = {}
            },
          generatePassword() {
            let result = "";
            let charactersVal = "";
            for (let j = 0; j < this.characters.length; j++) {
              if (this.characters[j]) {
                charactersVal += this.characters[j].value;
              }
            }
            for (let i = 0; i < this.gLength; i++ ) {
              result += charactersVal.charAt(Math.floor(Math.random() * charactersVal.length));
            }
            this.password = result;
            console.log(result);
            return result;
          }

        }
    }
</script>

<style scoped>
    .toggle__dot {
        transition: all 0.3s ease-in-out;
    }

</style>
