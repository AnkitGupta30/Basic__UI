"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
  {
    title: "Frontend Engineer",
    description:
    "Frontend engineers leverage Next.js, a React framework, to create dynamic and efficient web applications. Next.js simplifies server-side rendering and client-side navigation, enhancing development speed and scalability",
      
  },
  {
    title: "Backend Engineer",
    description:
      "Backend engineers specialize in developing server-side logic and database architecture to support web applications. They ensure seamless data processing, security, and scalability, often using frameworks like Node.js, Django, or Flask."
      
  },
  {
    title: "DevOps Engineer",
    description:
      "Bridges the gap between development and operations, responsible for automating deployment processes, maintaining infrastructure, and ensuring the scalability and reliability of software systems..",
    
  },
  {
    title: "Data Engineer",
    description:
      " Deals with the storage, processing, and analysis of data, designing and maintaining data pipelines, databases, and data warehouses using technologies like SQL, NoSQL, and big data frameworks.",
    
  },
];
const ChooseUs = () => {
  return (
    <div className="">
      <StickyScroll content={musicSchoolContent} />
    </div>
  )
}

export default ChooseUs
