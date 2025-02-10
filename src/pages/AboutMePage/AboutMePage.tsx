import React from "react";
import s from "./AboutMePage.module.css";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useTranslation } from "react-i18next";
import AboutMe from "../../components/AboutMe/AboutMe";
import FunFacts from "../../components/FunFacts/FunFacts";
import { SkillsData } from "../../components/Skills/Skill/skillsData";
import Skill from "../../components/Skills/Skill/Skill";

export default function AboutMePage() {
  const { t } = useTranslation();

  return (
    <section>
      <div className="container">
        <SectionTitle pref={"/"} title={t("about")} />
        <p className={s.whoAmI}>{t("whoAmI")}</p>
      </div>
      <AboutMe isTitle={false} isButton={false} />
      <FunFacts />
    </section>
  );
}
