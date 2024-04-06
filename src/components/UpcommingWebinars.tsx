"use client"
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

const UpcommingWebinars = () => {
  const featuredWebinar = [
    {
      title: "Understanding the concept of nextJS",
      description: "Next.js enhances React with server-side rendering, optimizing web apps for performance and SEO",
      slug: "Understanding-the-programming",
      isFeatured: true
    },
    {
      title: "Understanding the concept of ReactJS",
      description: "React.js is a JavaScript library for building user interfaces, known for its component-based architecture and virtual DOM.",
      slug: "Understanding-the-programming",
      isFeatured: true
    },
    {
      title: "Understanding the concept of Javascript",
      description: "JavaScript is a versatile scripting language used for web development, enabling dynamic interactions and client-side functionality.",
      slug: "Understanding-the-programming",
      isFeatured: true
    },
    {
      title: "Understanding the concept of CSS",
      description: "CSS styles web content, controlling layout, presentation, and appearance for enhanced visual design and user experience.",
      slug: "Understanding-the-programming",
      isFeatured: true
    },
    {
      title: "Understanding the concept of Tailwind css",
      description: "Tailwind CSS streamlines web development with utility-first classes for rapid and customizable styling.",
      slug: "Understanding-the-programming",
      isFeatured: true
    },
    {
      title: "Understanding the concept of HTML",
      description: "HTML structures web content with markup elements defining layout, text, media, and interactivity.",
      slug: "Understanding-the-programming",
      isFeatured: true
    },
    
  ]
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Coding Journey</p>
        </div>

        <div className="mt-10">
        <HoverEffect items={featuredWebinar.map(webinar =>(
          {
            title: webinar.title,
            description: webinar.description,
            link: "/"
          }
        ))}/>
        </div>

        <div className="mt-10 text-center">
            <Link href={"/"} className="px-4 py-2 rounded-md border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
                View All Webinar
            </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcommingWebinars
