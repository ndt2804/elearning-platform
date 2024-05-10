"use client";
import CardCourse from "@/components/CardCourse";
import TheCarousel from "@/components/Carousel";
import InputSearch from "@/components/ui/Input";
export default function Home() {
  return (
    <main className="container mx-auto  justify-between  items-center">
      <div className=""></div>
      <TheCarousel />
      <div className="container mx-auto px-6 py-3">
        <InputSearch />
      </div>
      <div className="container mx-auto px-6 py-3">
        <CardCourse />
      </div>
    </main>
  );
}
