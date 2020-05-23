import * as React from "react";
import Gallery from "@components/Gallery";

import Layout from "@components/Layout/Layout";

import workout from "@assets/images/fulls/01.jpg";
import workoutThumb from "@assets/images/thumbs/01.jpg";

import discipline from "@assets/images/fulls/discipline.jpg";
import disciplineThumb from "@assets/images/thumbs/disciplineThumb.jpg";

import love from "@assets/images/fulls/love.jpg";
import loveThumb from "@assets/images/thumbs/loveThumb.jpg";

import { SEO } from "@components/SEO";

const imgSet = [
  {
    src: workout,
    thumbnail: workoutThumb,
    title: "Workout",
    desc: "Be one with the workout",
    type: "Workout"
  },
  {
    src: discipline,
    thumbnail: disciplineThumb,
    title: "Discipline",
    desc: "Be one with the nature",
    type: "discipline",
  },
  {
    src: love,
    thumbnail: loveThumb,
    title: "Love",
    desc: "Be one with love",
    type: "love",
  },
  // {
  //   src: image2,
  //   thumbnail: image2Thumb,
  //   title: "High Mountains",
  //   desc: "Be one with the mountains",
  //   type: "discipline.jpg" },
  // {
  //   src: image3,
  //   thumbnail: image3Thumb,
  //   title: "Any time ",
  //   desc: "Be one with the time",
  //   type: "discipline.jpg" },
  // {
  //   src: image4,
  //   thumbnail: image4Thumb,
  //   title: "Any source of light",
  //   desc: "Be one with the light",
  //   type: "discipline.jpg" },
  // {
  //   src: image5,
  //   thumbnail: image5Thumb,
  //   title: "Any Curiosity",
  //   desc: "Be one with the curiosity",
  //   type: "discipline.jpg" },
  // {
  //   src: image6,
  //   thumbnail: image6Thumb,
  //   title: "Any source of enlightenment",
  //   desc: "Be one with the soul",
  //   type: "discipline.jpg" },
  // {
  //   src: image7,
  //   thumbnail: image7Thumb,
  //   title: "Be in present",
  //   desc: "Be one with the present",
  //   type: "discipline.jpg" },
  // {
  //   src: image8,
  //   thumbnail: image8Thumb,
  //   title: "Give away",
  //   desc: "Be one with the empathy",
  //   type: "discipline.jpg" },
  // {
  //   src: image9,
  //   thumbnail: image9Thumb,
  //   title: "Moment",
  //   desc: "Be one with the moment",
  //   type: "discipline.jpg" },
  // {
  //   src: image10,
  //   thumbnail: image10Thumb,
  //   title: "Serenity",
  //   desc: "Be one with the purity",
  //   type: "discipline.jpg" },
  // {
  //   src: image11,
  //   thumbnail: image11Thumb,
  //   title: "Conscious",
  //   desc: "Be one with the self",
  //   type: "discipline.jpg",
  // },
];

const HomePage: React.FC = () => (
  <Layout>
    <SEO />
    <Gallery images={imgSet} />
  </Layout>
);

export default HomePage;
