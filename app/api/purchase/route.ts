import Purchase from "@/types/purchase";
import { NextResponse, NextRequest } from "next/server";
import { connectMongoDB } from "@/libs/mongodb";

export const POST = async (request: any) => {
  const { userId, courseId, amount } = await request.json();
  await connectMongoDB();
  const newPurchase = new Purchase({
    userId,
    courseId,
    amount,
  });

  try {
    await newPurchase.save();

    return new NextResponse("New Purchase is created", { status: 200 });
  } catch (err: any) {
    const errorMessage = err.message || "Internal Server Error";

    return new NextResponse(err, {
      status: 500,
    });
  }
};

export const GET = async (req: NextRequest, res: NextResponse) => {
  if (req.method === "GET") {
    try {
      await connectMongoDB();

      const userId = req.nextUrl.searchParams.get("userID");
      const purchase = await Purchase.find({ userId }).populate("courseId");
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
