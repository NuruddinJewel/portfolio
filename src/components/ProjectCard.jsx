import Link from 'next/link'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function ProjectCard({ project }) {
    return (
        <div className="glass-card rounded-2xl overflow-hidden flex flex-col group hover:scale-[1.02] transition-transform duration-300 border border-white/10 bg-white/5 backdrop-blur-sm">

            {/* Project image */}
            <div className="relative w-full h-48 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 overflow-hidden">
                {project.image ? (
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <span className="text-4xl opacity-30">💻</span>
                    </div>
                )}

                {/* Featured badge */}
                {project.featured && (
                    <span className="absolute top-3 right-3 badge badge-primary badge-sm z-10 shadow-lg">
                        Featured
                    </span>
                )}
            </div>

            {/* Card content */}
            <div className="p-6 flex flex-col gap-4 flex-1">

                {/* Title */}
                <h3 className="text-xl font-bold group-hover:text-purple-400 transition-colors">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed flex-1">
                    {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {project.tags?.map((tag) => (
                        <span
                            key={tag}
                            className="glass-card px-2.5 py-1 rounded-full text-xs font-medium border border-white/10 bg-white/10"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Links - FIXED HERE */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                    {/* GitHub Code Link */}
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-ghost btn-sm gap-2 flex-1 rounded-xl border border-white/10 hover:bg-white/10"
                    >
                        <FaGithub size={14} />
                        Code
                    </a>

                    {/* Live Demo Link */}
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm gap-2 flex-1 rounded-xl bg-purple-600 hover:bg-purple-700 border-none text-white"
                    >
                        <FaExternalLinkAlt size={12} />
                        Live
                    </a>

                    {/* Details Page Link */}
                    <Link
                        href={`/projects/${project.slug}`}
                        className="btn btn-ghost btn-sm rounded-xl border border-white/10 hover:bg-white/10"
                    >
                        Details
                    </Link>
                </div>
            </div>
        </div>
    )
}