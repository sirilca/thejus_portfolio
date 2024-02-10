'use client'

import AboutSection from "@/components/AboutSection";
import axios from "axios";
import { useEffect, useState } from "react";


async function getProjects() {

    // try {
    //     const res = await fetch('/api/data', { cache: 'no-store' })
    //     if (!res.ok) {
    //         throw new Error(`Failed to fetch projects: ${res.statusText}`);
    //     }
    //     const data = await res.json()
    //     // console.log(data)
    //     if(data){

    //         return "data vanoota  "
    //     }
    //     else{
    //         return "no way mone"
    //     }

    // }
    // catch (err) {
    //     return "hiii"
    // }
}


const About = () => {

    const [data,setData]= useState()

    useEffect(()=>{
        axios.get('http://localhost:3000/api/data').then(res => {
            // console.log(res.data)
            setData(res.data)
        }).catch(err => {
            return 'hiii'
        })
    },[])

    
    // const data= await getProjects()
    // const finddata=data[0].aboutsection


  return (
      <div className=''>
        
    {data?<>{data[0].biography.description}</>:<>no data mone  </>}
        {/* {finddata?<h1>{finddata.description}</h1>:<>no data we got</>} */}

        div vannille
        {/* <AboutSection data ={data}/> */}
      </div>
  )
}

export default About
