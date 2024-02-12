
async function AboutSection({data}) {

    const timedata= await data.timestamp
    // console.log(timedata)

    return (
        <div className="flex items-center justify-center relative">
            <div className="h-1/4 -z-10 w-full top-0 bg-[#f5f6f0] absolute"></div>

                <div className="sm:m-20 flex flex-col items-center justify-center sm:w-8/12 w-full m-5 sm:gap-14 gap-7 bg-reds-900">

                    <div className="text-4xl font-medium text-start w-full sm:text-center">About me</div>


                    <img src='/IMAges/about.png' alt="About Me Image" className="sm:w-full " />

                    <p className="text-justify font-medium text-lg">{data.description}</p>

                    {/* Responsive layout for small screens */}
                    <div className="hidden items-center flex-col gap-10 justify-center">
                        {timedata?.map((e, i) => (
                            <div key={i} className="flex items-center gap-10 justify-between">
                                {/* hidden because client dont need these  things says so */}
                                <div className="w-3/12 hidden"> 
                                    <div className="text-xl font-semibold my-3">{e.date}</div>
                                    <div className="text-lg font-medium">{e.designation}</div>
                                    <div className="text-sm">{e.company}</div>
                                </div>
                                <div className="w-full text-justify">{e.content}</div>
                            </div>
                        ))}
                    </div>

                    {/* Responsive layout for mobile screens */}
                    <div className="hidden">
                        {timedata?.map((e, i) => (
                            <div key={i} className="flex flex-col items-center gap-4 m-4">
                                {/* client said to hide this */}
                                <div className="hidden">

                                <div className="text-xl font-semibold my-3">{e.date}</div>
                                <div className="text-lg font-medium">{e.designation}</div>
                                <div className="text-sm">{e.company}</div>
                                </div>
                                <div className="text-justify">{e.content}</div>
                            </div>
                        ))}
                    </div>


                </div>





        </div>
    );
}

export default AboutSection;
