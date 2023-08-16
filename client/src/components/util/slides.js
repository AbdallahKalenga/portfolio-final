import portfolio from '../../assets/images/portfolio.PNG'
import bullyventures from '../../assets/images/bullyventures.png'
import devhub from '../../assets/images/devhub.png'
import labs from '../../assets/images/labs.png'

import { AiOutlineGithub, AiOutlineLaptop } from 'react-icons/ai'

import { MdConstruction } from 'react-icons/md'

import { SiFigma } from 'react-icons/si'

const slides = [
  {
    id: 1,
    project: 'Portfolio',
    image: portfolio,
    desc: 'Using Figma to plan out how the layout of my site would look like, and what colors I will use, I then incorporated the use of React.js, Tailwind CSS, React-Scroll and Framer Motion to finally develop my dream portfolio. The difficulty in the project mainly included researching how to use Framer Motion from scratch, as it was the first time I used an animation library, but will definitely not be the last! ',
    tags: [
      {
        name: 'React.js',
        color: '#5ED3F3',
      },
      {
        name: 'Tailwind CSS',
        color: '#38BDF8',
      },
      {
        name: 'Framer Motion',
        color: '#8354f2',
      },
      {
        name: 'React Scroll',
        color: '#FF922E',
      },
    ],

    links: [
      {
        name: 'Github',
        link: 'http://www.github.com',
        icon: <AiOutlineGithub />,
      },
      {
        name: 'View live site',
        link: 'https://abdallahkalenga.netlify.app/',
        icon: <AiOutlineLaptop />,
      },
      {
        name: 'Figma',
        link: 'http://www.figma.com',
        icon: <SiFigma />,
      },
    ],
  },
  {
    id: 2,
    project: 'Bully Ventures',
    image: bullyventures,
    desc: 'A landing page site for a Private Venture Capitalist group that pools in deals for crypto projects. Was extremely fun to work on!',
    tags: [
      {
        name: 'Next.js',
        color: '#5ED3F3',
      },
      {
        name: 'Tailwind CSS',
        color: '#38BDF8',
      },
      {
        name: 'Framer Motion',
        color: '#8354f2',
      },
    ],

    links: [
      {
        name: 'Visit live site',
        link: 'https://www.bullyventures.vc/',
        icon: <AiOutlineLaptop />,
      },
    ],
  },
  {
    id: 3,
    project: 'Devhub',
    image: devhub,
    desc: "A central hub for developers, whether they're complete beginners or senior-level.",
    tags: [
      {
        name: 'Next.js',
        color: '#5ED3F3',
      },
      {
        name: 'Tailwind CSS',
        color: '#38BDF8',
      },
      {
        name: 'Firebase',
        color: '#FF922E',
      },
    ],

    links: [
      {
        name: 'This site is currently a work in progress!',
        link: '',
        icon: <MdConstruction />,
      },
    ],
  },
  {
    id: 4,
    project: 'Labs',
    image: labs,
    desc: 'A management system for projects that involve collaboration in the form of groups. Has built-in analytics, scheduling, tasks system.',
    tags: [
      {
        name: 'Next.js',
        color: '#5ED3F3',
      },
      {
        name: 'Tailwind CSS',
        color: '#38BDF8',
      },
      {
        name: 'PlanetScale',
        color: '#000',
      },
      {
        name: 'ShadCN',
        color: '#8354f2',
      },
    ],

    links: [
      {
        name: 'This site is currently a work in progress!',
        link: '',
        icon: <MdConstruction />,
      },
    ],
  },
]

export default slides
