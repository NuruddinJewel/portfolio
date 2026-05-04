import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa'
import { getProjectBySlug, projects } from '@/lib/projects'
import Image from 'next/image'

// Static params generation for SSG
export function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }))
}

// Metadata generation - for async params
export async function generateMetadata({ params }) {
    const { slug } = await params; // Destructure and await params
    const project = getProjectBySlug(slug)

    if (!project) return { title: 'Project Not Found' }

    return {
        title: `${project.title} — Nuruddin Jewel`,
        description: project.description,
    }
}

export default async function ProjectDetailPage({ params }) {
    const { slug } = await params; // Await params in App Router
    const project = getProjectBySlug(slug)

    if (!project) notFound()

    return (
        <div className="container mx-auto px-6 py-20 max-w-4xl flex flex-col gap-10">

            {/* Back button */}
            <Link
                href="/projects"
                className="glass-card btn btn-ghost btn-sm gap-2 w-fit rounded-xl border border-white/10 flex items-center"
            >
                <FaArrowLeft size={14} />
                Back to Projects
            </Link>

            {/* Hero image placeholder or actual image */}
            {/* <div className="glass-card rounded-3xl overflow-hidden w-full h-64 lg:h-80
                      bg-gradient-to-br from-purple-500/20 to-cyan-500/20
                      flex items-center justify-center border border-white/10 shadow-2xl">
                <span className="text-6xl opacity-30">💻</span>
            </div> */}
            <div className="glass-card rounded-3xl overflow-hidden w-full h-64 lg:h-80
                bg-gradient-to-br from-purple-500/20 to-cyan-500/20
                relative border border-white/10 shadow-2xl">
                {project.image ? (
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 60vw"
                        className="object-cover"
                        priority
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <span className="text-6xl opacity-30">💻</span>
                    </div>
                )}
            </div>

            {/* Title & links - FIXED LINKS HERE */}
            <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex flex-col gap-2">
                    {project.featured && (
                        <span className="badge badge-primary badge-sm w-fit">Featured</span>
                    )}
                    <h1 className="text-4xl font-bold text-white">{project.title}</h1>
                </div>

                <div className="flex gap-3">
                    {/* GitHub Link - Fixed Opening Tag */}
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-ghost gap-2 rounded-xl glass-card border border-white/10 hover:bg-white/10 flex items-center px-4 py-2"
                    >
                        <FaGithub size={16} />
                        Code
                    </a>

                    {/* Live Demo Link - Fixed Opening Tag */}
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary gap-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white flex items-center px-4 py-2"
                    >
                        <FaExternalLinkAlt size={14} />
                        Live Demo
                    </a>
                </div>
            </div>

            {/* Description */}
            <div className="glass-card rounded-2xl p-8 flex flex-col gap-4 border border-white/10 bg-white/5 backdrop-blur-md">
                <h2 className="text-xl font-bold text-purple-400">About this project</h2>
                <p className="text-white/70 leading-relaxed text-lg">
                    {project.description}
                </p>
            </div>

            {/* Tech stack */}
            <div className="glass-card rounded-2xl p-8 flex flex-col gap-4 border border-white/10 bg-white/5">
                <h2 className="text-xl font-bold text-cyan-400">Tech Stack</h2>
                <div className="flex flex-wrap gap-3">
                    {project.tags?.map((tag) => (
                        <span
                            key={tag}
                            className="glass-card px-4 py-2 rounded-full font-medium border border-white/10 bg-white/10
                         hover:scale-105 transition-transform cursor-default text-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* What I learned */}
            <div className="glass-card rounded-2xl p-8 flex flex-col gap-4 border border-white/10 bg-white/5">
                <h2 className="text-xl font-bold text-pink-400">What I Learned</h2>
                <p className="text-white/60 leading-relaxed">
                    Building this project helped me understand how to structure a full-stack
                    application, manage state effectively, and deploy to production.
                    Every project teaches something new — this one was no exception.
                </p>
            </div>

            {/* More projects */}
            <div className="text-center flex flex-col gap-4 pt-4">
                <p className="text-white/40">Want to see more?</p>
                <Link href="/projects" className="btn btn-primary rounded-xl mx-auto px-8 bg-purple-600 hover:bg-purple-700 border-none">
                    View All Projects
                </Link>
            </div>

        </div>
    )
}