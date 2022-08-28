import portfolio from "../../assets/images/portfolio.PNG"


import { AiOutlineGithub, AiOutlineLaptop } from "react-icons/ai"

import { SiFigma } from "react-icons/si"

const slides = [{
    id: 1,
    project: "Portfolio",
    image: portfolio,
    desc: "Using Figma to plan out how the layout of my site would look like, and what colors I will use, I then incorporated the use of React.js, Tailwind CSS, React-Scroll and Framer Motion to finally develop my dream portfolio. The difficulty in the project mainly included researching how to use Framer Motion from scratch, as it was the first time I used an animation library, but will definitely not be the last! ",
    difficulty: 2,
    tags: [{
        name: "React.js",
        color: "#5ED3F3"
    }, {
        name: "Tailwind CSS",
        color: "#38BDF8"
    }, {
      name: "Framer Motion",
      color: "#8354f2"
    }, {
      name: "React Scroll",
      color: "#FF922E"
    }],

    links: [{
        name: "Github",
        link: "http://www.github.com",
        icon: <AiOutlineGithub />
      },{
        name: "Demo",
        link: "",
        icon: <AiOutlineLaptop />
      },{
        name: "Figma",
        link: "http://www.figma.com",
        icon: <SiFigma />
      }
    ]}, {

    id: 2,
    project: "Portfolio v2",
    image: portfolio,
    desc: "yo",
    difficulty: 3,
    tags: [{
        name: "React.js",
        color: "#5ED3F3"
    }, {
        name: "Tailwind CSS",
        color: "#38BDF8"
    }],

    links: [{
        name: "Github",
        link: "http://www.github.com",
        icon: <AiOutlineGithub />
      },{
        name: "Demo",
        link: "",
        icon: <AiOutlineLaptop />
      },{
        name: "Figma",
        link: "http://www.figma.com",
        icon: <SiFigma />
      }
    ]}]

export default slides