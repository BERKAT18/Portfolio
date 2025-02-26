import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import wartafenoImg from "@/public/images/project/wartefeno/1.png";
import siakadImg from "@/public/images/project/siakad/1.png";
import amikomImg from "@/public/images/project/amikom/1.png";
import hrtoolsImg from "@/public/images/project/hr-tools/1.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;
export const experiencesData = [
  {
    title: "Internship Back End Developer",
    location: "PT. Inti Utama Solusindo",
    description:
      "Responsible for designing, developing, and managing APIs and business logic on the server side. The main focus is on improving system performance and scalability, ensuring efficient integration between backend services, and supporting web application development with database optimization for better technology solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2024 - Jun 2024",
  },
  {
    title: "Assistant Lecturer of Statistics",
    location: "Universitas Kristen Immanuel",
    description: "As an Assistant Lecturer of Statistics at the Informatics Study Program, Immanuel Christian University, he is tasked with creating statistics practicum modules, assisting lecturers during practicum, and collecting and correcting student assignments. In addition, it also compiles reports on activities that have been carried out to support the smooth learning process.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2023 - Des 2023",
  },
  {
    title: "Members of the Public Relations Division",
    location: "Universitas Kristen Immanuel",
    description: "As a member of the Public Relations Division in the Student Senate of the Faculty of Science and Computers, Immanuel Christian University, he is responsible as a coordinator for several activities carried out by the FISKOM Senate. In addition, building relationships with other student organizations, campus agencies, and external parties, as well as inviting speakers, guests, or cooperation partners for senate events. Also involved in licensing management and coordination with the campus regarding activities that require permits.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2022 - Aug 2023",
  },
  {
    title: "Members of the Spiritual Division",
    location: "Universitas Kristen Immanuel",
    description: "As a member of the Spiritual Division at the Family Bidik-MISI of Immanuel Christian University, he is responsible for preparing for the end-of-month worship service every month as well as being responsible for several jobdesc. Actively involved in being the coordinator of the implementation of several activities such as social activities, Christmas Easter and others",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2022 - Aug 2023",
  },
  {
    title: "Assistant Lecturer of Algorithms and Programming",
    location: "Universitas Kristen Immanuel",
    description: "As an Assistant Lecturer of Algorithms and Programming in the Informatics Study Program of Immanuel Christian University, he is responsible for studying the learning modules given by lecturers, teaching and supervising algorithm and programming practicum activities, as well as collecting and correcting student assignments and exercises. Also compile reports on activities that have been carried out.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2023 - Jun 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Healthy One",
    description:
      "Healthy one is a platform developed by PT Inti Utama Solusindo to accommodate the health needs of all Indonesian people. PT Inti Utama Solusindo has partnered with 500 pharmacies and 2000 doctors, so it has a wide customer network",
    screenshots: ["images/project/healthyone/logo.png", "images/project/healthyone/dashboard.png", "images/project/healthyone/satusehat.png"],
    image: "images/project/healthyone/logo.png",
    tech: ["https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg","https://static.djangoproject.com/img/logos/django-logo-negative.svg","/images/icon/mysql.svg"],
    demoUrl: null,
    githubUrl: null,
    features: ["-"],
    languages: ["Python", "Django", "MYSQL", "Flutter"],
  },
  {
    title: "Website Profile Dereja Dan Pengelolaan Data Jemaat",
    description:
      "This website is a digital platform for church profiles and congregation data management, designed to facilitate administration and communication within the church community. The main features include congregation data management, recording church activities, and delivering important information. Built using Python and Django, this website presents a structured and efficient solution for church administrators in managing data and interaction with congregations.",
    screenshots: [
      "images/project/webgereja/media.png",
      "images/project/webgereja/renungan2.png",
      "images/project/webgereja/renungan.png",
      "images/project/webgereja/lokasi.png",
      "images/project/webgereja/admin.png",
    ],
    image: "images/project/webgereja/1.png",
    tech: ["https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg","https://static.djangoproject.com/img/logos/django-logo-negative.svg","/images/icon/mysql.svg","https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg","https://www.vectorlogo.zone/logos/w3_css/w3_css-official.svg"],
    demoUrl: null,
    githubUrl: null,
    features: [],
    languages: ["Python", "Django", "MYSQL", "HTML", "CSS", "Javascript"],
  },
  {
    title: "E-Commerce",
    description:
      "This website is a simple food sales platform that allows users to view menu lists, place orders, and manage transactions efficiently. Built using Python and Django, this website provides features such as product catalogs, ordering systems, and stock and transaction management, making it easier for sellers to manage their food business digitally.",
    screenshots: [ "images/project/penjualan/menu.png",  "images/project/penjualan/pembayaran.png",  "images/project/penjualan/struk.png",  "images/project/penjualan/penjualan.png"],
    image: "images/project/penjualan/1.png",
    tech: ["https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg","https://static.djangoproject.com/img/logos/django-logo-negative.svg","/images/icon/mysql.svg","https://www.vectorlogo.zone/logos/w3_css/w3_css-official.svg","https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"],
    demoUrl: "",
    githubUrl: "",
    features: [],
    languages: ["Python", "Django", "HTML", "CSS", "JavaScript", "MySQL"],
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "PHP",
  "Java",
  "Microsoft Office",
  "Django",
  "Python",
  "Laravel",
  "MYSQL",
  "Git",
  // "Framer Motion",
] as const;

export const skilss = [
  {
    id: 2,
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  },
  {
    id: 3,
    imgUrl: "/images/icon/bootstrap.svg",
  },
  {
    id: 8,
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
  },
  {
    id: 4,
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
  },
  {
    id: 5,
    imgUrl: "https://static.djangoproject.com/img/logos/django-logo-negative.svg",
  },
  {
    id: 7,
    imgUrl: "/images/icon/mysql.svg",
  },

  {
    id: 9,
    imgUrl: "https://www.vectorlogo.zone/logos/w3_css/w3_css-official.svg",
  },
  {
    id: 10,
    imgUrl: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",
  },
  {
    id: 1,
    imgUrl: "/images/icon/java_logo.svg",
  },
  {
    id: 6,
    imgUrl: "/images/icon/icons8-microsoft-office-2019-480.svg",
  },
  // {
  //   id: 10,
  //   imgUrl:
  //     "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg",
  // },
] as const;
