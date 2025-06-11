import { Facebook, Github, Linkedin, Mail } from "lucide-react";

export const projects = [
  {
    id: 1,
    title: "Haviland House",
    des: "A website for showcasing, buying, selling, and renting real estate in Da Nang.",
    img: "/haviland.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/strapi.svg", "/node.svg"],
    link: "https://havilandhouse.com/",
  },
  {
    id: 2,
    title: "SaoViet Sport",
    des: "A modern e-commerce platform focused on selling premium sportswear and athletic apparel for fitness enthusiasts.",
    img: "/saoviet.png",
    iconLists: ["/php.png", "/sass.svg", "/woo.svg", "/js.svg", "/rankmath.png"],
    link: "https://saovietsport.vn/",
  },
  {
    id: 3,
    title: "Saticus VN/Indonesia",
    des: "A website for showcasing and scheduling for customers interested in purchasing laboratory and industrial equipment.",
    img: "/saticus.png",
    iconLists: ["/php.png", "/sass.svg", "/woo.svg", "/js.svg", "/rankmath.png"],
    link: "https://saticus.id/",
  },
  {
    id: 4,
    title: "POS System",
    des: "A restaurant management system that includes key features such as order handling, table reservations,...",
    img: "/pos.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/strapi.svg", "/shadcn.png"],
    link: "https://github.com/lhqbao1/pos",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    image: "",
    name: 'Github',
    icon: <Github stroke="black" size={20} />,
    url: 'https://github.com/lhqbao1'
  },
  {
    id: 2,
    image: "",
    name: 'Linkedin',
    icon: <Linkedin stroke="black" size={20} />,
    url: 'https://www.linkedin.com/in/b%E1%BA%A3o-l%C6%B0%C6%A1ng-a70365325/'
  },
  {
    id: 3,
    image: "",
    name: 'Facebook',
    icon: <Facebook stroke="black" size={20} />,
    url: 'https://www.facebook.com/bao.bao.520900/'
  },
  {
    id: 4,
    image: "",
    name: 'Gmail',
    icon: <Mail stroke="black" size={20} />,
    url: 'mailto:luonghoangquocbao@gmail.com'
  },
];

export const myDetails = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "col-span-6 row-span-2",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Confident in using English for work and communication.",
    description: "",
    className: "col-span-4 row-span-1",
    imgClassName: "",
    titleClassName: "justify-start mt-4",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "col-span-4 row-span-1",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "col-span-3 row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently learning to become a FullStack Developer",
    description: "The Inside Scoop",
    className: "col-span-7 row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-[480px] w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "col-span-3 row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];