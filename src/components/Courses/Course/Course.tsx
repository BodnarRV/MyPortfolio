import React from "react";
import s from "./Course.module.css";
import BaseButton from "../../BaseButton/BaseButton";
import { useTranslation } from "react-i18next";

type CourseProps = {
  specialty: string;
  courseName: string;
  description: string;
  websiteLink?: string;
  btnImg?: string;
};

export default function Course({
  specialty,
  courseName,
  description,
  websiteLink,
  btnImg,
}: CourseProps) {
  const { t } = useTranslation();

  return (
    <div className={s.course_container}>
      <p className={s.specialty}>{specialty}</p>
      <div className={s.descr_container}>
        <h3 className={s.courseName}>{courseName}</h3>
        <p className={s.descr}>{t(description)}</p>
        <BaseButton
          href={websiteLink}
          text={t("coursesWebsiteText")}
          className={s.btn}
          target="blank"
          icon={btnImg}
        />
      </div>
    </div>
  );
}
