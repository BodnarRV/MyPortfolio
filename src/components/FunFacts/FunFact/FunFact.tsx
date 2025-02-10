import React from "react";
import s from "./FunFact.module.css";
import { useTranslation } from "react-i18next";

type FunFactsProps = {
  funFact: string;
};

const FunFact: React.FC<FunFactsProps> = ({ funFact }) => {
  const { t } = useTranslation();

  return (
    <div className={s.funFact_container}>
      <p
        className={s.funFact}
        dangerouslySetInnerHTML={{ __html: t(funFact) }}
      />
    </div>
  );
};

export default FunFact;
