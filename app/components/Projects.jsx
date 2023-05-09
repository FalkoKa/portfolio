'use client';
import Project from './Project';
import useEmblaCarousel from 'embla-carousel-react';
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from 'react-icons/md';
import { useState, useCallback, useEffect } from 'react';

const stack = [
  '/../public/assets/skills/javascript.png',
  '/../public/assets/skills/react.png',
  '/../public/assets/skills/expressjs.png',
  '/../public/assets/skills/node.png',
  '/../public/assets/skills/nextjs.png',
  '/../public/assets/skills/html.png',
  '/../public/assets/skills/css.png',
  '/../public/assets/skills/tailwind.png',
  '/../public/assets/skills/mongo.png',
  '/../public/assets/skills/postgresql.png',
  '/../public/assets/skills/firebase.png',
  '/../public/assets/skills/git.png',
];

const [
  js,
  react,
  express,
  node,
  nextjs,
  html,
  css,
  tailwind,
  mongodb,
  postgres,
  firebase,
  git,
] = stack;

const projects = [
  {
    name: 'E-Commerce Clone',
    img: '/../public/assets/projects/e-com-clone.png',
    description: '...',
    githubLink: 'https://github.com/FalkoKa/e-commerce_clone_react',
    projectLink: 'https://zalando-clone.netlify.app/',
    stack: [js, react, express, node, css, mongodb],
  },
  {
    name: 'Weather App',
    img: '/../public/assets/projects/e-com-clone.png',
    description: '...',
    githubLink: '',
    projectLink: '',
    stack: [js, react, css, git],
  },

  {
    name: 'Shop Inventory App',
    img: '/../public/assets/projects/shop-inventory.png',
    description: '...',
    githubLink: 'https://github.com/FalkoKa/Shop-Inventory',
    projectLink: 'https://shopinventoryapp.onrender.com/',
    stack: [js, node, express, css, postgres],
  },
  {
    name: 'Servo API',
    img: '/../public/assets/projects/shop-inventory.png',
    description: '...',
    githubLink: 'https://github.com/FalkoKa/servo_api',
    projectLink: '',
    stack: [js, react, css, postgres, git],
  },
  {
    name: 'Tic Tac Toe',
    img: '/../public/assets/projects/tic-tac-toe.png',
    description: '...',
    githubLink: 'https://github.com/FalkoKa/Project-Tic-Tac-Toe',
    projectLink: '',
    stack: [js, react, css, postgres, git],
  },
  {
    name: 'Etch A Sketch',
    img: '/../public/assets/projects/etch-a-sketch.png',
    description: '...',
    githubLink: 'https://github.com/FalkoKa/Etch-a-Sketch',
    projectLink:
      'https://rawcdn.githack.com/FalkoKa/Etch-a-Sketch/576eab97f4056f3042da24b37bd1e3acba55335a/index.html',
    stack: [js, react, css, postgres, git],
  },
];

const Projects = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="my-20 w-full overflow-hidden relative">
      <h2 className="md:text-2xl sm:text-xl text-md md:tracking-[18px] tracking-[10px] pb-2 uppercase text-center my-10">
        Projects
      </h2>
      <div id="embla" ref={emblaRef}>
        <div
          id="embla_container"
          className="flex space-x-5 min-h-[60vh] max-h-fit"
        >
          {projects.map((project, idx) => (
            <Project
              key={idx}
              project={project}
              selected={idx === selectedIndex}
            />
          ))}
        </div>
      </div>
      <MdKeyboardDoubleArrowLeft
        className="absolute z-100 top-[55%] left-[3%] md:left-[10%] disabled:opacity-0"
        onClick={scrollPrev}
        size={50}
      />
      <MdKeyboardDoubleArrowRight
        className="absolute z-100 top-[55%] right-[3%] md:right-[10%] disabled:opacity-0"
        onClick={scrollNext}
        size={50}
      />
    </div>
  );
};

export default Projects;
