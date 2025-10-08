<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import NavBar from '../components/NavBar.vue';
import { productStore } from '../stores/productStore';
const store = productStore()
import InnerImageZoom from 'vue-inner-image-zoom';

const route = useRoute();
const router = useRouter();
const productId = route.params.id;

const product = ref(null);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        product.value = response.data;
    } catch (err) {
        error.value = 'Failed to load product details.';
        console.error(err);
    } finally {
        loading.value = false;
    }
});

function goBack() {
    router.back();
}

</script>

<template>
    <NavBar />
    <div class="container mx-auto p-6 mt-10 max-w-4xl">
        <button @click="goBack" class="mb-6 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition">
            ← Back
        </button>

        <div v-if="loading" class="flex justify-center items-center h-[50vh]">
            <v-progress-circular indeterminate color="primary" size="64" />
        </div>

        <div v-else-if="error" class="text-red-500 text-center">{{ error }}</div>

        <div v-else class="flex flex-col md:flex-row gap-8">

            <!-- <v-img :src="product.image" :alt="product.title" class="w-full md:w-1/2 h-96 object-contain rounded-xl" /> -->
            <inner-image-zoom :src="product.image" :zoomSrc="product.image" zoom-type="hover" :zoomScale="1.8" 
                class="w-full md:w-1/2 h-96 object-contain " />
            <div class="flex flex-col justify-start md:w-1/2">
                <h1 class="text-3xl font-bold mb-4">{{ product.title }}</h1>
                <p class="text-gray-700 mb-4">{{ product.description }}</p>
                <p class="text-2xl font-semibold mb-6">${{ product.price }}</p>
                <div class="flex items-center  gap-4">
                    <v-btn @click="store.addToCart({
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        image: product.image,
                        qty: 1
                    })" class="mb-2" variant="elevated">Add To Cart</v-btn>
                    <v-btn @click="store.addToFav({
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        image: product.image,
                        qty: 1
                    })" color="pink" class="mb-2"> Add To ❤️</v-btn>
                </div>
            </div>
        </div>
    </div>
</template>