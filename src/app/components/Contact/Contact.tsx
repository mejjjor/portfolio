"use client";
import Section from "../Layout/Section";
import AnimatedButton from "../ui/AnimatedButton";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <Section id="contact">
      <div className="relative w-full">
        {/* Background with radial gradient */}
        <div className="absolute inset-0 bg-radial from-black from-40% to-transparent blur-3xl"></div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col relative z-10"
        >
          <div className="max-w-3xl">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-4xl font-bold mb-6"
            >
              Vous avez un projet ou vous voulez plus d&apos;informations ?
              Contactez-moi pour en savoir plus.
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-8"
            >
              <AnimatedButton
                href="mailto:erik.aouizerate.pro@gmail.com"
                variant="primary"
                continuous
              >
                <span className="flex items-center gap-2">Adresse mail</span>
              </AnimatedButton>
              <AnimatedButton
                href="https://erik-aouizerate.me"
                variant="outline"
                external={true}
              >
                Mon CV
              </AnimatedButton>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
