<script setup>
import { productStore } from '../stores/productStore';
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)
const store = productStore()
</script>
<template>
    <div>
        <nav class="bg-gray-900 p-6 h-[8vh] flex justify-center items-center">
            <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div class="relative flex items-center justify-between h-16">
                    <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button @click="isMobileMenuOpen = !isMobileMenuOpen" type="button"
                            class="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-500 focus:outline-none">
                            <span class="sr-only">Open main menu</span>
                            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                    <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start gap-[25vw]">
                        <div class="flex-shrink-0 text-white text-2xl font-bold">
                            <router-link to="/"> SHOOPER</router-link>
                        </div>
                        <div class="ml-10 space-x-8 hidden sm:flex gap-8 items-center justify-center">
                            <router-link to="/" class="text-white font-semibold hover:text-blue-500"
                                active-class="active-link">
                                <v-icon size="27" color="white">mdi-home</v-icon>
                            </router-link>
                            <router-link to="/products" class="text-white font-semibold hover:text-blue-500"
                                active-class="active-link">
                                <v-icon size="27" color="white">mdi-package</v-icon>
                            </router-link>
                            <router-link to="/cart"
                                class="text-white font-semibold hover:text-blue-500 relative inline-block"
                                active-class="active-link">
                                <v-icon size="27" color="white">mdi-cart</v-icon>
                                <span class="absolute -top-4  -right-4 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full flex items-center justify-center w-6 h-6 text-center">
                                    {{ store.len }}
                                </span>
                            </router-link>


                            <router-link to="/wishlist" class="text-white font-semibold hover:text-blue-500 relative inline-block"
                                active-class="active-link">
                                <v-icon size="27" color="white">mdi-heart</v-icon>
                                <span class="absolute -top-4  -right-4 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full flex items-center justify-center w-6 h-6 text-center">
                                    {{ store.wish  }}
                                </span>
                            </router-link>
                            <router-link to="/login" class="text-white font-semibold hover:text-blue-500">
                                <v-icon size="27" color="white">mdi-login   </v-icon>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>


            <div v-if="isMobileMenuOpen" class="sm:hidden bg-gray-900 text-white space-y-2 px-4 py-2">
                <router-link to="/" class="block text-white font-semibold hover:text-blue-500"
                    active-class="active-link">
                    HOME
                </router-link>
                <router-link to="/products" class="block text-white font-semibold hover:text-blue-500"
                    active-class="active-link">
                    PRODUCTS
                </router-link>
                <router-link to="/cart" class="text-white font-semibold hover:text-blue-500" active-class="active-link">
                    CART
                </router-link>
                <router-link to="/contact" class="block text-white font-semibold hover:text-blue-500"
                    :active-class="active - link" active-class="active-link">
                    CONTACT
                </router-link>
            </div>
        </nav>
    </div>
</template>


<style scoped>
.active-link {
    color: #ff4081 !important;
}

.sm\\:hidden {
    display: none;
}
</style>
