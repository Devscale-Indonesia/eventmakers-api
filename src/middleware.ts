import { NextResponse } from "next/server";

export default function middleware() {
  return NextResponse.json({ message: "Not found" }, { status: 404 });
}

export const config = {
  matcher: "/",
};
