'use client'

import React, { useState } from "react";

import {
    AiOutlineClose,
    AiOutlineMenu,
} from "react-icons/ai";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";


function NavbarSection({ scroll }) {

    const router = useRouter()



    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);


    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };


    return (
        <div>


            <div className="md:flex justify-around hidden bg-[#f5f6f0] h-20 ">
                <div onClick={() => { router.push('/') }} className="w-[65%] flex items-center">
                    <img src='/IMAges/Logo.png' alt="Logo" className="w-12 h-12 mx-8" />
                </div>
                <div className="flex justify-around items-center gap-2  w-[35%] mr-2">
                    <Link href='/home' className="text-black font-outfit hover:text-gray-600 cursor-pointer" onClick={() => { scroll('homeid') }} >
                        Home
                    </Link>
                    <Link href='/home' className="text-black font-outfit hover:text-gray-600 cursor-pointer" onClick={() => { scroll('meditationid') }}>
                        Meditations
                    </Link>
                    <Link href='/home' className="text-black font-outfit hover:text-gray-600 cursor-pointer" onClick={() => { scroll('activityid') }}>
                        Activities
                    </Link>
                    <Link href='/about' className="text-black font-outfit hover:text-gray-600 cursor-pointer">
                        About
                    </Link>
                    <Link href='/contact' className="text-black font-outfit hover:text-gray-600 cursor-pointer" >
                        Contact
                    </Link>
                </div>
            </div>


            <div className="md:hidden max-w-[100%] py-8 bg-[#f5f6f0] ">

                <div className="flex justify-between items-center">

                    <div onClick={() => { router.push('/') }} className="w-[50%] flex items-center sm:h-auto h-20">
                        <Image width={12} height={12} src='/IMAges/Logo.png' alt="Logo" className=" mx-4 sm:h-auto h-12 w-12" />
                    </div>

                    <div className="  md:hidden z-50 mx-4">
                        <button
                            onClick={toggleMobileMenu}
                            className=" text-white focus:outline-none z-50"  >
                            {!isMobileMenuOpen ? (
                                <AiOutlineMenu color="black" size={20} />
                            ) : (
                                <AiOutlineClose color="white" className="fixed right-4 top-10" size={20} />
                            )}

                        </button>
                    </div>

                </div>

                <div className={`fixed  flex items-center py-16 flex-col top-0 right-0 h-full w-64 bg-gray-800 text-white transform transition-transform ease-in-out duration-500 z-40 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>



                    <Link href='/home' className=" font-outfit my-3 block hover:text-gray-600 cursor-pointer" onClick={() => { scroll('homeid') }} >
                        Home
                    </Link>
                    <div>
                        <hr ></hr>
                    </div>
                    <Link href='/home' className=" font-outfit my-3 block hover:text-gray-600 cursor-pointer" onClick={() => { scroll('meditationid') }}>
                        Meditations
                    </Link>
                    <hr />
                    <Link href='/home' className=" font-outfit my-3 block hover:text-gray-600 cursor-pointer" onClick={() => { scroll('activityid') }}>
                        Activities
                    </Link>
                    <hr />
                    <Link href='/about' className=" font-outfit my-3 block hover:text-gray-600 cursor-pointer">
                        About
                    </Link>
                    <hr />
                    <Link href='/contact' className=" font-outfit my-3 block hover:text-gray-600 cursor-pointer" >
                        Contact
                    </Link>

                </div>
            </div>

        </div>

    );
}

export default NavbarSection;
