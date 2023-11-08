import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    java,
    springboot,
    express,
    postman,
    e_commerce,
    movie_website
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Java Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Web Developer",
      icon: web,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Spring Boot",
      icon: springboot,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Express",
      icon: express,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "postman",
      icon: postman,
    },
    {
      name: "Docker",
      icon: docker,
    },
  ];
  
  const projects = [
    {
      name: "Movie Website",
      description:
        "MERN stack application that allows users to get movie information along with trailer. Users can also add movies to the watchlist.",
      tags: [
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "pink-text-gradient",
        },
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node",
          color: "orange-text-gradient",
        },
      ],
      image: movie_website,
      website_link: "https://maxmovie.onrender.com",
      source_code_link: "https://github.com/YashM7/movies-data-api-frontend",
    },
    {
      name: "E Commerce",
      description:
        "A comprehensive shoping platform that allows users to search and buy products according to their needs.",
      tags: [
        {
          name: "springboot",
          color: "green-text-gradient",
        },
        {
          name: "mysql",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: e_commerce,
      website_link: "",
      source_code_link: "https://github.com/YashM7/e-commerce",
    },
  ];
  
  export { services, technologies, projects };