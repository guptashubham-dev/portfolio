import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import heroImage from "../assets/Shubham-Gupta.jpeg";
import Lottie from "lottie-react";
import heroAnimation from "../assets/BG_sparkles.json";
import { Link } from "react-router-dom";

const Hero = () => {
  const textToType = "Hii, I’m Shubham Gupta\nBreathing Intelligence Into Code";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < textToType.length) {
        setDisplayedText((prev) => prev + textToType.charAt(i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 60);

    return () => clearInterval(interval);
  }, []);

  const backgroundVariant = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const formattedText = displayedText.split("\n").map((line, index) => {
    if (line.includes("Shubham Gupta")) {
      return (
        <span key={index}>
          {line.split("Shubham Gupta")[0]}
          <span className="text-[#39acff]">Shubham Gupta</span>
          <br />
        </span>
      );
    } else if (line.toLowerCase().includes("breathing intelligence into code")) {
      return (
        <span key={index}>
          <motion.span
            className="inline-block px-2 py-0 rounded-sm font-medium"
            style={{ display: "inline-block", backgroundColor: "#FCD12A" }}
            variants={backgroundVariant}
            initial="hidden"
            animate={displayedText.includes("Breathing Intelligence Into Code") ? "visible" : "hidden"}
          >
            Breathing Intelligence Into Code
          </motion.span>
          <br />
        </span>
      );
    } else {
      return (
        <span key={index}>
          {line}
          <br />
        </span>
      );
    }
  });

  const containerMotion = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const imageMotion = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, delay: 0.4, ease: "easeOut" },
    },
  };

  return (
    <main className="relative flex flex-col md:flex-row justify-between items-center px-6 md:px-16 pt-10 pb-20 md:pt-12 font-navbar max-w-7xl mx-auto overflow-hidden md:min-h-[100vh]">

      {/* Left Section */}
      <motion.div
        variants={containerMotion}
        initial="hidden"
        animate="visible"
        className="w-full md:w-3/5 text-center md:text-left space-y-4 z-10 pb-15 md:mt-0"
      >

        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-zinc-900 whitespace-pre-line">
          {formattedText}
        </h1>

        <p className="text-sm text-black max-w-xl mx-auto md:mx-0 text-justify">
          I am a <span className="font-semibold">Software Engineer</span> at <span className="font-semibold">Zensar Technologies</span> specializing in 
          <span className="font-semibold"> Java Backend</span> and <span className="font-semibold">Full-Stack Development</span>. 
          With a B.Tech foundation in <span className="font-semibold">AI/ML</span>, I build scalable, AI-infused applications. 
          From robust <span className="font-semibold">Spring Boot</span> architectures and <span className="font-semibold">React</span> interfaces 
          to integrating deep learning models, I blend software engineering principles with intelligent systems to create solutions that drive real-world impact.
        </p>

        <div className="flex justify-center md:justify-start gap-4 flex-wrap">
          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} href="#projects">
            <button className="bg-[#39acff] text-white px-6 py-3 rounded-[0.5rem] font-medium hover:opacity-90 transition cursor-pointer">
              See Projects
            </button>
          </motion.a>

          <Link to="/contact">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="bg-[#FCD12A] text-black px-6 py-3 rounded-[0.5rem] font-medium transition cursor-pointer">
              Contact Me
            </motion.button>
          </Link>

        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        variants={imageMotion}
        initial="hidden"
        animate="visible"
        className="w-full md:w-2/5 flex justify-center items-center relative"
      >
        {/* Lottie Animation in background */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
          <Lottie
            animationData={heroAnimation}
            loop
            autoplay
            style={{ width: 900, height: 900 }}
          />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
          <Lottie
            animationData={heroAnimation}
            loop
            autoplay
            style={{ width: 900, height: 900 }}
          />
        </div>

        {/* Foreground Image */}
        <img
          src={heroImage}
          alt="Hero Image"
          className="w-full max-w-[300px] md:max-w-[400px] h-auto rounded-[1.25rem] shadow-xl hover:scale-105 transition-transform duration-300 relative z-10 mb-9"
        />
      </motion.div>
    </main>
  );
};

export default Hero;