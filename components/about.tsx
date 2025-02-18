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
        Hello, I'm Berkat! 7th semester students of the Informatics Engineering Study Program at Immanuel Christian University who have completed their final projects and
are waiting for graduation. Strong analytical competence, in-depth understanding of technology, and expertise in
complex problem solving obtained through education in the field of Informatics. Have a special interest in
software development and data analysis, supported by practical experience as a Backend Developer in several projects
academic and MSIB 6 programs in technology companies. Have good communication and teamwork skills, proven
by actively contributing as a coordinator in several organizations and activities on and off campus. Can
adapt quickly, learn new things, and be able to work independently and collaboratively. Actively seeking career opportunities that
enables continuous professional development and makes a significant contribution to the progress of the company.
      </p>
    </motion.section>
  );
}
