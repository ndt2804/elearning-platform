import Lession from "@/types/lession";
import Course from "@/types/course";
import { NextResponse } from "next/server";
import { connectMongoDB } from "@/libs/mongodb";

export const POST = async (request: any) => {
  const { title, courseId, content, videoUrl } = await request.json();

  await connectMongoDB();
  const newLession = new Lession({
    title,
    courseId,
    content,
    videoUrl,
  });

  try {
    await newLession.save();
    await Course.findByIdAndUpdate(
      courseId,
      { $push: { lessionsId: newLession._id } },
      { new: true }
    );
    return new NextResponse("New Course is created", { status: 200 });
  } catch (err: any) {
    const errorMessage = err.message || "Internal Server Error";

    return new NextResponse(err, {
      status: 500,
    });
  }
};

export const GET = async (request: any, response: any) => {
  if (request.method === "GET") {
    try {
      await connectMongoDB();
      const lessions = await Lession.find({});
      return NextResponse.json(lessions);
    } catch (err: any) {
      const errorMessage = err.message || "Internal Server Error";

      return new NextResponse(err, {
        status: 500,
      });
    }
  } else {
    response.status(405).json({ message: "Method Not Allowed" });
  }
};
