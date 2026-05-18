import React from "react";
import portBg from "./assets/image12.png";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ImageGallery from "./components/portal/gallery";
import img1 from "./assets/lc.png";
import img2 from "./assets/lg.png"; 
import img3 from "./assets/bt.png";
import img4 from "./assets/am.png";
import img5 from "./assets/uh.png";
import img6 from "./assets/hr.png";
import img7 from "./assets/sc.png";

const galleryImg = [
  { id: 1, src: img1, alt: "website" },
  { id: 2, src: img2, alt: "website" },
  { id: 3, src: img3, alt: "website" },
  { id: 4, src: img4, alt: "website" },
  { id: 5, src: img5, alt: "website" },
  { id: 6, src: img6, alt: "website" },
];

const galleryImgCoded = [
  { id: 2, src: img3, alt: "website" },
  { id: 5, src: img5, alt: "website" },
  { id: 6, src: img6, alt: "website" },
];

const galleryImgDesigns = [
  { id: 1, src: img2, alt: "website" },
  { id: 2, src: img3, alt: "website" },
  { id: 3, src: img7, alt: "website" },
  { id: 6, src: img6, alt: "website" },
];

// ── Project metadata ──────────────────────────────────────────────
const projectsAll = [
  {
    id: 2,
    title: "ShopNaija",
    description:
      "An online store where sellers can create a uniques store front with customises theme and receive payment.",
    url: "https://shopnaija.store",
    tags: ["React.js", "Typescript"],
  },
  {
    id: 2,
    title: "Assets Management App",
    description: "An app that manages your assets and keeps usage records.",
    url: "https://assets.revocube.com",
    tags: ["React", "Tailwind"],
  },
  {
    id: 3,
    title: "SevenKnots Apartments Booking",
    description: "An hotel booking system",
    url: "https://sevenknotsapartments.com",
    tags: ["React", "Typescript"],
  },
  // {
  //   id: 4,
  //   title: "Project Four",
  //   description: "A short description of what this project does and the problem it solves.",
  //   url: "https://yourproject.com",
  //   tags: ["React", "Firebase"],
  // },
  // {
  //   id: 5,
  //   title: "Project Five",
  //   description: "A short description of what this project does and the problem it solves.",
  //   url: "https://yourproject.com",
  //   tags: ["HTML", "CSS", "JS"],
  // },
  // {
  //   id: 6,
  //   title: "Project Six",
  //   description: "A short description of what this project does and the problem it solves.",
  //   url: "https://yourproject.com",
  //   tags: ["React", "GSAP"],
  // },
];

const projectsCoded = [
  {
    id: 2,
    title: "Coded Project One",
    description: "A short description of what this project does and the problem it solves.",
    url: "https://yourproject.com",
    tags: ["Next.js", "Node.js"],
  },
  {
    id: 5,
    title: "Coded Project Two",
    description: "A short description of what this project does and the problem it solves.",
    url: "https://yourproject.com",
    tags: ["HTML", "CSS", "JS"],
  },
  {
    id: 6,
    title: "Coded Project Three",
    description: "A short description of what this project does and the problem it solves.",
    url: "https://yourproject.com",
    tags: ["React", "GSAP"],
  },
];

const projectsDesigned = [
  {
    id: 1,
    title: "Design Project One",
    description: "A short description of what this project does and the problem it solves.",
    url: "https://yourproject.com",
    tags: ["Figma", "Branding"],
  },
  {
    id: 2,
    title: "Design Project Two",
    description: "A short description of what this project does and the problem it solves.",
    url: "https://yourproject.com",
    tags: ["Figma", "UI/UX"],
  },
  {
    id: 3,
    title: "Design Project Three",
    description: "A short description of what this project does and the problem it solves.",
    url: "https://yourproject.com",
    tags: ["Illustrator", "Motion"],
  },
  {
    id: 6,
    title: "Design Project Four",
    description: "A short description of what this project does and the problem it solves.",
    url: "https://yourproject.com",
    tags: ["Figma", "Web Design"],
  },
];

// ── Reusable project list section ─────────────────────────────────
const ProjectList = ({ projects }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-800 border-t border-gray-800">
    {projects.map((project) => (
      <div
        key={project.id}
        className="bg-[#1A1A1A] p-6 flex flex-col gap-3 text-left"
      >
        {/* Title + link */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-white font-bold text-base uppercase tracking-wide">
            {project.title}
          </h3>
          
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors shrink-0 mt-0.5"
            aria-label={`Visit ${project.title}`}
          <a>
            {/* Arrow-up-right icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 7h10v10" /><path d="M7 17 17 7" />
            </svg>
          </a>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-gray-300 border border-gray-600 px-2 py-0.5 rounded-sm uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

// ── Page component ────────────────────────────────────────────────
const Portfolio = () => {
  return (
    <div className="mt-50">
      <div
        style={{ backgroundImage: `url(${portBg})` }}
        className="port-header h-70 flex items-center"
      >
        <h2 className="text-[1.5rem] text-black py-3 px-5 border-3 border-black mb-5 w-60 mx-auto uppercase font-bold">
          Portfolio
        </h2>
      </div>

      <div className="bg-[#1A1A1A] text-center">
        <div className="w-full mx-auto">
          <Tabs defaultValue="all">
            <TabsList className="bg-[#1A1A1A] md:h-10 h-50 flex md:flex-row flex-col justify-center gap-4 mx-auto pt-15 pb-5 mb-10 text-center md:border-b-1 border-b-0 border-gray-500">
              <TabsTrigger value="all" className="data-[state=active]:bg-[#1A1A1A] data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-b-white text-white p-5">
                ALL
              </TabsTrigger>
              <TabsTrigger value="coded" className="data-[state=active]:bg-[#1A1A1A] data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-b-white text-white p-5">
                CODED
              </TabsTrigger>
              <TabsTrigger value="designed" className="data-[state=active]:bg-[#1A1A1A] data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-b-white text-white p-5">
                DESIGNED
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <ImageGallery images={galleryImg} columns={3} gap={0} />
              <ProjectList projects={projectsAll} />
            </TabsContent>
            <TabsContent value="coded">
              <ImageGallery images={galleryImgCoded} columns={3} gap={0} />
              <ProjectList projects={projectsCoded} />
            </TabsContent>
            <TabsContent value="designed">
              <ImageGallery images={galleryImgDesigns} columns={3} gap={0} />
              <ProjectList projects={projectsDesigned} />
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="bg-black h-15">
        <marquee behavior="scroll" direction="200" className="text-white py-5">
          Click image to view full page
        </marquee>
      </div>
    </div>
  );
};

export default Portfolio;