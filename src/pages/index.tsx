import * as React from "react";
import Gallery from "@components/Gallery";

import Layout from "@components/Gallery/Layout";

import image2 from "@assets/images/fulls/02.jpg";
import image2Thumb from "@assets/images/thumbs/02.jpg";

import image3 from "@assets/images/fulls/03.jpg";
import image3Thumb from "@assets/images/thumbs/03.jpg";

import image4 from "@assets/images/fulls/04.jpg";
import image4Thumb from "@assets/images/thumbs/04.jpg";

import image5 from "@assets/images/fulls/05.jpg";
import image5Thumb from "@assets/images/thumbs/05.jpg";

import image6 from "@assets/images/fulls/06.jpg";
import image6Thumb from "@assets/images/thumbs/06.jpg";

import image7 from "@assets/images/fulls/07.jpg";
import image7Thumb from "@assets/images/thumbs/07.jpg";

import image8 from "@assets/images/fulls/08.jpg";
import image8Thumb from "@assets/images/thumbs/08.jpg";

import image9 from "@assets/images/fulls/09.jpg";
import image9Thumb from "@assets/images/thumbs/09.jpg";

import image10 from "@assets/images/fulls/10.jpg";
import image10Thumb from "@assets/images/thumbs/10.jpg";

import image11 from "@assets/images/fulls/11.jpg";
import image11Thumb from "@assets/images/thumbs/11.jpg";

import image12 from "@assets/images/fulls/12.jpg";
import image12Thumb from "@assets/images/thumbs/12.jpg";

import vogel from "@assets/images/pap-charlene-vogel.jpg";

const imgSet = [
  {
    src: vogel,
    thumbnail: vogel,
    title: "Great Sky",
    desc: "Be one with the Universe",
  },
  {
    src: image2,
    thumbnail: image2Thumb,
    title: "High Mountains",
    desc: "Be one with the mountains",
  },
  {
    src: image3,
    thumbnail: image3Thumb,
    title: "Any time ",
    desc: "Be one with the time",
  },
  {
    src: image4,
    thumbnail: image4Thumb,
    title: "Any source of light",
    desc: "Be one with the light",
  },
  {
    src: image5,
    thumbnail: image5Thumb,
    title: "Any Curiosity",
    desc: "Be one with the curiosity",
  },
  {
    src: image6,
    thumbnail: image6Thumb,
    title: "Any source of enlightenment",
    desc: "Be one with the soul",
  },
  {
    src: image7,
    thumbnail: image7Thumb,
    title: "Be in present",
    desc: "Be one with the present",
  },
  {
    src: image8,
    thumbnail: image8Thumb,
    title: "Give away",
    desc: "Be one with the empathy",
  },
  {
    src: image9,
    thumbnail: image9Thumb,
    title: "Moment",
    desc: "Be one with the moment",
  },
  {
    src: image10,
    thumbnail: image10Thumb,
    title: "Serenity",
    desc: "Be one with the purity",
  },
  {
    src: image11,
    thumbnail: image11Thumb,
    title: "Conscious",
    desc: "Be one with the self",
  },
  {
    src: image12,
    thumbnail: image12Thumb,
    title: "Nature",
    desc: "Be one with the nature",
  },
];

const HomePage: React.FC = () => (
  <Layout>
    <Gallery images={imgSet} />
  </Layout>
);

export default HomePage;
