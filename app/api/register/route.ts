import User from "@/types/user";

import { NextResponse } from "next/server";
import { connectMongoDB } from "@/libs/mongodb";
import bcrypt from "bcryptjs";

export const POST = async (request: any) => {
  const { email, username, password } = await request.json();
  await connectMongoDB();
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return new NextResponse("Email is already in use", { status: 400 });
  }
  const hashedPassword = await bcrypt.hash(password, 5);
  const newUser = new User({
    email: email,
    username,
    password: hashedPassword,
    image: null,
  });
  try {
    await newUser.save();
    return new NextResponse("user is registered", { status: 200 });
  } catch (err: any) {
    const errorMessage = err.message || "Internal Server Error";

    return new NextResponse(err, {
      status: 500,
    });
  }
};
