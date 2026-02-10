import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
    const experiences = [
        {
            company: "N26 Bank",
            role: "Backend Engineer (Payments)",
            period: "2024 - Present",
            description: "Built Kotlin-based microservices for the Payments domain. Implemented 'Verification of Payee' (VoP) fraud prevention using Kafka and Event-Driven Architecture. Launched 'Bring Your Salary' feature to improve customer retention.",
            link: "https://n26.com",
            tech: ["Kotlin", "Spring Boot", "Kafka", "PostgreSQL", "GCP"]
        },
        {
            company: "Cisco Systems",
            role: "Software Engineer",
            period: "2021 - 2024",
            description: "Directed backend operations and RESTful API integration for Cisco's core SD-WAN web application. Improved system stability by 15% and optimized upgrade times by 30%.",
            link: null,
            tech: ["Java", "Spring Boot", "REST API", "Microservices"]
        },
        {
            company: "Synamedia",
            role: "Software Engineer",
            period: "2017 - 2021",
            description: "Spearheaded testing and development for advanced video processing and ad-tech solutions. Increased test coverage efficiency by 40% through automated frameworks.",
            link: null,
            tech: ["Java", "Video Processing", "Ad-Tech"]
        }
    ];

    return (
        <section className="relative z-20 min-h-screen bg-[#0a0a0a] px-6 py-24 md:px-32">
            <h3 className="mb-20 text-3xl font-bold text-white md:text-5xl border-b border-white/10 pb-8">
                My Professional Journey
            </h3>

            <div className="relative border-l border-white/20 ml-3 md:ml-6 space-y-16">
                {experiences.map((exp, index) => (
                    <div key={index} className="relative pl-8 md:pl-16">
                        {/* Timeline Dot */}
                        <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />

                        <div className="group relative transition-all duration-300 hover:-translate-y-1">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                <div>
                                    <h4 className="text-2xl font-bold text-white flex items-center gap-3">
                                        {exp.company}
                                        {exp.link && (
                                            <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white text-lg transition-colors">
                                                <FaExternalLinkAlt />
                                            </a>
                                        )}
                                    </h4>
                                    <span className="text-lg text-blue-400 font-medium">{exp.role}</span>
                                </div>
                                <span className="text-gray-500 font-mono mt-2 md:mt-0">{exp.period}</span>
                            </div>

                            <p className="text-gray-400 leading-relaxed max-w-3xl mb-6">
                                {exp.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {exp.tech.map((t, i) => (
                                    <span key={i} className="rounded-full bg-white/5 border border-white/5 px-3 py-1 text-xs text-gray-300 group-hover:border-white/20 transition-colors">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
