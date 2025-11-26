import connectMongoDB from "../../../../libs/mongodb";
import Topic from "../../../../models/topic";
import { NextResponse } from "next/server";

// add product
export async function POST(request) {
  const { title, description, category, price, image } = await request.json();
  await connectMongoDB();
  await Topic.create({ title, description, category, price, image });
  return NextResponse.json({ message: "topic Created" }, { status: 201 });
}

// get all
export async function GET() {
  await connectMongoDB();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic delete" }, { status: 200 });
}
