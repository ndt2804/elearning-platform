import User from "@/types/user";
import { NextResponse, NextRequest } from "next/server";
import { connectMongoDB } from "@/libs/mongodb";

export const GET = async (
  req: NextRequest,
  {
    params: { username },
  }: {
    params: { username: string };
  }
) => {
  if (req.method === "GET") {
    try {
      await connectMongoDB();
      const user = await User.findOne({ username });
      return NextResponse.json(user);
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
