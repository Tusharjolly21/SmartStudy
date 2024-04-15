import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
import Link from "next/link";

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { name, image, path } = testimonial;

  return (
    <Link href={path} passHref>
      <div className="flex items-center justify-center">
        <div className="rounded-lg bg-white p-8 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark ">
          <div className="relative mb-4 mr-4 h-10 w-10 max-w-10 overflow-hidden rounded-full">
            <Image
              src={image}
              alt={name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="h-10 w-10 object-cover"
            />
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full text-center">
              <h3 className="mb-1 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">
                {name}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default SingleTestimonial;
