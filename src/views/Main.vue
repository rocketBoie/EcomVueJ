<script setup>
import { onMounted, ref } from 'vue'
import NavBar from '../components/NavBar.vue'
import Hero from '../components/Hero.vue'
import axios from 'axios'

import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper/modules'

const products = ref([])
const loading = ref(true)

onMounted(async () => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products/')
        products.value = response.data
    } catch (error) {
        console.log(error)
    } finally {
        loading.value = false
    }
})
</script>

<template>
    <NavBar />
    <Hero />
    <div v-if="loading" class="flex justify-center items-center h-[50vh]">
        <v-progress-circular indeterminate color="primary" size="64" />
    </div>
    <div  class="w-full pl-8 pr-8 pt-8 pb-8 flex items-center bg-gray-200 h-2/4">
        <Swiper :modules="[Navigation, Autoplay]" :slides-per-view="4" loop :space-between="0"
            :autoplay="{ delay: 1500, disableOnInteraction: false, pauseOnMouseEnter: true }" navigation
            class="mySwiper">
            <SwiperSlide v-for="product in products" :key="product.id" class="bg-gray bg-opacity-10">
                <div class="flex flex-col items-center  justify-center pl-8 pt-8 pr-8 pb-8 ml-10 mr-10">
                    <router-link :to="`/products/${product.id}`"><img :src="product.image" alt=""
                            class="h-54 object-contain m-6" /></router-link>
                    <!-- <h2 class="text-lg font-bold mt-2">{{ product.title }}</h2> -->
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<!-- <template>
    <Swiper :modules="[Navigation , Pagination , Autoplay]" :slides-per-view="4" :autoplay="{delay : 1500 , disableOnInteraction : true ,  }">

    </Swiper>
</template> -->
