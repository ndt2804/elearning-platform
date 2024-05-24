"use client";
import Course from "@/types/course";
import Link from "next/link";
import { useEffect, useState } from "react";
import { List } from "antd";
import Loading from "@/components/ui/loading";
import { useSession } from "next-auth/react";
import openNotification from "@/components/ui/Notification";
import { useRouter } from "next/navigation";
import { Button } from "antd";

interface Course {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: Number;
  lessionsId: [String];
  slug: String;
}
interface User {
  _id: string;
  email: string;
  username: string;
  image: string;
}

function DetailCourse({ params }: { params: { slug: string } }) {
  const { data: session } = useSession();
  const [user, setUser] = useState<User | null>(null);
  const [course, setCourse] = useState<Course | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [isLoadingPurchase, setLoadingPurchase] = useState(false);

  const [isPurchased, setIsPurchased] = useState<boolean>(false);
  const [error, setError] = useState("");

  const router = useRouter();

  useEffect(() => {
    fetch(`/api/course/${params.slug}`)
      .then((res) => res.json())
      .then((data) => {
        setCourse(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!session || !session.user || !session.user.name) {
      return;
    }
    fetch(`/api/user/${session.user.name}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
      });
  }, [session]);
  useEffect(() => {
    if (user && course && user._id && course._id) {
      fetch(`/api/purchase?userID=${user._id}`)
        .then((res) => res.json())
        .then((data) => {
          const isCoursePurchased = data.some(
            (purchase: any) => purchase.courseId._id === course._id
          );
          setIsPurchased(isCoursePurchased);
        })
        .catch((error) => {
          console.error("Error fetching purchases:", error);
        });
    }
  }, [user, course]);

  const handlePurchase = async () => {
    setLoadingPurchase(true);
    setTimeout(async () => {
      try {
        const res = await fetch("/api/purchase", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            courseId: course?._id,
            amount: course?.price,
            userId: user?._id,
          }),
        });
        if (res.status === 400) {
          setError("Purchase course failed");
        }
        if (res.status === 200) {
          setLoadingPurchase(false);
          setIsPurchased(true);
          setError("");
          openNotification(
            "success",
            "Register Success",
            "Registration successful. You can learning now"
          );
          // router.push(`/learning/${course?.slug}`);
        }
      } catch (error) {
        setLoadingPurchase(false);

        setError("Error, try again");
        console.log(error);
      }
    }, 2000);
  };

  if (isLoading) return <Loading />;
  if (!course) return <p>No profile data</p>;

  return (
    <>
      <div className="mx-auto px-6 sm:px-6 lg:px-6 container max-w-[auto] min-h-[80vh] bg-white">
        <div>
          <div className="flex flex-col-reverse gap-6 sm:flex-row sm:items-end">
            <div className="z-20 -mt-24 flex-1 sm:mt-0">
              <div className="space-y-3">
                <span className="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 bg-primary-500 dark:bg-primary-400 text-white dark:text-gray-900">
                  Manga
                </span>
                <h2 className="font-lexend text-3xl font-bold">
                  {course.title}
                </h2>
              </div>
              <div className="mt-3 flex flex-col">
                <div className="prose prose-sm line-clamp-4 max-w-none dark:prose-invert prose-p:me-1 prose-p:inline">
                  <p>{course.description}</p>
                </div>
              </div>
            </div>

            <div className="relative ml-auto w-64 flex-shrink-0">
              <img
                className="aspect-[2/3] h-full w-full object-cover rounded-lg"
                src={course.imageUrl}
              />
            </div>
          </div>

          <div className="mt-6 flex flex-col-reverse gap-6 lg:flex-row">
            <div className="flex-1">
              <List
                size="large"
                bordered
                dataSource={course.lessionsId}
                renderItem={(course: any) => (
                  <List.Item>
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                  </List.Item>
                )}
              />
            </div>
            <div className="w-full flex-shrink-0 space-y-6 lg:w-64">
              <div className="gap-3">
                <div>
                  {isPurchased ? (
                    <Link href={`/learning/${course.slug}`}>
                      <Button
                        type="primary"
                        className="w-full font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm  dark:text-gray-900 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-500 dark:bg-primary-400 dark:hover:bg-primary-500 dark:disabled:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400 flex justify-center items-center flex-1  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center focus:outline-none focus:ring-2 focus:ring-offset-2"
                      >
                        Học
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      type="primary"
                      loading={isLoadingPurchase}
                      onClick={handlePurchase}
                      className="w-full font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm  dark:text-gray-900 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-500 dark:bg-primary-400 dark:hover:bg-primary-500 dark:disabled:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400 flex justify-center items-center flex-1  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center focus:outline-none focus:ring-2 focus:ring-offset-2"
                    >
                      {isPurchased ? "Học" : "Đăng ký"}
                    </Button>
                  )}
                </div>
              </div>
              <div className="rounded-lg divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900 prose prose-sm max-w-none dark:prose-invert prose-h4:my-0 prose-a:text-gray-800 prose-a:no-underline hover:prose-a:text-tanablue-500 hover:prose-a:underline prose-hr:my-3 dark:prose-a:text-gray-300 dark:hover:prose-a:text-tanablue-400">
                <div className="divide-y divide-gray-200 dark:divide-gray-800 p-0 sm:p-0">
                  <div className="p-4 sm:p-4">
                    <h4 className="font-bold">Trình Độ</h4>
                    <a href="/browse?demographic=shounen">
                      <span className="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800 mr-1.5 mt-1.5">
                        Basic
                      </span>
                    </a>
                  </div>
                  <div className="p-4 sm:p-4">
                    <h4 className="font-bold">Ngôn Ngữ</h4>
                    <a href="/browse?genre=drama">
                      <span className="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800 mr-1.5 mt-1.5">
                        Javscript
                      </span>
                    </a>
                    <a href="/browse?genre=slice-of-life">
                      <span className="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800 mr-1.5 mt-1.5">
                        Typescript
                      </span>
                    </a>
                    <a href="/browse?genre=adventure">
                      <span className="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800 mr-1.5 mt-1.5">
                        Tailwindcss
                      </span>
                    </a>
                    <a href="/browse?genre=fantasy">
                      <span className="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800 mr-1.5 mt-1.5">
                        Css
                      </span>
                    </a>
                  </div>
                  <div className="space-y-3 p-4 sm:p-4">
                    <div>
                      <h4 className="font-bold">Thời Lượng</h4>
                      <a href="/staff/sl92g0j1rrczoit">10 giờ 29 phút</a>
                    </div>
                    <div>
                      <h4 className="font-bold">Tổng số bài học</h4>
                      <a href="/staff/pjp5nruhxzwiub8">130 Bài</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DetailCourse;
