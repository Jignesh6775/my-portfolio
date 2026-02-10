# Scrollytelling Portfolio

A high-performance, cinematic personal portfolio website featuring scroll-linked video playback, parallax effects, and a modern dark aesthetic. Built for **Tejasvi H.Y.** to showcase expertise in backend engineering and Java architecture.

![Tech Stack](https://img.shields.io/badge/Next.js-14-black) ![Tech Stack](https://img.shields.io/badge/TypeScript-5.0-blue) ![Tech Stack](https://img.shields.io/badge/Tailwind-3.0-cyan) ![Tech Stack](https://img.shields.io/badge/Framer_Motion-11.0-purple)

## 🌟 Key Features

*   **Scrollytelling Mechanic**: HTML5 Canvas + Framer Motion implementation that scrubs through a high-res image sequence (192 frames) based on scroll position.
*   **Parallax Overlay**: Text elements fade in/out and move at different speeds relations to the video background.
*   **Interactive Timeline**: Vertical timeline component showcasing professional experience (N26, Cisco, Synamedia).
*   **Performance Optimized**: Image preloading strategy ensures 60fps rendering without flickering.
*   **Responsive Design**: Mobile-friendly layout with custom `object-fit` logic for the canvas.

## 🛠️ Technology Stack

*   **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Animation**: [Framer Motion](https://www.framer.com/motion/)
*   **Language**: TypeScript
*   **Icons**: React Icons (FontAwesome, etc.)

## 📂 Project Structure

```bash
├── app/
│   ├── globals.css      # Global styles & Tailwind directives
│   ├── layout.tsx       # Root layout (Fonts, Metadata)
│   └── page.tsx         # Main entry point (Sticky Scroll Container)
├── components/
│   ├── ScrollyCanvas.tsx # Core video scrubbing logic
│   ├── Overlay.tsx       # Hero text & Parallax animations
│   ├── Projects.tsx      # Professional Experience Timeline
│   ├── BlogSection.tsx   # Hobbies & Blog Links
│   └── Contact.tsx       # Social links & Footer
├── public/
│   └── sequence/         # 192 PNG frames for the scroll animation
└── tailwind.config.ts    # Theme customization
```

## 🚀 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/portfolio.git
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

## 🚢 Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1.  Push your code to a GitHub repository.
2.  Import the project into Vercel.
3.  Vercel will detect Next.js and deploy automatically.

---
© 2026 Tejasvi H.Y.
