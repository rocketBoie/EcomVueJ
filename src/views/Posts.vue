<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import NavBar from '../components/NavBar.vue';
import { productStore } from '../stores/productStore';
import { toast } from 'vue3-toastify';
import Footer from '../components/Footer.vue';

const store = productStore()
const products = ref([]);
const loading = ref(true);

onMounted(async () => {
    try {
        const response = await axios.get("https://fakestoreapi.com/products/");
        products.value = response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        toast.success("Something Went Wrong")
    } finally {
        loading.value = false;
    }
});
const searchQuery = ref('')

const filteredProducts = computed(() => {
    const query = searchQuery.value.toLowerCase()
    return products.value.filter(product =>
        product.title.toLowerCase().includes(query)
    )
})

</script>
<template>
    <NavBar />
    <div class="container mx-auto mt-8 px-6">
        <input type="text" v-model="searchQuery" placeholder="Search products..."
            class="w-full border border-gray-300 rounded-lg px-4 py-3 mb-8 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>

    <div class="container mx-auto p-6 mt-2 mb-10">
        <div v-if="loading" class="flex justify-center items-center h-[50vh]">
            <v-progress-circular indeterminate color="primary" size="64" />
        </div>

        <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
            <div v-for="product in filteredProducts" :key="product.id"
                class="shadow-lg pl-2 pr-2 pt-2 pb-2 hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center flex-col">
                <router-link :to="`/products/${product.id}`" class="w-full">
                    <v-img :src="product.image" :alt="product.title"
                        class="w-full h-64 object-cover rounded-xl mb-6 transition-transform group-hover:scale-110" />
                </router-link>

                <h3 class="text-center text-xl font-semibold text-gray-800 mb-4">
                    {{ product.title }}
                </h3>
                <p class="text-xl font-bold text-gray-900 mb-4">${{ product.price }}</p>
                <div class="flex items-center gap-4">
                    <v-btn @click="store.addToCart({
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        image: product.image,
                        qty: 1
                    })" class="mb-2" variant="elevated">
                        Add To Cart
                    </v-btn>
                    
                    <v-btn @click="store.addToFav({
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        image: product.image,
                        qty : 1,    
                    })" color="pink" class="mb-2">Add To ❤️</v-btn>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
</template>
