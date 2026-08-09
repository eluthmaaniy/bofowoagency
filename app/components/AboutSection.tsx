"use client";

import { useState } from "react";
import { bioFull, bioSynopsis } from "@/app/lib/data";
import ClientTestimonials from "./ClientTestimonials";
import Skills from "./Skills";

export default function AboutSection() {
  const [showFullBio, setShowFullBio] = useState(false);

  return (
    <div id="about" className="mt-8">
      <h2 className="text-xl font-bold text-heading md:text-2xl">About me</h2>

      {!showFullBio ? (
        <p className="mt-4 text-gray-700">
          {bioSynopsis}{" "}
          <button
            type="button"
            onClick={() => setShowFullBio(true)}
            className="text-hover transition-colors hover:underline"
          >
            Read more
          </button>
        </p>
      ) : (
        <>
          <p className="mt-4 text-gray-700">{bioSynopsis}</p>
          <p className="mt-4 text-gray-700">{bioFull}</p>
        </>
      )}

      <ClientTestimonials />
      <Skills />
    </div>
  );
}
