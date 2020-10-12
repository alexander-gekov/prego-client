<template>
  <div>
    <div class="flex justify-between">
      <div class="m-32 mt-12 w-1/3">
        <div class="pb-4">
          <span class="links text-purple-500 underline">victoriapark/companies </span>
        </div>
        <h2> All Companies </h2>
        <div class="below-title links">
          <span>Click on a company logo to book a visit </span>
        </div>
      </div>

      <div class="sort m-32">
<!--        <button class="bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded">Sort</button>-->

          <div class="dropdown inline-block relative">
            <button class="bg-transparent text-purple-700 hover:bg-purple-500 font-semibold hover:text-white py-2 px-4 rounded inline-flex items-center border border-purple-500">
              <span class="mr-1">Sort by</span>
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
            </button>
            <ul class="dropdown-menu absolute hidden text-purple-700 pt-1">
              <li class=""><a class="rounded-t bg-purple-100 hover:bg-purple-300 py-2 px-4 block whitespace-no-wrap " href="#">Name asc.</a></li>
              <li class=""><a class="bg-purple-100 hover:bg-purple-300 py-2 px-4 block whitespace-no-wrap" href="#">Name desc.</a></li>
              <li class=""><a class="rounded-b bg-purple-100 hover:bg-purple-300 py-2 px-4 block whitespace-no-wrap" href="#">Floor</a></li>
            </ul>
          </div>

      </div>

    </div>
    <div class="flex flex-wrap justify-center items-center ml-20 mr-20">

      <CompanyCard v-for="company in companies" :key="company.id" :company="company"></CompanyCard>


    </div>

  </div>
</template>

<script>
  import axios from 'axios'
  import CompanyCard from './CompanyCard'

export default {
  name: "CompaniesHome",
  components: {
    CompanyCard,
  },
  data() {
    return {
      companies: [],
    }
  },
  created() {
    axios.get('http://localhost:8000/companies')
    .then(response => {
      console.log(response.data)
      this.companies = response.data
    })
  }
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

.dropdown:hover .dropdown-menu {
  display: block;
}

h2 {
  font-size: 35px;
  line-height: 1.4em;
}
</style>
