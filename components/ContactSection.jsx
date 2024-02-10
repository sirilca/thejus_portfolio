'use client'

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactSection({ ContactRef }) {


    const notify = () => toast("😇 Mail Added Succesfully");
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [message, setMessage] = useState()
    const router= useRouter()

    const contactSubmit = async () => {
        await axios.post('https://thejus-joseph.onrender.com/sendmail', { email, message, name }).then(res => {
            if (res.data === 'success') {
                notify();
                router.push('/')

            }
        }
        )
    };
    return (

        <div
            ref={ContactRef}
            className="flex flex-col md:flex-row items-center justify-center px-4 md:px-16 xl:px-40 gap-8 md:h-[100vh] " >

            <div className="w-full md:w-1/4 items-center justify-around  flex-col flex gap-8 ">
                <div >
                    <div className="text-3xl mb-2 text-center lg:text-left md:m-0 mt-16">Get in touch</div>
                    <div className="text-sm  text-center lg:text-left">feel free to talk</div>
                </div>
                <div>
                    <div className="lg:text-xl mb-4 text-lg text-center lg:text-left">thejus@fire.org.in</div>
                    <div className="lg:text-xl text-lg text-center lg:text-left">09177 400639</div>
                </div>
            </div>


            <div className="w-full md:w-3/4 flex items-center justify-center flex-col bg-blue-00">
                <div className="flex flex-col md:flex-row w-full p-10 gap-10">
                    <div className="w-full">
                        <div>Name</div>
                        <input
                            className="outline-none border-b w-full border-b-black mt-5 bg-[#f5f6f0]"
                            placeholder="Name"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="w-full">
                        <div>Email</div>
                        <input
                            className="outline-none border-b w-full border-b-black mt-5 bg-[#f5f6f0]"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className="w-full p-10 ">
                    <div>Message</div>
                    <input
                        className="outline-none border-b w-full border-b-black mt-5 bg-[#f5f6f0]"
                        placeholder="Message"
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <span
                    onClick={contactSubmit}
                    className="text-white  px-6 py-3 bg-[#fc9351] hover:opacity-50 cursor-pointer rounded-lg"
                >
                    submit
                </span>
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




    );
}
