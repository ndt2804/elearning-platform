import { Pagination } from "antd";
export default function Blog() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:flex lg:-mx-6">
            <div className="lg:w-3/4 lg:px-6">
              <img
                className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl"
                src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div>
                <p className="mt-6 text-sm text-blue-500 uppercase">
                  Want to know
                </p>

                <h1 className="max-w-lg mt-4 text-2xl font-semibold leading-tight text-gray-800 dark:text-white">
                  What do you want to know about UI
                </h1>

                <div className="flex items-center mt-6">
                  <img
                    className="object-cover object-center w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                    alt=""
                  />

                  <div className="mx-4">
                    <h1 className="text-sm text-gray-700 dark:text-gray-200">
                      Amelia. Anderson
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Lead Developer
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
              <div>
                <h3 className="text-blue-500 capitalize">Design instument</h3>

                <a
                  href="#"
                  className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
                >
                  How to raise $100k+ by using blox ui kit on your design
                </a>
              </div>

              <hr className="my-6 border-gray-200 dark:border-gray-700" />

              <div>
                <h3 className="text-blue-500 capitalize">UI Resource</h3>

                <a
                  href="#"
                  className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
                >
                  Should you creat UI Product by using Blox?
                </a>
              </div>

              <hr className="my-6 border-gray-200 dark:border-gray-700" />

              <div>
                <h3 className="text-blue-500 capitalize">Premium Collection</h3>

                <a
                  href="#"
                  className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
                >
                  Top 10 Blocks you can get on Blox&apos;s collection.
                </a>
              </div>

              <hr className="my-6 border-gray-200 dark:border-gray-700" />

              <div>
                <h3 className="text-blue-500 capitalize">Premium kits</h3>

                <a
                  href="#"
                  className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
                >
                  Top 10 Ui kit you can get on Blox&apos;s collection.
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:-mx-6">
          <div className="lg:w-3/4 lg:px-6">
            <section className="bg-white dark:bg-gray-900">
              <div className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                  From the blog
                </h1>

                <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
                  <div className="lg:flex">
                    <img
                      className="object-cover w-full h-56 rounded-lg lg:w-64"
                      src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                      alt=""
                    />

                    <div className="flex flex-col justify-between py-6 lg:mx-6">
                      <a
                        href="#"
                        className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
                      >
                        How to use sticky note for problem solving
                      </a>

                      <span className="text-sm text-gray-500 dark:text-gray-300">
                        On: 20 October 2019
                      </span>
                    </div>
                  </div>

                  <div className="lg:flex">
                    <img
                      className="object-cover w-full h-56 rounded-lg lg:w-64"
                      src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                      alt=""
                    />

                    <div className="flex flex-col justify-between py-6 lg:mx-6">
                      <a
                        href="#"
                        className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
                      >
                        How to use sticky note for problem solving
                      </a>

                      <span className="text-sm text-gray-500 dark:text-gray-300">
                        On: 20 October 2019
                      </span>
                    </div>
                  </div>

                  <div className="lg:flex">
                    <img
                      className="object-cover w-full h-56 rounded-lg lg:w-64"
                      src="https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                      alt=""
                    />

                    <div className="flex flex-col justify-between py-6 lg:mx-6">
                      <a
                        href="#"
                        className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
                      >
                        Morning routine to boost your mood
                      </a>

                      <span className="text-sm text-gray-500 dark:text-gray-300">
                        On: 25 November 2020
                      </span>
                    </div>
                  </div>

                  <div className="lg:flex">
                    <img
                      className="object-cover w-full h-56 rounded-lg lg:w-64"
                      src="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1547&q=80"
                      alt=""
                    />

                    <div className="flex flex-col justify-between py-6 lg:mx-6">
                      <a
                        href="#"
                        className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
                      >
                        All the features you want to know
                      </a>

                      <span className="text-sm text-gray-500 dark:text-gray-300">
                        On: 30 September 2020
                      </span>
                    </div>
                  </div>

                  <div className="lg:flex">
                    <img
                      className="object-cover w-full h-56 rounded-lg lg:w-64"
                      src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1484&q=80"
                      alt=""
                    />

                    <div className="flex flex-col justify-between py-6 lg:mx-6">
                      <a
                        href="#"
                        className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
                      >
                        Minimal workspace for your inspirations
                      </a>

                      <span className="text-sm text-gray-500 dark:text-gray-300">
                        On: 13 October 2019
                      </span>
                    </div>
                  </div>

                  <div className="lg:flex">
                    <img
                      className="object-cover w-full h-56 rounded-lg lg:w-64"
                      src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                      alt=""
                    />

                    <div className="flex flex-col justify-between py-6 lg:mx-6">
                      <a
                        href="#"
                        className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
                      >
                        What do you want to know about Blockchane
                      </a>

                      <span className="text-sm text-gray-500 dark:text-gray-300">
                        On: 20 October 2019
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="items-center">
                <Pagination defaultCurrent={1} total={50} />
              </div>
            </section>
          </div>
          <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
            <div>
              <h3 className="text-blue-500 capitalize">Design instument</h3>

              <a
                href="#"
                className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
              >
                How to raise $100k+ by using blox ui kit on your design
              </a>
            </div>

            <hr className="my-6 border-gray-200 dark:border-gray-700" />

            <div>
              <h3 className="text-blue-500 capitalize">UI Resource</h3>

              <a
                href="#"
                className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
              >
                Should you creat UI Product by using Blox?
              </a>
            </div>

            <hr className="my-6 border-gray-200 dark:border-gray-700" />

            <div>
              <h3 className="text-blue-500 capitalize">Premium Collection</h3>

              <a
                href="#"
                className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
              >
                Top 10 Blocks you can get on Blox&apos;s collection.
              </a>
            </div>

            <hr className="my-6 border-gray-200 dark:border-gray-700" />

            <div>
              <h3 className="text-blue-500 capitalize">Premium kits</h3>

              <a
                href="#"
                className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
              >
                Top 10 Ui kit you can get on Blox&apos;s collection.
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
