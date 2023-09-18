import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prisma";

export async function GET(_: any, { params }: { params: { id: string } }) {
  const eventId = params.id;

  const event = await prisma.event.findUnique({
    where: {
      id: eventId,
    },
    include: {
      participants: true,
      author: true,
    },
  });

  return NextResponse.json({ data: event, message: "Event fetched successfully" }, { status: 200 });
}
