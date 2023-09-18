"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  MdArrowBack,
  MdArrowDownward,
  MdArrowForward,
  MdDelete,
  MdEdit,
  MdReadMore,
} from "react-icons/md";
import { getAdmin } from "../../utils/tokenUtils";
import axios from "axios";
import { useRouter } from "next/navigation";

type data = {
  admin?: boolean;
  data?: [];
};

const ViewQA = async (props: data) => {
  const admin = getAdmin();

  const [answer, showAnswer] = useState<Number>(0);

  // handling delete functionality.
  const router = useRouter();
  const handlingDELETE = async(id:string) =>{
    const confirmed = confirm("Are you Sure? ")
    if(confirmed){
    await axios.delete(`http://localhost:3000/api/qabank?id=${id}`)
    router.refresh();
  };
  }

  return (
    <div className="container mx-auto max-w-[1280px] flex justify-center  ">
      <div className="w-full p-2 flex flex-col">
      <div className="addnewcontainer  cursor-pointer mb-20" onClick={()=>router.push("/addqa")}>
          <h2 className="addqatextbackpart ">Add New</h2>
          <h2 className="addqatext ">Add New</h2>
      </div>
        {props.data?.map((value: any, index) => (
          <span key={index} className="w-full p-2 flex flex-col gap-3">
            
            <div className="flex justify-between p-4 items-center border-[4px] border-black bg-[#2591B2] rounded-md">
              <p className=" text-[25px] text-white ">{value?.question}</p>

              <div className="flex items-center ">
                <div onClick={()=>showAnswer(index)}>
                  {answer !== index ? (
                    <MdArrowForward
                      color="white"
                      size={25}
                      className="mr-[20px] rounded border-[4px] border-white"
                    />
                  ) : (
                    <MdArrowDownward
                      color="white"
                      size={25}
                      className="mr-[20px] rounded border-[4px] border-white"
                    />
                  )}
                </div>

                {admin && (
                  <div className="flex items-center bg-white p-2 rounded-md">
                    <Link href={`/editqa/${value._id}`}>
                      <MdEdit
                        size={27}
                        className="text-green-500 hover:scale-[0.8] ease-in-out duration-500 transition-all cursor-pointer"
                      />
                    </Link>
                    <div onClick={()=>handlingDELETE(value._id)}>
                      <MdDelete
                        size={27}
                        className="text-red-600 hover:scale-[0.8] ease-in-out duration-500 transition-all cursor-pointer"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {answer === index && (
              <div className="flex justify-start border-[2px] border-[#2591B2] rounded-md p-3">
                <p className=" text-[20px]">{value.answer}</p>
              </div>
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ViewQA;
