import {
  AiOutlineMail,
  AiOutlinePhone,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { FaDev } from "react-icons/fa";

export const useData = () => ({
  data: {
    bio: {
      firstName: "Woraphol",
      lastName: "Wananiyakul",
      currentRole: "Software Engineer",
      contacts: [
        {
          icon: <AiOutlineMail />,
          text: import.meta.env.EMAIL,
        },
        {
          icon: <AiOutlinePhone />,
          text: import.meta.env.EMAIL,
        },
        {
          icon: <CgWebsite />,
          text: "jungai.me",
        },
        {
          icon: <FaDev />,
          text: "dev.to/jungai",
        },
        {
          icon: <AiFillGithub />,
          text: "github.com/jungai",
        },
      ],
    },
    skills: [
      "typescript",
      "javascript",
      "react",
      "vue",
      "nodejs",
      "express",
      "jest",
      "wsl2",
      "linux(ubuntu, popos), macos",
    ],
    workExps: [
      {
        role: "full stack developer",
        company: "Agent One Co., Ltd.",
        timeline: "june 2019 - jan 2022",
        jobDetail: [
          `Developed web applications(ERP) using reactjs, vuejs with
          micro-frontend architecture.`,
          `Developed backend using nodejs, express with micro-services
          architecture.`,
          `Find a new technology and adopt it to the project.`,
          `Coached and mentor co-operative student.`,
        ],
      },
      {
        role: "part-time remote developer",
        company: "Agent One Co., Ltd.",
        timeline: "january 2019 - march 2019",
        jobDetail: [
          "Developed web applications(ERP) using nuxtjs.",
          "Developed backend using nodejs, express.",
        ],
      },
      {
        role: "co-operative student as developer",
        company: "Agent One Co., Ltd.",
        timeline: "june 2018 - december 2018",
        jobDetail: [
          "Developed web applications using nuxtjs.",
          "Developed backend using nodejs, express.",
        ],
      },
    ],
  },
});
