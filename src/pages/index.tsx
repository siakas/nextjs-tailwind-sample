const Home = () => {
  return (
    <>
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div className="flex flex-wrap sm:flex-nowrap sm:justify-center sm:items-center bg-indigo-500 relative sm:gap-3 px-4 sm:pr-8 md:px-8 py-3">
          <div className="order-1 sm:order-none w-11/12 sm:w-auto max-w-screen-sm inline-block text-white text-sm md:text-base mb-2 sm:mb-0">
            This is a section of some simple filler text, also known as
            placeholder text.
          </div>
          <a
            href="#"
            className="order-last sm:order-none w-full sm:w-auto inline-block bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 focus-visible:ring ring-indigo-300 text-white text-xs md:text-sm font-semibold text-center whitespace-nowrap rounded-lg outline-none transition duration-100 px-4 py-2"
          >
            Learn more
          </a>
          <div className="order-2 sm:order-none w-1/12 sm:w-auto flex justify-end items-start sm:absolute sm:right-0 sm:mr-1 xl:mr-3">
            <button
              type="button"
              className="text-white hover:text-indigo-100 active:text-indigo-200 transition duration-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 md:w-6 h-5 md:h-6"
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
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="flex justify-between items-end gap-4 mb-6">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold">
              Collections
            </h2>

            <a
              href="#"
              className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3"
            >
              Show more
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-6">
            <div>
              <a
                href="#"
                className="group h-96 block bg-gray-100 rounded-lg overflow-hidden shadow-lg mb-2 lg:mb-3"
              >
                <img
                  src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                  loading="lazy"
                  alt="Photo by Austin Wade"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
                />
              </a>

              <div className="flex flex-col">
                <span className="text-gray-500">Men</span>
                <a
                  href="#"
                  className="text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100"
                >
                  Business Causual
                </a>
              </div>
            </div>
            <div>
              <a
                href="#"
                className="group h-96 block bg-gray-100 rounded-lg overflow-hidden shadow-lg mb-2 lg:mb-3"
              >
                <img
                  src="https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                  loading="lazy"
                  alt="Photo by engin akyurt"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
                />
              </a>

              <div className="flex flex-col">
                <span className="text-gray-500">Women</span>
                <a
                  href="#"
                  className="text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100"
                >
                  Summer Season
                </a>
              </div>
            </div>
            <div>
              <a
                href="#"
                className="group h-96 block bg-gray-100 rounded-lg overflow-hidden shadow-lg mb-2 lg:mb-3"
              >
                <img
                  src="https://images.unsplash.com/photo-1552668693-d0738e00eca8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                  loading="lazy"
                  alt="Photo by Austin Wade"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
                />
              </a>

              <div className="flex flex-col">
                <span className="text-gray-500">Men</span>
                <a
                  href="#"
                  className="text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100"
                >
                  Streetwear
                </a>
              </div>
            </div>
            <div>
              <a
                href="#"
                className="group h-96 block bg-gray-100 rounded-lg overflow-hidden shadow-lg mb-2 lg:mb-3"
              >
                <img
                  src="https://images.unsplash.com/photo-1560269999-cef6ebd23ad3?auto=format&q=75&fit=crop&w=600&h=700"
                  loading="lazy"
                  alt="Photo by Austin Wade"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
                />
              </a>

              <div className="flex flex-col">
                <span className="text-gray-500">Women</span>
                <a
                  href="#"
                  className="text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100"
                >
                  Sale
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
          <div className="mb-10 md:mb-16">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              Blog
            </h2>

            <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 sm:gap-12 xl:gap-16">
            <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-6">
              <a
                href="#"
                className="group w-full md:w-24 lg:w-40 h-56 md:h-24 lg:h-40 block self-start shrink-0 bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                />
              </a>

              <div className="flex flex-col gap-2">
                <span className="text-gray-400 text-sm">July 19, 2021</span>

                <h2 className="text-gray-800 text-xl font-bold">
                  <a
                    href="#"
                    className="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
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
                    className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-semibold transition duration-100"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-6">
              <a
                href="#"
                className="group w-full md:w-24 lg:w-40 h-56 md:h-24 lg:h-40 block self-start shrink-0 bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Lorenzo Herrera"
                  className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                />
              </a>

              <div className="flex flex-col gap-2">
                <span className="text-gray-400 text-sm">April 07, 2021</span>

                <h2 className="text-gray-800 text-xl font-bold">
                  <a
                    href="#"
                    className="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
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
                    className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-semibold transition duration-100"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-6">
              <a
                href="#"
                className="group w-full md:w-24 lg:w-40 h-56 md:h-24 lg:h-40 block self-start shrink-0 bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Magicle"
                  className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                />
              </a>

              <div className="flex flex-col gap-2">
                <span className="text-gray-400 text-sm">March 15, 2021</span>

                <h2 className="text-gray-800 text-xl font-bold">
                  <a
                    href="#"
                    className="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
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
                    className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-semibold transition duration-100"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-6">
              <a
                href="#"
                className="group w-full md:w-24 lg:w-40 h-56 md:h-24 lg:h-40 block self-start shrink-0 bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                />
              </a>

              <div className="flex flex-col gap-2">
                <span className="text-gray-400 text-sm">January 27, 2021</span>

                <h2 className="text-gray-800 text-xl font-bold">
                  <a
                    href="#"
                    className="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
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
                    className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-semibold transition duration-100"
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
