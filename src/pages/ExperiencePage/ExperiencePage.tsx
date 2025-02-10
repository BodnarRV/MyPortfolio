import React from "react";
import s from "./ExperiencePage.module.css";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Courses from "../../components/Courses/Courses";
import { useTranslation } from "react-i18next";
import Project from "../../components/Projects/Project/Project";
import { projects } from "../../components/Projects/projectsData";
import Company from "../../components/Experience/Company/Company";
import { companies } from "../../components/Experience/Company/CompaniesData";

export default function ExperiencePage() {
  const { t } = useTranslation();

  return (
    <section>
      <div className="container">
        <SectionTitle pref={"/"} title={t("experience")} paddingTop="0" />
        <p className={s.myWay}>{t("myWay")}</p>

        <SectionTitle pref={"#"} title={t("projects")} />
        <div className={s.projects}>
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>

        <SectionTitle pref={"#"} title={t("experience")} />
        <div className={s.experience}>
          {companies.map((company, index) => (
            <Company key={index} {...company} />
          ))}
        </div>

        <Courses />
      </div>
    </section>
  );
}
