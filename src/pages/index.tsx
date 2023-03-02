const Home = () => {
  return (
    <>
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div className="relative flex flex-wrap bg-indigo-500 px-4 py-3 sm:flex-nowrap sm:items-center sm:justify-center sm:gap-3 sm:pr-8 md:px-8">
          <div className="order-1 mb-2 inline-block w-11/12 max-w-screen-sm text-sm text-white sm:order-none sm:mb-0 sm:w-auto md:text-base">
            This is a section of some simple filler text, also known as
            placeholder text.
          </div>
          <a
            href=""
            className="order-last inline-block w-full whitespace-nowrap rounded-lg bg-indigo-600 px-4 py-2 text-center text-xs font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-700 focus-visible:ring active:bg-indigo-800 sm:order-none sm:w-auto md:text-sm"
          >
            Learn more
          </a>
          <div className="order-2 flex w-1/12 items-start justify-end sm:absolute sm:right-0 sm:order-none sm:mr-1 sm:w-auto xl:mr-3">
            <button
              type="button"
              className="text-white transition duration-100 hover:text-indigo-100 active:text-indigo-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-6 md:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
              Collections
            </h2>

            <a
              href="#"
              className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
            >
              Show more
            </a>
          </div>

          <div className="grid gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
            <div>
              <a
                href="#"
                className="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
              >
                <img
                  src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                  loading="lazy"
                  alt="Photo by Austin Wade"
                  className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>

              <div className="flex flex-col">
                <span className="text-gray-500">Men</span>
                <a
                  href="#"
                  className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                >
                  Business Causual
                </a>
              </div>
            </div>
            <div>
              <a
                href="#"
                className="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
              >
                <img
                  src="https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                  loading="lazy"
                  alt="Photo by engin akyurt"
                  className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>

              <div className="flex flex-col">
                <span className="text-gray-500">Women</span>
                <a
                  href="#"
                  className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                >
                  Summer Season
                </a>
              </div>
            </div>
            <div>
              <a
                href="#"
                className="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
              >
                <img
                  src="https://images.unsplash.com/photo-1552668693-d0738e00eca8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                  loading="lazy"
                  alt="Photo by Austin Wade"
                  className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>

              <div className="flex flex-col">
                <span className="text-gray-500">Men</span>
                <a
                  href="#"
                  className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                >
                  Streetwear
                </a>
              </div>
            </div>
            <div>
              <a
                href="#"
                className="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
              >
                <img
                  src="https://images.unsplash.com/photo-1560269999-cef6ebd23ad3?auto=format&q=75&fit=crop&w=600&h=700"
                  loading="lazy"
                  alt="Photo by Austin Wade"
                  className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>

              <div className="flex flex-col">
                <span className="text-gray-500">Women</span>
                <a
                  href="#"
                  className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                >
                  Sale
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Blog
            </h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
            <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <a
                href="#"
                className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
              >
                <img
                  src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>

              <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-400">July 19, 2021</span>

                <h2 className="text-xl font-bold text-gray-800">
                  <a
                    href="#"
                    className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    New trends in Tech
                  </a>
                </h2>

                <p className="text-gray-500">
                  This is a section of some simple filler text, also known as
                  placeholder text.
                </p>

                <div>
                  <a
                    href="#"
                    className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <a
                href="#"
                className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
              >
                <img
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Lorenzo Herrera"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>

              <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-400">April 07, 2021</span>

                <h2 className="text-xl font-bold text-gray-800">
                  <a
                    href="#"
                    className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Working with legacy stacks
                  </a>
                </h2>

                <p className="text-gray-500">
                  This is a section of some simple filler text, also known as
                  placeholder text.
                </p>

                <div>
                  <a
                    href="#"
                    className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <a
                href="#"
                className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
              >
                <img
                  src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Magicle"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>

              <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-400">March 15, 2021</span>

                <h2 className="text-xl font-bold text-gray-800">
                  <a
                    href="#"
                    className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    10 best smartphones for devs
                  </a>
                </h2>

                <p className="text-gray-500">
                  This is a section of some simple filler text, also known as
                  placeholder text.
                </p>

                <div>
                  <a
                    href="#"
                    className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <a
                href="#"
                className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
              >
                <img
                  src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>

              <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-400">January 27, 2021</span>

                <h2 className="text-xl font-bold text-gray-800">
                  <a
                    href="#"
                    className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    8 High performance Notebooks
                  </a>
                </h2>

                <p className="text-gray-500">
                  This is a section of some simple filler text, also known as
                  placeholder text.
                </p>

                <div>
                  <a
                    href="#"
                    className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
