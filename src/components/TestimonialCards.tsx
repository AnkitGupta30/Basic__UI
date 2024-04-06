"use client"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicTestimonialCard = [
    {
        quote: "Next.js, a React framework, empowers developers with server-side rendering, efficient client-side navigation, and scalability, facilitating robust and dynamic web applications.",
        name: "Ankit Gupta",
        title: "Software engineer"
    },
    {
        quote: "React.js, a JavaScript library, facilitates building dynamic user interfaces through reusable components, efficient rendering, and managing complex state seamlessly.",
        name: "Ankit Gupta",
        title: "Software engineer"
    },
    {
        quote: "Node.js is a runtime environment that executes JavaScript code server-side, enabling scalable and high-performance applications through asynchronous, event-driven architecture",
        name: "Ankit Gupta",
        title: "Software engineer"
    },
    {
        quote: "Express.js is a minimalist and flexible Node.js web application framework that provides robust features for building web and mobile applications.",
        name: "Ankit Gupta",
        title: "Software engineer"
    },
    {
        quote: "CSS, or Cascading Style Sheets, is a style sheet language used to define the presentation and layout of HTML documents on the web.",
        name: "Ankit Gupta",
        title: "Software engineer"
    },
]

const TestimonialCards = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">"Software Engineer: Crafting Digital Solutions for Tomorrow's World"</h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
        <InfiniteMovingCards
        items={musicTestimonialCard}
        direction="right"
        speed="slow"
      />
        </div>
      </div>
    </div>
  )
}

export default TestimonialCards
