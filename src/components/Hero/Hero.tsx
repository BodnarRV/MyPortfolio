import React from "react";
import s from "./Hero.module.css";
import { useTranslation } from "react-i18next";
import BaseButton from "../BaseButton/BaseButton";

import HeroImg from "../../assets/HeroImg.png";
import HeroImg2x from "../../assets/HeroImg_2x.png";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="container">
      <div className={s.hero_container}>
        <div className={s.info}>
          <h1
            className={s.heroTitle}
            dangerouslySetInnerHTML={{ __html: t("heroTitle") }}
          ></h1>
          <p className={s.heroSubtitle}>{t("heroSubtitle")}</p>
          <BaseButton href={"/contacts"} text={t("contactMe")} />
        </div>
        <div className={s.info_decor}>
          <picture>
            <source srcSet={HeroImg2x} media="(min-width: 768px)" />
            <img className={s.heroImg} src={HeroImg} alt="HeroImg" />
          </picture>
          <div className={s.work_status}>
            <div className={s.work_hash}></div>
            {t("currentWork")}
          </div>
        </div>
      </div>
    </section>
  );
}
