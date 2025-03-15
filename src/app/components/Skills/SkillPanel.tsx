import Image from "next/image";
import { Skill } from "./skillsData";

interface SkillPanelProps {
  title: string;
  skills: Skill[];
}

const SkillPanel: React.FC<SkillPanelProps> = ({ title, skills }) => {
  return (
    <div className="rounded-xl bg-neutral-800 p-6">
      <h3 className="text-3xl font-bold pb-2">{title}</h3>
      <ul className="flex flex-wrap justify-between">
        {skills.map((skill) => {
          return (
            <li
              key={skill.name}
              className="flex items-center rounded-lg justify-center gap-6 text-xl p-2 hover:bg-gray-600/50 cursor-pointer max-w-sm"
            >
              <Image
                alt={skill.name}
                src={skill.icon}
                width={50}
                height={50}
                style={{ width: "50px", height: "auto" }}
              />
              <div className="grow">
                <div className="font-semibold">{skill.name}</div>
                <div className="font-light text-gray-400 text-base">
                  {skill.description}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SkillPanel;
