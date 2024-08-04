// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// const navigate = useNavigate();

// const handleclick = () => {

//     navigate ('/leadingpage')
// }
    

// const auth = () => {
//   return (
//     <section class="bg-gray-50 h-full">
//         <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
//             <div class="flex flex-col justify-center">
//                 <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-black-900 md:text-5xl lg:text-6xl dark:text-black">Welcome to <br/> Goflash </h1>
                
//             </div>
//             <div>
//                 <div class="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg  shadow-xl ">
//                     <h2 class="text-2xl font-bold text-black-900">
//                         Sign in to GoFlash
//                     </h2>
//                     <form class="mt-8 space-y-6" action="#">
//                         <div>
//                             <label for="email" class="block mb-2 text-sm font-medium text-white-900 ">Your email</label>
//                             <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="espoircibembe@gmail.com" required />
//                         </div>
//                         <div>
//                             <label for="password" class="block mb-2 text-sm font-medium text-black-900">Your password</label>
//                             <input type="password" name="password" id="password" placeholder="••••••••••••••" class="bg-black-50 border border-white-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " required />
//                         </div>
//                         <div class="flex items-start">
//                             <div class="flex items-center h-5">
//                                 <input id="remember" aria-describedby="remember" name="remember" type="checkbox" class="w-4 h-4 border-gray-300 rounded"/>
//                             </div>
//                             <div class="ms-3 text-sm">
//                             <label for="remember" class="font-medium text-gray-500 dark:text-gray-400">Remember this device</label>
//                             </div>
//                             <a href="#" class="ms-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Lost Password?</a>
//                         </div>
//                         <button onClick = {handleclick} type="submit" class="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:-ring-1 focus:ring-blue-300 sm:w-auto ">Login to your account</button>
//                         <div class="text-sm font-medium text-black-900">
//                             Not registered yet? <a class="text-blue-600 hover:underline">Create account</a>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default auth

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault(); // Empêche la soumission du formulaire
    navigate('/');
  };

  return (
    <section className="bg-gray-50 h-full">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="flex flex-col justify-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-black-900 md:text-5xl lg:text-6xl dark:text-black">
            Welcome to <br /> Goflash
          </h1>
        </div>
        <div>
          <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold text-black-900">Sign in to GoFlash</h2>
            <form className="mt-8 space-y-6" action="#">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white-900">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="espoircibembe@gmail.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-black-900">
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••••••••"
                  className="bg-black-50 border border-white-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  required
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    name="remember"
                    type="checkbox"
                    className="w-4 h-4 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="remember" className="font-medium text-gray-500 dark:text-gray-400">
                    Remember this device
                  </label>
                </div>
                <a href="#" className="ml-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                  Lost Password?
                </a>
              </div>
              <button
                onClick={handleClick}
                type="button"
                className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-1 focus:ring-blue-300 sm:w-auto"
              >
                Login to your account
              </button>
              <div className="text-sm font-medium text-black-900">
                Not registered yet?{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  Create account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auth;

