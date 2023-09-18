import Nav from '@/components/Nav'
import Login from '@/components/pageHelperComponents.js/Login'
import React from 'react'

const page = () => {
  return (
    <>
    <Nav />
    <Login />
    </>
  )
}

export default page

export async function generateMetadata(){
  return{
    title:`Login | QA_BANK`
  }
}