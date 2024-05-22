import Course from "@/types/course";
import { NextResponse, NextRequest } from "next/server";
import { connectMongoDB } from "@/libs/mongodb";

export const GET = async (
  request: NextRequest,
  {
    params: { slug },
  }: {
    params: { slug: string };
  }
) => {
  try {
    await connectMongoDB();
    const course = await Course.findOne({ slug }).populate("lessionsId");
    if (!course) {
      return new NextResponse("Course not found", { status: 404 });
    }
    return NextResponse.json(course);
  } catch (error: any) {
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
