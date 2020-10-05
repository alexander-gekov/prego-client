<template>
  <div class="flex justify-center">
    <div class="form flex flex-col justify-center">
      <div class="text-center text-4xl text-gray-700 mb-4">Employee profile</div>
      <div class="text-center text-gray-600 text-sm mb-10">Create a personalized profile for an employee!</div>
      <form class="mb-4 flex flex-col justify-between">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="company">
            Company
          </label>

        <div id="company" class="dropdown inline-block relative text-gray-700 w-full">
          <select class="inline-flex shadow appearance-none border rounded w-full py-2 px-3 md:pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline px-4 py-2 bg-white hover:text-gray-500">
            <span class="mr-1">Select a company</span>
            <svg class="fill-current h-4 w-4 right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>

<!--          <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">-->
            <option><a class="rounded-t bg-white border  hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#" disabled>Select a company</a></option>
            <option><a class="bg-white hover:bg-gray-400 border py-2 px-4 block whitespace-no-wrap" href="#">List of companies</a></option>
            <option><a class="rounded-b bg-white hover:bg-gray-400 border py-2 px-4 block whitespace-no-wrap" href="#">currently in the building</a></option>
<!--          </ul>-->
          </select>
        </div>

        </div>



        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="firstname">
            First name
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 md:pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 id="firstname" type="text" placeholder="Enter first name">
        </div>
        <div class="mb-8">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="lastname">
            Last name
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 md:pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 id="lastname" type="text" placeholder="Enter last name">
        </div>
        <div class="mb-8">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 md:pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 id="email" type="email" placeholder="Email">
        </div>
        <div class="mb-4 flex justify-center">
          <button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-16 rounded focus:outline-none focus:shadow-outline"
                  type="button">
            Create employee profile
          </button>
        </div>
      </form>
      <footer class="flex flex-col md:flex-row text-center">
        <a class="inline-block align-baseline font-bold text-sm text-gray-600 hover:text-gray-800" href="#">
          Terms and Conditions
        </a>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateEmployee"
}
</script>

<style scoped>
.dropdown:hover .dropdown-menu {
  display: block;
}
span{
  color: lightgray;
}

</style>
