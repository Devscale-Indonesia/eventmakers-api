import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prisma";

export async function POST(request: NextRequest) {
  const { name, email, phone, eventId } = await request.json();

  try {
    const joinevent = await prisma.participant.create({
      data: {
        name,
        email,
        phone,
        eventId,
      },
    });
    return NextResponse.json({ data: joinevent, message: "Join event successfully" }, { status: 201 });
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
