<script setup>
import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify'
import { Form, Field, useForm, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import NavBar from '../components/NavBar.vue'

const router = useRouter()

const schema = yup.object({
    name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
    email: yup.string().required('Email is required').email('Email must be a valid email'),
    password: yup.string()
        .required('Password is required')
        .matches(/[a-z]/, 'Must include a lowercase letter')
        // .matches(/[^a-zA-Z0-9]/, 'Must include a special character')
        .min(6, 'Password must be at least 6 characters'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password')], 'Passwords must match')
        .required('Confirm Password is required'),
    gender: yup.string().required('Gender is required'),
    phone: yup.string().required('Phone is required').matches(/^\+?[0-9]{10,}$/, 'Enter a valid phone number'),
    address: yup.string().required('Address is required'),
    country: yup.string().required('Country is required'),
})

const { resetForm } = useForm({ validationSchema: schema })


const onSubmit = (values) => {
    router.push({ name: 'Login' }).then(() => {
        toast.success('User Created!')
        console.log(values)
    })
}
</script>
<template>
    <NavBar />
    <div class="fixed inset-0 flex justify-center items-center h-full">
        <div
            class="text-black pl-8 pr-8 pb-8 pt-8 rounded-lg shadow-lg w-full max-w-4xl bg-white bg-opacity-70 overflow-y-auto max-h-[90vh]">
            <Form @submit="onSubmit" :validation-schema="schema" class="space-y-6">
                <h2 class="text-2xl mb-6 font-semibold text-center">Register</h2>

                <div class="flex gap-6 mb-3">
                    <div class="relative w-1/2">
                        <label for="name" class="block text-sm font-medium">Name</label>
                        <Field name="name" as="input" type="text" id="name" placeholder="Enter Your Name"
                            class="mt-1 p-2 border border-gray-300 rounded-md w-full h-10" />
                        <ErrorMessage name="name" class="block text-red-400 text-xs mt-1" />
                    </div>

                    <div class="relative w-1/2">
                        <label for="email" class="block text-sm font-medium">Email</label>
                        <Field name="email" as="input" type="email" id="email" placeholder="Enter Your Email"
                            class="mt-1 p-2 border border-gray-300 rounded-md w-full h-10" />
                        <ErrorMessage name="email" class="block text-red-400 text-xs mt-1" />
                    </div>
                </div>

                <div class="flex gap-6 mb-3">
                    <div class="relative w-1/2">
                        <label for="password" class="block text-sm font-medium">Password</label>
                        <Field name="password" as="input" type="password" id="password" placeholder="Enter Password"
                            class="mt-1 p-2 border border-gray-300 rounded-md w-full h-10" />
                        <ErrorMessage name="password" class="block text-red-400 text-xs mt-1" />
                    </div>

                    <div class="relative w-1/2">
                        <label for="confirmPassword" class="block text-sm font-medium">Confirm Password</label>
                        <Field name="confirmPassword" as="input" type="password" id="confirmPassword"
                            placeholder="Confirm Password"
                            class="mt-1 p-2 border border-gray-300 rounded-md w-full h-10" />
                        <ErrorMessage name="confirmPassword" class="block text-red-400 text-xs mt-1" />
                    </div>
                </div>

                <div class="flex gap-6">
                    <div class="relative w-1/2">
                        <label class="block text-sm font-medium">Gender</label>
                        <div class="flex gap-4 mt-1">
                            <label class="text-black">
                                <Field type="radio" name="gender" value="male" class="mr-1" /> Male
                            </label>
                            <label class="text-black">
                                <Field type="radio" name="gender" value="female" class="mr-1" />
                                Female
                            </label>
                            <label class="text-black">
                                <Field type="radio" name="gender" value="other" class="mr-1" /> Other
                            </label>
                        </div>
                        <ErrorMessage name="gender" class="block text-red-400 text-xs mt-1" />
                    </div>

                    <div class="relative w-1/2">
                        <label for="phone" class="block text-sm font-medium">Phone</label>
                        <Field name="phone" as="input" type="tel" id="phone" placeholder="Enter Phone Number"
                            class="mt-1 p-2 border border-gray-300 rounded-md w-full h-10" />
                        <ErrorMessage name="phone" class="block text-red-400 text-xs mt-1" />
                    </div>
                </div>

                <div class="relative">
                    <label for="address" class="block text-sm font-medium">Address</label>
                    <Field name="address" as="textarea" id="address" placeholder="Enter Address" rows="2"
                        class="mt-1 p-2 border border-gray-300 rounded-md w-full resize-none" />
                    <ErrorMessage name="address" class="block text-red-400 text-xs mt-1" />
                </div>

                <div class="relative">
                    <label for="country" class="block text-sm font-medium">Country</label>
                    <Field name="country" as="select" id="country"
                        class="mt-1 p-2 border border-gray-300 rounded-md w-full h-10">
                        <option value="">Select Country</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="Australia">Australia</option>
                    </Field>
                    <ErrorMessage name="country" class="block text-red-400 text-xs mt-1" />
                </div>

                <div class="relative mt-4">
                    <Field name="newsletter" as="input" type="checkbox" id="newsletter" class="mr-2 align-middle" />
                    <label for="newsletter" class="text-sm align-middle">Subscribe to newsletter</label>
                </div>

                <div class="relative mt-1">
                    <Field name="termsAccepted" as="input" type="checkbox" id="terms" class="mr-2 align-middle" />
                    <label for="terms" class="text-sm align-middle">
                        I accept the
                        <router-link to="/about" class="text-blue-400">terms and conditions</router-link>
                    </label>
                    <ErrorMessage name="termsAccepted" class="block text-red-400 text-xs mt-1" />
                </div>

                <button type="submit"
                    class="mt-6 text-black p-2 rounded-lg w-full cursor-pointer transition duration-300">
                    Submit
                </button>
            </Form>
        </div>
    </div>
</template>
