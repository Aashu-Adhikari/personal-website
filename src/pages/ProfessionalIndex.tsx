import React, { useState } from "react";
import { profile, skills, experience, projects } from "@/data/portfolio";
import { ExternalLink, Github, Linkedin, Mail, MapPin, ChevronDown, Download } from "lucide-react";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Link } from "react-router-dom";

export default function ProfessionalIndex() {
  return (
    <div className="min-h-screen bg-[#e6e4dc] text-stone-800 font-sans selection:bg-stone-200 selection:text-stone-900 relative">
      {/* Professional Header */}
      <header className="sticky top-0 z-50 bg-[#e6e4dc]/80 backdrop-blur-md border-b border-stone-300/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-semibold tracking-tight text-stone-800">
            {profile.name}
          </div>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-500">
              <a href="#about" className="hover:text-stone-900 transition-colors">About</a>
              <a href="#experience" className="hover:text-stone-900 transition-colors">Experience</a>
              <a href="#projects" className="hover:text-stone-900 transition-colors">Projects</a>
            </nav>
            <div className="w-px h-4 bg-stone-300 hidden md:block" />
            <ThemeSwitcher />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-24">
        {/* Hero Section */}
        <section id="about" className="pt-24 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left: Intro */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-600 text-[0.65rem] font-bold tracking-widest uppercase mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for New Opportunities
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-stone-900 leading-[1.05]">
                Backend & ML<br/><span className="text-stone-400">Engineer.</span>
              </h1>
              <p className="mt-8 text-lg sm:text-xl text-stone-500 max-w-2xl leading-relaxed font-normal">
                {profile.summary}
              </p>
              
              <div className="mt-8">
                <div className="text-xs font-bold text-stone-900 uppercase tracking-widest mb-4">Open to collaborations:</div>
                <ul className="space-y-2">
                  {profile.openTo?.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-stone-600 font-medium">
                      <span className="text-emerald-500 shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-6">
                <a href={`mailto:${profile.email}`} className="group inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-white rounded-md font-medium hover:bg-stone-800 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5">
                  <Mail size={18} className="group-hover:scale-110 transition-transform" />
                  Contact Me
                </a>
                <a 
                  href="/ashutoshadhikari_cv.pdf" 
                  download="Ashutosh_Adhikari_CV.pdf" 
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-white border border-stone-200 text-stone-700 rounded-md font-medium hover:bg-stone-50 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                  <Download size={18} className="group-hover:-translate-y-0.5 transition-transform" />
                  Resume
                </a>
                <div className="flex items-center gap-5">
                  <a href={profile.github} target="_blank" rel="noreferrer" className="p-2 text-stone-400 hover:text-stone-900 hover:bg-stone-200/50 rounded-full transition-all duration-300">
                    <Github size={20} />
                  </a>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" className="p-2 text-stone-400 hover:text-stone-900 hover:bg-stone-200/50 rounded-full transition-all duration-300">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
              <div className="mt-16 flex items-center gap-2 text-xs text-stone-400 font-medium uppercase tracking-widest">
                <MapPin size={14} />
                {profile.location}
              </div>
            </div>

            {/* Right: Featured Project (TabSense) */}
            <div className="lg:col-span-5 w-full flex justify-end">
              <div className="w-full max-w-md flex flex-col mt-8 lg:mt-0 relative group">
                
                {/* The "Tab" Shape */}
                <div className="relative w-fit bg-stone-100 border-t border-x border-stone-300 rounded-t-xl px-6 py-2.5 flex items-center gap-3 z-10 -mb-px">
                  <div className="w-2.5 h-2.5 rounded-full bg-stone-300" />
                  <span className="text-xs font-bold text-stone-600 tracking-wider">TABSENSE.AI</span>
                  <div className="w-4 h-4 rounded-full border border-stone-300 flex items-center justify-center text-[8px] text-stone-400 ml-2 group-hover:bg-stone-200 transition-colors cursor-pointer">
                    x
                  </div>
                </div>

                {/* The "Browser Window" Body */}
                <div className="w-full border border-stone-300 rounded-b-xl rounded-tr-xl bg-stone-50 p-8 shadow-md relative z-0">
                  <div className="flex items-center gap-2 mb-6 text-[0.65rem] font-bold text-stone-400 uppercase tracking-widest">
                    <span className="text-emerald-500 text-lg leading-none mt-[-2px]">•</span> Featured Project
                  </div>
                  
                  <p className="text-stone-600 text-sm leading-relaxed mb-8">
                    A privacy-focused Chrome extension using <span className="font-semibold text-stone-800">local ML (TensorFlow.js)</span> and <span className="font-semibold text-stone-800">RAG</span> to intelligently classify, group, and chat with your browser tabs.
                  </p>

                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 text-xs font-mono text-stone-400">
                      <span className="shrink-0">{">"}</span>
                      <div className="h-px bg-stone-200 flex-1" />
                      <span>ON-DEVICE INFERENCE</span>
                    </div>
                    
                    <a 
                      href="https://chromewebstore.google.com/detail/hnacpdbfpmihgnelkcjcimmnnnlnelhf" 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3 bg-stone-900 hover:bg-stone-800 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 mt-2"
                    >
                      Install Extension
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="pt-16">
          <div className="flex items-center gap-4 mb-14">
            <h2 className="text-2xl font-bold tracking-tight text-stone-900">Experience</h2>
            <div className="h-px bg-stone-200 flex-1" />
          </div>
          <div className="space-y-16">
            {experience.map((job, i) => (
              <ExperienceItem key={i} job={job} />
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="pt-16">
          <div className="flex items-center gap-4 mb-14">
            <h2 className="text-2xl font-bold tracking-tight text-stone-900">Selected Work</h2>
            <div className="h-px bg-stone-200 flex-1" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="group flex flex-col border border-stone-200/80 rounded-xl p-8 hover:border-stone-300 hover:shadow-xl hover:shadow-stone-900/5 bg-white transition-all duration-500 hover:-translate-y-1">
                <div className="flex justify-between items-start mb-5">
                  <h3 className="text-2xl font-bold text-stone-900">{project.name}</h3>
                  {project.link && (
                    <a href={project.link.url} target="_blank" rel="noreferrer" className="text-stone-400 hover:text-stone-900 transition-colors p-2 -mr-2 -mt-2 rounded-full hover:bg-stone-100">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
                <p className="text-stone-600 mb-3 leading-relaxed font-medium">
                  {project.tagline}
                </p>
                {project.problem && (
                  <p className="text-stone-500 text-sm mb-8 flex-1 leading-relaxed">
                    {project.problem}
                  </p>
                )}
                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-stone-100">
                  {project.stack.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-stone-50 border border-stone-200 text-stone-600 text-[0.65rem] font-bold tracking-widest uppercase rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="pb-16 pt-16">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl font-bold tracking-tight text-stone-900">Technical Proficiency</h2>
            <div className="h-px bg-stone-300/50 flex-1" />
          </div>
          <div className="flex flex-col gap-6">
            {skills.map((skillGroup, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                <h3 className="text-xs font-bold text-stone-900 uppercase tracking-widest sm:w-1/4 shrink-0">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-x-2 gap-y-1">
                  {skillGroup.items.map((item, idx) => (
                    <span key={idx} className="text-sm text-stone-600">
                      {item}{idx < skillGroup.items.length - 1 ? <span className="text-stone-300 mx-1">,</span> : ""}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-300/50 bg-[#e6e4dc]">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-stone-500 uppercase tracking-widest">
          <div>© {new Date().getFullYear()} {profile.name}. All rights reserved.</div>
          <div className="flex items-center gap-8">
            <a href={profile.github} className="hover:text-stone-900 transition-colors">GitHub</a>
            <a href={profile.linkedin} className="hover:text-stone-900 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ExperienceItem({ job }: { job: any }) {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className="group flex flex-col md:flex-row gap-4 md:gap-12">
      <div className="md:w-1/4 shrink-0 text-xs font-semibold text-stone-400 mt-1 uppercase tracking-widest">
        {job.period}
      </div>
      <div className="md:w-3/4 relative">
        {/* Timeline connector line (desktop only) */}
        <div className="hidden md:block absolute -left-[2.5rem] top-2.5 bottom-[-4rem] w-px bg-stone-300/50 group-last:hidden" />
        <div className="hidden md:block absolute -left-[2.7rem] top-2 w-2 h-2 rounded-full border-2 border-stone-800 bg-[#e6e4dc]" />
        
        <button 
          onClick={() => setExpanded(!expanded)}
          className="text-left w-full flex items-center justify-between gap-4 outline-none group/btn"
        >
          <h3 className="text-xl font-bold text-stone-900">
            {job.role} <span className="font-normal text-stone-500 mx-2">at</span> <span className="text-stone-900 underline decoration-stone-400 underline-offset-4">{job.company}</span>
          </h3>
          <div className="p-1.5 rounded-full border border-stone-200 text-stone-400 group-hover/btn:bg-stone-200/50 transition-colors">
            <ChevronDown size={16} className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
          </div>
        </button>

        <div className={`overflow-hidden transition-all duration-300 ${expanded ? "max-h-[800px] opacity-100 mt-6" : "max-h-0 opacity-0"}`}>
          {job.bullets && (
            <ul className="space-y-3">
              {job.bullets.map((point: string, idx: number) => (
                <li key={idx} className="flex gap-4 text-stone-600">
                  <span className="text-stone-400 mt-2.5 shrink-0 text-[8px]">■</span>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
