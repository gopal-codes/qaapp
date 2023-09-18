import connectMongoDB from "@/libs/mongodb";
import singleqa from "@/mongodbmodels/singleqa";
import { NextRequest, NextResponse } from "next/server";


// get particular question answer, seperated by id.
export async function GET(request:any,{params}:any){
  try {
    const {id} = params;
    await connectMongoDB()
    const singledata = await singleqa.findOne({_id:id});
    return NextResponse.json({singledata},{status:200});
  } catch (error) {
    console.log("edit get request error " + error)
  }
  
}

// edit singleqa
export async function PUT(request:any,{params}:any){
  const {id} = params;
  const {question,answer} = await request.json();
  console.log(question,answer)
  await connectMongoDB();
  const res = await singleqa.findByIdAndUpdate(id,{question,answer}) 
  return NextResponse.json({message:id + "updated."},{status:200})
}





