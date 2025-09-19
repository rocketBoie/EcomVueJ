<script setup>
import { computed } from "vue";
import { productStore } from "../stores/productStore";
import NavBar from "../components/NavBar.vue";

const store = productStore();

const Total = computed(() => {
    const total = store.product.reduce((sum, item) => {
        return sum + item.price * item.qty;
    }, 0);
    return total.toFixed(2);
});


const removeItem = (id) => {
    store.removeItem(id);
};

</script>
<template>
    <NavBar />
    <div class="container mx-auto p-6 mt-10">
        <div class="flex items-center justify-between mb-6">
            <h1 class="text-3xl font-bold">Your Cart</h1>
            <h1 class="text-2xl font-semibold">Total: ${{ Total }}</h1>
        </div>

        <div v-if="store.product.length === 0" class="text-center text-gray-500  text-2xl">
            Your cart is empty 🛒
        </div>

        <div v-else>
            <table class="min-w-full bg-white shadow rounded overflow-hidden">
                <thead class="bg-gray-100">
                    <tr>
                        <th class="text-left py-3 px-4">Image</th>
                        <th class="text-left py-3 px-4">Title</th>
                        <th class="text-left py-3 px-4">Price</th>
                        <th class="text-left py-3 px-4">Quantity</th>
                        <th class="text-left py-3 px-4">Subtotal</th>
                        <th class="text-left py-3 px-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in store.product" :key="item.id" class="border-t hover:bg-gray-50 transition">
                        <td class="py-3 px-4">
                           <router-link to=""><img :src="item.image" alt="Product Image" class="w-16 h-16 object-contain rounded" /></router-link> 
                        </td>
                        <td class="py-3 px-4">{{ item.title }}</td>
                        <td class="py-3 px-4">${{ item.price }}</td>
                        <td class="py-3 px-4 flex items-center gap-2 mt-3">
                            <button @click="store.decreaseQty(item.id)"
                                class="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded">–</button>
                            <span>{{ item.qty }}</span>
                            <button @click="store.increaseQty(item.id)"
                                class="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded">+</button>
                        </td>
                        <td class="py-3 px-4 font-semibold">
                            ${{ (item.price * item.qty).toFixed(2) }}
                        </td>
                        <td class="py-3 px-4">
                            <button @click="removeItem(item.id)" class="text-red-600 hover:text-red-800 font-semibold">
                                  <v-icon color='red'>mdi-close</v-icon>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
