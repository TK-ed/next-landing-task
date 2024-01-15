import { NextResponse } from "next/server";
import User from "../../models/userSchema";

export async function GET() {
    const users = await User.find()
    return NextResponse.json(
        { data: users },
        { status: 200 }
      );
}