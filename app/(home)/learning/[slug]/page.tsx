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

interface Lession {
  _id: string;
  title: string;
  imageUrl: string;
  price: Number;
  videoUrl: string;
}

export default function DetailLession({
  params,
}: {
  params: { slug: string };
}) {
  const [lession, setLession] = useState<Lession[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [videoUrl, setVideoUrl] = useState<string>("F4fbwKV9dBU");
  const [lessionTitle, setLessionTitle] = useState<string>(
    "Introducing the website"
  );
  const [lessisonContent, setLessisonContent] = useState<string>(
    "Introducing the website"
  );

  const handlePlay = (
    lessionTitle: string,
    videoUrl: string,
    lessisonContent: string
  ) => {
    setLessionTitle(lessionTitle);
    setVideoUrl(videoUrl);
    setLessisonContent(lessisonContent);
  };

  useEffect(() => {
    fetch(`/api/lession/${params.slug}`)
      .then((res) => res.json())
      .then((data) => {
        setLession(data);
        setLoading(false);
      });
  }, []);
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
                    <Button type="primary" className="mt-4">
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
                  renderItem={(lession: any) => (
                    <List.Item>
                      <h3>{lession.title}</h3>
                      <button
                        onClick={() =>
                          handlePlay(
                            lession.title,
                            lession.videoUrl,
                            lession.content
                          )
                        }
                      >
                        <PlayCircleOutlined />
                        <CheckCircleTwoTone twoToneColor="#52c41a" />
                      </button>
                    </List.Item>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
