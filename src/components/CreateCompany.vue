<template>
    <div class="flex justify-center">
        <div class="form flex flex-col justify-center">
            <div class="text-center text-4xl text-gray-700 mb-4">Company profile</div>
            <div class="text-center text-gray-600 text-sm mb-10">Create a customized profile for a company owner!</div>
            <form class="mb-4 flex flex-col justify-between">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                        Company Name
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 md:pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           id="name" type="text" placeholder="Company Name">
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="office">
                        Office Number
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 md:pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           id="office" type="text" placeholder="Office Number">
                </div>
                <div class="mb-8">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="owner">
                        Company Owner
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 md:pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           id="owner" type="text" placeholder="Company Owner">
                </div>
              <div class="mb-8">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                  Company Owner Email
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 md:pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                       id="email" type="email" placeholder="Email">
              </div>
                <div class="mb-4 flex justify-center">
                    <button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-16 rounded focus:outline-none focus:shadow-outline"
                            type="button">
                        Create company profile
                    </button>
                </div>
            </form>
            <footer class="flex flex-col md:flex-row text-center">
<!--                <a class="inline-block align-baseline font-bold text-sm text-gray-600 hover:text-gray-800 mr-4" href="#">-->
<!--                    Forgot Password?-->
<!--                </a>-->
                <a class="inline-block align-baseline font-bold text-sm text-gray-600 hover:text-gray-800" href="#">
                    Terms and Conditions
                </a>
            </footer>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Create company"
    }
</script>

<style scoped>

</style>
