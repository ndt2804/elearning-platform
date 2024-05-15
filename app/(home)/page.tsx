import CardCourse from "@/components/CardCourse";
import LandingPage from "@/components/Landing";
import ThePricing from "@/components/Pricing";
import TheApp from "@/components/TheApp";
import TheMentor from "@/components/TheMentor";
import TheReview from "@/components/TheReview";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex mx-auto min-h-screen flex-col items-center justify-between bg-white">
      <LandingPage />
      <div>
        <span className="flex text-xl font-extrabold">Khóa học</span>
        <CardCourse />
        <div className="flex items-center flex-wrap ">
          <Link
            className=" text-blue-500 hover:text-blue-800 inline-flex items-center md:mb-2 lg:mb-0 mr-3 lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 "
            href="/courses"
          >
            Learn More
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
              fill="none"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
      <div>
        <span className="flex text-xl font-extrabold">Bài viết mới nhất</span>
        <CardCourse />
        <div className="flex items-center flex-wrap ">
          <Link
            className=" text-blue-500 hover:text-blue-800 inline-flex items-center md:mb-2 lg:mb-0 mr-3 lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 "
            href="/blog"
          >
            Learn More
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
              fill="none"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>

      <TheMentor />
      <TheReview />
      <ThePricing />
      <TheApp />
    </main>
  );
}
