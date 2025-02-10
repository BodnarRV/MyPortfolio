import React from "react";
import s from "./Experience.module.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import Company from "./Company/Company";
import { companies } from "./Company/CompaniesData";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Experience() {
  const { t } = useTranslation();

  return (
    <section className="container">
      <SectionTitle
        pref={"#"}
        title={t("experience")}
        isBtn={true}
        btnText={t("viewAll")}
        isLine={true}
        lineWidth="30%"
        href="/experience"
      />

      <Swiper
        style={{ padding: "25px 0 0 0" }}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1220: {
            slidesPerView: 3,
          },
        }}
        pagination={{
          clickable: true,
          // Need to add ??
          // dynamicBullets: true,
        }}
      >
        {companies.map((company, index) => (
          <SwiperSlide key={index}>
            <Company {...company} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
