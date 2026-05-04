import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { siteMetadata } from '@/lib/metadata'

export default function Footer() {
    return (
        <footer className="footer footer-center p-6 glass-card border-t border-white/10 text-base-content mt-auto">
            <div className="flex gap-4">
                <a href={siteMetadata.github} target="_blank" rel="noopener noreferrer"
                    className="btn btn-ghost btn-sm btn-circle hover:scale-110 transition-transform">
                    <FaGithub size={18} />
                </a>
                <a href={siteMetadata.linkedin} target="_blank" rel="noopener noreferrer"
                    className="btn btn-ghost btn-sm btn-circle hover:scale-110 transition-transform">
                    <FaLinkedin size={18} />
                </a>
                <a href={`mailto:${siteMetadata.email}`}
                    className="btn btn-ghost btn-sm btn-circle hover:scale-110 transition-transform">
                    <FaEnvelope size={18} />
                </a>
            </div>
            <p className="text-sm text-base-content/50">
                © {new Date().getFullYear()} {siteMetadata.title} — Built with Next.js & DaisyUI
            </p>
        </footer>
    )
}