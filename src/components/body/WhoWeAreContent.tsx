"use client"

// Ensure this is a client component
import Link from "next/link"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

const technologies = [
  {
    name: "NextJS",
    logo: "/images/assets/stack-logos/nextjs-icon.svg",
  },
  {
    name: "JavaScript",
    logo: "/images/assets/stack-logos/javascript-icon.svg",
  },
  { name: "NodeJS", logo: "/images/assets/stack-logos/nodejs-icon.svg" },
  { name: "ReactJS", logo: "/images/assets/stack-logos/reactjs-icon.svg" },
  { name: "ExpressJS", logo: "/images/assets/stack-logos/expressjs-icon.svg" },
  { name: "MongoDB", logo: "/images/assets/stack-logos/mongodb-icon.svg" },
  { name: "MariaDB", logo: "/images/assets/stack-logos/mariadb-icon.svg" },
  {
    name: "TailwindCSS",
    logo: "/images/assets/stack-logos/tailwindcss-icon.svg",
  },
  {
    name: "Google Cloud",
    logo: "/images/assets/stack-logos/googlecloud-icon.svg",
  },
  { name: "Git", logo: "/images/assets/stack-logos/git-icon.svg" },
  {
    name: "Cloudflare",
    logo: "/images/assets/stack-logos/cloudflare-icon.svg",
  },
  { name: "AWS", logo: "/images/assets/stack-logos/aws-icon.svg" },
]

const WhoWeAreContent = () => {
  const duplicatedTechnologies = [...technologies, ...technologies]

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  }

  const itemVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    hover: { scale: 1.05, zIndex: 1 },
  }

  return (
    <>
      <div className="mb-[3.5rem] mt-[5rem] flex flex-col items-center">
        <h1 className="text-[50px]">Who We Are</h1>
      </div>

      {/* Body */}
      <div className="container mx-auto px-4 pb-16 sm:px-6 lg:px-8">
        {/* Our Mission */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 }}
        >
          <h2 className="mb-6 text-2xl font-semibold">Our Mission</h2>
          <p className="text-md mb-6 text-slate-300">
            At Player Bay, we see ourselves not just as a business, but as two
            people on a shared journey of growth, learning, and transformation.
            Our mission is to empower creators, businesses, and innovators with
            tools that not only solve problems but spark change.
          </p>
          <p className="text-md mb-6 text-slate-300">
            For us, Player Bay is as much about our own journey as it is about
            the people we help along the way. Every challenge we’ve tackled—from
            our early anti-piracy systems to exploring AI, machine learning, and
            beyond—has shaped who we are and what we aim to achieve.
          </p>
          <p className="text-md mb-6 text-slate-300">
            This isn’t just business for us; it’s personal. We’re committed to
            staying at the forefront of technology, learning every step of the
            way, and sharing that knowledge to create a better, more connected
            world.
          </p>
        </motion.section>

        {/* Charles Knapp Section with Animation */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.1 }}
        >
          <h2 className="mb-6 text-2xl font-semibold">Charles Knapp</h2>
          <div className="flex flex-col items-center md:flex-row md:items-start">
            <img
              src="/images/authors/charles_k_author.jpg"
              alt="Charles Knapp"
              className="mb-6 h-40 w-40 rounded-md md:mb-0 md:mr-6"
            />
            <div>
              {" "}
              <p className="text-md mb-4 text-slate-300">
                {" "}
                Charles Knapp has built a reputation for his deep expertise in
                security. Growing up as a forum-kid, Charles was actively
                engaged in communities like HackForums, Se7enSins,
                AndroidRepublic, and Reddit, where he honed his skills in
                breaking boundaries—ethically, of course. He thrived in
                dissecting systems, from DNS DDoS mitigation to anti-piracy
                control, always pushing the limits of what’s possible.{" "}
              </p>{" "}
              <p className="text-md mb-4 text-slate-300">
                {" "}
                Charles’ journey into cybersecurity was fueled by his passion
                for solving complex problems. From protecting content creators
                against piracy to working on encryption techniques and code
                ciphers, he’s dedicated to ensuring a secure and scalable
                digital landscape. His expertise spans a wide range of
                technologies, including MERN stack (MongoDB, ExpressJS, ReactJS,
                NodeJS), TailwindCSS, Radix UI, MariaDB, and various cloud
                services.{" "}
              </p>{" "}
              <p className="text-md text-slate-300">
                {" "}
                Today, Charles leads the charge in DNS security and advanced
                anti-piracy measures. His unique blend of technical skills and a
                hacker’s curiosity continues to shape the future of digital
                protection, as he helps businesses secure their systems and
                break free from the ordinary.{" "}
              </p>{" "}
            </div>
          </div>
        </motion.section>

        {/* Dylan Safra Section with Animation */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.1 }}
        >
          <h2 className="mb-6 text-2xl font-semibold">Dylan Safra</h2>
          <div className="flex flex-col items-center md:flex-row md:items-start">
            <img
              src="/images/authors/dylan_s_author.jpg"
              alt="Dylan Safra"
              className="mb-6 h-40 w-40 rounded-md md:mb-0 md:mr-6"
            />
            <div>
              <p className="text-md mb-4 text-slate-300">
                Dylan has a strong foundation in the MERN stack (MongoDB,
                ExpressJS, ReactJS, NodeJS), but he extends his expertise into
                the realm of data-driven decision-making and digital campaigns.
              </p>
              <p className="text-md mb-4 text-slate-300">
                Dylan’s passion for understanding user behavior and optimizing
                digital experiences drives his work in the areas of automation,
                SEO, and digital rights management. Whether he’s developing
                software or creating analytics strategies, Dylan remains deeply
                involved in both the technical and strategic aspects, ensuring
                that every solution is efficient, scalable, and impactful.
              </p>
              <p className="text-md text-slate-300">
                Today, Dylan works to empower businesses with data-driven
                strategies while staying at the forefront of cloud technology
                and AI advancements. His comprehensive approach ensures that
                each solution is as innovative as it is practical, making a
                significant impact across both the tech and marketing
                landscapes.
              </p>
            </div>
          </div>
        </motion.section>
      </div>

      <div>
        {/* Tech Stack Section */}
        <div className="mx-auto my-12 md:max-w-[80%]">
          <motion.section
            className="mb-20 flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ staggerChildren: 0.15, delayChildren: 0.1 }}
          >
            <h2 className="mb-6 text-2xl font-semibold">
              Our Primary Tech Stack
            </h2>
            <p className="text-md mb-6 max-w-2xl text-center text-slate-300">
              Charles and Dylan are proficient in a broad range of technologies
              that we regularly work with customers on, especially the MERN
              stack and modern frontend frameworks. We also have expertise in
              lower-level OOP languages like C++ and Python, ensuring
              flexibility and depth in the solutions we deliver.
            </p>

            {/* Infinite Carousel - hidden on mobile */}
            <div className="relative my-12 hidden w-full select-none overflow-hidden md:block">
              {/* Fade effect on edges */}
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

              <motion.div
                className="flex w-[200%] space-x-8"
                initial={{ x: 0 }}
                animate={{ x: "-50%" }} // Move only half to cover full loop
                transition={{
                  repeat: Infinity,
                  duration: 20,
                  ease: "linear",
                }}
              >
                {duplicatedTechnologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-shrink-0 flex-col items-center justify-center space-y-2 text-center"
                    style={{ width: "10%" }} // Ensure even spacing
                  >
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="h-16 w-16"
                    />
                    <span className="text-lg font-medium text-slate-200">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Mobile Grid */}
            <motion.div className="grid grid-cols-2 gap-4 md:hidden">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center space-y-2 text-center"
                >
                  <img src={tech.logo} alt={tech.name} className="h-16 w-16" />
                  <span className="text-lg font-medium text-slate-200">
                    {tech.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.section>
        </div>
      </div>
    </>
  )
}

export default WhoWeAreContent
