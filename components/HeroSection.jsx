
import { GoArrowUpRight } from "react-icons/go";
import FixedMailModal from "./FixedMailModal";
import Image from "next/image";


function HeroSection({ data }) {

    return (
        <div id='homeid'>
            {/* -----------------------remove if not wanted----------------------------------- */}
            <div className="relative w-[100%]  overflow-hidden sm:hidden">
                <Image width={200} height={96}  src="/IMAges/photo.png" alt="Your Image" className="w-full h-full object-cover rounded-lg" />
                <div className="absolute inset-x-0 top-0 bottom-0 bg-[#f5f6f0] opacity-50 mix-blend-multiply"></div>
            </div>
            {/* ------------------------------------------------------------------------------- */}
            <div  className="bg-[#f6f1f0] flex flex-col md:flex-row justify-center items-center relative text-black "
            >
                <div className="flex-1 md:p-6 p-0 md:ml-24 flex justify-center flex-col ml-5">
                    <div className="text-2xl md:p-0 py-5">Hi, I&apos;m </div>
                    <div className="text-7xl mt-5 uppercase font-semibold font-cinzel md:py-0 pb-6">
                        Thejus
                        <br />
                        Joseph
                    </div>
                    <div className="w-10/12  mt-3 md:text-start overflow-auto max-h-56 text-justify">
                        {data.description}
                        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum vel illo adipisci ratione vero, reprehenderit cumque mollitia accusantium illum amet facilis recusandae, impedit aut obcaecati voluptates aliquid. Deserunt, accusantium consequuntur. */}
                        </div>

                    <FixedMailModal />
                </div>
                <Image width={500} height={96}  className="hidden md:flex mt-10 md:mt-0 w-[50vw]"
                    src='/IMAges/photo.png'
                />
            </div>
        </div>

    );
}

export default HeroSection;
