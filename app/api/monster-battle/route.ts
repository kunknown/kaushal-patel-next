import { NextResponse } from "next/server";

export async function GET(req: Request) {
  return NextResponse.json({ message: "testing message!", status: 200 });
}

export async function POST(req: Request) {
  return NextResponse.json({ message: "post message", status: 200 });
}
