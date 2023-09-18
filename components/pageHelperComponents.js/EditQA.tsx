'use client';
import React, {useState,useEffect} from 'react'
import { useParams } from "next/navigation";
import AddQA from './AddQA';

const EditQA = async({data}:any) => {
  
  return (
    <AddQA data={data} />
  )
}

export default EditQA