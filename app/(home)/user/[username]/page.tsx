"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Loading from "@/components/ui/loading";
import { Card } from "antd";
import Link from "next/link";

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
    imageUrl: string;
    price: number;
  };
  amout: number;
}

export default function Profile({
  params: { username },
}: {
  params: { username: string };
}) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [purchases, setPurchases] = useState<Purchase[]>([]);

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
        }
      });
  }, []);

  if (isLoading) return <Loading />;
  console.log(user);
  console.log(purchases);
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
              <div className="bg-white shadow rounded-lg p-6">
                {purchases.map((purchase) => (
                  <div className="m-3 flex" key={purchase._id}>
                    <Card
                      key={purchase._id}
                      size="small"
                      style={{ width: 280, marginBottom: 20 }}
                      cover={
                        <img alt="example" src={purchase.courseId.imageUrl} />
                      }
                    >
                      <div className="flex text-xl font-extrabold justify-between items-center ">
                        <Link href={`/courses/${purchase.courseId.slug}`}>
                          {purchase.courseId.title}
                        </Link>
                        <span>{purchase.courseId.price}</span>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
