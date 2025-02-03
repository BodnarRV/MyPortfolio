import React from "react";
import s from "./Projects.module.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useTranslation } from "react-i18next";
import Project from "./Project/Project";
import { projects } from "./projectsData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section className="container">
      <SectionTitle
        pref="#"
        title={t("projects")}
        isLine={true}
        lineWidth="30%"
        isBtn={true}
        btnText={t("viewAll")}
        href="/"
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
            slidesPerView: 4,
          },
        }}
        pagination={{
          clickable: true,
          // Need to add ??
          // dynamicBullets: true,
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <Project {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
