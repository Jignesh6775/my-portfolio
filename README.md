# Jignesh Vadiyatar - Developer Portfolio

A high-performance, cinematic personal portfolio website featuring scroll-linked canvas animations, parallax effects, and a modern dark aesthetic. Showcasing expertise in Node.js backend engineering, scalable REST APIs, and microservices.

![Tech Stack](https://img.shields.io/badge/Next.js-14-black) ![Tech Stack](https://img.shields.io/badge/TypeScript-5.0-blue) ![Tech Stack](https://img.shields.io/badge/Tailwind-3.0-cyan) ![Tech Stack](https://img.shields.io/badge/Framer_Motion-11.0-purple)

## 🌟 Key Features

*   **Scrollytelling Mechanic**: HTML5 Canvas + Framer Motion implementation that scrubs through high-res animation frames based on scroll position.
*   **Parallax Overlay**: Text elements fade in/out and translate dynamically relative to the background sequence.
*   **Professional Journey Timeline**: Vertical timeline highlighting enterprise experience at 11axis Services Pvt. Ltd. with project subtopics.
*   **Beyond the Code & Professional Strengths**: Editorial layout exploring personal perspectives on cinema, storytelling, and key engineering superpowers.
*   **Performance Optimized**: Preloaded assets and optimized canvas cover scaling ensure 60fps rendering.
*   **Responsive Design**: Clean mobile-first design across phone, tablet, and desktop viewports.

## 🛠️ Technology Stack

*   **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Animation**: [Framer Motion](https://www.framer.com/motion/)
*   **Language**: TypeScript
*   **Icons**: React Icons

## 📂 Project Structure

```bash
├── app/
│   ├── globals.css      # Global styles & Tailwind directives
│   ├── layout.tsx       # Root layout (Fonts, Metadata)
│   └── page.tsx         # Main entry point (Sticky Scroll Container)
├── components/
│   ├── ScrollyCanvas.tsx # Core video scrubbing logic
│   ├── Overlay.tsx       # Hero text & Parallax animations
│   ├── Projects.tsx      # Professional Experience & Projects
│   ├── BlogSection.tsx   # Beyond the Code & What I Bring to the Table
│   └── Contact.tsx       # Social links, resume & footer
├── public/
│   ├── sequence-3/       # PNG animation frames
│   └── resume.pdf        # Professional resume
└── tailwind.config.ts    # Theme customization
```

## 🚀 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Jignesh6775/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open in browser:**
    Visit [http://localhost:3000](http://localhost:3000)

---
© 2026 Jignesh Vadiyatar. All rights reserved.
