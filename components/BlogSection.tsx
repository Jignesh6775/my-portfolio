import { FaBook, FaMusic, FaPaintBrush, FaFilm, FaLayerGroup } from "react-icons/fa";

export default function BlogSection() {
    const strengths = [
        {
            title: "Beyond the Backend",
            description: "While backend engineering is my core focus, I design with full-stack empathy. Having built interfaces with Vue.js and React, I bridge client-server communication with clean API contracts and intuitive data flow.",
            tags: ["Vue.js", "React.js", "API Contracts", "Full-Stack Empathy"]
        },
        {
            title: "AI as a Superpower",
            description: "I actively integrate AI-assisted development and prompt engineering into my workflow—accelerating deep troubleshooting, rapid prototyping, and optimizing complex database queries with high precision.",
            tags: ["Prompt Engineering", "AI Tooling", "Rapid Prototyping", "Optimization"]
        },
        {
            title: "Curiosity Never Stops",
            description: "Driven by an instinctive curiosity to understand the 'why' beneath the surface. Whether diving into database aggregation internals or exploring event-driven message brokers, continuous learning defines my engineering craft.",
            tags: ["Continuous Learning", "Database Internals", "Distributed Thinking"]
        },
        {
            title: "I Build It. I Own It.",
            description: "Deep accountability across the entire software lifecycle. From initial schema modeling and asynchronous callbacks to Docker containerization and PM2 process monitoring in production, I take pride in end-to-end ownership.",
            tags: ["Production Ownership", "Docker", "PM2", "Reliability"]
        }
    ];

    return (
        <section className="relative z-20 bg-[#0a0a0a] px-6 py-24 md:px-32 border-t border-white/5">
            <div className="grid md:grid-cols-12 gap-12">
                {/* 03. Beyond the Code */}
                <div className="md:col-span-4">
                    <h3 className="mb-8 text-2xl font-bold text-white">Beyond the Code</h3>
                    <p className="text-gray-400 leading-relaxed mb-8">
                        Beyond code and system architecture, I find inspiration in drawing, reading novels, cinema, and music.
                        To me, cinema and literature are masterclasses in pacing, structure, and emotional resonance. A compelling narrative mirrors well-engineered software: every scene and character must serve a deliberate purpose, maintaining balance and rhythm without unnecessary noise.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <span className="flex items-center gap-2 rounded-full bg-blue-500/10 text-blue-400 px-4 py-2 text-sm font-medium">
                            <FaPaintBrush /> Drawing
                        </span>
                        <span className="flex items-center gap-2 rounded-full bg-purple-500/10 text-purple-400 px-4 py-2 text-sm font-medium">
                            <FaBook /> Novels
                        </span>
                        <span className="flex items-center gap-2 rounded-full bg-amber-500/10 text-amber-400 px-4 py-2 text-sm font-medium">
                            <FaFilm /> Cinema
                        </span>
                        <span className="flex items-center gap-2 rounded-full bg-emerald-500/10 text-emerald-400 px-4 py-2 text-sm font-medium">
                            <FaMusic /> Music
                        </span>
                    </div>
                </div>

                {/* 04. What I Bring to the Table */}
                <div className="md:col-span-8">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                            <FaLayerGroup className="text-blue-400" />
                            What I Bring to the Table
                        </h3>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        {strengths.map((item, index) => (
                            <div
                                key={index}
                                className="group flex flex-col justify-between p-6 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all h-full"
                            >
                                <div>
                                    <h4 className="text-lg font-bold text-gray-200 group-hover:text-blue-400 transition-colors mb-3">
                                        {item.title}
                                    </h4>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                        {item.description}
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                                    {item.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="text-xs text-gray-400 bg-white/5 px-2.5 py-1 rounded-md group-hover:border-white/10 transition-colors"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
