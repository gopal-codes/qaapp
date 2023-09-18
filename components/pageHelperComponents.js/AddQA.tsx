"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BsEyeSlashFill } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import axios from "axios";
import { error } from "console";
import { useRouter } from "next/navigation";

type alldata = {
data?: {
    _id: string,
    question: string,
    answer: string,
}
}

const AddQA = (props:alldata) => {

  const router = useRouter();

  // setting the value of input field if edit button is clicked and previous data need to be set for viewing previous 
  // value of question and answer before editing to new value.
  const [input, setInput] = useState({
    question: props.data?props.data?.question:"",
    answer: props.data?props.data?.answer:"",
  });
  
  // function to hangle change of input field ie.question and answer.
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
    console.log(input)
  };

  // handling add qa button that will save question and answer to database.
  const handlePost = async () => {
    try{
    let data = {
      "question":input.question,
      "answer":input.answer
    }
    await axios
      .post(
        `http://localhost:3000/api/qabank`,
        data
      )
      .then((response) => {
       alert(response.data.message);
      })
      router.push("/")
    }catch(error){
      alert(error)
    }
  };

  // handling edit button clicked for editing.
  const handleEdit = async () => {
    try{
      let formdata = {
        "question":input.question,
        "answer":input.answer
      }
      await axios
        .put(
          `http://localhost:3000/api/qabank/edit/${props.data?._id}`,
          formdata
        )
        .then((response) => {
          alert(response.data.message);
        })
      }catch(error){
        alert(error)
      }
  }

  return (
    <div className="bg-white  pt-[20px] pb-[79px] container mx-auto max-w-[1280px]">
      <div className="flex flex-col  justify-center pt-[50px] w-full  mx-auto px-4 md:p-0">
        <textarea
          name="question"
          required
          onChange={handleChange}
          placeholder="What is Your Question ?."
          value={props.data && input.question}
          className="border-[2px] w-full border-[#2591B2] py-[12px] pl-[20px] mt-[20px] placeholder:text-[#666666]/[0.4] placeholder:italic placeholder:font-normal rounded-[2px] outline-none"
        />

        <div className=" border-[2px] border-[#2591B2] rounded-[2px] flex items-center mt-[24px]  w-full">
          <textarea
            rows={10}
            name="answer"
            placeholder="Write your Answer"
            required
            value={props.data && input.answer}
            onChange={handleChange}
            className="w-full py-[12px] pl-[20px]  placeholder:text-[#666666]/[0.4] placeholder:italic placeholder:font-normal rounded-[2px] outline-none"
          />
        </div>

        <div className="flex justify-between">
          <Link href="/">
            <button
              onClick={()=>console.log('back button clicked.')}
              className="text-white text-[15px] leading-[18px] bg-[#2591B2] font-normal  p-[15px] rounded-md
                     mt-[44px]"
            >
              Back
            </button>
          </Link>

          <button
            onClick={props.data?handleEdit:handlePost}
            className="text-white text-[15px] leading-[18px] bg-[#2591B2] font-normal rounded-md p-[15px]
                     mt-[44px]"
          >
            {props.data?"Update":"Upload"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddQA;
