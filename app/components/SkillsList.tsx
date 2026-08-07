"use client";

import { useState } from "react";

const VISIBLE_COUNT = 10;

type SkillsListProps = {
  skills: string[];
};

export function SkillsList({ skills }: SkillsListProps) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = skills.length > VISIBLE_COUNT;
  const visibleSkills =
    expanded || !hasMore ? skills : skills.slice(0, VISIBLE_COUNT);
  const remaining = skills.length - VISIBLE_COUNT;

  return (
    <div className="flex flex-wrap gap-2">
      {visibleSkills.map((skill) => (
        <span
          key={skill}
          className="rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-ink transition hover:border-accent"
        >
          {skill}
        </span>
      ))}
      {hasMore && (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="rounded-lg border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition hover:bg-accent/20"
        >
          {expanded ? "Show less" : `+${remaining} more`}
        </button>
      )}
    </div>
  );
}
