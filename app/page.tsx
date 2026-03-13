"use client"

import { motion, useAnimationFrame } from "motion/react"
import { Button, Card } from "flowbite-react"
import Image from "next/image"

export default function Home() {


  

  const projects = [
    {
      title: "Weather Tracker",
      description: "This is a web App I created modeled after another Dev's Figma",
      image: "/Assets/weathersprint.png",
      live: "https://gavinsbuildofsamsweatherapp.vercel.app/",
      code: "https://github.com/SirGavin500/WeatherFigmaBuild"
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
    <main className="flex flex-col items-center bg-gray-950 text-white">

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center py-16 sm:py-20 md:py-24 gap-4 sm:gap-6 md:gap-8 px-6 sm:px-8 md:px-12 relative">

        <motion.div
          initial={{opacity:0,y:20}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.6}}
          className="flex flex-col items-center gap-3 sm:gap-4 z-10"
        >

          <Image
            src="/Assets/IMG_5651.jpg"
            alt="profile"
            width={150}
            height={150}
            className="rounded-full border-4 border-orange-500 w-36 sm:w-40 md:w-48"
          />

          <h1 className="text-4xl sm:text-5xl font-semibold">
            Gavin Tristan
          </h1>

          <p className="text-gray-400 max-w-xl text-base sm:text-lg md:text-xl">
            Junior Web Developer currently at CodeStack
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href="#projects">
              <Button>View Projects</Button>
            </a>
            <a href="#contact">
              <Button color="gray">Contact</Button>
            </a>
          </div>

        </motion.div>

      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-5xl px-6 sm:px-8 md:px-12 py-12 sm:py-16 md:py-20">
        <motion.div
          initial={{opacity:0,y:20}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.6}}
          viewport={{once:true}}
          className="flex flex-col gap-4 sm:gap-6"
        >
          <h2 className="text-3xl">About Me</h2>
          <p className="text-gray-400 leading-relaxed text-base sm:text-lg md:text-xl">
            I'm a Junior Web Developer currently sharpening my skills at CodeStack Academy. My focus is on building modern, responsive web applications that don't just work—they feel intuitive to use. I'm happiest turning a complex design or rough idea into a functional, high-performance website using JavaScript, React, Next.js, and Tailwind CSS.
            <br /><br />
            I thrive on creating clean, scalable code that looks as good as it performs. Collaboration is key, and I love learning from other developers, refining components, and experimenting with new libraries. I'm constantly growing, building, and contributing to projects that make an impact.
          </p>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl px-6 sm:px-8 md:px-12 py-12 sm:py-16 md:py-20 w-full">
        <motion.div
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:0.6}}
          viewport={{once:true}}
          className="flex flex-col gap-8 sm:gap-10 md:gap-12"
        >
          <h2 className="text-3xl">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {projects.map((project,i)=>(
              <motion.div
                key={i}
                initial={{opacity:0,y:20}}
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
                  <div className="flex gap-2 mt-2 flex-wrap">
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <Button size="sm">Website</Button>
                    </a>
                    <a href={project.code} target="_blank" rel="noopener noreferrer">
                      <Button color="gray" size="sm">Code</Button>
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-6xl px-6 sm:px-8 md:px-12 py-12 sm:py-16 md:py-20 w-full">
        <motion.div
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:0.6}}
          viewport={{once:true}}
          className="flex flex-col gap-8 sm:gap-10 md:gap-12 items-center"
        >
          <h2 className="text-3xl">Tech Stack</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 sm:gap-8 md:gap-10 text-center text-gray-300">
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

      {/* CONTACT */}
      <section id="contact" className="max-w-4xl px-6 sm:px-8 md:px-12 py-12 sm:py-16 md:py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 sm:gap-6 items-center"
        >
          <h2 className="text-3xl">Contact</h2>
          <p className="text-gray-400 text-base sm:text-lg">
            If you'd like to work together or just say hi, feel free to reach out.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 flex-wrap justify-center">
            <a href="mailto:gtristan@codestack.co" target="_blank" rel="noopener noreferrer">
              <Button>Email Me</Button>
            </a>
            <a href="https://github.com/SirGavin500" target="_blank" rel="noopener noreferrer">
              <Button color="gray">GitHub</Button>
            </a>
            <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
              <Button color="blue">LinkedIn</Button>
            </a>
          </div>
          <p className="text-gray-400 mt-2 text-sm sm:text-base">Phone: +1 (234) 567-890</p>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 sm:py-8 md:py-10 text-gray-500 text-sm sm:text-base">
        © 2026 Gavin Tristan LLC
      </footer>

    </main>
  )
}