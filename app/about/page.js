import AboutSection from "@/components/AboutSection";


async function getProjects() {
    try {
        const res = await fetch('http://localhost:3000/api/data', { cache: 'no-store' })
        if (!res.ok) {
            throw new Error(`Failed to fetch projects: ${res.statusText}`);
        }
        const data = await res.json()
        // console.log(data)
        return data[0].aboutsection

    }
    catch (err) {
        return err
    }
}


const About = async () => {

    const data= await getProjects()


  return (
      <div className=''>
        <AboutSection data ={data}/>
      </div>
  )
}

export default About
