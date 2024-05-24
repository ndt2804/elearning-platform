"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Loading from "@/components/ui/loading";
import Lession from "@/types/lession";
import UserProgress from "@/types/progress";
import { Card } from "antd";
import Link from "next/link";
import { Progress } from "antd";
import { ReadOutlined } from "@ant-design/icons";
interface User {
  _id: string;
  email: string;
  username: string;
  image: string;
}
interface Purchase {
  _id: string;
  userId: string;
  courseId: {
    _id: string;
    title: string;
    slug: string;
    description: string;
    lessionsId: [string];
    imageUrl: string;
    price: number;
  };
  amout: number;
}
interface Lession {
  _id: string;
  title: string;
  imageUrl: string;
  price: Number;
  videoUrl: string;
}

interface UserProgress {
  _id: string;
  useId: string;
  lessonId: string;
  completed: boolean;
}

export default function Profile({
  params: { username },
}: {
  params: { username: string };
}) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [purchases, setPurchases] = useState<Purchase[]>([]);

  const [userProgress, setUserProgress] = useState<UserProgress[]>([]);
  const [lession, setLession] = useState<Lession[]>([]);
  const [courseProgressArray, setCourseProgressArray] = useState<any[]>([]);

  useEffect(() => {
    fetch(` /api/user/${username}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);

        if (data && data._id) {
          fetch(`/api/purchase?userID=${data._id}`)
            .then((res) => res.json())
            .then((purchaseData) => {
              setPurchases(purchaseData);
            })
            .catch((error) => {
              console.error("Error fetching purchases:", error);
            });

          fetch(`/api/progress?userID=${data._id}`)
            .then((res) => res.json())
            .then((progressData) => {
              setUserProgress(progressData);
            })
            .catch((error) => {
              console.error("Error fetching purchases:", error);
            });
        }
      });
  }, []);

  useEffect(() => {
    const calculateCourseProgress = () => {
      const courseProgressMap: Record<string, any> = {};
      purchases.forEach((purchase: any) => {
        const courseId = purchase.courseId._id;

        // Lấy danh sách bài học đã hoàn thành cho khóa học
        const completedLessions = userProgress.filter((progress: any) =>
          purchase.courseId.lessionsId.includes(progress.lessonId)
        );

        // Số bài học đã hoàn thành trong khóa học
        const completedLessionsCount = completedLessions.length;

        // Tính toán phần trăm tiến độ
        const totalLessionsCount = purchase.courseId.lessionsId.length;
        const progressPercentage =
          (completedLessionsCount / totalLessionsCount) * 100 || 0;

        // Lưu thông tin tiến độ vào courseProgressMap
        courseProgressMap[courseId] = {
          title: purchase.courseId.title,
          image: purchase.courseId.imageUrl,
          totalLession: purchase.courseId.lessionsId.length,
          slug: purchase.courseId.slug,
          progressPercentage,
        };
      });

      // Chuyển đổi courseProgressMap thành mảng và cập nhật state
      const courseProgressArray = Object.values(courseProgressMap);
      setCourseProgressArray(courseProgressArray);
    };

    calculateCourseProgress();
  }, [purchases, userProgress]);

  if (isLoading) return <Loading />;
  if (!user) {
    return (
      <section className="bg-white dark:bg-gray-900 min-h-full ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              Something&apos;s missing.
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              Sorry, we can&apos;t find that page. You&apos;ll find lots to
              explore on the home page.{" "}
            </p>
            <a
              href="#"
              className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
            >
              Back to Homepage
            </a>
          </div>
        </div>
      </section>
    );
  }
  return (
    <>
      <div className="bg-gray-100 min-h-full">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div className="col-span-4 sm:col-span-3">
              <div className="bg-white shadow rounded-lg p-6">
                <div className="flex flex-col items-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/94.jpg"
                    alt="avatar"
                    className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                  ></img>
                  <h1 className="text-xl font-bold">{user.username}</h1>
                  <p className="text-gray-700">Software Developer</p>

                  <div className="mt-6 flex flex-wrap gap-4 justify-center">
                    <a
                      href="#"
                      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                    >
                      Contact
                    </a>
                    <a
                      href="#"
                      className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded"
                    >
                      Resume
                    </a>
                  </div>
                </div>
                <hr className="my-6 border-t border-gray-300" />
                <div className="flex flex-col">
                  <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                    Skills
                  </span>
                  <ul>
                    <li className="mb-2">JavaScript</li>
                    <li className="mb-2">React</li>
                    <li className="mb-2">Node.js</li>
                    <li className="mb-2">HTML/CSS</li>
                    <li className="mb-2">Tailwind Css</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-4 sm:col-span-9">
              <div className="bg-white shadow rounded-lg p-6 ">
                <div className="flex">
                  {courseProgressArray.map(
                    (courseProgress: any, index: number) => (
                      <div
                        className="m-3 flex"
                        key={`${courseProgress.courseId}_${index}`}
                      >
                        <Card
                          key={courseProgress.courseId}
                          size="small"
                          style={{ width: 280, marginBottom: 20 }}
                          cover={
                            <img alt="example" src={courseProgress.image} />
                          }
                        >
                          <div className="flex text-xl font-extrabold justify-between items-center ">
                            <Link href={`/courses/${courseProgress.slug}`}>
                              {courseProgress.title}
                            </Link>
                          </div>

                          <h2>
                            {" "}
                            {courseProgress.totalLession} Lession{" "}
                            <ReadOutlined />
                          </h2>
                          <Progress
                            key={`${courseProgress.courseId}_progress`}
                            percent={courseProgress.progressPercentage}
                            size="small"
                          />
                        </Card>
                      </div>
                    )
                  )}
                </div>

                <div className="p-5 mb-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                  <time className="text-lg font-semibold text-gray-900 dark:text-white">
                    January 13th, 2022
                  </time>
                  <ol className="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
                    <li>
                      <a
                        href="#"
                        className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <img
                          className="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0"
                          src="https://randomuser.me/api/portraits/men/94.jpg"
                          alt="Jese Leos image"
                        />
                        <div className="text-gray-600 dark:text-gray-400">
                          <div className="text-base font-normal">
                            <span className="font-medium text-gray-900 dark:text-white">
                              Jese Leos
                            </span>{" "}
                            likes{" "}
                            <span className="font-medium text-gray-900 dark:text-white">
                              Bonnie Green&apos;s
                            </span>{" "}
                            post in{" "}
                            <span className="font-medium text-gray-900 dark:text-white">
                              {" "}
                              How to start with Flowbite library
                            </span>
                          </div>
                          <div className="text-sm font-normal">
                            &quot;I wanted to share a webinar zeroheight.&quot;
                          </div>
                          <span className="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                            <svg
                              className="w-2.5 h-2.5 me-1"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 .5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19ZM8.374 17.4a7.6 7.6 0 0 1-5.9-7.4c0-.83.137-1.655.406-2.441l.239.019a3.887 3.887 0 0 1 2.082 2.5 4.1 4.1 0 0 0 2.441 2.8c1.148.522 1.389 2.007.732 4.522Zm3.6-8.829a.997.997 0 0 0-.027-.225 5.456 5.456 0 0 0-2.811-3.662c-.832-.527-1.347-.854-1.486-1.89a7.584 7.584 0 0 1 8.364 2.47c-1.387.208-2.14 2.237-2.14 3.307a1.187 1.187 0 0 1-1.9 0Zm1.626 8.053-.671-2.013a1.9 1.9 0 0 1 1.771-1.757l2.032.619a7.553 7.553 0 0 1-3.132 3.151Z" />
                            </svg>
                            Public
                          </span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <img
                          className="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0"
                          src="https://randomuser.me/api/portraits/men/94.jpg"
                          alt="Bonnie Green image"
                        />
                        <div>
                          <div className="text-base font-normal text-gray-600 dark:text-gray-400">
                            <span className="font-medium text-gray-900 dark:text-white">
                              Bonnie Green
                            </span>{" "}
                            react to{" "}
                            <span className="font-medium text-gray-900 dark:text-white">
                              Thomas Lean&apos;s
                            </span>{" "}
                            comment
                          </div>
                          <div className="text-sm font-normal">
                            &quot;I wanted to share a webinar zeroheight.&quot;
                          </div>
                          <span className="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                            <svg
                              className="w-2.5 h-2.5 me-1"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="m2 13.587 3.055-3.055A4.913 4.913 0 0 1 5 10a5.006 5.006 0 0 1 5-5c.178.008.356.026.532.054l1.744-1.744A8.973 8.973 0 0 0 10 3C4.612 3 0 8.336 0 10a6.49 6.49 0 0 0 2 3.587Z" />
                              <path d="m12.7 8.714 6.007-6.007a1 1 0 1 0-1.414-1.414L11.286 7.3a2.98 2.98 0 0 0-.588-.21l-.035-.01a2.981 2.981 0 0 0-3.584 3.583c0 .012.008.022.01.033.05.204.12.401.211.59l-6.007 6.007a1 1 0 1 0 1.414 1.414L8.714 12.7c.189.091.386.162.59.211.011 0 .021.007.033.01a2.981 2.981 0 0 0 3.584-3.584c0-.012-.008-.023-.011-.035a3.05 3.05 0 0 0-.21-.588Z" />
                              <path d="M17.821 6.593 14.964 9.45a4.952 4.952 0 0 1-5.514 5.514L7.665 16.75c.767.165 1.55.25 2.335.251 6.453 0 10-5.258 10-7 0-1.166-1.637-2.874-2.179-3.407Z" />
                            </svg>
                            Private
                          </span>
                        </div>
                      </a>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
