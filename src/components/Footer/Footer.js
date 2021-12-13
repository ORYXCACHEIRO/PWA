import Search from "../Header/Search";

function Footer() {
  return (
    <>
      <div className="rounded-t-2xl flex bg-gray-900 h-52 relative mt-12 md:flex-col md:h-max">
        <div className=" w-3/12 lg:w-max md:w-full md:p-3">
          <a class=" text-5xl font-bold text-white mr-auto ml-auto block w-max mt-2" href="#">
            Logo.
          </a>
          <div class="flex mt-6 w-max ml-auto mr-auto gap-3">
              <input
                type="text"
                class="h-auto p-2 text-smborder border-grey-lightroundtext-grey-dark rounded-lg"
                placeholder="Your email address"
              />
              <button class="h-auto p-3 text-xs text-white bg-purple-400 rounded-lg">
                Subscribe
              </button>
              
          </div>
          <div class="flex justify-center mt-10 lg:mt-6">
              <a>
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-6 h-6 text-blue-600"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
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
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
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
        <div className=" w-9/12 flex justify-center items-center md:w-full md:p-3">
          <div className="w-10/12">
            <Search/>
          </div>
        </div>
      </div>
      <div class="flex justify-center p-2 bg-gradient-to-r from-purple-600 to-purple-400">
          <p class="text-base  text-white font-medium">
            All rights reserved by @ company 2021
          </p>
      </div>
    </>
  );
}

export default Footer;
