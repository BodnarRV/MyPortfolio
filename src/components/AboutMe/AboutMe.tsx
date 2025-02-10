import React from "react";
import s from "./AboutMe.module.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useTranslation } from "react-i18next";
import BaseButton from "../BaseButton/BaseButton";

import AboutMeImg from "../../assets/AboutMeImg.png";

export default function AboutMe({ isTitle = true, isButton = true }) {
  const { t } = useTranslation();

  return (
    <section className="container">
      {isTitle && (
        <SectionTitle
          pref={"#"}
          title={t("about")}
          isLine={true}
          lineWidth="20%"
        />
      )}

      <div className={s.aboutMe_container}>
        <div className={s.info}>
          <p
            className={s.text}
            dangerouslySetInnerHTML={{ __html: t("aboutMeText") }}
          />
          {isButton && <BaseButton href={"/"} text={t("readMore") + " ->"} />}
        </div>
        <img className={s.aboutMe_img} src={AboutMeImg} alt="About me image" />
      </div>
    </section>
  );
}
