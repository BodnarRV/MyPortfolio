import React from "react";
import s from "./Skills.module.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import Skill from "./Skill/Skill";

import SkillsImg from "../../assets/SkillsImg.png";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section className="container">
      <SectionTitle
        pref={"#"}
        title={t("skills")}
        isLine={true}
        lineWidth="90%"
      />
      <div className={s.skills_container}>
        <img className={s.skills_image} src={SkillsImg} alt="Skills image" />
        <Skill />
      </div>
    </section>
  );
}
