import React from "react";
import s from "./Project.module.css";
import { useTranslation } from "react-i18next";
import BaseButton from "../../BaseButton/BaseButton";

type ProjectProps = {
  imageUrl?: string | null;
  imageAlt?: string;
  technologies: string;
  projName: string;
  description: string;
  liveLink: string;
  gitLink: string;
};
const Project: React.FC<ProjectProps> = ({
  imageUrl,
  imageAlt,
  technologies,
  projName,
  description,
  liveLink,
  gitLink,
}) => {
  const { t } = useTranslation();

  return (
    <div className={s.project_container}>
      {imageUrl && (
        <img
          className={s.img}
          src={imageUrl}
          alt={imageAlt ?? "Project image"}
        />
      )}
      <p className={s.technologies}>{t(technologies)}</p>

      <div className={s.descr_container}>
        <h3 className={s.projName}>{t(projName)}</h3>
        <p className={s.descr}>{t(description)}</p>

        <div className={s.links_container}>
          <BaseButton
            href={liveLink}
            text="Live"
            ariaLabel={t("areaLabelLive")}
            className={s.btn}
          />
          <BaseButton
            href={gitLink}
            text="Git"
            ariaLabel={t("areaLabelGit")}
            className={s.btn}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
