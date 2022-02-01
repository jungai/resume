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
      firstName: "woraphol",
      lastName: "wananiyakul",
      currentRole: "Software Engineer",
      address: "Bang Sao Thong,Samut Prakan 10570",
      contacts: [
        {
          icon: <AiOutlineMail />,
          text: import.meta.env.VITE_EMAIL,
        },
        {
          icon: <AiOutlinePhone />,
          text: import.meta.env.VITE_PHONE_NUMBER,
        },
        {
          icon: <CgWebsite />,
          text: "jungai.me",
        },
        {
          icon: <FaDev />,
          text: "jungai",
        },
        {
          icon: <AiFillGithub />,
          text: "jungai",
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
      "linux(ubuntu, popos)",
      "macos",
      "vim",
    ],
    workExps: [
      {
        role: "full stack developer",
        company: "Agent One Co., Ltd.",
        timeline: "Jun 2019 - Jan 2022",
        jobDetail: [
          `Implemented web applications using typescript,nuxtjs,reactjs,vuejs with
          micro-frontend architecture.`,
          `Implemented backend using nodejs, express with micro-services
          architecture.`,
          "Find tooling to improve developer experience and adopt it to team",
          "Deployed application to AWS cloud with pipeline (bitbucket)",
          `Coached and mentor co-operative student.`,
        ],
      },
      {
        role: "part-time remote developer",
        company: "Agent One Co., Ltd.",
        timeline: "Jan 2019 - Mar 2019",
        jobDetail: [
          "Implemented web applications using nuxtjs.",
          "Implemented backend using nodejs, express.",
        ],
      },
      {
        role: "co-operative student as developer",
        company: "Agent One Co., Ltd.",
        timeline: "Jun 2018 - Dec 2018",
        jobDetail: [
          "Implemented web applications using nuxtjs.",
          "Implemented backend using nodejs, express.",
        ],
      },
    ],
  },
});
