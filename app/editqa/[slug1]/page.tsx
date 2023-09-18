import Nav from '@/components/Nav';
import EditQA from '@/components/pageHelperComponents.js/EditQA'
import axios from 'axios'
import React from 'react'


const page = async({params}:any) => {
    
    const data:any = await axios.get(`http://localhost:3000/api/qabank/edit/${params.slug1}`);
  
  return (
    <>  <Nav />
        <EditQA data={data?.data.singledata} />
    </>
  )
}

export default page