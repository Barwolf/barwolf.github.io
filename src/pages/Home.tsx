import { motion } from "motion/react";
import { ArrowDown, Brain, Layers, Users, Mail, GraduationCap, BookOpen, ExternalLink, Trophy, Star, Award } from "lucide-react";

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

const achievements = [
  {
    icon: Trophy,
    title: "NASA L'SPACE NPWEE — Spring 2024 Winner",
    org: "NASA L'SPACE Program",
    description:
      "Member of 10-member team to win a national NASA proposal competition against 29 teams, securing $10,000 in seed funding for a space planning logistics software concept.",
  },
  {
    icon: Star,
    title: "Regents Scholarship — Top 2% of Transfers",
    org: "University of California, Irvine",
    description:
      "Awarded UCI's most prestigious transfer scholarship, granted to the top 2% of incoming transfer students campus-wide.",
  },
  {
    icon: Users,
    title: "Commencement Speaker — Class of 2023",
    org: "Cerro Coso Community College",
    description:
      "Selected by faculty to represent the graduating class of 178 students, delivering the commencement address at the 2023 ceremony.",
  },
  {
    icon: Award,
    title: "Dean's List (6×) · 4.0 GPA",
    org: "Cerro Coso Community College",
    description:
      "Earned a perfect 4.0 cumulative GPA and Dean's List recognition every semester, alongside the Presidents Outstanding Academic Award and Phi Theta Kappa membership.",
  },
];

const skills = {
  Languages: ["Python", "C/C++", "JavaScript", "HTML/CSS", "SQL", "R"],
  Frameworks: ["React", "React Native", "Next.js", "Node.js", "Flask", "WordPress"],
  "Libraries & Tools": ["PyTorch", "Scikit-learn", "NumPy", "FAISS", "Firebase", "Git"],
  Coursework: ["Data Structures & Algorithms", "Linear Algebra", "Discrete Mathematics", "Differential Equations"],
};

const degrees = [
  {
    icon: GraduationCap,
    degree: "Bachelor of Science in Computer Science",
    school: "University of California, Irvine",
    years: "Expected June 2026",
    detail: "Regents Scholar · Campuswide Honors Collegium · ICS Honors · Tau Sigma · Dean's List",
  },
  {
    icon: BookOpen,

    degree: "Associate of Science — Mathematics (A.S.-T)",
    school: "Cerro Coso Community College",
    years: "Dec 2023",
    detail: "Cumulative GPA: 4.0/4.0 · Phi Theta Kappa · Dean's List (6×) · Commencement Speaker",
  },
  {
    icon: BookOpen,

    degree: "Associate of Arts — Liberal Arts: Math & Science",
    school: "Cerro Coso Community College",
    years: "Dec 2023",
    detail: "President's & Ann Ruff Memorial Scholarship · Presidents Outstanding Academic Award",
  },
  {
    icon: BookOpen,

    degree: "Associate of Arts — Liberal Arts: Social Science",
    school: "Cerro Coso Community College",
    years: "Dec 2023",
    detail: "President's & Ann Ruff Memorial Scholarship · Presidents Outstanding Academic Award",
  },
  {
    icon: BookOpen,

    degree: "Associate of Arts — Liberal Arts: Arts & Humanities",
    school: "Cerro Coso Community College",
    years: "Dec 2023",
    detail: "President's & Ann Ruff Memorial Scholarship · Presidents Outstanding Academic Award",
  },
];

const certs = [
  {
    name: "Introduction to Model Context Protocol",
    issuer: "Anthropic",
    issued: "Mar 2026",
    credentialId: "b2cw5chqmj9y",
    href: "#",
    logo: (
      <span className="font-bold text-sm text-foreground">A\</span>
    ),
  },
  {
    name: "Claude Code in Action",
    issuer: "Anthropic",
    issued: "Mar 2026",
    credentialId: "5rj845enb3rs",
    href: "#",
    logo: (
      <span className="font-bold text-sm text-foreground">A\</span>
    ),
  },
];

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

function Hero() {
  const scrollDown = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-14">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <p className="text-sm text-muted-foreground mb-6 tracking-widest uppercase">
          Software Engineer · CS @ UCI · June 2026
        </p>
        <h1 className="mb-6">Building thoughtful digital experiences</h1>
        <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          I craft elegant solutions to complex problems, with a focus on clean code, user
          experience, and meaningful impact.
        </p>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="border border-border px-6 py-3 text-sm font-medium hover:bg-muted transition-colors"
          >
            Get In Touch
          </button>
        </div>
      </motion.div>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={scrollDown}
        className="absolute bottom-10 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-5 h-5" />
      </motion.button>
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
    <section id="about" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-16">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">About Me</p>
          <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
            I'm a CS student and researcher at UC Irvine graduating June 2026. I build full-stack
            apps, mobile experiences, and AI-powered tools — and I care deeply about the craft
            behind every product I ship.
          </p>
        </FadeIn>

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
    <section id="work" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-16">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">
            Selected Work
          </p>
          <p className="text-muted-foreground max-w-md mx-auto">
            A collection of projects that showcase my approach to solving real-world problems.
          </p>
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
                  <h3>{p.title}</h3>
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
        <FadeIn className="text-center mb-16">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">
            Skills & Technologies
          </p>
          <p className="text-muted-foreground max-w-md mx-auto">
            A diverse toolkit built through years of hands-on experience and continuous learning.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-10">
            {left.map(([category, tags], i) => (
              <FadeIn key={category} delay={i * 0.1}>
                <h4 className="mb-4">{category}</h4>
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
                <h4 className="mb-4">{category}</h4>
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

function Education() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-16">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Education</p>
          <p className="text-muted-foreground max-w-md mx-auto">
            Academic foundation and professional certifications that shape my expertise.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Degrees */}
          <FadeIn>
            <h4 className="mb-6">Degrees</h4>
            <div className="space-y-4">
              {degrees.map((d) => (
                <motion.div
                  key={d.degree}
                  whileHover={{ y: -3, boxShadow: "0 6px 20px rgba(0,0,0,0.07)" }}
                  transition={{ duration: 0.2 }}
                  className="bg-card border border-border p-6 flex items-start gap-4 cursor-default"
                >
                  <div className="w-9 h-9 bg-muted rounded flex items-center justify-center flex-shrink-0">
                    <d.icon className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-sm leading-snug max-w-[70%]">{d.degree}</h3>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">{d.years}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{d.school}</p>
                    <p className="text-xs text-muted-foreground">{d.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeIn>

          {/* Certifications */}
          <FadeIn delay={0.1}>
            <h4 className="mb-6">Certifications</h4>
            <div className="space-y-4">
              {certs.map((c) => (
                <motion.div
                  key={c.name}
                  whileHover={{ y: -3, boxShadow: "0 6px 20px rgba(0,0,0,0.07)" }}
                  transition={{ duration: 0.2 }}
                  className="bg-card border border-border p-6 flex items-start gap-4 cursor-default"
                >
                  <div className="w-9 h-9 bg-muted rounded flex items-center justify-center flex-shrink-0">
                    {c.logo}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium leading-snug">{c.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{c.issuer}</p>
                    <p className="text-xs text-muted-foreground">Issued {c.issued}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-16">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">
            Achievements
          </p>
          <p className="text-muted-foreground max-w-md mx-auto">
            Highlights from competitions, open source, and academic work.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 auto-rows-fr">
          {achievements.map((a, i) => (
            <FadeIn key={a.title} delay={i * 0.08} className="h-full">
              <motion.div
                whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
                transition={{ duration: 0.2 }}
                className="bg-card border border-border p-8 flex items-start gap-5 cursor-default h-full"
              >
                <div className="w-10 h-10 bg-muted rounded flex items-center justify-center flex-shrink-0">
                  <a.icon className="w-4 h-4 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="mb-1">{a.title}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{a.org}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a.description}</p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-32 px-6 text-center">
      <FadeIn>
        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-6">
          Let's Build Something Together
        </p>
        <p className="text-muted-foreground max-w-md mx-auto mb-10">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of
          your vision.
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
    <footer className="border-t border-border py-6 text-center">
      <p className="text-xs text-muted-foreground">
        © 2026 · Built with care and attention to detail
      </p>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Work />
      <Skills />
      <Education />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
