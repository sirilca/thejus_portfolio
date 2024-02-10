import AboutSection from "@/components/AboutSection";


async function getProjects() {
    try {
        const res = await fetch('https://thejus-portfolio-8wno-git-master-sirils-projects.vercel.app/api/data', { cache: 'no-store' })
        if (!res.ok) {
            throw new Error(`Failed to fetch projects: ${res.statusText}`);
        }
        const data = await res.json()
        // console.log(data)
        if(data){

            return data
        }
        else{
            return "no way mone"
        }

    }
    catch(err) {
        return "hiii"
    }
}


const About = async () => {

    const data= await getProjects()
    const finddata = data[0].aboutsection


  return (
      <div className=''>
        {/* {data?<>{data}</>:<>no data mone</>} */}
        {/* {finddata?<h1>{finddata.description}</h1>:<>no data we got</>} */}

        {/* div vannille */}
        <AboutSection data ={finddata}/>
      </div>
  )
}

export default About
