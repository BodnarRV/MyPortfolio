import React from "react";
import s from "./Contacts.module.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import { contactsData } from "./ContactsData";
import { useTranslation } from "react-i18next";
import IconSvg from "../IconSvg/IconSvg";

export default function Contacts({ isLine = true }) {
  const { t } = useTranslation();

  return (
    <section className="container">
      <SectionTitle
        pref={"#"}
        title={t("contacts")}
        isLine={isLine}
        lineWidth="30%"
      />
      <div className={s.contacts_container}>
        <p className={s.text}>{t("contactsText")}</p>
        <div className={s.contacts}>
          <h3 className={s.title}>{t("messageME")}</h3>
          {contactsData.map((contact, index) => (
            <a
              key={index}
              className={s.contact}
              href={contact.href}
              target="blank"
            >
              <IconSvg id={contact.img} className={s.icon} />
              <span className={s.contact_text}>{contact.text}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
