import Section from "../Layout/Section";
import AnimatedButton from "../ui/AnimatedButton";

export default function Contact() {
  return (
    <Section id="contact">
      <div className="relative w-full">
        {/* Background with radial gradient */}
        <div className="absolute inset-0 bg-radial from-black from-40% to-transparent blur-3xl"></div>

        {/* Content */}
        <div className="flex flex-col relative z-10">
          <div className="max-w-3xl">
            <h3 className="text-2xl sm:text-4xl font-bold mb-6">
              Vous avez un projet ou vous voulez plus d&apos;informations ?
              Contactez-moi pour en savoir plus.
            </h3>

            <div className="flex flex-col sm:flex-row gap-4">
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
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
