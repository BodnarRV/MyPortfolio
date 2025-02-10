import React from "react";
import s from "./ContactsPage.module.css";
import Contacts from "../../components/Contacts/Contacts";

export default function ContactsPage() {
  return (
    <section>
      <Contacts isLine={false} />
    </section>
  );
}
