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
  {
    id: 1,
    src: img1, 
    alt: "website",
  },
  {
    id: 2,
    src: img2, 
    alt: "website",
  },
  {
    id: 3,
    src: img3,
    alt: "website",
  },
  {
    id: 4,
    src: img4,
    alt: "website",
  },
  {
    id: 5,
    src: img5,
    alt: "website",
  },
  {
    id: 6,
    src: img6,
    alt: "website",
  },
];
const galleryImgCoded = [
  // {
  //   id: 1,
  //   src: img2, 
  //   alt: "website",
  // },
  {
    id: 2,
    src: img3,
    alt: "website",
  },
  // {
  //   id: 3,
  //   src: img7,
  //   alt: "website",
  // },
  {
    id: 5,
    src: img5,
    alt: "website",
  },
  {
    id: 6,
    src: img6,
    alt: "website",
  },
];
const galleryImgDesigns = [
  {
    id: 1,
    src: img2, 
    alt: "website",
  },
  {
    id: 2,
    src: img3,
    alt: "website",
  },
  {
    id: 3,
    src: img7,
    alt: "website",
  },
  // {
  //   id: 5,
  //   src: img5,
  //   alt: "website",
  // },
  {
    id: 6,
    src: img6,
    alt: "website",
  },
];

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
            <TabsList className="bg-[#1A1A1A]  flex justify-center gap-4 mx-auto pt-15 pb-5 mb-10 text-center border-b-1 border-gray-500">
              <TabsTrigger value="all" className="data-[state=active]:bg-[#1A1A1A] data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-b-white text-white p-5">
                ALL
              </TabsTrigger>
              <TabsTrigger value="coded" className="data-[state=active]:bg-[#1A1A1A] data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-b-white text-white p-5">CODED</TabsTrigger>
              <TabsTrigger value="designed" className="data-[state=active]:bg-[#1A1A1A] data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-b-white text-white p-5">DESIGNED</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <ImageGallery images={galleryImg} columns={3} gap={0} />
            </TabsContent>
            <TabsContent value="coded">
              <ImageGallery images={galleryImgCoded} columns={3} gap={0} />
            </TabsContent>
            <TabsContent value="designed">
              <ImageGallery images={galleryImgDesigns} columns={3} gap={0} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <div className="bg-black h-15">
        <marquee behavior="scroll" direction="200" className="text-white py-5">Click image to view full page</marquee>
      </div>
    </div>
  );
};

export default Portfolio;
