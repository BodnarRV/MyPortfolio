import React from "react";
import s from "./Hero.module.css";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="container">
      <h1
        className={s.heroTitle}
        dangerouslySetInnerHTML={{ __html: t("heroTitle") }}
      ></h1>
      <p className={s.heroSubtitle}>{t("heroSubtitle")}</p>
    </section>
  );
}
