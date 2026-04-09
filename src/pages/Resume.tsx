import { motion } from "motion/react";
import { Download, Mail, MapPin, Phone } from "lucide-react";

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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const experience = [
  {
    org: "Capital Group",
    role: "Solutions Engineer",
    location: "Irvine, CA",
    dates: "Sep 2026 · Incoming",
    bullets: [
      "Incoming Solutions Engineer.",
    ],
  },
  {
    org: "University of California, Irvine — Computer Science Research",
    role: "Undergrad Researcher · with Alberto Krone-Martins",
    location: "Irvine, CA",
    dates: "Nov 2025 – Present",
    bullets: [
      "Architecting a similarity engine utilizing high-dimensional vector embeddings and distance metrics (Cosine, Euclidean) to enable efficient pattern recognition in complex datasets.",
    ],
  },
  {
    org: "MedTech@UCI",
    role: "Vice President",
    location: "Irvine, CA",
    dates: "Jan 2025 – Present",
    bullets: [
      "Drive club growth and operational efficiency, managing outreach, interviewing, and onboarding new members to sustain a dedicated, skilled team.",
      "Secured and managed 3 research lab partnerships, including a collaboration focused on Alzheimer's research, by articulating the value proposition of student-led platform development.",
      "Serve as Lead Product Manager for a flagship platform game centered on a virtual pet companion, designed to host and integrate multiple therapeutic games inside.",
      "Defined the core user loop and monetization strategy (via rewards/incentives) for the pet game, ensuring user engagement for long-term data collection goals.",
    ],
  },
  {
    org: "University of California, Irvine — Division of Career Pathways",
    role: "Marketing Assistant",
    location: "Irvine, CA",
    dates: "Feb 2025 – Present",
    bullets: [
      'Featured as the primary student representative for "walk-along" video content on Instagram, increasing the accessibility of career resources through relatable short-form storytelling.',
      "Collaborated with a team of interns to develop a production pipeline for Reels and multimedia content, overseeing the process from initial scriptwriting to final video editing.",
      "Analyzed audience engagement metrics to refine content strategy, contributing to a follower growth of 500+ and a measurable increase in student participation at campus career events.",
    ],
  },
  {
    org: "TEDxUCIrvine",
    role: "Core Member",
    location: "Irvine, CA",
    dates: "Oct 2024 – Present",
    bullets: [
      "Collaborate with a multidisciplinary team to organize and execute large-scale campus events, focusing on speaker curation and production logistics.",
      "Designed engaging graphics for flyers and social media platforms, enhancing event visibility and strengthening club branding through cohesive visual storytelling.",
      "Participated in strategic brainstorming sessions to develop innovative outreach methods, aiming to increase audience traffic and optimize event attendance.",
    ],
  },
  {
    org: "NASA L'SPACE",
    role: "Team Member (NPWEE — Spring 2024 Winner)",
    location: "Virtual",
    dates: "Jan 2024 – Apr 2024",
    bullets: [
      "Worked with a 10-member team to develop a winning NASA-style proposal on space planning logistics software, competing against 29 national teams and securing $10,000 in seed funding (under NDA).",
      "Served as Proposal Review Chair, evaluating submissions on alignment with strict NASA review standards.",
      "Synthesized academic research on stochastic and agent systems to inform core product architecture.",
    ],
  },
  {
    org: "NASA NCAS",
    role: "Team Member",
    location: "Armstrong Flight Research Center, CA",
    dates: "Jan 2023 – Jul 2023",
    bullets: [
      "Collaborated with a multidisciplinary team to analyze and present solutions to technical and regulatory challenges facing emergency eVTOL vehicles to a panel of NASA engineers.",
    ],
  },
];

const projects = [
  {
    title: "Algorhythm",
    tags: ["React Native", "Expo", "Supabase", "Zustand", "TypeScript"],
    dates: "2025 – Present",
    bullets: [
      "Building a gamified mobile DSA learning app — \"Duolingo for Data Structures & Algorithms\" — with XP, hearts, and daily streaks to drive learning habits.",
      "Architected a JSON-driven lesson engine with local Zustand state for instant UI feedback and Supabase for auth, per-topic progress tracking, and user stats.",
    ],
  },
  {
    title: "ICS Academic Novelty Engine",
    tags: ["Python", "FastAPI", "Next.js", "FAISS", "OpenAI API"],
    dates: "2025",
    bullets: [
      "Built a semantic search engine that evaluates the originality of academic thesis proposals by computing cosine distance against a corpus of university papers.",
      "Leveraged FAISS for dense vector retrieval and OpenAI's text-embedding-3-small model to produce a real-time Novelty Score for any submitted research idea.",
    ],
  },
  {
    title: "FitCheck",
    tags: ["React", "Vite", "Tailwind", "Firebase", "MQTT"],
    dates: "June 2025 – Aug 2025",
    bullets: [
      "Developed a full-stack IoT smart wardrobe using React, Firebase, and an ESP32 IoT device.",
      "Implemented secure user authentication and utilized the MQTT protocol for efficient two-way communication and instant status synchronization.",
    ],
  },
  {
    title: "ResGit (SACHACKS)",
    tags: ["Next.js", "Tailwind", "Python"],
    dates: "Nov 2024",
    bullets: [
      "Built a dynamic resume customization tool using modular, reusable React components in Next.js.",
      "Developed a responsive front-end enabling users to select and preview tailored resumes.",
    ],
  },
];

export function Resume() {
  return (
    <div className="min-h-screen py-32 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <FadeIn className="mb-12 pb-8 border-b border-border">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-3xl font-bold mb-1">Jeremiah Lillion</h1>
              <p className="text-muted-foreground">Software Engineer & CS Researcher</p>
            </div>
            <button className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity flex-shrink-0">
              <Download className="w-4 h-4" />
              Download PDF
            </button>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:jeremiahlillion@gmail.com" className="hover:text-foreground transition-colors">
                jeremiahlillion@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>760-377-7194</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Irvine, CA</span>
            </div>
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <a href="https://linkedin.com/in/jeremiah-lillion" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                linkedin.com/in/jeremiah-lillion
              </a>
            </div>
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <a href="https://github.com/Barwolf" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                github.com/Barwolf
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Education */}
        <FadeIn delay={0.1} className="mb-12">
          <h2 className="text-xl font-semibold mb-6 pb-3 border-b border-border">Education</h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="font-semibold">University of California, Irvine</h3>
                  <p className="text-sm text-muted-foreground italic">Bachelor of Science in Computer Science</p>
                </div>
                <div className="text-right flex-shrink-0 ml-4">
                  <p className="text-sm text-muted-foreground">Irvine, CA</p>
                  <p className="text-sm text-muted-foreground">Expected June 2026</p>
                </div>
              </div>
              <div className="mt-2 space-y-1">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Scholarships:</span> Regents Scholarship (Top 2% of transfers), UCIAA Book Scholarship
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Honors:</span> Campuswide Honors Collegium, ICS Honors, Tau Sigma Honor Society, Dean's List
                </p>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="font-semibold">Cerro Coso Community College</h3>
                  <p className="text-sm text-muted-foreground italic">Mathematics (A.S.-T) · Liberal Arts — Math/Science, Social/Science, Arts/Humanities (A.A.)</p>
                </div>
                <div className="text-right flex-shrink-0 ml-4">
                  <p className="text-sm text-muted-foreground">Ridgecrest, CA</p>
                  <p className="text-sm text-muted-foreground">Dec 2023</p>
                </div>
              </div>
              <div className="mt-2 space-y-1">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Scholarships:</span> President's & Ann Ruff Memorial Scholarship
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Honors:</span> Cumulative GPA: 4.0/4.0, Presidents Outstanding Academic Award, Phi Theta Kappa, Dean's List (6×)
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Commencement Speaker:</span> Selected by faculty to represent the Class of 2023 (1 of 178 students)
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Technical Skills */}
        <FadeIn delay={0.2} className="mb-12">
          <h2 className="text-xl font-semibold mb-6 pb-3 border-b border-border">Technical Skills</h2>
          <div className="space-y-3">
            {[
              { label: "Languages", value: "Python, C/C++, JavaScript, HTML/CSS, R (Basic), SQL (Basic)" },
              { label: "Frameworks", value: "React, React Native, Node.js, Flask, WordPress" },
              { label: "Libraries & Tools", value: "NumPy, Matplotlib, PyTorch, Scikit-learn, Git, Firebase, VS Code, PyCharm" },
              { label: "Relevant Coursework", value: "Linear Algebra, Discrete Mathematics, Differential Equations, Data Structures & Algorithms" },
            ].map(({ label, value }) => (
              <p key={label} className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{label}:</span> {value}
              </p>
            ))}
          </div>
        </FadeIn>

        {/* Experience */}
        <FadeIn delay={0.3} className="mb-12">
          <h2 className="text-xl font-semibold mb-6 pb-3 border-b border-border">Related Experience</h2>
          <div className="space-y-8">
            {experience.map((e) => (
              <div key={e.org}>
                <div className="flex justify-between items-start mb-0.5">
                  <h3 className="font-semibold">{e.org}</h3>
                  <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">{e.dates}</span>
                </div>
                <div className="flex justify-between items-start mb-2">
                  <p className="text-sm text-muted-foreground italic">{e.role}</p>
                  <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">{e.location}</span>
                </div>
                <ul className="space-y-1.5 pl-4">
                  {e.bullets.map((b) => (
                    <li key={b} className="text-sm text-muted-foreground flex gap-2">
                      <span className="mt-2 w-1 h-1 rounded-full bg-muted-foreground flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Projects */}
        <FadeIn delay={0.4} className="mb-12">
          <h2 className="text-xl font-semibold mb-6 pb-3 border-b border-border">Projects</h2>
          <div className="space-y-6">
            {projects.map((p) => (
              <div key={p.title}>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="font-semibold">{p.title}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 border border-border text-xs text-muted-foreground rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">{p.dates}</span>
                </div>
                <ul className="space-y-1.5 pl-4">
                  {p.bullets.map((b) => (
                    <li key={b} className="text-sm text-muted-foreground flex gap-2">
                      <span className="mt-2 w-1 h-1 rounded-full bg-muted-foreground flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Additional Info */}
        <FadeIn delay={0.5}>
          <h2 className="text-xl font-semibold mb-6 pb-3 border-b border-border">Additional Information</h2>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Awards:</span> Veteran's Disability Help: Core Values Award · Opportunities for Learning: Presidential Hall's Award
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Volunteer Work:</span> Bethel Baptist Church (10 years)
            </p>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}
