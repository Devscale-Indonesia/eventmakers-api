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
