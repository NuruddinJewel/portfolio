import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/lib/projects'

export const metadata = {
    title: "Projects — Nuruddin Jewel",
    description: "All my projects and work.",
}

export default function ProjectsPage() {
    return (
        <div className="container mx-auto px-6 py-20 flex flex-col gap-12">

            {/* Header */}
            <div className="text-center flex flex-col gap-4">
                <p className="text-primary font-medium">My Work</p>
                <h1 className="text-4xl lg:text-5xl font-bold">
                    Featured{" "}
                    <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        Projects
                    </span>
                </h1>
                <p className="text-base-content/60 max-w-xl mx-auto">
                    Here are some of the projects I&apos;ve built while learning the MERN Stack.
                    Each one taught me something new.
                </p>
            </div>

            {/* Projects grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>

        </div>
    )
}