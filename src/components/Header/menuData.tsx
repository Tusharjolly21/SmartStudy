import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "UPSC",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Prelims PYQs",
        path: "/upsc/cse-prelims-pyqs",
        newTab: false,
      },
      {
        id: 42,
        title: "UPSC Exam",
        path: "/error",
        newTab: false,
      },
      {
        id: 43,
        title: "UPSC Syllabus",
        path: "/error",
        newTab: false,
      },
      {
        id: 44,
        title: "UPSC Booklist",
        path: "/error",
        newTab: false,
      },
      {
        id: 45,
        title: "UPSC Calender",
        path: "/error",
        newTab: false,
      },
      {
        id: 46,
        title: "UPSC Notification",
        path: "/error",
        newTab: false,
      },
      {
        id: 47,
        title: "CDS Exam",
        path: "/signup",
        newTab: false,
      },
      {
        id: 48,
        title: "CDS PYQS",
        path: "/upsc/cds-previous-year-question-papers",
        newTab: false,
      },
      {
        id: 49,
        title: "CAPF PYQS",
        path: "/error",
        newTab: false,
      },
      {
        id: 50,
        title: "All Categories",
        path: "/error",
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: "UPSC Notes",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "Geography",
        path: "/content/indian-geography",
        newTab: false,
      },
      {
        id: 52,
        title: "World Geography",
        path: "/content/indian-geography",
        newTab: false,
      },
      {
        id: 53,
        title: "Environment",
        path: "/blog",
        newTab: false,
      },
      {
        id: 54,
        title: "Science",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 55,
        title: "Disaster Management",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 56,
        title: "Polity",
        path: "/error",
        newTab: false,
      },
      {
        id: 57,
        title: "Goverence",
        path: "/error",
        newTab: false,
      },
      {
        id: 58,
        title: "Internal Security",
        path: "/error",
        newTab: false,
      },
      {
        id: 59,
        title: "Social Justice",
        path: "/error",
        newTab: false,
      },
      {
        id: 60,
        title: "International Relations",
        path: "/error",
        newTab: false,
      },
      {
        id: 61,
        title: "Art And Culture",
        path: "/error",
        newTab: false,
      },
      {
        id: 62,
        title: "Ancient History",
        path: "/error",
        newTab: false,
      },
      {
        id: 63,
        title: "Medieval History",
        path: "/error",
        newTab: false,
      },
      {
        id: 64,
        title: "Modern History",
        path: "/error",
        newTab: false,
      },
    ],
  },
];
export default menuData;
