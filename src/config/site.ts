import { Github, LinkedIn, StackOverFlow, Twitter } from "~/components/icons";

export const siteConfig = {
  name: "Hemant Rajput | Software Developer",
  description:
    "Hemant Rajput is a Software Developer who is passionate about building solutions and contributing to open source communities",
  url: "https://rajputhemant.me",

  author: {
    name: "Hemant Rajput",
    avatar: "/images/avatar.png",
    bio: "Software Developer",
    mail: "rajput.hemant2001@gmail.com",
    description:
      "Seasoned software engineer especially in frontend side, with a passion for creating pixel-perfect web experiences.",
  },

  links: {
    github: {
      title: "Github",
      href: "https://github.com/rajput-hemant",
      icon: Github,
    },

    linkedin: {
      title: "Linkedin",
      href: "https://www.linkedin.com/in/rajput-hemant",
      icon: LinkedIn,
    },

    twitter: {
      title: "Twitter",
      href: "https://twitter.com/rajput_hemant01",
      icon: Twitter,
    },

    stackoverflow: {
      title: "Stackoverflow",
      href: "https://stackoverflow.com/users/20652038/rajput-hemant",
      icon: StackOverFlow,
    },
  },
};
