"use client";

import { useState } from "react";
import { skillsHidden, skillsVisible } from "@/app/lib/data";

export default function Skills() {
  const [expanded, setExpanded] = useState(false);
  const moreCount = skillsHidden.length;

  return (
    <>
      <h3 className="mt-8 text-xl font-bold text-heading">Skills</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {skillsVisible.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-gray-100 px-3 py-1 text-sm text-heading"
          >
            {skill}
          </span>
        ))}

        {!expanded && (
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="rounded-full bg-gray-100 px-3 py-1 text-sm font-bold text-heading transition-colors hover:text-hover"
          >
            +{moreCount}
          </button>
        )}

        {expanded &&
          skillsHidden.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-gray-100 px-3 py-1 text-sm text-heading"
            >
              {skill}
            </span>
          ))}
      </div>
    </>
  );
}
