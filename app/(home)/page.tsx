import CardCourse from "@/components/CardCourse";
import LandingPage from "@/components/Landing";
import ThePricing from "@/components/Pricing";
import TheApp from "@/components/TheApp";
import TheBanner from "@/components/TheBanner";
import TheMentor from "@/components/TheMentor";
import TheReview from "@/components/TheReview";
import TheStats from "@/components/TheStat";

export default function Home() {
  return (
    <main className=" flex container mx-auto  min-h-screen flex-col items-center justify-between ">
      <TheBanner />
      <LandingPage />
      <span className="flex text-xl font-extrabold">Khóa học Pro</span>
      <CardCourse />
      <span className="flex text-xl font-extrabold">Khóa học Miễn Phi</span>
      <CardCourse />
      <span className="flex text-xl font-extrabold">Bài viết mới nhất</span>
      <CardCourse />
      <TheMentor />
      <TheReview />
      <TheApp />
      <span className="flex text-xl font-extrabold">Đăng kí thành viên</span>
      <ThePricing />
      <TheStats />
    </main>
  );
}
