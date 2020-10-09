<template>
  <div class="dashboard">
    <div class="p-4  ml-5">
      <h3>Hello, {username}</h3>
      <h3> Building name</h3>
      <h3> Address </h3>
    </div>


<div class="min-h-screen flex-1 p-4 flex justify-center items-start">
<div class="bg-white w-full md:max-w-4xl rounded-lg shadow">
  <div class="h-12 flex justify-between items-center border-b border-gray-200 m-4">
    <div>
      <div class="text-xl font-bold text-gray-700">Companies overview</div>
      <div class="text-sm font-base text-gray-500">View, add, update and delete company profiles </div>
    </div>
    <div>
      <div class="flex items-center justify-center w-full  shadow-md rounded-full">
        <label class="flex items-center cursor-pointer"></label>
        <div class="flex items-center">
          <button @click='toggleModal = !toggleModal' class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add new company</button>
        </div>

<!--        Modal       -->
        <div v-if="toggleModal" class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50">
          <div class="relative mx-auto w-auto max-w-2xl">
            <div class="bg-white w-full rounded shadow-2xl flex flex-col p-5">
              <div class="text-2xl font-bold text-center">Add company</div>
              <form class="bg-white rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="companyname">
                    Company name
                  </label>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="companyname" type="text" placeholder="Company Name">
                </div>
                <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="officenumber">
                  Office number
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="officenumber" type="text" placeholder="Office number">
                </div>
                <div class="mb-4">
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="ownername">
                    Owner name
                  </label>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="ownerename" type="text" placeholder="Owner Name">
                </div>
                <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="owneremail">
              Owner email
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="owneremail" type="text" placeholder="Owner Email">
          </div>
                <br>

                <div class="flex items-center justify-between">
                  <button class="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline right" type="button">
                    Submit
                  </button>
                  <button class="bg-red-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" @click="toggleModal = false" type="button">
                    Close
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
    <div class="flex justify-between items-center h-16 p-4 my-6  rounded-lg border border-gray-100 shadow-md">
      <div class="flex items-center">
        <img class="rounded-full h-12 w-12" src="https://static-cdn.jtvnw.net/jtv_user_pictures/27fdad08-a2c2-4e0b-8983-448c39519643-profile_image-70x70.png" alt="Logo" />
        <div class="ml-2">
          <div class="text-sm font-semibold text-gray-600">Company name</div>
          <div class="text-sm font-light text-gray-500">Office number</div>
        </div>
      </div>

      <div class="flex items-center">
        <button class="bg-purple-500 hover:bg-purple-700 p-2 m-4 rounded-full shadow-md flex justify-center items-center">
          <svg class="text-white toggle__lock w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <button class="bg-red-400 hover:bg-red-500 p-2 m-2 rounded-full shadow-md flex justify-center items-center">
          <svg class="text-white toggle__lock w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
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
export default {
  name: 'CRUDCompany',
  data () {
    return {
      toggleModal: false,
      form: {
        company_name: '',
        office_number: '',
        owner_name: '',
        owner_email: '',
        logo_img: ''


      }
    }
  },
}
</script>

<style scoped>
.toggle__dot {
  transition: all 0.3s ease-in-out;
}

</style>
