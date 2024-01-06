
<script setup>
import {data} from '../data/data.js'


// This import for Category
import {ref} from 'vue'
import {useRoute} from 'vue-router'
const route = useRoute()
const tag = ref(route.params.tag)
// End

</script>

<template>
    <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">{{ data.title }}</h1>

        <div class="mt-8 lg:-mx-6 lg:flex lg:items-center">
            <img :title="data.title" class="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" :src="data.mainImg">

            <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                <p class="text-sm text-blue-500 uppercase">{{ tag }}</p>

                <a :href="data.buttonLink" href="#" class="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white">
                    {{ data.subTitle }}
                </a>

                <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                    {{ data.content }}
                </p>

                <a :href="data.buttonLink" class="inline-block mt-2 text-blue-500 underline hover:text-blue-400">{{ data.buttonTxt }}</a>

                <div class="flex items-center mt-6">
                    <img class="object-cover object-center w-10 h-10 rounded-full" :src="data.thumbNail" alt="">

                    <div class="mx-4">
                        <h1 class="text-sm text-gray-700 dark:text-gray-200">{{ data.userName }}</h1>
                        <p class="text-sm text-gray-500 dark:text-gray-400">{{ data.userTitle }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<style scoped>

</style>