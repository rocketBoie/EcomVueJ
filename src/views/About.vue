<script setup>
import NavBar from '../components/NavBar.vue';
</script>
<template>
    <NavBar />
    <div class="min-h-screen bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
        <h1 class="text-4xl font-bold text-center mb-8 text-gray-900">About Us</h1>

        <section class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 mb-16">
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"
                alt="Our store" class="rounded-lg shadow-lg w-full md:w-1/2 object-cover" />
            <div class="md:w-1/2 space-y-6">
                <h2 class="text-3xl font-semibold text-gray-800">Your Trusted Online Store</h2>
                <p class="text-gray-600 leading-relaxed">
                    At <span class="font-semibold text-indigo-600">SHOPPER</span>, we’re passionate about bringing you
                    the best products at unbeatable prices. Whether you're looking for the latest trends or timeless
                    classics, we’ve got you covered.
                </p>
                <p class="text-gray-600 leading-relaxed">
                    Our commitment is to quality, convenience, and exceptional customer service, ensuring a seamless
                    shopping experience every time.
                </p>
            </div>
        </section>

        <section class="max-w-6xl mx-auto mb-16">
            <h3 class="text-2xl font-semibold text-gray-900 mb-6 text-center">Our Mission & Values</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                <div class="bg-white rounded-lg shadow pl-6 pr-6 pt-6 pb-6">
                    <svg class="mx-auto mb-4 w-12 h-12 text-indigo-500" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M12 2l9 7-9 7-9-7 9-7z" />
                    </svg>
                    <h4 class="text-xl font-semibold mb-2">Quality Products</h4>
                    <p class="text-gray-600">We carefully select products to ensure the highest standards.</p>
                </div>
                <div class="bg-white rounded-lg shadow pl-6 pr-6 pt-6 pb-6">
                    <svg class="mx-auto mb-4 w-12 h-12 text-indigo-500" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                    </svg>
                    <h4 class="text-xl font-semibold mb-2">Customer Satisfaction</h4>
                    <p class="text-gray-600">Your happiness is our top priority — we're here to support you 24/7.</p>
                </div>
                <div class="bg-white rounded-lg shadow pl-6 pr-6 pt-6 pb-6">
                    <svg class="mx-auto mb-4 w-12 h-12 text-indigo-500" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <h4 class="text-xl font-semibold mb-2">Fast & Reliable Shipping</h4>
                    <p class="text-gray-600">We deliver your orders quickly and safely worldwide.</p>
                </div>
            </div>
        </section>

        <section class="max-w-6xl mx-auto mb-16">
            <h3 class="text-2xl font-semibold text-gray-900 mb-10 text-center">Meet Our Team</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div class="bg-white rounded-lg shadow pl-6 pr-6 pt-6 pb-6 text-center">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Jane Doe"
                        class="mx-auto mb-4 w-24 h-24 rounded-full object-cover" />
                    <h4 class="font-semibold text-lg">Gangu</h4>
                    <p class="text-indigo-600 mb-2">Founder & CEO</p>
                    <p class="text-gray-600 text-sm">Visionary and leader with over 10 years of experience in
                        e-commerce.</p>
                </div>
                <div class="bg-white rounded-lg shadow pl-6 pr-6 pt-6 pb-6 text-center">
                    <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="John Smith"
                        class="mx-auto mb-4 w-24 h-24 rounded-full object-cover" />
                    <h4 class="font-semibold text-lg">Pandey</h4>
                    <p class="text-indigo-600 mb-2">Head of Marketing</p>
                    <p class="text-gray-600 text-sm">Bringing the brand to customers through innovative marketing
                        strategies.</p>
                </div>
                <div class="bg-white rounded-lg shadow pl-6 pr-6 pt-6 pb-6 text-center">
                    <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Emily Clark"
                        class="mx-auto mb-4 w-24 h-24 rounded-full object-cover" />
                    <h4 class="font-semibold text-lg">Sunny</h4>
                    <p class="text-indigo-600 mb-2">Product Manager</p>
                    <p class="text-gray-600 text-sm">Ensures our products meet customer expectations and quality
                        standards.</p>
                </div>
                <div class="bg-white rounded-lg shadow pl-6 pr-6 pt-6 pb-6 text-center">
                    <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Michael Lee"
                        class="mx-auto mb-4 w-24 h-24 rounded-full object-cover" />
                    <h4 class="font-semibold text-lg">Love</h4>
                    <p class="text-indigo-600 mb-2">Customer Support</p>
                    <p class="text-gray-600 text-sm">Dedicated to providing fast, friendly support to all our customers.
                    </p>
                </div>
            </div>
        </section>

        <section class="max-w-6xl mx-auto text-center">
            <h3 class="text-2xl font-semibold text-gray-900 mb-10">By The Numbers</h3>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-10">
                <div class="bg-indigo-600 text-white rounded-lg pl-6 pr-6 pt-6 pb-6 shadow">
                    <p class="text-4xl font-bold mb-2">10K+</p>
                    <p class="text-lg">Products Sold</p>
                </div>
                <div class="bg-indigo-600 text-white rounded-lg pl-6 pr-6 pt-6 pb-6 shadow">
                    <p class="text-4xl font-bold mb-2">5K+</p>
                    <p class="text-lg">Happy Customers</p>
                </div>
                <div class="bg-indigo-600 text-white rounded-lg pl-6 pr-6 pt-6 pb-6 shadow">
                    <p class="text-4xl font-bold mb-2">99.9%</p>
                    <p class="text-lg">Satisfaction Rate</p>
                </div>
            </div>
        </section>
    </div>
</template>
