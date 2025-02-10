import React from "react";
import s from "./FunFacts.module.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useTranslation } from "react-i18next";
import { funFacts } from "./FunFactsData";
import FunFact from "./FunFact/FunFact";

export default function FunFacts() {
  const { t } = useTranslation();

  return (
    <section className="container">
      <SectionTitle pref={"#"} title={t("funFactsTitle")} />
      <div className={s.funFacts}>
        {funFacts.map((funFact, index) => (
          <FunFact key={index} {...funFact} />
        ))}
      </div>
    </section>
  );
}
