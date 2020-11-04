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
            {{companies[0].company_name}}
          </p>
          <input class="w-11/12 text-center mr-6 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 v-if="editing" v-model="companies[0].company_name" type="text">
        </div>
      </div>
      <div class="rounded overflow-hidden m-8 w-56 h-56">
        <div class="flex justify-center"><i class="fas fa-sort-numeric-up text-6xl"></i></div>
        <div class="px-6 py-4">
          <div class="text-2xl mb-2">Office number</div>
          <p v-if="!editing" class="text-gray-700 text-xl mt-2 text-base">
            {{companies[0].office_number}}
          </p>
          <input class=" w-11/12 text-center mr-6 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 v-if="editing" v-model="companies[0].office_number" type="text">
        </div>
      </div>
      <div class=" rounded overflow-hidden m-8 w-56 h-56">
        <div class="flex justify-center "><i class="fas fa-user text-6xl"></i></div>
        <div class="px-6 py-4">
          <div class="text-2xl mb-2">Manager name</div>
          <p v-if="!editing" class="text-gray-700 text-xl mt-2 text-base">
            {{companies[0].owner_name}}
          </p>
          <input class="w-11/12 text-center mr-6 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 v-if="editing" v-model="companies[0].owner_name" type="text">
        </div>
      </div>
      <div class=" rounded overflow-hidden m-8 w-56 h-56">
        <div class="flex justify-center"><i class="fas fa-envelope-open-text text-6xl"></i></div>
        <div class="px-6 py-4">
          <div class="text-2xl mb-2">Email</div>
          <span v-if="!editing" class="text-gray-700 text-xl mt-2 text-base">
            user email
          </span>
          <input class="w-11/12 text-center mr-6 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-if="editing" v-model="companies[0].office_number" type="text">
        </div>
      </div>
      <button v-if="editing" @click="editing = !editing"
              class=" bg-purple-500 hover:bg-purple-700 p-4 m-4 rounded-full shadow-md flex justify-center items-center focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
             width="24" height="24"
             viewBox="0 0 50 50"
             style=" fill:#ffffff;">
          <path d="M 43.125 2 C 41.878906 2 40.636719 2.488281 39.6875 3.4375 L 38.875 4.25 L 45.75 11.125 C 45.746094 11.128906 46.5625 10.3125 46.5625 10.3125 C 48.464844 8.410156 48.460938 5.335938 46.5625 3.4375 C 45.609375 2.488281 44.371094 2 43.125 2 Z M 37.34375 6.03125 C 37.117188 6.0625 36.90625 6.175781 36.75 6.34375 L 4.3125 38.8125 C 4.183594 38.929688 4.085938 39.082031 4.03125 39.25 L 2.03125 46.75 C 1.941406 47.09375 2.042969 47.457031 2.292969 47.707031 C 2.542969 47.957031 2.90625 48.058594 3.25 47.96875 L 10.75 45.96875 C 10.917969 45.914063 11.070313 45.816406 11.1875 45.6875 L 43.65625 13.25 C 44.054688 12.863281 44.058594 12.226563 43.671875 11.828125 C 43.285156 11.429688 42.648438 11.425781 42.25 11.8125 L 9.96875 44.09375 L 5.90625 40.03125 L 38.1875 7.75 C 38.488281 7.460938 38.578125 7.011719 38.410156 6.628906 C 38.242188 6.246094 37.855469 6.007813 37.4375 6.03125 C 37.40625 6.03125 37.375 6.03125 37.34375 6.03125 Z"></path>
        </svg>
      </button>
    </div>


    <!--    <CRUDEmployee></CRUDEmployee>-->
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: 'DashboardCompanyOwner',
  components: {},
  data() {
    return {
      user: localStorage.getItem('user'),
      companies: [],
      editing: false,

    }
  },
  methods: {
    edit() {
      this.editing = !this.editing;
    }
  },
  created() {
    axios.get('http://localhost:8000/api/' + localStorage.getItem('user_id') + '/companies')
        .then(response => {
          this.companies = response.data
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
</style>
