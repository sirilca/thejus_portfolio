'use client';



const scrolltoHash = (element_id) => {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}

export default scrolltoHash