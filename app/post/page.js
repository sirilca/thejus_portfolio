// 'use client'

import Meditation from "@/components/PostSection/Meditation";
import PostSection from "@/components/PostSection/PostSection"


async function getProjects() {
  try {
    const res = await fetch('https://thejus-portfolio-8wno-git-master-sirils-projects.vercel.app/api/data', { cache: 'no-store' })
    if (!res.ok) {
      throw new Error(`Failed to fetch projects: ${res.statusText}`);
    }
    return res.json()
    const data = await res.json()
    // console.log(data)
    return data[0].blogsection

  }
  catch (err) {
    return 'err'
  }
}


const page = async () => {

  const res= await getProjects()

  const data=res[0].blogsection

  const journey= data.slice(1)


  return (
    <div>
      {/* <input type="checkbox" value="dark" className="toggle theme-controller" /> */}

      <PostSection data={data}/> 
      <Meditation journeys={journey}/>

    </div>
  )
}

export default page
