
export default function Projects() {
    const company = {
        name: "11axis Services Pvt. Ltd.",
        role: "Node.js Backend Developer",
        period: "Jan 2024 - Nov 2026",
        location: "Ahmedabad, Gujarat",
        overview:
            "Nearly 3 years of experience developing production SaaS and fintech applications, with a strong focus on backend engineering. Developed and maintained 150+ REST APIs, integrated third-party payment gateways, and worked with asynchronous processing, subscription workflows, and databases. Led backend feature delivery across two major products, contributed to a third, and collaborated directly with clients and team members to resolve production issues.",
        tech: [
            "Node.js",
            "Express.js",
            "JavaScript",
            "TypeScript",
            "PostgreSQL",
            "MongoDB",
            "RabbitMQ",
            "Redis",
            "React.js",
            "Vue.js",
            "Docker",
        ],
    };

    const projects = [
        {
            title: "Fintech Payment Gateway Platform",
            focus: "Payment Systems & Backend Architecture",
            description:
                "Developed and maintained scalable Node.js/Express.js backend services using TypeScript, PostgreSQL, and Sequelize ORM. Integrated multiple mobile network operator payment gateways, implemented one-time and recurring payments, subscription billing, and disbursement workflows. Used RabbitMQ for asynchronous processing, Redis for caching, and 15+ cron jobs for transaction reconciliation, billing retries, and merchant webhook delivery.",
            tech: [
                "Node.js",
                "Express.js",
                "TypeScript",
                "PostgreSQL",
                "RabbitMQ",
                "Redis",
                "Subscription Billing",
                "Webhooks",
                "Cron Jobs",
                "React.js",
            ],
        },
        {
            title: "Uptime Monitoring Platform",
            focus: "Monitoring Systems & Alert Microservices",
            description:
                "Developed 50+ REST APIs and Vue.js interfaces for website and service monitoring, analytics, and subscription management. Implemented scheduled uptime checks, monitor configuration, OAuth authentication, and subscription-based access controls. Integrated alert microservices with multiple notification channels, including email, Microsoft Teams, Telegram, and Zulip. Improved MongoDB aggregation pipelines for dashboard reporting and contributed to automated testing and production issue resolution.",
            tech: [
                "Node.js",
                "Express.js",
                "Vue.js",
                "MongoDB",
                "ClickHouse",
                "RabbitMQ",
                "OAuth",
                "REST APIs",
            ],
        },
        {
            title: "Ad Fraud Detection & Analytics Platform",
            focus: "Analytics, Reporting & Production Debugging",
            description:
                "Maintained and improved backend services for an advertising analytics platform. Resolved MongoDB aggregation issues affecting dashboard reporting, refined analytics API responses, and fixed media delivery issues involving S3-compatible object storage. Also contributed targeted Vue.js interface improvements and production bug fixes.",
            tech: [
                "Node.js",
                "Express.js",
                "MongoDB",
                "Aggregation Pipelines",
                "Vue.js",
                "S3-Compatible Storage",
            ],
        },
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

                                <span className="text-lg text-blue-400 font-medium">
                                    {company.role}
                                </span>
                            </div>

                            <span className="text-gray-500 font-mono mt-2 md:mt-0">
                                {company.period}
                            </span>
                        </div>

                        {/* Company Overview */}
                        <p className="text-gray-400 leading-relaxed max-w-3xl mb-6">
                            {company.overview}
                        </p>

                        {/* Company Tech Badges */}
                        <div className="flex flex-wrap gap-2 mb-12">
                            {company.tech.map((t, i) => (
                                <span
                                    key={i}
                                    className="rounded-full bg-white/5 border border-white/5 px-3 py-1 text-xs text-gray-300"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        {/* Projects at 11axis */}
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
                                        {/* Project Timeline Dot */}
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
