import React from "react";
import s from "./Skill.module.css";
import { SkillsData } from "./skillsData";

type SkillCategory = {
  title: string;
  skills: string[];
};

export default function Skill() {
  return (
    <div className={s.skill_container}>
      {SkillsData.map((category: SkillCategory) => (
        <div key={category.title} className={s.category}>
          <h3 className={s.title}>{category.title}</h3>
          <p className={s.skills}>{category.skills.join(" ")}</p>
        </div>
      ))}
    </div>
  );
}
