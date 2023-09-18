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
  const { name, description, date, location, authorId } = await request.json();

  try {
    const event = await prisma.event.create({
      data: {
        name,
        description,
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
