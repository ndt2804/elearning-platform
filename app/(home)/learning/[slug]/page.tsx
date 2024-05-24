"use client";
import Lession from "@/types/lession";
import { useEffect, useState } from "react";
import { List, Button } from "antd";
import {
  PlayCircleOutlined,
  CheckCircleOutlined,
  CheckCircleTwoTone,
} from "@ant-design/icons";
import Loading from "@/components/ui/loading";
import { useSession } from "next-auth/react";
import openNotification from "@/components/ui/Notification";

interface Lession {
  _id: string;
  title: string;
  imageUrl: string;
  price: Number;
  videoUrl: string;
}
interface User {
  _id: string;
}
interface UserProgress {
  _id: string;
  userId: string;
  lessonId: string;
}

export default function DetailLession({
  params,
}: {
  params: { slug: string };
}) {
  const { data: session } = useSession();
  const [user, setUser] = useState<User | null>(null);

  const [userProgress, setUserProgress] = useState<UserProgress[]>([]);

  const [lession, setLession] = useState<Lession[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [videoUrl, setVideoUrl] = useState<string>("F4fbwKV9dBU");
  const [lessionTitle, setLessionTitle] = useState<string>(
    "Introducing the website"
  );
  const [lessisonContent, setLessisonContent] = useState<string>(
    "Introducing the website"
  );
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  const [error, setError] = useState("");
  const handlePlay = (
    lessionTitle: string,
    videoUrl: string,
    lessisonContent: string,
    lessonId: string
  ) => {
    setLessionTitle(lessionTitle);
    setVideoUrl(videoUrl);
    setLessisonContent(lessisonContent);
    setSelectedLesson(lessonId);
  };

  useEffect(() => {
    fetch(`/api/lession/${params.slug}`)
      .then((res) => res.json())
      .then((data) => {
        setLession(data);
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
    if (user) {
      fetch(`/api/progress?userID=${user._id}`)
        .then((res) => res.json())
        .then((data) => {
          setUserProgress(data);
        })
        .catch((error) => {
          console.error("Error fetching purchases:", error);
        });
    }
  }, [user]);

  const handleCompleted = async () => {
    setLoadingComplete(true);
    setTimeout(async () => {
      try {
        const res = await fetch("/api/progress", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            lessonId: selectedLesson,
            userId: user?._id,
            completed: true,
          }),
        });
        if (res.status === 400) {
          setLoadingComplete(false);

          setError("Purchase course failed");
          openNotification(
            "error",
            "Completed failed",
            "Completed failed. You have completed this lesson"
          );
        }
        if (res.status === 200) {
          setLoadingComplete(false);
          setError("");
          openNotification(
            "success",
            "Register Success",
            "Registration successful. You can learning now"
          );
          // router.push(`/learning/${course?.slug}`);
        }
      } catch (error) {
        setLoadingComplete(false);
        setError("Error, try again");
        console.log(error);
      }
    }, 2000);
  };

  if (isLoading) return <Loading />;
  if (!lession) return <p>No profile data</p>;
  return (
    <>
      <div className="mx-auto px-6 sm:px-6 lg:px-6  max-w-[auto] min-h-[80vh] bg-white">
        <div>
          <div className="flex flex-col-reverse gap-6 sm:flex-row sm:items-end">
            <div className="z-20 -mt-24 flex-1 sm:mt-0">
              <div className="space-y-3">
                <h2 className="font-lexend text-3xl font-bold">
                  {lessionTitle && lessionTitle}
                </h2>
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-col-reverse lg:flex-row">
            <div className="flex-1 lg:w-2/3">
              <iframe
                className="aspect-video ..."
                width="1636px"
                height="909px"
                src={`https://www.youtube.com/embed/${videoUrl}`}
              ></iframe>
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-3 text-gray-500">
                    <h2 className="font-lexend text-3xl font-bold">
                      {lessisonContent}
                    </h2>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="relative">
                    <Button
                      type="primary"
                      className="mt-4"
                      loading={isLoadingComplete}
                      onClick={handleCompleted}
                    >
                      Mark Complete
                      <CheckCircleOutlined />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 lg:w-1/3 ml-4">
              <div className="w-full flex flex-col space-y-6">
                <List
                  size="large"
                  bordered
                  dataSource={lession}
                  renderItem={(lession: any) => {
                    const isInProgress = userProgress.some(
                      (progress: any) => progress.lessonId === lession._id
                    );
                    return (
                      <List.Item
                        style={{
                          background:
                            selectedLesson === lession._id
                              ? "#f0f0f0"
                              : "transparent",
                        }}
                      >
                        <h3>{lession.title}</h3>
                        {isInProgress ? (
                          <button
                            onClick={() =>
                              handlePlay(
                                lession.title,
                                lession.videoUrl,
                                lession.content,
                                lession._id
                              )
                            }
                          >
                            <CheckCircleTwoTone twoToneColor="#52c41a" />
                          </button>
                        ) : (
                          <button
                            onClick={() =>
                              handlePlay(
                                lession.title,
                                lession.videoUrl,
                                lession.content,
                                lession._id
                              )
                            }
                          >
                            <PlayCircleOutlined />
                          </button>
                        )}
                      </List.Item>
                    );
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
