import { NextRequest, NextResponse } from "next/server";
import { connect } from "../../db/connectDB";
import User from "../../models/userSchema";
import bcryptjs from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    connect();
    const reqBody = await req.json();
    const { email, password } = reqBody;

    if (!email || !password) {
      return NextResponse.json(
        { error: "Invalid Parameters!!" },
        { status: 500 }
      );
    }

    const user = await User.findOne({ email: email });

    if (!user) {
      return NextResponse.json({
        error: "User doesn't exist",
        status: 400,
      });
    }

    const isMatch = await bcryptjs.compare(password, user.password);

    if (isMatch) {
      return NextResponse.json({
        message: "Login Successful",
        status: 200,
      });
    } else {
      return NextResponse.json({
        error: "Incorrect password",
        status: 401,
      });
    }
  } catch (error) {
    return NextResponse.json({
      error: error,
    });
  }
}
