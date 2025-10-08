<script setup>
import { computed, ref } from "vue";
import { productStore } from "../stores/productStore";
import NavBar from "../components/NavBar.vue";
import { toast } from "vue3-toastify";
import { useRouter } from "vuetify/lib/composables/router.mjs";

const route = useRouter()

const handleCheckout= ()=>{
    route.push({name : "payment"})
}

const store = productStore();
const discount = ref(0);
const coupon = ref("");

const apply = () => {
    coupon.value = coupon.value.toUpperCase();

    const totalBeforeDiscount = store.product.reduce((sum, item) => {
        return sum + item.price * item.qty
    }, 0)

    if (coupon.value === "") {
        toast.info("Enter the coupon");
    } else if (coupon.value === "SAVE30") {
        if (totalBeforeDiscount <= 30) {
            toast.error("Discount not available. Cart total must be greater than $30.");
            coupon.value = "";
            discount.value = 0;
            return;
        }
        toast.success(`Coupon Applied ${coupon.value}`);
        discount.value = 30;
        coupon.value = "";
    } else if (coupon.value === "FLAT200") {
        if (totalBeforeDiscount <= 200) {
            toast.error("Discount not available. Cart total must be greater than $200.");
            coupon.value = "";
            discount.value = 0;
            return;
        }
        toast.success(`Coupon Applied ${coupon.value}`);
        discount.value = 200;
        coupon.value = "";
    } else {
        toast.error("Invalid Coupon");
        coupon.value = "";
        discount.value = 0;
    }
};

const Total = computed(() => {
    const total = store.product.reduce((sum, item) => {
        return sum + item.price * item.qty;
    }, 0);
    if (total > discount.value)
        return Math.max(total - discount.value, 0);
    else return total
});

const removeItem = (id) => {
    store.removeItem(id);
};
</script>

<template>
    <NavBar />
    <div class="container mx-auto p-6 mt-10">
        <h1 class="text-3xl font-bold mb-6">Your Cart 🛒</h1>

        <div v-if="store.product.length === 0" class="text-center text-gray-500 text-2xl">
            Your cart is empty 🛒
        </div>

        <div v-else>
            <table class="min-w-full bg-white shadow rounded overflow-hidden mb-10">
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
                            <router-link :to="`/products/${item.id}`">
                                <img :src="item.image" alt="Product Image" class="w-16 h-16 object-contain rounded" />
                            </router-link>
                        </td>
                        <td class="py-3 px-4">{{ item.title }}</td>
                        <td class="py-3 px-4">${{ item.price }}</td>
                        <td class="py-3 px-4 flex items-center gap-2 mt-4">
                            <button @click="store.decreaseQty(item.id)"
                                class="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded">–</button>
                            <span>{{ item.qty }}</span>
                            <button @click="store.increaseQty(item.id)"
                                class="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded">+</button>
                        </td>
                        <td class="py-3 px-4 font-semibold">${{ (item.price * item.qty).toFixed(2) }}</td>
                        <td class="py-3 px-4">
                            <button @click="removeItem(item.id)" class="text-red-600 hover:text-red-800 font-semibold">
                                <v-icon color="red">mdi-close</v-icon>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="flex items-center justify-between gap-4">
                <div class="flex items-center gap-2">
                    <input type="text" v-model="coupon" placeholder="Enter coupon code"
                        class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 uppercase" />
                    <button @click="apply" class="bg-indigo-600  px-4 py-2 rounded hover:bg-indigo-700 transition">
                        Apply
                    </button>
                </div>

                <h2 class="text-2xl font-semibold">Total: ${{ Total.toFixed(2) }}</h2>
            </div>
            <div class="mt-4 flex justify-end items-right">
                <button @click="handleCheckout" class="bg-indigo-600 py-2 px-6 rounded hover:bg-indigo-700 border">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    </div>
</template>
