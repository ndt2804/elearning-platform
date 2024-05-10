export default function ThePricing() {
  return (
    <section className=" w-full bg-gradient-to-r from-gray-50 to-gray-100 flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
          <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg justify-between border border-gray-300">
            <div>
              <h3 className="text-2xl font-bold text-center">Basic</h3>
              <div className="mt-4 text-center text-zinc-600">
                <span className="text-4xl font-bold">$29</span>/ month
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    className="text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  720p Video Rendering
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    className="text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  2GB Cloud Storage
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    className="text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Basic Video Templates
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <button className="transition transform hover:scale-110 inline-flex items-center justify-center rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-gray-800 h-10 px-4 py-2 w-full">
                Get Started
              </button>
            </div>
          </div>
          <div className="relative flex flex-col p-6 bg-white shadow-lg rounded-lg justify-between border border-purple-500">
            <div className="px-3 py-1 text-sm text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Popular
            </div>
            <div>
              <h3 className="text-2xl font-bold text-center">Pro</h3>
              <div className="mt-4 text-center text-zinc-600">
                <span className="text-4xl font-bold">$59</span>/ month
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    className="text-white text-2xs bg-green-500 rounded-full mr-2 p-1"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  1080p Video Rendering
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    className="text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  10GB Cloud Storage
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    className="text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Premium Video Templates
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    className="text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Collaboration Tools
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <button className="transition transform hover:scale-110 rainbow-button inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background h-10 px-4 py-2 w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white">
                Get Started
              </button>
            </div>
          </div>
          <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg justify-between border border-gray-300">
            <div>
              <h3 className="text-2xl font-bold text-center">Enterprise</h3>
              <div className="mt-4 text-center text-zinc-600">
                <span className="text-4xl font-bold">$99</span>/ month
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    className="text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  4K Video Rendering
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    className="text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Unlimited Cloud Storage
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    className="text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Custom Video Templates
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    className="text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Advanced Collaboration Tools
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    className="text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Dedicated Support
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <button className="transition transform hover:scale-110 inline-flex items-center justify-center rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-gray-800 h-10 px-4 py-2 w-full">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
