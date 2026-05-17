"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 mt-16 md:mt-40 w-full z-[20]"
    >
      {/* Left Content */}
      <div className="w-full flex flex-col gap-5 justify-center m-auto text-center md:text-start">
        {/* Role Box */}
        <motion.div
          variants={slideInFromTop}
          className="flex items-center justify-center md:justify-start gap-2 py-[6px] px-[10px] border border-[#7042f88b] opacity-[0.95] rounded-full max-w-fit mx-auto md:mx-0 bg-white/5 backdrop-blur-sm shadow-[0_0_20px_rgba(124,58,237,0.15)]"
        >
          <SparklesIcon className="text-[#b49bff] h-4 w-4 md:h-5 md:w-5" />
          <h1 className="text-[12px] md:text-[13px] text-gray-200 font-semibold">
            Fullstack Developer
          </h1>
        </motion.div>

        {/* Hero Heading */}
        <motion.h1
          variants={slideInFromLeft(0.5)}
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-white max-w-[600px] leading-tight"
        >
          Transforming{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Ideas
          </span>{" "}
          into Seamless User{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Experiences
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg text-gray-400 my-3 sm:my-4 max-w-[540px] mx-auto md:mx-0"
        >
          I&apos;m a Full Stack Software Engineer specializing in building
          modern web applications. Check out my projects and skills.
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.a
          variants={slideInFromLeft(1)}
          href="#projects"
          className="py-4 px-6 bg-transparent border-[#7D43FF] border-2 text-white text-base font-medium rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#7D43FF]/10 max-w-[160px] mx-auto md:mx-0 flex items-center justify-center"
        >
          Learn more
        </motion.a>
      </div>

      {/* Right Side Image */}
      {/* Right Side SVG Tech Stack */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full flex justify-center items-center mt-10 md:mt-0 relative"
      >
        {/* Glow Background */}
        <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>

        {/* SVG */}
        <div className="relative z-10 flex items-center justify-center">
          <svg
            className="w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] md:w-[550px] md:h-[550px] animate-spin-slow opacity-90 drop-shadow-[0_0_45px_rgba(56,189,248,0.35)]"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Circles */}
            <circle
              cx="250"
              cy="250"
              r="220"
              stroke="#38bdf8"
              strokeWidth="2"
              strokeDasharray="10 10"
            />

            <circle
              cx="250"
              cy="250"
              r="170"
              stroke="#818cf8"
              strokeWidth="2"
              strokeDasharray="8 8"
            />

            <circle
              cx="250"
              cy="250"
              r="120"
              stroke="#14b8a6"
              strokeWidth="2"
              strokeDasharray="6 6"
            />

            {/* Laravel */}
            <g>
              <circle cx="250" cy="40" r="35" fill="#FF2D20" />
              <text
                x="250"
                y="48"
                textAnchor="middle"
                fill="white"
                fontSize="14"
                fontWeight="600"
              >
                Laravel
              </text>
            </g>

            {/* PHP */}
            <g>
              <circle cx="420" cy="140" r="35" fill="#777BB3" />
              <text
                x="420"
                y="148"
                textAnchor="middle"
                fill="white"
                fontSize="14"
                fontWeight="600"
              >
                PHP
              </text>
            </g>

            {/* AJAX */}
            <g>
              <circle cx="450" cy="320" r="35" fill="#06B6D4" />
              <text
                x="450"
                y="328"
                textAnchor="middle"
                fill="white"
                fontSize="14"
                fontWeight="600"
              >
                AJAX
              </text>
            </g>

            {/* HTML5 */}
            <g>
              <circle cx="250" cy="460" r="35" fill="#E34F26" />
              <text
                x="250"
                y="468"
                textAnchor="middle"
                fill="white"
                fontSize="14"
                fontWeight="600"
              >
                HTML5
              </text>
            </g>

            {/* CSS3 */}
            <g>
              <circle cx="70" cy="320" r="35" fill="#1572B6" />
              <text
                x="70"
                y="328"
                textAnchor="middle"
                fill="white"
                fontSize="14"
                fontWeight="600"
              >
                CSS3
              </text>
            </g>

            {/* Tailwind */}
            <g>
              <circle cx="90" cy="140" r="35" fill="#38BDF8" />
              <text
                x="90"
                y="148"
                textAnchor="middle"
                fill="white"
                fontSize="12"
                fontWeight="600"
              >
                Tailwind
              </text>
            </g>

            {/* jQuery */}
            <g>
              <circle cx="150" cy="70" r="28" fill="#0769AD" />
              <text
                x="150"
                y="76"
                textAnchor="middle"
                fill="white"
                fontSize="12"
                fontWeight="600"
              >
                jQuery
              </text>
            </g>

            {/* Center Circle */}
            <circle
              cx="250"
              cy="250"
              r="70"
              fill="#111827"
              stroke="#38bdf8"
              strokeWidth="3"
            />

            {/* Center Image Circle */}
            <defs>
              <clipPath id="profileClip">
                <circle cx="250" cy="250" r="70" />
              </clipPath>
            </defs>

            {/* Border Circle */}
            <circle
              cx="250"
              cy="250"
              r="72"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="4"
            />

            {/* Profile Image */}
            <image
              href="/person.png" // put your image inside public folder
              x="180"
              y="180"
              width="140"
              height="140"
              clipPath="url(#profileClip)"
              preserveAspectRatio="xMidYMid slice"
            />

            {/* Dark Overlay */}
            <circle cx="250" cy="250" r="70" fill="rgba(0,0,0,0.25)" />
          </svg>
        </div>
      </motion.div>
    </motion.div>
  );
};
