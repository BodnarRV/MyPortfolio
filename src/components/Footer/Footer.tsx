import React from "react";
import s from "./Footer.module.css";

import Logo from "../../assets/social/Logo.png";
import { useTranslation } from "react-i18next";
import IconSvg from "../IconSvg/IconSvg";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className={s.underline}>
      <div className="container">
        <div className={s.footer_container}>
          <div className={s.logo_container}>
            <a className={s.title} href="/">
              <img className={s.logo_img} src={Logo} />
              {t("myName")}
            </a>
            <p className={s.about_text}>{t("footerAboutText")}</p>
          </div>
          <div className={s.media}>
            <h3 className={s.media_title}>{t("media")}</h3>
            <div className={s.media_links}>
              <IconSvg id="github" className={s.icon} width={24} height={24} />
              <IconSvg
                id="telegram"
                className={s.icon}
                width={24}
                height={24}
              />
              <IconSvg
                id="instagram"
                className={s.icon}
                width={24}
                height={24}
              />
              <IconSvg id="discord" className={s.icon} width={24} height={24} />
            </div>
          </div>
          <p className={s.copyright}>&copy; 2025. Develop by Rostyslav</p>
        </div>
      </div>
    </div>
  );
}
