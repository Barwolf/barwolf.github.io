import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, Brain, Layers, Users, Mail, ExternalLink } from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const projects = [
  {
    title: "Algorhythm",
    description:
      "A gamified mobile DSA learning app — \"Duolingo for Data Structures & Algorithms\" — with XP, hearts, streaks, and a JSON-driven lesson engine backed by Supabase.",
    tags: ["React Native", "Expo", "Supabase", "Zustand", "TypeScript"],
    href: "https://github.com/Barwolf",
  },
  {
    title: "ICS Academic Novelty Engine",
    description:
      "Semantic search engine that evaluates thesis originality by computing cosine distance against a university paper corpus using FAISS and OpenAI embeddings.",
    tags: ["Python", "FastAPI", "Next.js", "FAISS", "OpenAI API"],
    href: "https://github.com/Barwolf",
  },
  {
    title: "FitCheck",
    description:
      "Full-stack IoT smart wardrobe using an ESP32 device, Firebase, and MQTT for real-time two-way communication and instant wardrobe status synchronization.",
    tags: ["React", "Vite", "Firebase", "MQTT", "IoT"],
    href: "https://github.com/Barwolf",
  },
  {
    title: "ResGit",
    description:
      "Hackathon (SACHACKS) resume customization tool with modular React components, letting users select and preview tailored resumes in real time.",
    tags: ["Next.js", "Tailwind", "Python"],
    href: "https://github.com/Barwolf",
  },
];

const skills = {
  Languages: ["Python", "C/C++", "JavaScript", "HTML/CSS", "SQL", "R"],
  Frameworks: ["React", "React Native", "Next.js", "Node.js", "Flask", "WordPress"],
  "Libraries & Tools": ["PyTorch", "Scikit-learn", "NumPy", "FAISS", "Firebase", "Git"],
  Coursework: ["Data Structures & Algorithms", "Linear Algebra", "Discrete Mathematics", "Differential Equations"],
};

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Barwolf",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/jeremiah-lillion",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:jeremiahlillion@gmail.com",
    svg: <Mail className="w-5 h-5" />,
  },
];

// ─── Fade-in wrapper ──────────────────────────────────────────────────────────

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Sections ─────────────────────────────────────────────────────────────────

function TechHeader() {
  return (
    <section className="pt-32 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <a 
          href="/" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Main Profile
        </a>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Tech Stuff</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Full-stack development, ML, and high-dimensional similarity engines. A dive into what I build.
        </p>
      </motion.div>
    </section>
  );
}

function About() {
  const values = [
    {
      icon: Brain,
      title: "AI & Research",
      description:
        "I work at the intersection of software and research — building similarity engines with vector embeddings at UCI and applying ML tools like PyTorch and FAISS to real problems.",
    },
    {
      icon: Layers,
      title: "Full-Stack & Mobile",
      description:
        "I ship across the entire stack — from React and Next.js on the web to React Native on mobile and ESP32 IoT devices. If it needs to be built, I can build it.",
    },
    {
      icon: Users,
      title: "Product & Leadership",
      description:
        "As VP of MedTech@UCI and Lead PM on a therapeutic game platform, I bridge engineering and strategy — defining user loops, securing partnerships, and leading teams.",
    },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <FadeIn key={v.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
                transition={{ duration: 0.2 }}
                className="bg-card border border-border p-8 h-full cursor-default"
              >
                <v.icon className="w-5 h-5 mb-5 text-muted-foreground" />
                <h3 className="mb-3">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="py-24 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="mb-12">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">
            Selected Work
          </p>
          <h2 className="text-3xl font-bold">Projects</h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
                transition={{ duration: 0.2 }}
                className="bg-card border border-border p-8 h-full flex flex-col"
              >
                <div className="flex items-start justify-between mb-3 gap-4">
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0 mt-0.5"
                    aria-label={`Open ${p.title}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-muted text-xs text-muted-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const columns = Object.entries(skills);
  const left = columns.slice(0, 2);
  const right = columns.slice(2, 4);

  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="mb-16">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">
            Toolkit
          </p>
          <h2 className="text-3xl font-bold">Skills & Technologies</h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-10">
            {left.map(([category, tags], i) => (
              <FadeIn key={category} delay={i * 0.1}>
                <h4 className="mb-4 text-lg font-medium">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-card border border-border text-sm text-muted-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="space-y-10">
            {right.map(([category, tags], i) => (
              <FadeIn key={category} delay={i * 0.1}>
                <h4 className="mb-4 text-lg font-medium">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-card border border-border text-sm text-muted-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-32 px-6 text-center border-t border-border">
      <FadeIn>
        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-6">
          Let's Build Something Together
        </p>
        <p className="text-muted-foreground max-w-md mx-auto mb-10">
          I'm always open to discussing new technical projects, startup ideas, or engineering roles.
        </p>
        <a
          href="mailto:jeremiahlillion@gmail.com"
          className="inline-block bg-primary text-primary-foreground px-8 py-3 text-sm font-medium hover:opacity-90 transition-opacity mb-16"
        >
          Get In Touch
        </a>
        <div className="flex items-center justify-center gap-6">
          {socials.map(({ svg, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {svg}
            </a>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-6 text-center">
      <p className="text-xs text-muted-foreground">
        © 2026 · Built with care and attention to detail
      </p>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export function Tech() {
  return (
    <main className="min-h-screen bg-background">
      <TechHeader />
      <About />
      <Work />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}