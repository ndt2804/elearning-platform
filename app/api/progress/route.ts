import UserProgress from "@/types/progress";
import { NextResponse, NextRequest } from "next/server";
import { connectMongoDB } from "@/libs/mongodb";
export const POST = async (request: any) => {
  const { userId, lessonId, completed } = await request.json();
  await connectMongoDB();
  try {
    const existingProgress = await UserProgress.findOne({ userId, lessonId });
    if (existingProgress) {
      // Thông báo lỗi nếu bài học đã hoàn thành
      return new NextResponse("This lesson is already completed", {
        status: 400, // Sử dụng status 400 để chỉ ra lỗi từ phía client
      });
    }
    const newUserProgress = new UserProgress({
      userId,
      lessonId,
      completed,
    });

    await newUserProgress.save();

    return new NextResponse("New newUserProgress is created", { status: 200 });
  } catch (err: any) {
    const errorMessage = err.message || "Internal Server Error";

    // Thông báo lỗi nếu có lỗi xảy ra trong quá trình xử lý
    return new NextResponse(errorMessage, {
      status: 500,
    });
  }
};

export const GET = async (req: NextRequest, res: NextResponse) => {
  if (req.method === "GET") {
    try {
      await connectMongoDB();

      const userId = req.nextUrl.searchParams.get("userID");
      const purchase = await UserProgress.find({ userId });
      return NextResponse.json(purchase);
    } catch (err: any) {
      const errorMessage = err.message || "Internal Server Error";

      return new NextResponse(err, {
        status: 500,
      });
    }
  } else {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
