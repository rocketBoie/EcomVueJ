<script setup>
import { ref } from 'vue';
import { productStore } from '../stores/productStore';
import NavBar from '../components/NavBar.vue';


const store = productStore()


</script>
<template>
    <NavBar/>
    <div class="container mx-auto p-6 mt-10">
        <h1 class="text-3xl font-bold mb-6">Your WishList ❤️</h1>

        <div v-if="store.fav.length === 0" class="text-center text-gray-500 text-2xl">
            Your WishList is empty 🛒
        </div>

        <div v-else>
            <table class="min-w-full bg-white shadow rounded overflow-hidden mb-10">
                <thead class="bg-gray-100">
                    <tr>
                        <th class="text-left py-3 px-4">Image</th>
                        <th class="text-left py-3 px-4">Title</th>
                        <th class="text-left py-3 px-4">Price</th>
                        <th class="text-left py-3 px-4">AddToCart</th>
                        <th class="text-left py-3 px-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in store.fav" :key="item.id" class="border-t hover:bg-gray-50 transition">
                        <td class="py-3 px-4">
                            <router-link :to="`/products/${item.id}`">
                                <img :src="item.image" alt="Product Image" class="w-16 h-16 object-contain rounded" />
                            </router-link>
                        </td>
                        <td class="py-3 px-4">{{ item.title }}</td>
                        <td class="py-3 px-4">${{ item.price }}</td>
                        <td class="py-3 px-4">
                            <button @click="store.addToCart(item)" class="text-red-600 hover:text-red-800 font-semibold ml-5">
                                <v-icon color="red">mdi-cart</v-icon>
                    
                            </button>
                        </td>
                        <td class="py-3 px-4">
                            <button @click="store.removeFav(item.id)" class="text-red-600 hover:text-red-800 font-semibold ml-4">
                                <v-icon color="red">mdi-close</v-icon>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>

</template>