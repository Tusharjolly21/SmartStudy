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
        path: "/page-under-construction",
        newTab: false,
      },
      {
        id: 43,
        title: "UPSC Syllabus",
        path: "/page-under-construction",
        newTab: false,
      },
      {
        id: 44,
        title: "UPSC Booklist",
        path: "/page-under-construction",
        newTab: false,
      },
      {
        id: 45,
        title: "UPSC Calender",
        path: "/page-under-construction",
        newTab: false,
      },
      {
        id: 46,
        title: "UPSC Notification",
        path: "/page-under-construction",
        newTab: false,
      },
      {
        id: 47,
        title: "CDS Exam",
        path: "/page-under-construction",
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
        path: "/page-under-construction",
        newTab: false,
      },
      {
        id: 50,
        title: "All Categories",
        path: "/page-under-construction",
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
        path: "/page-under-construction",
        newTab: false,
      },
      {
        id: 54,
        title: "Science",
        path: "/page-under-construction",
        newTab: false,
      },
      {
        id: 55,
        title: "Disaster Management",
        path: "/page-under-construction",
        newTab: false,
      },
      {
        id: 56,
        title: "Polity",
        path: "/page-under-construction",
        newTab: false,
      },
      {
        id: 57,
        title: "Goverence",
        path: "/page-under-construction",
        newTab: false,
      },
      {
        id: 58,
        title: "Internal Security",
        path: "/page-under-construction",
        newTab: false,
      },
      {
        id: 59,
        title: "Social Justice",
        path: "/page-under-construction",
        newTab: false,
      },
      {
        id: 60,
        title: "International Relations",
        path: "/page-under-construction",
        newTab: false,
      },
      {
        id: 61,
        title: "Art And Culture",
        path: "/page-under-construction",
        newTab: false,
      },
      {
        id: 62,
        title: "Ancient History",
        path: "/page-under-construction",
        newTab: false,
      },
      {
        id: 63,
        title: "Medieval History",
        path: "/page-under-construction",
        newTab: false,
      },
      {
        id: 64,
        title: "Modern History",
        path: "/page-under-construction",
        newTab: false,
      },
    ],
  },
];
export default menuData;
