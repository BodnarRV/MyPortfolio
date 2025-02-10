import React from "react";
import s from "./Courses.module.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useTranslation } from "react-i18next";
import { courses } from "./CorsesData";

import Course from "./Course/Course";

export default function Courses() {
  const { t } = useTranslation();

  return (
    <section>
      <SectionTitle pref={"#"} title={t("courses")} />
      <div className={s.courses}>
        {courses.map((company, index) => (
          <Course key={index} {...company} />
        ))}
      </div>
    </section>
  );
}
