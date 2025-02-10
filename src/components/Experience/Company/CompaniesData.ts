import Malo from "../../../assets/Companies/malo.png";
import Devlight from "../../../assets/Companies/devlight.png";
import SoftServe from "../../../assets/Companies/softServe.png";

export const companies = [
  {
    imageUrl: Malo,
    imageAlt: "maloProjAlt",
    role: "CEO",
    company: "maloName",
    duration: "maloDuration",
    projectAbout: "maloAbout",
    responsibilities: [
      "maloResponsibilities",
      "maloResponsibilities2",
      "maloResponsibilities3",
    ],
  },
  {
    imageUrl: Devlight,
    imageAlt: "devlightProjAlt",
    role: "Developer",
    company: "devlightName",
    duration: "devlightDuration",
    projectAbout: "devlightAbout",
    responsibilities: ["devlightResponsibilities"],
  },
  {
    imageUrl: SoftServe,
    imageAlt: "softServeProjAlt",
    role: "Software Engineer",
    company: "softServeName",
    duration: "softServeDuration",
    projectAbout: "softServeAbout",
    responsibilities: [
      "softServeResponsibilities1",
      "softServeResponsibilities2",
    ],
  },
];
