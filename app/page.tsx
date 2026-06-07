"use client";

import { useState } from "react";
import { content } from "../content";

type Section = "about" | "education" | "experience" | "projects" | "art" | "writing" | "more about me";

const sections: Section[] = ["about", "education", "experience", "projects", "art", "writing", "more about me"];

function SectionContent({ section, onNavigate }: { section: Section; onNavigate: (s: Section) => void }) {
  switch (section) {
    case "about":
      return (
        <div className="section-content">
          <p>
            I&apos;m a sophomore at Princeton University studying computer science with minors in statistics &amp; machine learning and visual arts. I&apos;m interested broadly in AI, high-performance computing, and{" "}
            <button className="inline-link" onClick={() => onNavigate("more about me")}>the pursuit of truth</button>.
          </p>
          <div className="contact-links">
            <a href={`mailto:${content.links.email}`}>email</a>
            <a href={content.links.linkedin} target="_blank" rel="noopener noreferrer">linkedin</a>
            <a href={content.links.github} target="_blank" rel="noopener noreferrer">github</a>
          </div>
        </div>
      );

    case "education":
      return (
        <div className="section-content">
          {content.education.map((ed) => (
            <div className="entry" key={ed.school}>
              <div className="entry-title">{ed.school}</div>
              <div className="entry-meta">{ed.degree}</div>
              <div className="entry-meta">{ed.minors}</div>
              <div className="entry-meta">{ed.date} · {ed.location}</div>
              <div className="courses">{ed.courses.join(", ")}</div>
            </div>
          ))}
          <div className="entry">
            <div className="entry-title">Technical Skills</div>
            <div className="skill-row"><span className="skill-label">languages — </span>{content.skills.languages}</div>
            <div className="skill-row"><span className="skill-label">frameworks — </span>{content.skills.frameworks}</div>
            <div className="skill-row"><span className="skill-label">tools — </span>{content.skills.tools}</div>
          </div>
        </div>
      );

    case "experience":
      return (
        <div className="section-content">
          <div className="exp-table">
            {content.experience.map((job) => (
              <div className="exp-row" key={job.company + job.date}>
                <div className="exp-left">
                  <span className="entry-title">{job.company}</span>
                  {job.recent && <span className="recent-badge">current</span>}
                </div>
                <div className="exp-mid">
                  <span className="entry-meta">{job.role}</span>
                  <span className="entry-meta exp-date">{job.date}</span>
                </div>
                <div className="exp-right entry-summary">{job.summary}</div>
              </div>
            ))}
          </div>
        </div>
      );

    case "projects":
      return (
        <div className="section-content proj-grid">
          {content.projects.map((proj) => (
            <div className="entry" key={proj.name}>
              <div className="entry-title">{proj.name}</div>
              <div className="entry-meta">{proj.subtitle}</div>
              <div className="entry-meta">{proj.tech}</div>
              <div className="project-links">
                <a href={proj.links.devpost} target="_blank" rel="noopener noreferrer">devpost</a>
                <a href={proj.links.github} target="_blank" rel="noopener noreferrer">github</a>
              </div>
              <ul className="entry-bullets">
                {proj.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      );

    case "art":
      return (
        <div className="section-content">
          <p>{content.art}</p>
        </div>
      );

    case "writing":
      return (
        <div className="section-content">
          <p>{content.writing}</p>
        </div>
      );

    case "more about me":
      return (
        <div className="section-content">
          <div className="credo-label">{content.more}</div>
          <ul className="credo">
            {content.credo.map((item, i) => (
              <li key={i}>
                <div className="credo-line">{item.line}</div>
                {item.text && <p className="credo-text">{item.text}</p>}
              </li>
            ))}
          </ul>
        </div>
      );
  }
}

export default function Home() {
  const [active, setActive] = useState<Section | null>("about");

  return (
    <main>
      <div className="menu">
        <h1>{content.name}</h1>
        <nav>
          <ul>
            {sections.map((s) => (
              <li key={s}>
                <button
                  className={active === s ? "active" : ""}
                  onClick={() => setActive(active === s ? null : s)}
                >
                  {s}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {active && (
        <div className={["experience", "projects", "more about me"].includes(active) ? "section-wrapper-wide" : "section-wrapper"}>
          <SectionContent section={active} onNavigate={setActive} />
        </div>
      )}
    </main>
  );
}
