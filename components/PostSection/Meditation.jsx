import React from 'react'

const Meditation = ({journeys}) => {

    


    // const journeys = [
    //   {
    //     id: 1,
    //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    //     subtitle: "Subtitle 1",
    //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    //     tag: "Tag 1",
    //     content: "Content 1here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of m",
    //     img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //   },
    //   {
    //     id: 2,
    //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    //     subtitle: "Subtitle 2",
    //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    //     tag: "Tag 2",
    //     content: "Content 2here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of m",
    //     img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //   },
    //   {
    //     id: 3,
    //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    //     subtitle: "Subtitle 3",
    //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    //     tag: "Tag 3",
    //     content: "Content 3here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of m",
    //     img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //   },
    //   {
    //     id: 4,
    //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    //     subtitle: "Subtitle 4",
    //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    //     tag: "Tag 4",
    //     content: "Content 4here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of m",
    //     img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //   },
    //   {
    //     id: 5,
    //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    //     subtitle: "Subtitle 5",
    //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    //     tag: "Tag 5",
    //     content: "Content 5here areion in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of m",
    //     img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //   },
    //   {
    //     id: 6,
    //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    //     subtitle: "Subtitle 6",
    //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    //     tag: "Tag 6",
    //     content: "Content 6 here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of m",
    //     img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //   },
    //   {
    //     id: 7,
    //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    //     subtitle: "Subtitle 7",
    //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    //     tag: "Tag 7",
    //     content: "Content 7 here aren the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of m",
    //     img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //   },
    //   {
    //     id: 8,
    //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    //     subtitle: "Subtitle 8",
    //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    //     tag: "Tag 8",
    //     content: "Content 8 here are m",
    //     img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //   },
    //   {
    //     id: 9,
    //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    //     subtitle: "Subtitle 9",
    //     desc: "Lorem, ipsum il cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    //     tag: "Tag 9",
    //     content: "Content 9here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of m",
    //     img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //   },
    //   {
    //     id: 10,
    //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    //     subtitle: "Subtitle 10",
    //     desc: "Lorem. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    //     tag: "Tag 10",
    //     content: "Content 10here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of m",
    //     img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //   },
    // ];

  return (
      <div className="flex flex-col justify-center items-center m-2">
          <div className=" font-semibold text-xl text-[#FF6D00] mb-16">
              More from me
          </div>
          <div className="flex flex-wrap gap-10 md:m-10 m-0 justify-center">
              {journeys?.map((journey, key) => {
                  return (
                      // style={{ width: "45vh" }}
                      <div key={key} className="bg-white sm:w-[55vh] w-[92%] flex flex-col items-center justify-beetween sm:min-h-[40vw] overflow-hidden">
                          {/* style={{ height: "30vh", width: "45vh" }} */}
                          <img
                              className="sm:w-full sm:h-[45vh] h-[60vw] w-[100%] object-fill"
                              src={journey.img}
                              alt={journey.title}
                          />

                          <div>
                              <div className="m-4">
                                  <div className="w-7 h-1 bg-[#FF6D00]"></div>
                                  <div className="text-xs py-2">{journey.tag}</div>
                              </div>
                              <div className="font-semibold py-2 px-4 text-base">
                                  {journey.title}
                              </div>
                              <div className="font-medium py-2 px-4 text-sm">
                                  {journey.subtitle}
                              </div>
                              <div className="text-xs px-4 py-2">
                                  {journey.date ? journey.date.slice(0, 10).replace(/-/g, "/") : <></>}
                              </div>
                              <div className="px-4 py-2 text-justify text-sm">
                                  {journey.content}
                              </div>
                          </div>
                      </div>
                  );
              })}


          </div>
      </div>
  )
}

export default Meditation
