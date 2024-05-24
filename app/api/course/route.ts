import Course from "@/types/course";
import slugify from "slugify";
import { NextResponse, NextRequest } from "next/server";
import { connectMongoDB } from "@/libs/mongodb";

export const POST = async (request: any) => {
  await connectMongoDB();

  const { title, description, imageUrl, price } = await request.json();
  const slug = slugify(title, { lower: true, locale: "vi" });
  console.log(slug);
  const newCourse = new Course({
    title,
    description,
    imageUrl,
    price,
    slug,
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
