// import DataModel from "@/models/mongo"
// import Home from "./home/page"
import { redirect } from "next/navigation"
import HeroSection from "@/components/HeroSection"
import NavbarSection from "@/components/NavbarSection"
import Biography from "@/components/BioSection/Biography"
import ActivitySection from "@/components/ActivitySection"
import BlogSection from "@/components/BlogSection"

// `pages` directory

async function getProjects() {
  try {
    const res = await fetch('http://localhost:3000/api/data', { cache: 'no-store' })
    if (!res.ok) {
      throw new Error(`Failed to fetch projects: ${res.statusText}`);
    }
    const data=await res.json()
    console.log(data)
    return data

    //-------------------------------directly access from mongoose-------------------------------
    // const data = await DataModel.find()
    // return data

  }
  catch (err) {
    return err
  }
}

export default async function Dashboard() {

  const projects = await getProjects()
  console.log("-----------",projects);
  const herodata = await projects[0].herosection
  const biodata = await projects[0].biography
  const activity = await projects[0].activitysection
  const blogdata = await projects[0].blogsection

  // console.log(blogdata)


  // console.log(biodata)
  // const data=projects[0]
  // const sdata=data.herosection
  // console.log(projects[0].aboutsection);

  return (
    <div >

      
      <HeroSection 
      data={herodata}
      />
      <Biography 
      data={biodata}
      />
      <BlogSection 
      data={blogdata}/>

      <ActivitySection 
      data={activity}/>

      {/* <Home /> */}

    </div>
  )
}