import React from 'react'

const SignIn = () => {
    return (
        <>
            <div class="h-auto bg-gray-50 ">

                <div class="mx-auto">
                    <div class="flex justify-center px-6 py-12">
                        <div class="w-full xl:w-3/4 lg:w-11/12 flex">
                            <div class="w-full h-auto bg-gray-550 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                                style={{
                                    backgroundImage: `url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')`}}></div>
                            <div class="w-full lg:w-7/12 bg-white  p-5 rounded-lg lg:rounded-l-none">
                                <h3 class="py-4 text-2xl text-center text-gray-800 :text-white">Create an Account!</h3>
                                <form class="px-8 pt-6 pb-8 mb-4 bg-white :bg-gray-800 rounded">
                                    <div class="mb-4 md:flex md:justify-between">
                                        <div class="mb-4 md:mr-2 md:mb-0">
                                            <label class="block mb-2 text-sm font-bold text-gray-700 :text-white" for="firstName">
                                                First Name
                                            </label>
                                            <input
                                                class="w-full px-3 py-2 text-sm leading-tight text-gray-700 :text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="firstName"
                                                type="text"
                                                placeholder="First Name"
                                            />
                                        </div>
                                        <div class="md:ml-2">
                                            <label class="block mb-2 text-sm font-bold text-gray-700 :text-white" for="lastName">
                                                Last Name
                                            </label>
                                            <input
                                                class="w-full px-3 py-2 text-sm leading-tight text-gray-700 :text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="lastName"
                                                type="text"
                                                placeholder="Last Name"
                                            />
                                        </div>
                                    </div>
                                    <div class="mb-4">
                                        <label class="block mb-2 text-sm font-bold text-gray-700 :text-white" for="email">
                                            Email
                                        </label>
                                        <input
                                            class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 :text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="email"
                                            type="email"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div class="mb-4 md:flex md:justify-between">
                                        <div class="mb-4 md:mr-2 md:mb-0">
                                            <label class="block mb-2 text-sm font-bold text-gray-700 :text-white" for="password">
                                                Password
                                            </label>
                                            <input
                                                class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 :text-white border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="password"
                                                type="password"
                                                placeholder="******************"
                                            />
                                            <p class="text-xs italic text-red-500">Please choose a password.</p>
                                        </div>
                                        <div class="md:ml-2">
                                            <label class="block mb-2 text-sm font-bold text-gray-700 :text-white" for="c_password">
                                                Confirm Password
                                            </label>
                                            <input
                                                class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 :text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="c_password"
                                                type="password"
                                                placeholder="******************"
                                            />
                                        </div>
                                    </div>
                                    <div class="mb-6 text-center">
                                        <button
                                            class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700 :bg-blue-700 :text-white :hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                                            type="button"
                                        >
                                            Register Account
                                        </button>
                                    </div>
                                    <hr class="mb-6 border-t" />
                                    <div class="text-center">
                                        <a class="inline-block text-sm text-blue-500 :text-blue-500 align-baseline hover:text-blue-800"
                                            href="./index.html">
                                            Already have an account? Login!
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn
