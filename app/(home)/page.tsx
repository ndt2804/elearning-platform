import CardCourse from "@/components/CardCourse";
import LandingPage from "@/components/Landing";
import ThePricing from "@/components/Pricing";
import TheApp from "@/components/TheApp";
import TheBanner from "@/components/TheBanner";
import TheMentor from "@/components/TheMentor";
import TheReview from "@/components/TheReview";

export default function Home() {
  return (
    <main className="flex container mx-auto  min-h-screen flex-col items-center justify-between p-5">
      <TheBanner />
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
