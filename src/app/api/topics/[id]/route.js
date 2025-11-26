import connectMongoDB from "../../../../../libs/mongodb";
import Topic from "../../../../../models/topic";
import { NextResponse } from "next/server";
// get single
export async function GET(request, { params }) {
  const { id } = await params;
  console.log(id);
  await connectMongoDB();
  const topic = await Topic.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}
