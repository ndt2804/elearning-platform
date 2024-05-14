import CardCourse from "@/components/CardCourse";
import LandingPage from "@/components/Landing";
import ThePricing from "@/components/Pricing";
import TheApp from "@/components/TheApp";
import TheMentor from "@/components/TheMentor";
import TheReview from "@/components/TheReview";

export default function Home() {
  return (
    <main className="flex mx-auto min-h-screen flex-col items-center justify-between bg-white">
      <LandingPage />
      <span className="flex text-xl font-extrabold">Khóa học</span>
      <CardCourse />
      <span className="flex text-xl font-extrabold">Bài viết mới nhất</span>
      <CardCourse />
      <TheMentor />
      <TheReview />
      <ThePricing />
      <TheApp />
    </main>
  );
}
