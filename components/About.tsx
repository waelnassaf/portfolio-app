"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components"
import { useSectionInView } from "@/lib/hooks"

const About = () => {
    const { ref } = useSectionInView("About")

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                In <span className="font-medium">2016</span>, I had a lot of
                free time and I decided to learn a profession that&apos;ll prove
                both enjoyable and profitable for me. I started out learning the
                regular beginner stack{" "}
                <span className="font-medium">HTML, CSS, JavaScript</span>, and{" "}
                <span className="font-medium">PHP w/ MySQL</span>. I worked on
                many online projects using this stack along with other
                complimentary technologies like{" "}
                <span className="font-medium">Bootstrap</span>,{" "}
                <span className="font-medium">jQuery</span>, etc.
            </p>

            <p className="mb-3">
                In <span className="font-medium">2020</span>, I discovered the
                power of JavaScript being an all-timer, that if I focus on it,
                I&apos;ll be able to create not just websites, but apps running
                on all platforms and devices. Since then, I, daily, perfected my
                knowledge of this future-proof language and settled on the main
                stack that I am currently building powerful apps with. Which is{" "}
                <span className="font-medium">Next.js</span>,{" "}
                <span className="font-medium">TypeScript</span>,{" "}
                <span className="font-medium">TailwindCSS + DaisyUI</span>, and{" "}
                <span className="font-medium">Prisma</span> with{" "}
                <span className="font-medium">MongoDB</span> or{" "}
                <span className="font-medium">MySQL</span>.
            </p>
            <p className="mb-3">
                When I am not programming, I enjoy being outside, visiting new
                places, meeting new people, etc. I also love reading books,
                especially in the <span className="font-medium">history</span>{" "}
                and <span className="font-medium">psychology</span> genre.
            </p>
        </motion.section>
    )
}

export default About
