import Course from "@/types/course";
import { NextResponse } from "next/server";
import { connectMongoDB } from "@/libs/mongodb";

export const POST = async (request: any) => {
  const { title, description, imageUrl, price } = await request.json();
  console.log(imageUrl);

  await connectMongoDB();
  const newCourse = new Course({
    title,
    description,
    imageUrl,
    price,
  });
  console.log(newCourse);
  try {
    await newCourse.save();
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
      const courses = await Course.find({});
      return NextResponse.json(courses);
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
