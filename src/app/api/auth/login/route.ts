import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prisma";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  try {
    const findUser = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!findUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const isPasswordValid = findUser.password === password;

    if (!isPasswordValid) {
      return NextResponse.json({ message: "Invalid password" }, { status: 401 });
    }

    const token = jwt.sign({ id: findUser.id }, process.env.JWT_SECRET!, { expiresIn: "7d" });

    return NextResponse.json({ data: findUser, token, message: "Login succesfully" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error, message: "Something went wrong" }, { status: 500 });
  }
}

export async function OPTIONS(request: Request) {
  const allowedOrigin = request.headers.get("origin");
  const response = new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": allowedOrigin || "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers":
        "Content-Type, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version",
      "Access-Control-Max-Age": "86400",
    },
  });

  return response;
}
