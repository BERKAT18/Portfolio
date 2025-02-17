"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import BurstBload from "./burst-bload";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section ref={ref} className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.175 }} id="about">
      <div className="flex justify-center">
        <SectionHeading>👨‍💻 About Me</SectionHeading>
        <BurstBload />
      </div>
      <p>
        Hello, I'm Berkat! 7th semester students of the Informatics Engineering Study Program at Immanuel Christian University who have completed their final projects and are waiting for graduation. They possess strong analytical skills, a
        deep understanding of technology, and expertise in complex problem solving acquired through education in the field of Informatics. They have a particular interest in software development and data analysis, supported by practical
        experience as a Backend Developer in several academic projects and the MSIB 6 program at technology companies. They have good communication and teamwork skills, demonstrated by actively contributing as a coordinator in several
        organizations and activities both on and off campus. They can adapt quickly, learn new things, and work independently as well as collaboratively. They are actively seeking career opportunities that allow for continuous professional
        development and make a significant contribution to the advancement of the company.
      </p>
    </motion.section>
  );
}
