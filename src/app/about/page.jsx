import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaGraduationCap, FaHeart, FaCss3Alt } from 'react-icons/fa'
import { SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiExpress, SiJavascript, SiHtml5, SiCss3, SiGit } from 'react-icons/si'
import { siteMetadata } from '@/lib/metadata'
import Image from 'next/image'

const skills = [
    { name: "HTML5", icon: <SiHtml5 className="text-orange-400" />, level: 85 },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" />, level: 80 },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, level: 75 },
    { name: "React.js", icon: <SiReact className="text-cyan-400" />, level: 70 },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" />, level: 60 },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-400" />, level: 55 },
    { name: "Express.js", icon: <SiExpress className="text-gray-400" />, level: 50 },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, level: 50 },
    { name: "Git", icon: <SiGit className="text-orange-500" />, level: 65 },
]

const education = [
    {
        degree: "MS in Applied Mathematics",
        institution: "University of Chittagong",
        year: "2022 — 2023",
        description: "Graduation Year : 2023",
    },
    {
        degree: "B.Sc (Honours) in Mathematics",
        institution: "University of Chittagong",
        year: "2018 — 2022",
        description: "Graduation Year : 2022",
    },
    {
        degree: "HSC — Science",
        institution: "Cantonment English School and College",
        year: "2015 — 2018",
        description: "Graduation Year : 2018",
    },
    {
        degree: "SSC — Science",
        institution: "Southpoint School and College",
        year: "2013 — 2015",
        description: "Graduation Year : 2015",
    },
]

const hobbies = [
    { emoji: "💻", label: "Coding" },
    { emoji: "🎮", label: "Gaming" },
    { emoji: "📚", label: "Reading" },
    { emoji: "🎵", label: "Music" },
    { emoji: "✈️", label: "Travelling" },
    { emoji: "🎨", label: "UI Design" },
]

export const metadata = {
    title: "About — Nuruddin Jewel",
    description: "Learn more about me, my skills and background.",
}

export default function AboutPage() {
    return (
        <div className="container mx-auto px-6 py-20 flex flex-col gap-20">

            {/* Bio Section */}
            <section className="grid lg:grid-cols-2 gap-12 items-center">

                {/* Avatar placeholder */}
                <div className="flex justify-center">
                    <div className="glass-card rounded-3xl p-2 w-72 h-72 flex items-center justify-center relative">
                        <div className="w-full h-full rounded-2xl bg-gradient-to-br from-purple-500/30 to-cyan-500/30 flex items-center justify-center">
                            {/* <span className="text-8xl">👨‍💻</span> */}
                            <Image
                                src="/images/jewel.png"
                                alt="Jewel"
                                width={280}
                                height={280}
                                className="rounded-2xl object-cover w-full h-full"
                                priority
                            />
                        </div>

                        {/* Decorative blobs */}
                        <div className="absolute -top-4 -right-4 w-16 h-16 bg-purple-500 rounded-full opacity-20 blur-xl" />
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-cyan-500 rounded-full opacity-20 blur-xl" />
                    </div>
                </div>

                {/* Bio text */}
                <div className="flex flex-col gap-6">
                    <div>
                        <p className="text-primary font-medium mb-2">About Me</p>
                        <h1 className="text-4xl font-bold">
                            Hi, I&apos;m{" "}
                            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                Nuruddin Jewel
                            </span>
                        </h1>
                    </div>

                    <p className="text-base-content/60 leading-relaxed">
                        I&apos;m a Applied Mathematician and passionate developer currently learning the MERN Stack.
                        I love building projects that solve real problems and have a clean, modern UI.
                    </p>
                    <p className="text-base-content/60 leading-relaxed">
                        My journey started with HTML & CSS, and now I&apos;m diving deep into
                        React, Next.js, Node.js, Express.js and MongoDB. Always learning, always building.
                    </p>

                    {/* Social links */}
                    <div className="flex gap-3">
                        <a href={siteMetadata.github} target="_blank" rel="noopener noreferrer"
                            className="btn btn-primary gap-2 rounded-xl">
                            <FaGithub size={16} /> GitHub
                        </a>
                        <a href={siteMetadata.linkedin} target="_blank" rel="noopener noreferrer"
                            className="glass-card btn btn-ghost gap-2 rounded-xl border-0">
                            <FaLinkedin size={16} /> LinkedIn
                        </a>
                        <a href={`mailto:${siteMetadata.email}`}
                            className="glass-card btn btn-ghost gap-2 rounded-xl border-0">
                            <FaEnvelope size={16} />
                        </a>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="flex flex-col gap-8">
                <div className="flex items-center gap-3">
                    <div className="glass-card p-3 rounded-2xl">
                        <FaCode className="text-purple-400 text-xl" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold">Skills & Tech Stack</h2>
                        {/* <p className="text-base-content/50">Currently learning & improving</p> */}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    {skills.map((skill) => (
                        <div key={skill.name} className="glass-card rounded-2xl p-4 flex flex-col gap-2">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="text-xl">{skill.icon}</span>
                                    <span className="font-medium">{skill.name}</span>
                                </div>
                                <span className="text-sm text-base-content/50">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-white/10 rounded-full h-2">
                                <div
                                    className="h-2 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400"
                                    style={{ width: `${skill.level}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Education Section */}
            <section className="flex flex-col gap-8">
                <div className="flex items-center gap-3">
                    <div className="glass-card p-3 rounded-2xl">
                        <FaGraduationCap className="text-cyan-400 text-xl" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold">Education</h2>
                        <p className="text-base-content/50">My academic background</p>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    {education.map((edu, index) => (
                        <div key={index} className="glass-card rounded-2xl p-6 flex gap-4">
                            {/* Timeline dot */}
                            <div className="flex flex-col items-center gap-2 pt-1">
                                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 shrink-0" />
                                {index < education.length - 1 && (
                                    <div className="w-0.5 h-full bg-white/10" />
                                )}
                            </div>
                            <div className="flex flex-col gap-1 flex-1">
                                <div className="flex flex-wrap items-start justify-between gap-2">
                                    <h3 className="font-bold text-lg">{edu.degree}</h3>
                                    <span className="badge badge-ghost badge-sm shrink-0">{edu.year}</span>
                                </div>
                                <p className="text-primary font-medium text-sm">{edu.institution}</p>
                                <p className="text-base-content/60 text-sm mt-1">{edu.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Hobbies Section */}
            <section className="flex flex-col gap-8">
                <div className="flex items-center gap-3">
                    <div className="glass-card p-3 rounded-2xl">
                        <FaHeart className="text-pink-400 text-xl" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold">Hobbies & Interests</h2>
                        {/* <p className="text-base-content/50">What I do outside of coding</p> */}
                    </div>
                </div>

                <div className="flex flex-wrap gap-4">
                    {hobbies.map((hobby) => (
                        <div
                            key={hobby.label}
                            className="glass-card px-6 py-4 rounded-2xl flex items-center gap-3
                         hover:scale-105 transition-transform cursor-default"
                        >
                            <span className="text-2xl">{hobby.emoji}</span>
                            <span className="font-medium">{hobby.label}</span>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    )
}