import React from "react";
import s from "./Quote.module.css";
import { useTranslation } from "react-i18next";
import IconSvg from "../IconSvg/IconSvg";

export default function Quote() {
  const { t } = useTranslation();

  return (
    <section className="container quote">
      <div className={s.quote_container}>
        <div className={s.quote}>{t("quote")}</div>
        <div className={s.author}>{t("quoteAuthor")}</div>
      </div>
    </section>
  );
}
