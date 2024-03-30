"use client"

import React from "react"
import { SectionHeading, Project } from "@/components"
import { projectsData } from "@/lib/data"
import { useSectionInView } from "@/lib/hooks"
import Link from "next/link"

const Projects = () => {
    const { ref } = useSectionInView("Projects", 0.5)

    return (
        <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
            <SectionHeading>Recent projects</SectionHeading>
            <div>
                {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    )
}

export default Projects
