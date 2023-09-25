import connectMongoDB from "@/libs/mongodb";
import singleqa from "@/mongodbmodels/singleqa"
import { NextRequest, NextResponse } from "next/server";


// testing get request
export async function GET(req: NextRequest, res: NextResponse) {
  await connectMongoDB();
  const allqa = await singleqa.find({});
  return NextResponse.json({ data: allqa });
}


// custom post request for saving question and answer.
export async function POST(req:Request, res: Response) {
  try {
    const {question,answer} = await req.json();
    await connectMongoDB();
    await singleqa.create({question,answer})
    return NextResponse.json({message:"Topic Created"},{status:200});
    } catch (err) {
    return NextResponse.json({ message: err+"error while adding", success: false });
  }  
}

// deleting question and answer.
export async function DELETE(request:any) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await singleqa.findByIdAndDelete(id);
  return NextResponse.json({message:id+"is deleted."},{status:200})
}
