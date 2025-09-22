<script setup>
import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify'
import { Form, Field, useForm, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import NavBar from '../components/NavBar.vue'
import { GoogleLogin } from 'vue3-google-login'

const router = useRouter()

const schema = yup.object({
    email: yup.string().required('Email is required').email('Email must be a valid email'),
    password: yup.string().required('Password is required'),
})

const { resetForm } = useForm()

const onSubmit = (values) => {
    router.push({ name: 'home' }).then(() => {
        toast.success('Logged in successfully!')
        console.log('Form login:', values)
    })
    resetForm()
}

const googleCallback = (response) => {
    router.push({ name: 'home' }).then(() => {
        toast.success("Google Login Successfull")
        console.log('Google login response:', response)
    })
}
</script>
<template>
    <NavBar />
    <div class="h-[93.5vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 px-4 p-8">
        <div class="max-w-sm w-full bg-white pt-5 pl-5 pr-5 pb-5">
            <Form @submit="onSubmit" :validation-schema="schema" class="space-y-5">
                <h2 class="text-3xl font-extrabold text-gray-900 text-center">
                    Welcome Back
                </h2>

                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <Field name="email" as="input" type="email" id="email" placeholder="you@example.com"
                        class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" />
                    <ErrorMessage name="email" class="text-sm text-red-600 mt-1 block" />
                </div>

                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <Field name="password" as="input" type="password" id="password" placeholder="********"
                        class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" />
                    <ErrorMessage name="password" class="text-sm text-red-600 mt-1 block" />
                </div>

                <button type="submit"
                    class="w-full mt-4">
                    Log In
                </button>
            </Form>

            <div class="flex items-center justify-center gap-2 text-gray-600 text-sm mt-4">
                <span>or</span>
            </div>

            <div class="flex justify-center mt-2">
                <GoogleLogin :callback="googleCallback" />
            </div>

            <p class="text-center text-sm text-gray-600 mt-6">
                Don't have an account?
                <router-link to="/register" class="text-blue-600 hover:underline font-medium">Register
                    here</router-link>
            </p>
        </div>
    </div>
</template>
