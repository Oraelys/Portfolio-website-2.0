import React from 'react'
import RevealOnScroll from '../RevealOnScroll';

function About() {

    const frontendSkill = [
        "React",
        "CSS",
        "Tailwind",
        "Bootstrap",
    ];

    const backendSkill = [
        "JavaScript",
        "Node",
        "MongoDB",
        "Git",
    ];

    return (
        <section id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8
                 bg-gradient-to-r from-blue-500 to-purple-600
                  bg-clip-text text-transparent text-center"
                    >
                        About Me
                    </h2>

                    <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            I'm a passionate full-stack developer
                            with expertise in building scalable web applications from
                            front to back. With a strong command of modern frameworks, databases,
                            and cloud technologies, I thrive on solving complex problems
                            and delivering seamless user experiences.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">
                                    Frontend
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkill.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                     hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">
                                    Backend
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkill.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                     hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4 ">Education</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong>Colt Steele Web Developer Bootcamp Course</strong> - 2022-2023
                                </li>
                                <li>
                                    Relevant Coursework: Web development, APIs, DataBase creation

                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4 ">Work Experience</h3>
                            <div className="space-y-4 text-gray-300">
                                <div className="">
                                    <h4>
                                        Full stack web developer at Netisens ICT (2025 - Present)
                                        <p>I developed flexible functional templates for common types of websites such as ecommerce and I tutor people looking to build a career in web development </p>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}

export default About