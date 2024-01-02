<script setup>

    import {ref, reactive} from 'vue'
    const name = ref('John Doe')

</script>

<template>
    <!-- Start form -->
    <section class="text-gray-600 body-font relative bg-white mt-5">
      <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-1/2 md:w-2/3 mx-auto">
          <div class="flex flex-wrap -m-2">
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="name" class="leading-7 text-sm text-gray-600">Name: {{ name }}</label>
                <input type="text" v-model="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
  <!-- End form -->
</template>

<style scoped>

</style>