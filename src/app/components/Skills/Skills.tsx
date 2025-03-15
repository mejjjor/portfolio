import SkillPanel from "./SkillPanel";
import { expertiseSkills, maitriseSkills, interesseSkills } from "./skillsData";
import Section from "../Layout/Section";

export default function Skills() {
  return (
    <Section id="competences" title="Compétences" className="relative">
      <div className="flex flex-col gap-8">
        <SkillPanel title="Expertise :" skills={expertiseSkills} />
        <SkillPanel title="Maitrisé :" skills={maitriseSkills} />
        <SkillPanel title="Interessé par :" skills={interesseSkills} />
      </div>
    </Section>
  );
}
