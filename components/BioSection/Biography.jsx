import Link from 'next/link'
import React from 'react'
import BioSlider from './BioSlider'

const Biography = async ({data}) => {

    const items=await data.items
    // console.log(items)
    return (
        <div  className='flex items-center justify-evenly lg:flex-row flex-col  md:mx-[10vh] mx-5 my-8 md:my-24 gap-5'>

            <div className=' w-full flex justify-center items-center flex-col  flex-shrink lg:max-w-[90vh] ' >
                <div className=' lg:w-[80%] md:w-[95%] w-full h-auto flex justify-center items-start flex-col'>

                    <div className=" text-4xl lg:text-3xl">Biography</div>

                    <div className=" w-full my-12 text-md lg:text-md xl:text-lg lg:max-h-96 max-h-62 overflow-auto ">
                        {data.description}
                        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dicta aperiam fuga cupiditate ducimus vel blanditiis veniam. Suscipit dolorum ex facere commodi earum, culpa id velit sed in doloribus tempore? */}
                        </div>
                    <div>
                        <span className="cursor-pointer text-white  px-6 py-3 bg-[#fc9351] rounded-lg">
                            <Link href='/about'>Read More</Link>
                        </span>
                    </div>
                    <br/>



                </div>
            </div>


            <div className=' overflow-hidden flex-none'>
                <BioSlider 
                items={items}
                />
            </div>
        </div>
    )
}

export default Biography
