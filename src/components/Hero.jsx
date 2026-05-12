import Link from 'next/link'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'
import { BsCodeSlash } from 'react-icons/bs'
import { siteMetadata } from '@/lib/metadata'

const techStack = [
    "HTML5", "CSS3", "JavaScript (ES6+)",
    "React.js", "Next.js", "Node.js",
    "Better-Auth", "Express.js", "MongoDB", "MERN Stack"
]

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

            {/* Background gradient blobs */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500 rounded-full opacity-20 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500 rounded-full opacity-20 blur-[120px]" />
                <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-pink-500 rounded-full opacity-10 blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">

                {/* Left — Text content */}
                <div className="flex flex-col gap-6">

                    {/* Badge */}
                    <div className="glass-card w-fit px-4 py-2 rounded-full flex items-center gap-2 border border-white/10 bg-white/5">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-sm font-medium text-white/80">Available for opportunities</span>
                    </div>

                    {/* Heading */}
                    <div>
                        {/* <h1 className="text-5xl lg:text-6xl font-bold leading-tight"> */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Hi, I&apos;m{" "}
                            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent whitespace-nowrap">
                                Nuruddin Jewel
                            </span>
                        </h1>
                        <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold mt-2 text-white/70">
                            Applied Mathematician & Web Developer
                        </h2>
                    </div>

                    {/* Description */}
                    <p className="text-white/60 text-lg leading-relaxed max-w-lg">
                        Learning the MERN Stack and building real-world projects.
                        Passionate about clean code and creative UI design.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4">
                        <Link
                            href="/projects"
                            className="btn btn-primary gap-2 rounded-xl flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 transition-all"
                        >
                            View Projects
                            <HiArrowRight size={16} />
                        </Link>
                        <Link
                            href="/contact"
                            className="btn btn-ghost gap-2 rounded-xl border border-white/10 hover:bg-white/5 flex items-center px-6 py-3"
                        >
                            Contact Me
                            <FaEnvelope size={16} />
                        </Link>
                    </div>

                    {/* Social links - FIXED HERE */}
                    <div className="flex gap-3 mt-2">
                        <a
                            href={siteMetadata.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-card btn btn-sm btn-circle border border-white/10 flex items-center justify-center p-2 hover:scale-110 transition-transform bg-white/5"
                        >
                            <FaGithub size={18} />
                        </a>

                        <a
                            href={siteMetadata.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-card btn btn-sm btn-circle border border-white/10 flex items-center justify-center p-2 hover:scale-110 transition-transform bg-white/5"
                        >
                            <FaLinkedin size={18} />
                        </a>

                        <a
                            href={`mailto:${siteMetadata.email}`}
                            className="glass-card btn btn-sm btn-circle border border-white/10 flex items-center justify-center p-2 hover:scale-110 transition-transform bg-white/5"
                        >
                            <FaEnvelope size={18} />
                        </a>
                    </div>
                </div>

                {/* Right — Glass card with tech stack */}
                <div className="glass-card rounded-3xl p-8 flex flex-col gap-6 border border-white/10 bg-white/5 backdrop-blur-md">

                    {/* Card header */}
                    <div className="flex items-center gap-3">
                        <div className="glass-card p-3 rounded-2xl bg-white/10">
                            <BsCodeSlash size={24} className="text-purple-400" />
                        </div>
                        <div>
                            <p className="font-bold text-lg">Tech Stack</p>
                            {/* <p className="text-sm text-white/50">Currently Learning</p> */}
                        </div>
                    </div>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-2">
                        {techStack.map((tech) => (
                            <span
                                key={tech}
                                className="glass-card px-3 py-1.5 rounded-full text-sm font-medium border border-white/10 bg-white/5 hover:scale-105 transition-transform cursor-default"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Progress bars */}
                    <div className="flex flex-col gap-3 mt-2">
                        <div>
                            <div className="flex justify-between text-sm mb-1">
                                <span>Frontend</span>
                                <span className="text-white/50">75%</span>
                            </div>
                            <progress className="progress progress-primary w-full h-2 rounded-lg overflow-hidden" value="75" max="100" />
                        </div>
                        <div>
                            <div className="flex justify-between text-sm mb-1">
                                <span>Backend</span>
                                <span className="text-white/50">50%</span>
                            </div>
                            <progress className="progress progress-secondary w-full h-2 rounded-lg overflow-hidden" value="50" max="100" />
                        </div>
                        <div>
                            <div className="flex justify-between text-sm mb-1">
                                <span>Full Stack Projects</span>
                                <span className="text-white/50">40%</span>
                            </div>
                            <progress className="progress progress-accent w-full h-2 rounded-lg overflow-hidden" value="40" max="100" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}