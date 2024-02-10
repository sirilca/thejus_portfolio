'use client'
import Link from "next/link";
import {
    AiFillFacebook,
    AiFillInstagram,
    AiFillLinkedin,
    AiFillTwitterSquare,
} from "react-icons/ai";

function FooterSection({ scroll }) {

    return (
        <div

            className="bg-black flex flex-col md:flex-row  justify-around items-center p-4"
        >
            <div className="text-center md:text-left mb-12 md:mb-0">
                <div className="font-cinzel font-semibold text-5xl text-white mb-8 md:mb-0">
                    THEJUS
                    <br />
                    JOSEPH
                </div>
                <div className="text-xs my-3 text-white">
                    <span>Privacy</span> | <span>Terms of Service</span> | Do not sell my
                    info
                </div>
                <div className="text-xs text-white">Copyright © 2023 - TJ</div>
            </div>
            <div className="flex gap-8 text-white text-xs justify-center mb-4 md:mb-0">
                <Link href='/home'  className="text-white font-outfit hover:text-red-900 cursor-pointer" onClick={()=>{scroll('homeid')}} >
                        Home
                    </Link>
                    <Link href='/home'  className="text-white font-outfit hover:text-red-900 cursor-pointer" onClick={() => { scroll('meditationid') }}>
                        Meditations
                    </Link>
                    <Link href='/home' className="text-white font-outfit hover:text-red-100 cursor-pointer" onClick={() => { scroll('activityid') }}>
                        Activities
                    </Link>
                    <Link href='/about' className="text-white font-outfit hover:text-red-100 cursor-pointer">
                        About
                    </Link>
            </div>
            <div className="text-center md:text-left">
                <div className="font-medium text-white my-5 cursor-pointer" ><Link href='/contact'>Contact</Link></div>
                <div className="font-light text-white my-3"><a href="mailto:thejus@fiire.org.in" target="_blank" rel="noopener noreferrer">
                    thejus@fiire.org.in</a>
                </div>
                <div className="flex gap-3 justify-center md:justify-start">
                    <a href="https://www.linkedin.com/in/thejusjoseph/" target="_blank">
                        <AiFillLinkedin size={20} color="white" />
                    </a>
                    <a href="https://twitter.com/thejus_joseph" target="_blank">
                        <AiFillFacebook size={20} color="white" />
                    </a>
                    <a href="https://twitter.com/thejus_joseph" target="_blank">
                        <AiFillTwitterSquare size={20} color="white" />
                    </a>
                    <a href="https://www.instagram.com/thejus_joseph_/" target="_blank">
                        <AiFillInstagram size={20} color="white" />
                    </a>
                </div>
            </div>
        </div>




    );
}

export default FooterSection;
