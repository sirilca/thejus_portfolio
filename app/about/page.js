import AboutSection from "@/components/AboutSection";


async function getProjects() {
    try {
        const res = await fetch('http://127.0.0.1:3000/api/data', { cache: 'no-store' })
        if (!res.ok) {
            throw new Error(`Failed to fetch projects: ${res.statusText}`);
        }
        const data = await res.json()
        // console.log(data)
        return data

    }
    catch (err) {
        return err
    }
}


const About = async () => {

    const data= await getProjects()
    const finddata=data[0].aboutsection


  return (
      <div className=''>

        {finddata?<h1>{finddata.description}</h1>:<>no data we got</>}

        div vannille
        {/* <AboutSection data ={data}/> */}
      </div>
  )
}

export default About
