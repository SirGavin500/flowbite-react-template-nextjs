"use client"

import { motion, useAnimationFrame } from "motion/react"
import { Button, Card } from "flowbite-react"
import Image from "next/image"
import { useRef } from "react"

export default function Home() {

  const cubeRef = useRef<HTMLDivElement>(null)

  useAnimationFrame((t) => {
    if (!cubeRef.current) return
    const rotate = Math.sin(t / 10000) * 200
    const y = (1 + Math.sin(t / 1000)) * -50
    cubeRef.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`
  })

  const projects = [
    {
      title: "Weather Tracker",
      description: "This is a web App I created modeled after another Dev's Figma",
      image: "/Assets/weathersprint.png",
      live: "https://gavinsbuildofsamsweatherapp.vercel.app/",
      code: "https://github.com/SirGavin500/WeatherTracker"
    },
    {
      title: "Rock Paper Scissor Lizard Spock",
      description: "As seen in the popular Sitcom 'Big Bang Theory' this game plays just like rock paper scissor shoot, just with extra steps.",
      image: "/Assets/rpsls2.png",
      live: "https://salmon-bay-0d4e1231e.6.azurestaticapps.net/",
      code: "https://github.com/SirGavin500/RPSLS"
    },
    {
      title: "Business Redesign",
      description: "We took our Local Juicy Burger and Designed a potential Website Design",
      image: "/Assets/juicyburger.png",
      live: "https://www.figma.com/design/suGysXzJXlHXSfJdaDeemy/Business-Redesign?node-id=0-1&t=P7Y79o8AbMO7ixxC-1",
      code: "https://github.com/SirGavin500/BusinessRedesign"
    }
  ]

  return (
    <main className="flex flex-col items-center bg-gray-950 text-white min-h-screen">

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center min-h-screen gap-6 px-6 relative">

        {/* Hero content */}
        <motion.div
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.6}}
          className="flex flex-col items-center gap-4 z-10"
        >

          <Image
            src="/Assets/IMG_5651.jpg"
            alt="profile"
            width={150}
            height={150}
            className="rounded-full border-4 border-orange-500"
          />

          <h1 className="text-5xl font-semibold">
            Gavin Tristan
          </h1>

          <p className="text-gray-400 max-w-xl">
            Junior Web Developer currently at CodeStack
          </p>

          <div className="flex gap-4">
            <Button href="#projects">
              View Projects
            </Button>

            <Button color="gray" href="#contact">
              Contact
            </Button>
          </div>

        </motion.div>

      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-5xl px-6 py-24">
        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.6}}
          viewport={{once:true}}
          className="flex flex-col gap-6"
        >
          <h2 className="text-3xl">About Me</h2>
          <p className="text-gray-400 leading-relaxed text-2xl">
            I'm a Junior Web Developer currently sharpening my skills at CodeStack Academy. My focus is on building modern, responsive web applications that don't just work—they feel intuitive to use. I'm happiest turning a complex design or rough idea into a functional, high-performance website using JavaScript, React, Next.js, and Tailwind CSS.
            <br /><br />
            I thrive on creating clean, scalable code that looks as good as it performs. Collaboration is key, and I love learning from other developers, refining components, and experimenting with new libraries. I'm constantly growing, building, and contributing to projects that make an impact.
          </p>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl px-6 py-24 w-full">
        <motion.div
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:0.6}}
          viewport={{once:true}}
          className="flex flex-col gap-12"
        >
          <h2 className="text-3xl">Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project,i)=>(
              <motion.div
                key={i}
                initial={{opacity:0,y:40}}
                whileInView={{opacity:1,y:0}}
                transition={{delay:i*0.2}}
                viewport={{once:true}}
              >
                <Card
                  imgSrc={project.image}
                  className="bg-gray-900 border-gray-800 hover:scale-105 transition"
                >
                  <h5 className="text-xl tracking-tight text-white">
                    {project.title}
                  </h5>
                  <p className="text-gray-400">
                    {project.description}
                  </p>
                  <div className="flex gap-2 mt-2">
                    <Button href={project.live} size="sm">
                      Website
                    </Button>
                    <Button color="gray" href={project.code} size="sm">
                      Code
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-6xl px-6 py-24 w-full">
        <motion.div
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:0.6}}
          viewport={{once:true}}
          className="flex flex-col gap-12 items-center"
        >
          <h2 className="text-3xl">Tech Stack</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-10 text-center text-gray-300">
            <div className="flex flex-col items-center gap-2 hover:scale-110 transition">
              <i className="devicon-javascript-plain text-5xl text-yellow-400"></i>
              <p>JavaScript</p>
            </div>
            <div className="flex flex-col items-center gap-2 hover:scale-110 transition">
              <i className="devicon-react-original text-5xl text-cyan-400"></i>
              <p>React</p>
            </div>
            <div className="flex flex-col items-center gap-2 hover:scale-110 transition">
              <i className="devicon-nextjs-line text-5xl"></i>
              <p>NextJS</p>
            </div>
            <div className="flex flex-col items-center gap-2 hover:scale-110 transition">
              <i className="devicon-tailwindcss-original text-5xl text-sky-400"></i>
              <p>Tailwind</p>
            </div>
            <div className="flex flex-col items-center gap-2 hover:scale-110 transition">
              <i className="devicon-nodejs-plain text-5xl text-green-500"></i>
              <p>NodeJS</p>
            </div>
            <div className="flex flex-col items-center gap-2 hover:scale-110 transition">
              <i className="devicon-csharp-plain text-5xl text-purple-400"></i>
              <p>C#</p>
            </div>
          </div>
        </motion.div>
      </section>

     <section id="contact" className="max-w-4xl px-6 py-24 text-center">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="flex flex-col gap-6 items-center"
  >
    <h2 className="text-3xl">Contact</h2>
    <p className="text-gray-400">
      If you'd like to work together or just say hi, feel free to reach out.
    </p>

    <div className="flex flex-col md:flex-row gap-4">
      {/* Email Button */}
      <a href="mailto:gtristan@codestack.co" target="_blank" rel="noopener noreferrer">
        <Button>Email Me</Button>
      </a>

      {/* GitHub Button */}
      <a href="https://github.com/SirGavin500" target="_blank" rel="noopener noreferrer">
        <Button color="gray">GitHub</Button>
      </a>

      {/* LinkedIn Button */}
      <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
        <Button color="blue">LinkedIn</Button>
      </a>
    </div>

    <p className="text-gray-400 mt-2">Phone: +1 (234) 567-890</p>
  </motion.div>
</section>

      {/* FOOTER */}
      <footer className="py-10 text-gray-500">
        © 2026 Gavin Tristan LLC
      </footer>

    </main>
  )
}