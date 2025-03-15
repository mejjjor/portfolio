import Scramble from "./Scramble";
import bg1 from "../../../../public/bg-4.jpg";
import AnimatedButton from "../ui/AnimatedButton";

export default function Hero() {
  return (
    <div className="relative h-screen">
      {/* Background with radial gradient */}
      <div
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
          <div className="absolute max-w-2xl px-4">
            <div className="text-3xl sm:text-4xl md:text-5xl flex flex-col gap-6 font-semibold capitalize max-w-72 m-auto">
              <div>développeur</div>
              <div className="text-cyan-600 mb-4 sm:mb-0">
                <Scramble values={["sénior", "lead", "architecte"]} />
              </div>
              <div className="text-amber-600 mb-4 sm:mb-0">
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
              </div>
              <div className="text-emerald-700">
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
              </div>
            </div>
            <div className="mt-12 text-base sm:text-lg md:text-xl text-center text-stone-300">
              <p>
                Je conçois, développe et collabore pour créer des produits
                impactants. Facilitateur d&apos;interactions, j&apos;itère
                activement pour construire des applications web performantes et
                résilientes.
              </p>
            </div>

            {/* Buttons container */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-between max-w-72 m-auto">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
