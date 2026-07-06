'use client'

import { useState } from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa'
import { siteMetadata } from '@/lib/metadata'

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState('idle') // idle | loading | success | error
    const [errorMsg, setErrorMsg] = useState('')

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setStatus('loading')
        setErrorMsg('')

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            })

            const data = await res.json()

            if (res.ok) {
                setStatus('success')
                setForm({ name: '', email: '', message: '' })
            } else {
                setStatus('error')
                setErrorMsg(data.error || 'Something went wrong.')
            }
        } catch (err) {
            setStatus('error')
            setErrorMsg('Network error. Please try again.')
        }
    }

    return (
        <div className="container mx-auto px-6 py-20 flex flex-col gap-12">

            {/* Header */}
            <div className="text-center flex flex-col gap-4">
                <p className="text-purple-400 font-medium">Get In Touch</p>
                <h1 className="text-4xl lg:text-5xl font-bold">
                    Contact{" "}
                    <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        Me
                    </span>
                </h1>
                <p className="text-white/60 max-w-xl mx-auto">
                    Have a project in mind or just want to say hi?
                    My inbox is always open — I&apos;ll get back to you as soon as possible.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto w-full">

                {/* Left — Contact info */}
                <div className="flex flex-col gap-6">

                    <div className="glass-card rounded-2xl p-6 flex flex-col gap-6 border border-white/10 bg-white/5 backdrop-blur-md">
                        <h2 className="text-xl font-bold">Let&apos;s Connect</h2>

                        {/* Email Link - FIXED */}
                        <a
                            href={`mailto:${siteMetadata.email}`}
                            className="flex items-center gap-4 group cursor-pointer"
                        >
                            <div className="glass-card p-3 rounded-xl group-hover:scale-110 transition-transform bg-white/10 border border-white/10">
                                <FaEnvelope className="text-purple-400 text-xl" />
                            </div>
                            <div>
                                <p className="text-sm text-white/50">Email</p>
                                <p className="font-medium text-white/90">{siteMetadata.email}</p>
                            </div>
                        </a>

                        {/* GitHub Link - FIXED */}
                        <a
                            href={siteMetadata.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 group cursor-pointer"
                        >
                            <div className="glass-card p-3 rounded-xl group-hover:scale-110 transition-transform bg-white/10 border border-white/10">
                                <FaGithub className="text-white text-xl" />
                            </div>
                            <div>
                                <p className="text-sm text-white/50">GitHub</p>
                                <p className="font-medium text-white/90">https://github.com/NuruddinJewel</p>
                            </div>
                        </a>

                        {/* LinkedIn Link - FIXED */}
                        <a
                            href={siteMetadata.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 group cursor-pointer"
                        >
                            <div className="glass-card p-3 rounded-xl group-hover:scale-110 transition-transform bg-white/10 border border-white/10">
                                <FaLinkedin className="text-blue-400 text-xl" />
                            </div>
                            <div>
                                <p className="text-sm text-white/50">LinkedIn</p>
                                <p className="font-medium text-white/90">https://www.linkedin.com/in/nuruddinjewel</p>
                            </div>
                        </a>
                    </div>

                    {/* Availability badge */}
                    <div className="glass-card rounded-2xl p-6 flex items-center gap-4 border border-white/10 bg-white/5 backdrop-blur-md">
                        <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse shrink-0" />
                        <div>
                            <p className="font-medium text-white">Available for opportunities</p>
                            <p className="text-sm text-white/50">
                                Open to remote & full-time roles
                            </p>
                        </div>
                    </div>

                </div>

                {/* Right — Contact form */}
                <div className="glass-card rounded-2xl p-8 flex flex-col gap-6 border border-white/10 bg-white/5 backdrop-blur-md">
                    <h2 className="text-xl font-bold">Send a Message</h2>

                    {/* Success alert */}
                    {status === 'success' && (
                        <div className="p-4 bg-green-500/20 border border-green-500/50 text-green-400 rounded-xl text-sm">
                            ✅ Message sent! I&apos;ll get back to you soon.
                        </div>
                    )}

                    {/* Error alert */}
                    {status === 'error' && (
                        <div className="p-4 bg-red-500/20 border border-red-500/50 text-red-400 rounded-xl text-sm">
                            ❌ {errorMsg}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                        {/* Name */}
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-white/70 ml-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-400 focus:outline-none transition-all placeholder:text-white/20"
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-white/70 ml-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="you@email.com"
                                required
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-400 focus:outline-none transition-all placeholder:text-white/20"
                            />
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-white/70 ml-1">Message</label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project..."
                                required
                                rows={5}
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-400 focus:outline-none transition-all placeholder:text-white/20 resize-none"
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="mt-2 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold transition-all shadow-lg shadow-purple-500/20"
                        >
                            {status === 'loading' ? (
                                <>
                                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <FaPaperPlane size={14} />
                                    Send Message
                                </>
                            )}
                        </button>

                    </form>
                </div>
            </div>
        </div>
    )
}
