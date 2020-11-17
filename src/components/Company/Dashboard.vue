<template>
  <div>

    <div class="flex justify-center">
      <div class="flex-wrap justify-center my-20">
        <h2 class="flex-col text-center"> Manage your company</h2>
        <p class="flex-col text-center text-gray-500 my-6 text-xl">Double click below to edit</p>
      </div>
    </div>

    <div class="flex flex-wrap justify-center items-center ml-20 mr-20 text-center" @dblclick="edit()">

      <div class="rounded overflow-hidden m-8 w-56 h-56 jus">
        <div class="flex justify-center "><i class="fas fa-building text-6xl"></i></div>
        <div class="px-6 py-4">
          <div class="text-2xl mb-2">Company name</div>
          <p v-if="!editing" class="text-gray-700 text-xl mt-2 text-base">
            {{ company.company_name }}
          </p>
          <input
              class="w-11/12 text-center mr-6 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              v-if="editing" v-model="company.company_name" type="text">
        </div>
      </div>
      <div class="rounded overflow-hidden m-8 w-56 h-56">
        <div class="flex justify-center"><i class="fas fa-sort-numeric-up text-6xl"></i></div>
        <div class="px-6 py-4">
          <div class="text-2xl mb-2">Office number</div>
          <p v-if="!editing" class="text-gray-700 text-xl mt-2 text-base">
            {{ company.office_number }}
          </p>
          <input
              class=" w-11/12 text-center mr-6 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              v-if="editing" v-model="company.office_number" type="text">
        </div>
      </div>
      <div class=" rounded overflow-hidden m-8 w-56 h-56">
        <div class="flex justify-center "><i class="fas fa-user text-6xl"></i></div>
        <div class="px-6 py-4">
          <div class="text-2xl mb-2">Manager name</div>
          <p v-if="!editing" class="text-gray-700 text-xl mt-2 text-base">
            {{ company.owner_name }}
          </p>
          <input
              class="w-11/12 text-center mr-6 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              v-if="editing" v-model="company.owner_name" type="text">
        </div>
      </div>
      <div class=" rounded overflow-hidden m-8 w-56 h-56">
        <div class="flex justify-center"><i class="fas fa-envelope-open-text text-6xl"></i></div>
        <div class="px-6 py-4">
          <div class="text-2xl mb-2">Email</div>
          <span v-if="!editing" class="text-gray-700 text-xl mt-2 text-base">
            user email
          </span>
          <input
              class="w-11/12 text-center mr-6 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              v-if="editing" v-model="company.office_number" type="text">
        </div>
      </div>
      <button v-if="editing" @click="editing = !editing"
              class=" bg-purple-500 hover:bg-purple-700 p-4 m-4 rounded-full shadow-md flex justify-center items-center focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
             width="24" height="24"
             viewBox="0 0 50 50"
             style=" fill:#ffffff;">
          <path
              d="M 43.125 2 C 41.878906 2 40.636719 2.488281 39.6875 3.4375 L 38.875 4.25 L 45.75 11.125 C 45.746094 11.128906 46.5625 10.3125 46.5625 10.3125 C 48.464844 8.410156 48.460938 5.335938 46.5625 3.4375 C 45.609375 2.488281 44.371094 2 43.125 2 Z M 37.34375 6.03125 C 37.117188 6.0625 36.90625 6.175781 36.75 6.34375 L 4.3125 38.8125 C 4.183594 38.929688 4.085938 39.082031 4.03125 39.25 L 2.03125 46.75 C 1.941406 47.09375 2.042969 47.457031 2.292969 47.707031 C 2.542969 47.957031 2.90625 48.058594 3.25 47.96875 L 10.75 45.96875 C 10.917969 45.914063 11.070313 45.816406 11.1875 45.6875 L 43.65625 13.25 C 44.054688 12.863281 44.058594 12.226563 43.671875 11.828125 C 43.285156 11.429688 42.648438 11.425781 42.25 11.8125 L 9.96875 44.09375 L 5.90625 40.03125 L 38.1875 7.75 C 38.488281 7.460938 38.578125 7.011719 38.410156 6.628906 C 38.242188 6.246094 37.855469 6.007813 37.4375 6.03125 C 37.40625 6.03125 37.375 6.03125 37.34375 6.03125 Z"></path>
        </svg>
      </button>
    </div>
    <div class="flex justify-center ">
      <div class=" flex-initial w-2/6 m-5 rounded-lg shadow bg-gray-100">
        <h2 class="text-center p-4">Company Details</h2>
        <div>
          <div class=" md:flex justify-center md:items-center mb-6 p-5 ">
            <div class="profile-img ">
              <img class="rounded-3xl"
                   src="https://www.graphicsprings.com/filestorage/stencils/76de53de859953d24e65447798f9ccbd.png?width=500&height=500"
                   alt="ProfileImage"/>
              <div class="file btn btn-lg btn-primary py-1">
                Change Company Logo
                <input type="file" name="file" class="form-control-file" id="picture" @change="onFileChange">
              </div>
            </div>
          </div>
          <div class="md:flex md:items-center mb-6 p-5">
            <div class="md:w-1/3">
              <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Description
              </label>
            </div>
            <div class="md:w-2/3">
              <textarea
                  class="appearance-none bg-transparent border-b border-black w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none border-b border-black"
                  name="Text1" cols="40" rows="3"></textarea>
            </div>
          </div>
          <div class="md:flex md:items-center mb-6 p-5">
            <div class="md:w-1/3">
              <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Company history
              </label>
            </div>
            <div class="md:w-2/3">
              <textarea
                  class="appearance-none bg-transparent border-b border-black w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none border-b border-black"
                  name="Text1" cols="40" rows="3"></textarea>
            </div>
          </div>

          <div class="md:flex md:items-center">
            <div class="md:w-1/3"></div>
            <div class="md:w-2/3 mb-4">
              <button @click="save(companies[0])"
                      class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-5 rounded"
                      type="button">
                Edit
              </button>
            </div>
          </div>

        </div>
      </div>
      <div class="flex-initial w-3/6 mx-5">
        <CRUDEmployee></CRUDEmployee>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";
import CRUDEmployee from "@/components/Company/CRUDEmployee";

export default {
  name: 'DashboardCompanyOwner',
  components: {CRUDEmployee},
  data() {
    return {
      user: localStorage.getItem('user'),
      companies: [],
      editing: false,
      picture: '',
      company: '',

    }
  },
  methods: {
    onFileChange(event) {
      this.picture = event.target.files[0];
    },
    edit() {
      this.editing = !this.editing;
    },
    save(company) {
      let formData = new FormData();

      formData.append("image", this.picture);
      formData.append("company_name", this.companies[0].company_name);
      formData.append("office_number", this.companies[0].office_number);
      formData.append("id", this.companies[0].id);


      axios.put('/api/companies/' + company.id, {
        "image": this.picture,
        "company_name": this.companies[0].company_name,
        "office_number": this.companies[0].office_number,
      })
          .then((res) => {
            console.log(res);
          })
          .catch((error) => {
            console.log(error);
          });
    },
  },
  created() {
    axios.get('http://localhost:8000/api/' + localStorage.getItem('user_id') + '/companies')
        .then(response => {
          this.companies = response.data
          console.log(this.companies)
          this.company = this.companies[0]
          localStorage.setItem("company_id", this.company.id)
        })
        .catch(error => {
          console.log(error.message);
        })
  },
}
</script>

<style scoped>


.links {
  text-transform: uppercase;
  letter-spacing: 2px;
}

.below-title {
  border-top: dotted 1px #999;
  border-bottom: dotted 1px #999;
  padding-top: 10px;
  padding-bottom: 10px;
  color: darkgray;
  font-size: smaller;
}


h2 {
  font-size: 35px;
  line-height: 1.4em;
}

.profile-img {
  text-align: center;
  max-width: 15rem;
}

.profile-img img {
  width: 100%;
  height: 100%;
  border-top-left-radius: 30%;
  border-top-right-radius: 30%;
}

.profile-img .file {
  position: relative;
  overflow: hidden;
  margin-top: -5%;
  width: 100%;
  font-size: 15px;
  background: lightgrey;
}

.profile-img .file input {
  position: absolute;
  opacity: 0;
  right: 0;
  top: 0;
}
</style>
