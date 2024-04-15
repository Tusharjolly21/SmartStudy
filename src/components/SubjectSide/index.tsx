import { Testimonial } from "@/types/testimonial";
import SingleTestimonial from "./sidesubjectData";
const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Geography",
    path: "/content/indian-geography",
    image: "/images/testimonials/globe.png",
  },
  {
    id: 2,
    name: "Science",
    path: "/science",
    image: "/images/testimonials/science.png",
  },
  {
    id: 3,
    name: "Environment",
    path: "/environment",
    image: "/images/testimonials/env.png",
  },

  {
    id: 5,
    name: "Indian Mapping",
    path: "/indian-mapping",
    image: "/images/testimonials/india.png",
  },
  {
    id: 6,
    name: "International Relations",
    path: "/international-relations",
    image: "/images/testimonials/ir.png",
  },
  {
    id: 7,
    name: "Governance",
    path: "/governance",
    image: "/images/testimonials/mayor.png",
  },
  {
    id: 8,
    name: "Social Justice",
    path: "/social-justice",
    image: "/images/testimonials/social-justice.png",
  },
  {
    id: 9,
    name: "Internal Security",
    path: "/internal-security",
    image: "/images/testimonials/security.png",
  },
  {
    id: 10,
    name: "History",
    path: "/history",
    image: "/images/testimonials/history.png",
  },
  {
    id: 11,
    name: "Disaster Management",
    path: "/disaster-management",
    image: "/images/testimonials/disaster.png",
  },
  {
    id: 12,
    name: "Economics",
    path: "/economics",
    image: "/images/testimonials/stats.png",
  },
  {
    id: 13,
    name: "Indian Constitution",
    path: "/indian-constitution",
    image: "/images/testimonials/constitution.png",
  },
];
const Testimonials = () => {
  return (
    <section className=" relative z-10 mx-auto bg-gray-light p-20 py-16 dark:bg-bg-color-dark md:py-20 lg:py-28">
      <div className="container ">
        <div className="grid grid-cols-1 justify-center gap-x-28 gap-y-28 md:grid-cols-2 lg:grid-cols-2">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
