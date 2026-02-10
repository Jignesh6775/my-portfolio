'use client';

import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import BlogSection from "@/components/BlogSection";
import Contact from "@/components/Contact";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress of the container relative to viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main className="bg-[#121212] min-h-screen font-sans selection:bg-blue-500/30">
      {/* 
        Scroll Container: 500vh
        We pin the content for the duration of this container 
      */}
      <div ref={containerRef} className="relative h-[500vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <ScrollyCanvas scrollYProgress={scrollYProgress} />
          <Overlay scrollYProgress={scrollYProgress} />
        </div>
      </div>

      <Projects />
      <BlogSection />
      <Contact />
    </main>
  );
}
