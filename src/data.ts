import { AiOutlineHtml5 } from "react-icons/ai";
import { BiGitBranch, BiLogoReact, BiLogoRedux } from "react-icons/bi";
import { SiCss3, SiJavascript, SiTypescript, SiVitest } from "react-icons/si";

const data = [
  {
    title: "HTML",
    icon: AiOutlineHtml5,
  },
  {
    title: "CSS",
    icon: SiCss3,
  },
  {
    title: "React",
    icon: BiLogoReact,
  },
  {
    title: "Redux",
    icon: BiLogoRedux,
  },
  {
    title: "Redux-Toolkit",
    icon: BiLogoRedux,
  },
  {
    title: "Typescript",
    icon: SiTypescript,
  },
  {
    title: "Javascript",
    icon: SiJavascript,
  },
  {
    title: "Vite",
    icon: SiVitest,
  },
  {
    title: "Git",
    icon: BiGitBranch,
  },
  {
    title: "Redux-Toolkit",
    icon: BiLogoRedux,
  },
];

export const projects = [
  {
    title: "Counter",
    img: "/counter.png",
    href: "https://aquasonic1995.github.io/Counter/",
    desc: "Simple project made with react, and css.",
  },
  {
    title: "Pizza",
    img: "/pizza.png",
    href: "https://aquasonic1995.github.io/pizza/",
    desc: "Project made with redux-toolkit, which has a having a sorting, search and shopping cart.",
  },
  {
    title: "Library",
    img: "/library.png",
    href: "https://rolling-scopes-school.github.io/aquasonic1995-JSFEPRESCHOOL2023Q2/library/",
    desc: "Simple landing page created on react.",
  },
];

export default data;
