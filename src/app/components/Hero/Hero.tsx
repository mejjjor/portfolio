"use client";
import Scramble from "./Scramble";
import bg1 from "../../../../public/bg-4.jpg";
import AnimatedButton from "../ui/AnimatedButton";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative h-screen">
      {/* Background with radial gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 1) 100%), url(${bg1.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-white flex flex-col h-screen">
        <div className="grow flex justify-center items-center flex-col px-6 relative">
          <div className="w-full h-full bg-radial from-black from-0% to-transparent blur-3xl my-16"></div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute max-w-2xl px-4"
          >
            <div className="text-3xl sm:text-4xl md:text-5xl flex flex-col gap-6 font-semibold capitalize max-w-72 m-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                développeur
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="text-cyan-600 mb-4 sm:mb-0"
              >
                <Scramble values={["sénior", "lead", "architecte"]} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="text-amber-600 mb-4 sm:mb-0"
              >
                <Scramble
                  values={[
                    "fullstack",
                    "frontend",
                    "devops",
                    "backend",
                    "typescript",
                    "react",
                    "web",
                    "cloud",
                    "python",
                  ]}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.7 }}
                className="text-emerald-700"
              >
                <Scramble
                  values={[
                    "engageant",
                    "communiquant",
                    "curieux",
                    "passionné",
                    "autonome",
                    "adaptable",
                    "créatif",
                    "pédagogue",
                    "efficace",
                  ]}
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.7 }}
              className="mt-12 text-base sm:text-lg md:text-xl text-center text-stone-300"
            >
              <p>
                Je conçois, développe et collabore pour créer des produits
                impactants. Facilitateur d&apos;interactions, j&apos;itère
                activement pour construire des applications web performantes et
                résilientes.
              </p>
            </motion.div>

            {/* Buttons container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.7 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-between max-w-72 m-auto"
            >
              {/* Animated button for projects with continuous animation */}
              <AnimatedButton
                href="#projets"
                variant="primary"
                continuous={true}
              >
                Mon portfolio
              </AnimatedButton>

              {/* Outline button - External website */}
              <AnimatedButton
                href="https://erik-aouizerate.me"
                variant="outline"
                external={true}
              >
                Mon CV
              </AnimatedButton>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
