export default function Projects() {
    const company = {
        name: "11axis Services Pvt. Ltd.",
        role: "Node.js Developer",
        period: "Jan 2024 - Present",
        location: "Ahmedabad, Gujarat",
        overview: "Specializing in production web applications with core expertise in backend engineering, scalable REST APIs, third-party payment gateways, and asynchronous callback pipelines. Built 11+ automated cron workers, optimized complex database aggregations, and managed deployments using Docker and PM2.",
        tech: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "Redis", "Docker", "PM2"]
    };

    const projects = [
        {
            title: "Fintech Payment Gateway Platform",
            focus: "Core Backend & Payment Integrations",
            description: "Architected the backend from scratch using a modular architecture. Developed Node.js/Express REST APIs with PostgreSQL and Sequelize ORM, integrated mobile network operator payment gateways with asynchronous callback handling, implemented subscription/disbursement workflows, and built a 3-role RBAC system (User, Admin, Superadmin).",
            tech: ["Node.js", "Express.js", "PostgreSQL", "Sequelize ORM", "TypeScript", "React.js"]
        },
        {
            title: "Website Uptime Monitoring Platform",
            focus: "Microservices & Real-Time Alerts",
            description: "Contributed across a microservices architecture using Node.js and Vue.js. Engineered central validation layers, moderator APIs with pagination, and CSV import/export with plan-limit checks. Built real-time alerting integrations with Teams, Telegram, and Zulip, alongside Redis caching and ClickHouse analytics.",
            tech: ["Node.js", "Vue.js", "MongoDB", "ClickHouse", "Redis", "WebSockets"]
        },
        {
            title: "Ads Reporting & Optimization Tool",
            focus: "Data Aggregation & Performance Tuning",
            description: "Investigated and resolved complex MongoDB aggregation pipeline bottlenecks to restore reporting accuracy. Resolved reactive frontend bugs in Vue.js and optimized video-streaming delivery performance across the analytics dashboard.",
            tech: ["MongoDB", "Aggregation Pipelines", "Vue.js", "Node.js"]
        }
    ];

    return (
        <section className="relative z-20 min-h-screen bg-[#0a0a0a] px-6 py-24 md:px-32">
            <h3 className="mb-20 text-3xl font-bold text-white md:text-5xl border-b border-white/10 pb-8">
                My Professional Journey
            </h3>

            <div className="relative border-l border-white/20 ml-3 md:ml-6">
                {/* Main Company Entry */}
                <div className="relative pl-8 md:pl-16">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />

                    <div className="group relative transition-all duration-300">
                        {/* Company Header */}
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <div>
                                <h4 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                                    {company.name}
                                </h4>
                                <span className="text-lg text-blue-400 font-medium">{company.role}</span>
                            </div>
                            <span className="text-gray-500 font-mono mt-2 md:mt-0">{company.period}</span>
                        </div>

                        {/* Company Overview */}
                        <p className="text-gray-400 leading-relaxed max-w-3xl mb-6">
                            {company.overview}
                        </p>

                        {/* Company Tech Badges */}
                        <div className="flex flex-wrap gap-2 mb-12">
                            {company.tech.map((t, i) => (
                                <span key={i} className="rounded-full bg-white/5 border border-white/5 px-3 py-1 text-xs text-gray-300">
                                    {t}
                                </span>
                            ))}
                        </div>

                        {/* Subtopics: Projects Completed at 11axis */}
                        <div className="mt-8 pt-8 border-t border-white/10 space-y-12">
                            <h5 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6">
                                Key Projects & Contributions
                            </h5>

                            <div className="space-y-10">
                                {projects.map((proj, index) => (
                                    <div
                                        key={index}
                                        className="relative pl-6 md:pl-8 border-l border-blue-500/30 hover:border-blue-400 transition-colors group/proj"
                                    >
                                        {/* Subtopic Timeline Dot */}
                                        <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-blue-400/80 group-hover/proj:bg-blue-400 transition-colors" />

                                        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                                            <h6 className="text-xl font-bold text-white group-hover/proj:text-blue-400 transition-colors">
                                                {proj.title}
                                            </h6>
                                            <span className="text-xs text-blue-400 font-mono mt-1 md:mt-0">
                                                {proj.focus}
                                            </span>
                                        </div>

                                        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-3xl mb-4">
                                            {proj.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {proj.tech.map((t, i) => (
                                                <span
                                                    key={i}
                                                    className="rounded-full bg-white/5 border border-white/5 px-2.5 py-0.5 text-xs text-gray-300 group-hover/proj:border-white/20 transition-colors"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
