import React from "react"
import { CgWorkAlt } from "react-icons/cg"
import { FaReact } from "react-icons/fa"
import { LuGraduationCap } from "react-icons/lu"
import jomlaImg from "@/public/fijomla.png"
import toolsImg from "@/public/tools.png"
import soonImg from "@/public/soon.jpg"

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const

export const experiencesData = [
    {
        title: "Graduated bootcamp",
        location: "Miami, FL",
        description:
            "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
        icon: React.createElement(LuGraduationCap),
        date: "2019",
    },
    {
        title: "Front-End Developer",
        location: "Orlando, FL",
        description:
            "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
        icon: React.createElement(CgWorkAlt),
        date: "2019 - 2021",
    },
    {
        title: "Full-Stack Developer",
        location: "Houston, TX",
        description:
            "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "2021 - present",
    },
] as const

export const projectsData = [
    {
        title: "Tools for Noobs",
        description:
            "A swiss knife toolset designed for many easy-to-hard use cases.",
        tags: ["React", "Next.js", "Prisma", "Tailwind", "React Query"],
        imageUrl: toolsImg,
        url: "https://toolsfornoobs.com",
    },
    {
        title: "FiJomla",
        description:
            "A web app that servers as a large collection of exemplary sentences of words to help students, new learners, and authors explore plethora of usages of a specific word.",
        tags: ["React", "Next.js", "Prisma", "Tailwind", "MySQL"],
        imageUrl: jomlaImg,
        url: "https://fijomla.com",
    },
    {
        title: "Almas",
        description:
            "A clinic management software designed for every health clinic in the world.",
        tags: [
            "React",
            "Next.js",
            "MongoDB",
            "Tailwind",
            "Expo",
            "React Native",
            "PWA",
        ],
        imageUrl: soonImg,
        url: "https://almas-clinics.com",
    },
] as const

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Stripe",
    "Shopify",
    "Bootstrap",
    "DaisyUI",
    "ShadcnUI",
    "Node.js",
    "Git",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Redux",
    "Express",
    "Fetch",
    "Axios",
    "React Query",
    "PostgreSQL",
    "Framer Motion",
] as const
