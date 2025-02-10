import React from "react";
import s from "./Company.module.css";
import { useTranslation } from "react-i18next";

type CompanyProps = {
  imageUrl?: string | null;
  imageAlt?: string;
  role: string;
  company: string;
  duration: string;
  projectAbout: string;
  responsibilities: string[];
};
const Project: React.FC<CompanyProps> = ({
  imageUrl,
  imageAlt,
  role,
  company,
  duration,
  projectAbout,
  responsibilities,
}) => {
  const { t } = useTranslation();

  return (
    <div className={s.company_container}>
      {imageUrl && (
        <img
          className={s.img}
          src={imageUrl}
          alt={imageAlt ?? "Company image"}
        />
      )}
      <p className={s.role}>{t(role)}</p>
      <div className={s.about_company}>
        <h3 className={s.company_name}>{t(company)}</h3>
        <p className={s.duration}>{t(duration)}</p>
      </div>
      <div className={s.about}>
        <h4 className={s.project_title}>{t("projectTitle")}</h4>
        <p className={s.project_about}>{t(projectAbout)}</p>
      </div>
      <ul className={s.responsibilities}>
        {t("responsibilities")}
        {responsibilities.map((item, index) => (
          <li className={s.responsibility} key={index}>
            - {t(item)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
