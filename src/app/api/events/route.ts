import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prisma";

export async function GET(request: NextRequest) {
  try {
    const events = await prisma.event.findMany({
      include: {
        participants: true,
        author: true,
      },
    });
    return NextResponse.json({ data: events, message: "Events fetched successfully" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error, message: "Something went wrong" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const { name, description, image, date, location, authorId } = await request.json();

  try {
    const event = await prisma.event.create({
      data: {
        name,
        description,
        image,
        date,
        location,
        authorId,
      },
    });
    return NextResponse.json({ data: event, message: "Event created successfully" }, { status: 201 });
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
