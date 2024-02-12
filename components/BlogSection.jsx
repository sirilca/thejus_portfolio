
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

function BlogSection({ data }) {

    // const data = [
    //     {
    //         title: 'Understanding Artificial Intelligence',
    //         subtitle: 'Demystifying AI for beginners',
    //         img: 'http://res.cloudinary.com/dqvoeibjd/image/upload/v1707219818/emtnkmw57ai2vebh6jdq.png',
    //         content: 'Artificial Intelligence (AI) is a rapidly evolving field with applications in various industries.',
    //         date: '2024-02-01T18:30:00.000Z',
    //         tag: 'AI',
    //         _id: '65c61d44c3507433bc990660'
    //     },
    //     {
    //         title: 'The Future of Chatbots',
    //         subtitle: 'Chatbots: Revolutionizing customer service',
    //         img: 'http://res.cloudinary.com/dqvoeibjd/image/upload/v1706938096/nh5j2n3zamtpxckq2jc2.png',
    //         content: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti impedit ad ipsam laboriosam odit aperiam magnam ab quod quas placeat possimus ut exercitationem at beatae unde eveniet, corporis nemo ea?um quas sequi deleniti id vero harum vitae sunt! Repellendus eveniet aspernatur vero dolore expedita, quo a alias consequuntur veniam possimus, hic, corrupti labore maiores qui nam tenetur libero iure?Nesciunt eligendi repellat voluptatibus pariatur magni, sapiente placeat laboriosam excepturi ipsam illum architecto vel incidunt omnis animi soluta explicabo odio vero, sit quibusdam eaque, consequatur iste perferendis amet.Quod, sit.Consequatur, voluptas officiis fugiat quia ipsum nisi accusantium nobis unde quis praesentium voluptatem sunt obcaecati deleniti quidem! Consequuntur modi aliquam ullam vero error numquam quaerat voluptate inventore ut.Distinctio, quod.  Cumque cupiditate quaerat voluptates recusandae, et commodi molestiae obcaecati consectetur error placeat odio at culpa consequatur sunt distinctio laudantium ullam facere vero.Repellendus, temporibus.Eveniet consectetur perferendis possimus saepe harum!.',
    //         date: '2024-02-27T18:30:00.000Z',
    //         tag: 'chatbots',
    //         _id: '65c61d44c3507433bc990661'
    //     }
    // ]


    return (
        <div  id='meditationid' className=" my-[20vw] lg:m-0 md:my-[10vw] bg-red-00">


            <div className="flex lg:justify-center items-start justify-start text-4xl lg:text-3xl lg:m-0 m-8 ">
                Meditations
            </div>
           

            {data?.map((items, key) => {
                return (

                    <div key={key} className="flex flex-col md:flex-row  lg:justify-between items-center justify-center  sm:m-10  bg-[#f5f6f0]  sm:px-16 lg:px-2 md:px-0  lg:mt-20 xl:mx-40
               m-8">

                        {/* style={{ width: "100%", sm: "80vh", lg: "100vh", height: "50vh" }} */}
                        <div
                            className=" lg:w-[85vh] lg:h-[35vh] md:w-[90vh] md:h-[40vh] w-[99%] h-[28vh]  md: mb-4 lg:mb-0  flex:none overflow-hidden"
                        >


                            <img
                                className="w-full h-full  object-cover object-center rounded-xl"
                                src={items.img}
                                alt=""
                            />
                        </div>

                      
                        <div className="flex items-center justify-start w-full">
                            <div className="py-4 sm:p-10">
                                <div className="mx-4">
                                    {items.tag}
                                    <div className="w-6 h-0.5 bg-[#FF6D00]"></div>
                                    <div className="text-sm py-1"></div>
                                </div>
                                <div className="font-semibold px-4 md:py-0 py-4 text-xl">
                                    {items.title}
                                </div>
                                <div className="text-sm px-4 md:py-1 py-4">
                                    {new Date(items.date)
                                        .toJSON()
                                        .slice(0, 10)
                                        .replace(/-/g, "/")}
                                </div>
                                <div className="px-4 py-2 text-justify text-clip">
                                    {items.content.length > 500
                                        ? items.content.slice(0, 500) + "..."
                                        : items.content}
                                </div>
                                <div className="px-4 py-2 text-[#fc9351] text-sm flex items-center gap-2 cursor-pointer"         >
                                    <Link href='/post'>Read More</Link>
                                    <GoArrowRight />
                                </div>
                            </div>
                        </div>
                    </div>

                );
            })}


            <div className="items-center flex md:m-2">
                <span className="text-white m-auto px-6 py-3 bg-[#fc9351] rounded-lg cursor-pointer"
                ><Link href='/post'>Read More</Link>

                </span>
            </div>
        </div>


    );
}

export default BlogSection;
