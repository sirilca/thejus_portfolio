'use client'
import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoArrowUpLeft, GoArrowUpRight } from "react-icons/go";


const BioSlider =  ({items}) => {

    // const data=  items
    // console.log(data)

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000,
        arrows: false,
        vertical: true,
        dots:false,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    vertical:false,
                    dots: true
                }
            }
            ]
    };

    const dummyData = [
        {
            image: 'https://bgw.wikihow.com/images/b/b5/Create-a-Link-Step-21-Version-2.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor bibendum sem, at vestibulum nisl ultrices sit amet. Integer auctor magna a sapien consequat, et tincidunt libero lobortis. Integer quis luctus justo. Sed consequat eros et erat feugiat, vitae efficitur justo ultrices. Donec in dolor in velit imperdiet gravida.',
            link: 'https://example.com/product1',
        },
        {
            image: 'https://www.computerhope.com/issues/pictures/html-link.png',
            description: 'Proin fermentum, quam vitae congue tincidunt, justo ipsum ultrices odio, nec suscipit mi justo id sem. Fusce pulvinar, lectus vitae vehicula laoreet, ex lectus volutpat dui, sed ultricies eros mauris eget mi. Duis consectetur quam nunc, sed consectetur nulla tempus non. Phasellus at posuere velit. Nulla vitae varius nisl.',
            link: 'https://example.com/product2',
        },
        {
            image: 'https://bgw.wikihow.com/images/b/b5/Create-a-Link-Step-21-Version-2.jpg',
            description: 'Maecenasgue est eu, fringilla mauris. Donec vitae semper velit. Vestibulum tempus suscipit dui, sit amet faucibus risus volutpat eu. Sed ut sodales mi.',
            link: 'https://example.com/product3',
        },
    ];


  return (
    <div className=' overflow-hidden  h-full'>
          <div className="flex-auto  relative  sm:h-[90vh] h-auto sm:my-0 my-0 ">

              <div className="absolute w-[95%] top-1/3 left-0 right-0 m-auto border-t border-zinc-300 sm:block hidden" />
              <hr className="absolute w-[95%] top-2/3 left-0 right-0 m-auto border- border-zinc-300 sm:block hidden" />

              <div className="sm:px-2 overflow-hidden md:w-[100%]  w-[90vw] lg:w-[80vh] sm:h-[90vh]   md:bg-[#beada23d]  bg-[#867e791e]
             rounded-xl
              " >

                  <Slider className=" h-[100%] w-full overflow-hidden" {...settings}>
                      {items.map((item, index) => (
                          <div key={index}>
                              <div className="flex sm:flex-row flex-col items-center md:justify-around justify-between sm:p-5  p-0  
                              lg:h-[30vh] sm:h-[30vh] md:h-[30vh] w-full  min-h-[60vh] sm:min-h-[30vh] 

                              ">
                                  
                                  <div  className="overflow-hidden relative m-5 sm:w-[25vh] sm:h-[15vh] h-[30vh] w-[95%] rounded-md">
                                      <img className="w-full h-full object-cover object-center " src={item.image} alt="" />
                                  </div>

                                  <div className="sm:w-2/4  sm:max-h-48 text-sm text-start overflow-hidden
                                     w-[95%]
                                    ">{item.description}</div>

                                  <a href={item.link} target="_blank" className='sm:mb-0 mb-8'>
                                      <div className="rounded-full p-2 border-2 border-[#fc9351] ">
                                          <GoArrowUpRight color="#fc9351" size={20} />
                                      </div>
                                  </a>
                              </div>

                          </div>
                      ))}
                  </Slider>
              </div>
          </div>
              

    </div>
  )
}

export default BioSlider
