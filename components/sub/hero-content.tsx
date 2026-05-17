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
            Software Developer
          </h1>
        </motion.div>

        {/* Hero Heading */}
        <motion.h1
          variants={slideInFromLeft(0.5)}
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-white max-w-[700px] leading-tight"
        >
          Building{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Stunning Web Experiences
          </span>{" "}
          with Creative Design &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Clean Code
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

            {/* javascript */}
            <g>
              <circle cx="250" cy="40" r="35" fill="#808080" opacity="0.4" />

              <image
                href="/skills/laravel.png"
                x="228"
                y="18"
                width="44"
                height="44"
              />
            </g>

            {/* PHP */}
            {/* PHP */}
            <g>
              <circle cx="420" cy="140" r="35" fill="#808080" opacity="0.4" />

              <image
                href="/skills/php.png"
                x="398"
                y="118"
                width="44"
                height="44"
              />
            </g>

            {/* AJAX */}
            {/* React */}
            <g>
              <circle cx="450" cy="320" r="35" fill="#808080" opacity="0.4" />

              <image
                href="/skills/react.png"
                x="428"
                y="298"
                width="44"
                height="44"
              />
            </g>
            {/* HTML5 */}
            <g>
              <circle cx="250" cy="460" r="35" fill="#808080" opacity="0.4" />

              <image
                href="/skills/html.png"
                x="230"
                y="440"
                width="40"
                height="40"
              />
            </g>

            {/* CSS3 */}
            <g>
              <circle cx="70" cy="320" r="35" fill="#808080" opacity="0.4" />

              <image
                href="/skills/css.png"
                x="50"
                y="300"
                width="40"
                height="40"
              />
            </g>

            {/* Tailwind */}
            <g>
              <circle cx="90" cy="140" r="35" fill="#808080" opacity="0.4" />

              <image
                href="/skills/tailwind.png"
                x="70"
                y="120"
                width="40"
                height="40"
              />
            </g>

            {/* jQuery */}
            <g>
              <circle cx="150" cy="70" r="28" fill="#808080" opacity="0.4" />

              <image
                href="/skills/js.png"
                x="134"
                y="54"
                width="32"
                height="32"
              />
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
