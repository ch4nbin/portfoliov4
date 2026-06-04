"use client";

import { useState } from "react";
import { content } from "../content";

type Section = "about" | "education" | "experience" | "projects" | "art" | "writing" | "more about me";

const sections: Section[] = ["about", "education", "experience", "projects", "art", "writing", "more about me"];

function SectionContent({ section }: { section: Section }) {
  switch (section) {
    case "about":
      return (
        <div className="section-content">
          <p>{content.about}</p>
          <div className="contact-links">
            <a href={`mailto:${content.links.email}`}>{content.links.email}</a>
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
        </div>
      );

    case "experience":
      return (
        <div className="section-content">
          {content.experience.map((job) => (
            <div className="entry" key={job.company + job.date}>
              <div className="entry-title">{job.company}</div>
              <div className="entry-meta">{job.role} · {job.location}</div>
              <div className="entry-meta">{job.date}</div>
              <ul className="entry-bullets">
                {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      );

    case "projects":
      return (
        <div className="section-content">
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
          <p>{content.more}</p>
          <div className="skill-row"><span className="skill-label">languages — </span>{content.skills.languages}</div>
          <div className="skill-row"><span className="skill-label">frameworks — </span>{content.skills.frameworks}</div>
          <div className="skill-row"><span className="skill-label">tools — </span>{content.skills.tools}</div>
        </div>
      );
  }
}

export default function Home() {
  const [active, setActive] = useState<Section | null>(null);

  return (
    <main>
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
      {active && <SectionContent section={active} />}
    </main>
  );
}
