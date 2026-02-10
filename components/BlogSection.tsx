import { FaWordpress, FaArrowRight, FaMountain, FaBook, FaPenFancy } from "react-icons/fa";

export default function BlogSection() {
    const blogs = [
        {
            title: "The Curse of Awareness",
            excerpt: "When seeing too much steals the magic. Exploring the burden and beauty of heightened perception.",
            link: "https://lazycoder95.wordpress.com/2026/01/05/the-curse-of-awareness-when-seeing-too-much-steals-the-magic/"
        },
        {
            title: "The Kind of Love That Undoes You",
            excerpt: "A reflection on vulnerability, surrender, and the transformative power of deep connection.",
            link: "https://lazycoder95.wordpress.com/2025/07/04/the-kind-of-love-that-undoes-you/"
        },
        {
            title: "Unshakable Clarity",
            excerpt: "Breaking free from the mental tug-of-war. Finding stillness in the chaos of modern life.",
            link: "https://lazycoder95.wordpress.com/2025/01/09/unshakable-clarity-breaking-free-from-mental-tug-of-war/"
        },
        {
            title: "Karma and Liberation",
            excerpt: "Walking the path of freedom. Understanding cause, effect, and the journey to self-realization.",
            link: "https://lazycoder95.wordpress.com/2025/01/07/karma-and-liberation-walking-the-path-of-freedom/"
        }
    ];

    return (
        <section className="relative z-20 bg-[#0a0a0a] px-6 py-24 md:px-32 border-t border-white/5">
            <div className="grid md:grid-cols-12 gap-12">
                {/* Hobbies / Personal Side */}
                <div className="md:col-span-4">
                    <h3 className="mb-8 text-2xl font-bold text-white">Beyond the Code</h3>
                    <p className="text-gray-400 leading-relaxed mb-8">
                        My writing blends introspective philosophy with lived experience, drawing on spirituality and personal insight.
                        I explore themes like awareness, identity, and inner clarity—navigating life with depth and turning hard truths into poetic reflections.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <span className="flex items-center gap-2 rounded-full bg-blue-500/10 text-blue-400 px-4 py-2 text-sm font-medium">
                            <FaPenFancy /> Blogging
                        </span>
                        <span className="flex items-center gap-2 rounded-full bg-green-500/10 text-green-400 px-4 py-2 text-sm font-medium">
                            <FaMountain /> Trekking
                        </span>
                        <span className="flex items-center gap-2 rounded-full bg-purple-500/10 text-purple-400 px-4 py-2 text-sm font-medium">
                            <FaBook /> Reading Novels
                        </span>
                    </div>
                </div>

                {/* Popular Blogs */}
                <div className="md:col-span-8">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                            <FaWordpress className="text-blue-400" />
                            Latest Reflections
                        </h3>
                        <a href="https://lazycoder95.wordpress.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-white transition-colors flex items-center gap-2">
                            View all <FaArrowRight />
                        </a>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        {blogs.map((blog, index) => (
                            <a
                                key={index}
                                href={blog.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col justify-between p-6 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all h-full"
                            >
                                <div>
                                    <h4 className="text-lg font-bold text-gray-200 group-hover:text-blue-400 transition-colors mb-3 line-clamp-2">
                                        {blog.title}
                                    </h4>
                                    <p className="text-gray-400 text-sm line-clamp-3 leading-relaxed">
                                        {blog.excerpt}
                                    </p>
                                </div>
                                <div className="mt-4 flex items-center text-xs text-gray-500 font-medium group-hover:text-gray-300 transition-colors">
                                    Read Article <FaArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
