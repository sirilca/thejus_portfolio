'use client'

import React, { useState } from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { AiFillCloseCircle, AiOutlineSend } from "react-icons/ai";

import { ToastContainer, toast } from "react-toastify";

const FixedMailModal = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
                <div className='md:block '>
                    <button
                        onClick={() => {
                            setIsModalOpen(true);
                        }}
                        className="my-2 mb-10 mt-10 flex items-center gap-3 text-white bg-red-400 hover:opacity-50 px-5 py-3 rounded-lg"
                    >
                        <div>Join my mailing list </div>
                        <GoArrowUpRight size={20} />
                    </button>
                </div> 
            {isModalOpen &&
                
                <div>

                    <div className="fixed top-0 bottom-0 left-0 right-0 w-full h-full z-50 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="relative bg-zinc-100 md:w-2/3 xl:w-[40vw] w-5/6 md:h-auto h-auto rounded-lg flex flex-col justify-center items-center ">
                            <AiFillCloseCircle
                                onClick={()=>setIsModalOpen(false)}
                                className="absolute top-3 right-3 md:top-5 md:right-5 cursor-pointer"
                                size={30}
                                color="black"
                            />
                            <div className="flex flex-col justify-center items-center px-6 md:px-10 py-8">
                                <div className="text-center">
                                    Subscribe for exclusive updates! Type your email below and join the
                                    community for the latest news and exciting content.
                                </div>
                                <div className="flex flex-col md:flex-row items-center justify-center gap-3 mt-5">
                                    <input
                                        placeholder="Type Your Email Here"
                                        type="email"
                                        className="outline-none py-3 px-4 md:px-5 rounded-lg text-sm md:text-base"
                                    />
                                    <button
                                          onClick={()=>{setIsModalOpen(false)}}
                                        className="flex items-center justify-center gap-2 text-white bg-red-400 hover:opacity-50 px-4 md:px-5 py-3 rounded-lg text-sm md:text-base"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>

                        <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="dark"
                        />
                    </div>

                </div>}
        </>
    )
}

export default FixedMailModal
