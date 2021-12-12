function Footer() {
    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>
                    Tailwind CSS responsive footer section with subscribe form, useful links,
                    social media icons.
                </title>
                <link
                    href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
                    rel="stylesheet"
                />
            </head>

            <body>
                <footer class="bg-gray-100
              text-white text-center
             border-t border-blue-100
             fixed
             inset-x-0
             bottom-0
             p-4">
                    <div
                        class="
                container
                flex flex-col flex-wrap
                px-2
                py-4
                mx-auto
                md:items-center
                lg:items-start
                md:flex-row md:flex-nowrap
              "
                    >
                        <div
                            class="flex-shrink-0 w-64  text-center md:mx-0 md:text-left"
                        >
                            <a
                                class="
                    flex
                    items-center
                    justify-center
                    text-4xl
                    font-bold
                    text-blue-700
                    md:justify-start
                  "
                            >
                                Logo
                            </a>
                            <p class="mt-2 text-sm text-justify text-gray-500">
                                AAAAAAAAAAAAAAAAAAAAAAAAAAA
                                AAAAAAAAAAAAAAAAAAAAAAAAAAAA
                                AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                                AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                                AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                                AAAAAAAAAAAAAAAAAAAAAAAAA
                            </p>
                            <div class="flex mt-4">
                                <input
                                    type="text"
                                    class="h-auto p-2 text-smborder border-grey-lightroundtext-grey-dark"
                                    placeholder="Your email address"
                                />
                                <button class="h-auto p-3 text-xs text-white bg-red-600 rounded-sm">
                                    Subscribe
                                </button>
                            </div>
                            <div class="flex justify-center mt-4 lg:mt-2">
                                <a>
                                    <svg
                                        fill="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        class="w-6 h-6 text-blue-600"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                                        ></path>
                                    </svg>
                                </a>
                                <a class="ml-3">
                                    <svg
                                        fill="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        class="w-6 h-6 text-blue-300"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                                        ></path>
                                    </svg>
                                </a>
                                <a class="ml-3">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        class="w-6 h-6 text-pink-400"
                                        viewBox="0 0 24 24"
                                    >
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>

                                    </svg>
                                </a>
                                <a class="ml-3">
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="0"
                                        class="w-6 h-6 text-blue-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="none"
                                            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                        ></path>
                                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="justify-between w-full mt-4 text-center lg:flex">
                            <div class="w-full px-4 lg:w-1/3 md:w-1/2">
                                <h2 class="mb-2 font-bold tracking-widest text-gray-900">
                                    Useful Links
                                </h2>
                                <ul class="mb-8 space-y-2 text-sm list-none">
                                    <li>
                                        <a class="text-gray-1000 hover:text-gray-800">Home</a>
                                    </li>
                                    <li>
                                        <a class="text-gray-200 hover:text-gray-800">About Us</a>
                                    </li>
                                    <li>
                                        <a class="text-gray-200 hover:text-gray-800">Blogs</a>
                                    </li>
                                    <li>
                                        <a class="text-gray-200 hover:text-gray-800">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="w-full px-4 lg:w-1/3 md:w-1/2">
                                <h2 class="mb-2 font-bold tracking-widest text-gray-900">
                                    Useful Links
                                </h2>
                                <ul class="mb-8 space-y-2 text-sm list-none">
                                    <li>
                                        <a class="text-gray-600 hover:text-gray-800">Home</a>
                                    </li>
                                    <li>
                                        <a class="text-gray-600 hover:text-gray-800">About Us</a>
                                    </li>
                                    <li>
                                        <a class="text-gray-600 hover:text-gray-800">Blogs</a>
                                    </li>
                                    <li>
                                        <a class="text-gray-600 hover:text-gray-800">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="w-full px-4 lg:w-1/3 md:w-1/2">
                                <h2 class="mb-2 font-bold tracking-widest text-gray-900">
                                    Useful Links
                                </h2>
                                <ul class="mb-8 space-y-2 text-sm list-none">
                                    <li>
                                        <a class="text-gray-600 hover:text-gray-800">Home</a>
                                    </li>
                                    <li>
                                        <a class="text-gray-600 hover:text-gray-800">About Us</a>
                                    </li>
                                    <li>
                                        <a class="text-gray-600 hover:text-gray-800">Blogs</a>
                                    </li>
                                    <li>
                                        <a class="text-gray-600 hover:text-gray-800">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center -mt-12">
                        <p class="text-base text-gray-400">
                            All rights reserved by @ company 2021
                        </p>
                    </div>
                </footer>
            </body>
        </html>
    );
};

export default Footer;