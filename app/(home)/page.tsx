import CardCourse from "@/components/CardCourse";
import LandingPage from "@/components/Landing";
import ThePricing from "@/components/Pricing";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <LandingPage />
      <span className="flex text-xl font-extrabold">Khóa học Pro</span>
      <CardCourse />
      <span className="flex text-xl font-extrabold">Khóa học Miễn Phi</span>
      <CardCourse />

      <span className="flex text-xl font-extrabold">Bài viết mới nhất</span>
      <CardCourse />
      <span className="flex text-xl font-extrabold">Đăng kí thành viên</span>
      <ThePricing />
    </main>
  );
}
