import Image from "next/image";
import Link from "next/link";
import topicsData from "@/components/Geosection/topicsData";
import staticData from "@/components/Geosection/staticData";

const icon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    width="20"
    height="20"
  >
    <path d="M20,0H3V3H1V5H3V7H1V9H3v2H1v2H3v2H1v2H3v2H1v2H3v3H20a3,3,0,0,0,3-3V3A3,3,0,0,0,20,0ZM13,4A3.5,3.5,0,1,1,9.5,7.5,3.5,3.5,0,0,1,13,4Zm6,14H17V16a1,1,0,0,0-1-1H10a1,1,0,0,0-1,1v2H7V16a3,3,0,0,1,3-3h6a3,3,0,0,1,3,3ZM11.5,7.5A1.5,1.5,0,1,1,13,9,1.5,1.5,0,0,1,11.5,7.5Z" />
  </svg>
);

export default function Geosection() {
  return (
    <>
      <section className="relative z-10 flex justify-center bg-gray-light py-16 dark:bg-bg-color-dark  md:py-10 lg:py-10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <Link href="/content/indian-geography" passHref>
            <div className="flex items-center justify-center">
              <div className="rounded-lg bg-white p-8 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark lg:px-8 xl:px-10">
                <div className="relative mx-auto h-[180px] w-[180px] max-w-[180px] overflow-hidden rounded-full">
                  <Image
                    src="/images/testimonials/world-book-day.png"
                    alt="Indian Geography"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-full text-center">
                    <h1 className="mb-1 text-2xl font-semibold text-purple-800 dark:text-white lg:text-base xl:text-lg">
                      Indian Geography
                    </h1>
                    <p className="inline-block text-gray-500 ">
                      Download Indian Geography notes here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/content/world-geography" passHref>
            <div className="flex items-center justify-center">
              <div className="rounded-lg bg-white p-8 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark lg:px-8 xl:px-10">
                <div className="relative mx-auto h-[180px] w-[180px] max-w-[180px] overflow-hidden rounded-full">
                  <Image
                    src="/images/testimonials/world-book-day.png"
                    alt="Indian Geography"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-full text-center">
                    <h3 className="mb-1 text-2xl font-semibold text-yellow dark:text-white lg:text-base xl:text-lg">
                      World Geography
                    </h3>
                    <p className="inline-block text-gray-500 ">
                      Download World Geography notes here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/content/physical-geography" passHref>
            <div className="flex items-center justify-center">
              <div className="rounded-lg bg-white p-8 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark lg:px-8 xl:px-10">
                <div className="relative mx-auto h-[180px] w-[180px] max-w-[180px] overflow-hidden rounded-full">
                  <Image
                    src="/images/testimonials/world-book-day.png"
                    alt="Indian Geography"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-full text-center">
                    <h3 className="mb-1 text-lg font-semibold text-sky-600 dark:text-white lg:text-base xl:text-lg">
                      Physical Geography
                    </h3>
                    <p className="inline-block text-gray-500 ">
                      Download Physical Geography notes here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
      <div className="container">
        <div>
          <div className="mx-auto w-full px-4">
            <div className="mb-12 items-center lg:mb-16">
              <h2 className="mb-10 mt-10 text-center text-4xl font-bold text-primary dark:text-white">
                Indian Geography
              </h2>

              <div className="flex justify-center">
                <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
                  <ul>
                    {topicsData.map((topic, index) => (
                      <li key={index}>
                        <Link
                          href="/"
                          className="mb-4 flex flex-nowrap items-center rounded-lg p-2 text-base font-bold text-body-color duration-300 hover:bg-gray-200 hover:text-primary dark:text-body-color-dark dark:hover:bg-gray-800 dark:hover:text-primary"
                          passHref
                        >
                          <span className="mr-2">{icon}</span>
                          {topic.subject}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <ul>
                    {staticData.map((topic, index) => (
                      <li key={index}>
                        <Link
                          href="/"
                          className="mb-4 flex flex-nowrap items-center rounded-lg p-2 text-base font-bold text-body-color duration-300 hover:bg-gray-200 hover:text-primary dark:text-body-color-dark dark:hover:bg-gray-800 dark:hover:text-primary"
                          passHref
                        >
                          <span className="mr-2">{icon}</span>
                          {topic.subject}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
