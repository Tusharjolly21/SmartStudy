import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
import Link from "next/link";

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { name, image } = testimonial;

  return (
    <Link href="#" passHref>
      <div className="flex w-full items-center justify-center">
        <div className="rounded-lg bg-white p-8 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark lg:px-8 xl:px-10">
          <div className="relative h-[180px] w-[180px] max-w-[180px] overflow-hidden rounded-full">
            <Image
              src={image}
              alt={name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
