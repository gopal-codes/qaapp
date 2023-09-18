import connectMongoDB from "@/libs/mongodb";
import loginmodel from "@/mongodbmodels/loginmodel"
import { NextRequest, NextResponse } from "next/server";


// testing get request
export async function GET(req: NextRequest, res: NextResponse) {
  await connectMongoDB();
  return NextResponse.json({ name: "allqa is here." });
}


// custom post request for making new admin.
// this is used for register new admin to Application.

// export async function POST(req:Request, res: Response) {
//   try {
//     const {username,password} = await req.json();
//     await connectMongoDB();
//     await loginmodel.create({username,password})
//     return NextResponse.json({message:"User Created"},{status:200});
//     } catch (err) {
//     return NextResponse.json({ message: err+"error while adding", success: false });
//   }  
// }


// Post request for Admin Login.
export async function POST(req:Request, res: Response) {
  try {
    const {username,password} = await req.json();
    await connectMongoDB();
    const admin = await loginmodel.findOne({username,password})
    return NextResponse.json({message:"Login successfull",data:admin},{status:200});
    } catch (err) {
    return NextResponse.json({ message: err+"error while adding", success: false });
  }  
}