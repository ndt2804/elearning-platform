"use client";
import bglanding from "@/assets/bg-landing.png";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div>
      <section className="container mx-auto border rounded-2xl shadow-md bg-cyan-600	">
        <div className="grid grid-cols-1 sm:grid-cols-12 lg:py-2 p-12">
          <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
            <h1 className="text-white mb-4 text-3xl sm:text-7xl lg:text-6xl lg:leading-normal font-extrabold">
              <span className="text-white">
                Interactive online coding classes for at-home learning
              </span>
              <br />
              <span className="text-xl sm:text-2xl lg:text-2xl">
                Learn to code in your own time with out many tailored course
              </span>
            </h1>
            <h1 className="text-xl mt-4 mb-2 md:mb-4 font-extrabold text-zinc-900">
              Try it free for 14 days, then pay 5$ a month
            </h1>

            <div className="w-full flex items-center cursor-pointer">
              <div className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:text-gray-200 dark:shadow-none group">
                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    className="w-5 h-5 text-green-400"
                  >
                    <path
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </span>
                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    className="w-5 h-5 text-green-400"
                  >
                    <path
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </span>
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200">
                  Try it for free
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-4 place-self-center mt-4 lg:mt-0">
            <Image
              src={bglanding} // Đường dẫn đến hình ảnh
              //   width={100} // Chiều rộng (px)
              //   height={100} // Chiều cao (px)
              alt="Mô tả hình ảnh" // Văn bản thay thế cho hình ảnh
              priority={false}
            />{" "}
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Before they sold out
              <br className="hidden lg:inline-block" />
              readymade gluten
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
