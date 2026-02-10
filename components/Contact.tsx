import { FaLinkedin, FaGithub, FaWordpress, FaEnvelope, FaFilePdf } from "react-icons/fa";

export default function Contact() {
    const links = [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/tejasvi-h-y/",
            icon: <FaLinkedin className="h-6 w-6" />,
            color: "hover:text-blue-500"
        },
        {
            name: "GitHub",
            url: "https://github.com/hytejasvi",
            icon: <FaGithub className="h-6 w-6" />,
            color: "hover:text-white"
        },
        {
            name: "Blog",
            url: "https://lazycoder95.wordpress.com/",
            icon: <FaWordpress className="h-6 w-6" />,
            color: "hover:text-blue-400"
        },
        {
            name: "Resume",
            url: "https://drive.google.com/file/d/1cqVrU-OQYAnunm8_fLGYBlVYhwBNtYoS/view",
            icon: <FaFilePdf className="h-6 w-6" />,
            color: "hover:text-red-500"
        },
        {
            name: "Email",
            url: "mailto:hytejasvi@gmail.com",
            icon: <FaEnvelope className="h-6 w-6" />,
            color: "hover:text-green-400"
        }
    ];

    return (
        <footer className="relative z-20 bg-[#0a0a0a] px-6 py-24 md:px-24 border-t border-white/5">
            <div className="flex flex-col items-center justify-center text-center">
                <h3 className="mb-8 text-3xl font-bold text-white md:text-5xl">Let's Connect</h3>
                <p className="mb-12 max-w-xl text-gray-400">
                    I'm always open to discussing new opportunities, backend challenges, or just chatting about Java architecture.
                </p>

                <div className="flex flex-wrap justify-center gap-8">
                    {links.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-gray-400 transition-colors ${link.color}`}
                            aria-label={link.name}
                        >
                            <div className="flex flex-col items-center gap-2">
                                {link.icon}
                                <span className="text-sm font-medium">{link.name}</span>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="mt-24 text-sm text-gray-600">
                    © {new Date().getFullYear()} Tejasvi Hunasaghatta Yogeshappa.
                </div>
            </div>
        </footer>
    );
}
