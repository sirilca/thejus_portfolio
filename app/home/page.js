// import DataModel from "@/models/mongo"
// import Home from "./home/page"
import HeroSection from "@/components/HeroSection"
import Biography from "@/components/BioSection/Biography"
import ActivitySection from "@/components/ActivitySection"
import BlogSection from "@/components/BlogSection"

// `pages` directory

async function getProjects() {
  try {
    const res = await fetch('https://thejus-portfolio-8wno-git-master-sirils-projects.vercel.app/api/data', { cache: 'no-store' })
    if (!res.ok) {
      throw new Error(`Failed to fetch projects: ${res.statusText}`);
    }
    // console.log(res.json())
    return res.json()

    //-------------------------------directly access from mongoose-------------------------------
    // const data = await DataModel.find()
    // return data

  }
  catch (err) {
    return "hiii"
  }
}

export default async function Dashboard() {

  const projects = await getProjects()
  // console.log("-----------",projects);
  const biodata = await projects[0].biography
  const herodata = await projects[0].herosection
  const activity = await projects[0].activitysection
  const blogdata = await projects[0].blogsection


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