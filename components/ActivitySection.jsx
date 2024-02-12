'use client'
import React, {  useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ActivitySection({ data }) {




    // const data = [
    //     {
    //         link: 'https://example.com/activity1-info',
    //         img: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Anatomy_of_a_Sunset-2.jpg',
    //         content: 'ChatGPT conducts a workshop on AI and NLP.',
    //         _id: '65c61d44c3507433bc990662'
    //     },
    //     {
    //         link: 'https://example.com/activity2-info',
    //         img: 'http://res.cloudinary.com/dqvoeibjd/image/upload/v1707120668/nsko0pmoby303pgcedmb.png',
    //         content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Dignissimos fuga quam ab vel, repellendus non magnam, quaerat culpa maiores, harum praesentium molestiae doloremque? Tempora aliquid dolorem voluptates facilis quae minima.o? Fugiat iste aliquam cumque eligendi! Repudiandae aut nihil voluptates labore! Nisi quos explicabo velit nesciunt, eligendi eius exercitationem! Nihil, perspiciatis.Omnis quia sunt, a temporibus consectetur quos dicta?Nulla necessitatibus voluptatem ad eius libero placeat eos maiores repellat rerum doloremque, mollitia quam dolores error repudiandae autem neque iste incidunt dolore rem.Ad sunt voluptas asperiores deserunt, hic atque!Magni fugit possimus quia architecto repudiandae nihil dicta itaque vitae reprehenderit quod iste adipisci voluptas quidem expedita temporibus unde, atque non.Asperiores eveniet consequatur accusantium quam eligendi non reiciendis voluptatum?Repellat, illo provident? Distinctio et id vel assumenda harum odio atque amet, incidunt deserunt minus nemo facilis? Consectetur dolor suscipit et sit quisquam adipisci, aperiam voluptatibus maiores odio est impedit.',  
    //         _id: '65c61d44c3507433bc990663'
    //     }
    // ]


    const sliderRef = useRef(null);
    const goToNextSlide = () => {
        sliderRef.current.slickNext();
    };

    const goToPrevSlide = () => {
        sliderRef.current.slickPrev();
    };


    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        initialSlide: 0,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    dots: true,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (

        <div id='activityid' className="my-16 bg-[#f5f6f0]  b-green-00 xl:px-28 py-6">


            <div  className="flex items-start justify-start text-4xl  m-8 md:hidden">
                        Activities
                    </div>

                    <div className="flex flex-col md:flex-row w-full md:my-0 my-16 items-center justify-evenly bg-blue-00 " >



                        <div className=" items-center justify-center hidden b-blue-900 md:flex md:w-[30%] lg:w-[28%] xl:w-[35%] xl:justify-start">

                            <div className=" flex-col  items-center justify-center  md:flex bg-red-00 xl:pl-20">
                                <div className=" text-3xl hidden md:block">Activities</div>
                                <div className="text-sm mt-10">Next/prev</div>
                                <div className="flex gap-2 mt-5">
                                    <div
                                        onClick={goToPrevSlide}
                                        className="rounded-full p-2 cursor-pointer border-2 border-[#fc9351]"
                                    >
                                        <FaArrowLeft color="#fc9351" size={20} />
                                    </div>
                                    <div
                                        onClick={goToNextSlide}
                                        className="rounded-full p-2 cursor-pointer border-2 border-[#fc9351]"
                                    >
                                        <FaArrowRight color="#fc9351" size={20} />
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="flex items-center justify-center w-[90%] md:w-[70%] lg:w-[72%]  xl:w-[65%] flex-none bg-red-4f00 ">
                            <Slider className="w-[100%]  bg-green-00" ref={sliderRef} {...settings}>
                                {data?.map((e, i) => {
                                    return (
                                        <div key={i} className="bgd-red-800">

                                            <div className="  flex flex-col gap-5 bgd-yellow-00">

                                                <div className="flex justify-center items-center bg-green-00 p-1 ">

                                                    <div className=" 
                          shadow-sm transition duration-300 ease-in-out transform hover:shadow-lg hover:scale-105 rounded-sm overflow-hidden object-contain">
                                                        <img
                                                            // style={{ height: "28vh", width: "50vh" }}
                                                            className="sm:h-[35vh] w-[50vh] h-[30vh] "
                                                            src={e.img}
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>

                                                <div className="flex justify-center ">

                                                    <div className="  text-justify text-clip w-[50vh] ">
                                                        {e.content.length > 500
                                                            ? e.content.slice(0, 500) + "..."
                                                            : e.content}
                                                    </div>

                                                </div>

                                           </div>

                                        </div>
                                    );
                                })}
                            </Slider>




                        </div>







                    </div>

        </div>



    );
}

export default ActivitySection;