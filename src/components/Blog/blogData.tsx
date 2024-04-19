import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "India to deliver BrahMos missile to Philippines this year",
    paragraph:
      "New Delhi: India is set to deliver the first set of BrahMos supersonic cruise missiles to the Philippines as part of the USD 375 million..",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["Defence"],
    publishDate: "2024",
  },
  {
    id: 2,
    title:
      "Great Indian Election Begins, 49.78% Turnout Across 102 Seats In 8 Hours",
    paragraph: "Lok Sabha Election Phase 1 Voting: Backed by a...",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["Election"],
    publishDate: "2024",
  },
  {
    id: 3,
    title:
      "Indian Railways operates Record Number of additional Trains in Summer Season 2024",
    paragraph:
      "During this summer season, 9111 trips will be operational to ensure smooth...",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["Railways"],
    publishDate: "2024",
  },
];
export default blogData;
