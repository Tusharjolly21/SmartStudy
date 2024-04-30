/* eslint-disable react/no-unescaped-entities */
import React from "react";
import SectionTitle from "@/components/Common/SectionTitle";
import Image from "next/image";
const Unit3 = () => {
  return (
    <section
      id="blog"
      className="lg:py-18 bg-slate-100 py-16 dark:bg-bg-color-dark md:py-20"
    >
      <div className="container mt-12">
        <SectionTitle
          title="Boundary Line and Coastline of India"
          paragraph=""
          center
        />
        <section className="w-full py-4 md:py-24 lg:py-4">
          <div className="container grid max-w-4xl items-start justify-start gap-8 px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-yellow">
                Boundary Line and Coastline of India
              </h2>
              <ul className="list-disc">
                <li className="break-words text-justify text-base dark:text-gray-400">
                  India's land boundary is very large. Its terrestrial boundary
                  is almost twice the coastal boundary. The length of India's
                  terrestrial boundary is approximately{" "}
                  <span className="font-bold">15,200 </span> km.
                </li>
                <li className="break-words text-justify text-base dark:text-gray-400">
                  The land frontiers of India is about{" "}
                  <span className="font-bold">6,100 </span>km and Gujarat has
                  the longest coastline. The total length of the coastline
                  including the coasts of island groups is{" "}
                  <span className="font-bold">7,516.6</span> km.
                </li>
                <li className="break-words text-justify text-base dark:text-gray-400">
                  The <span className="font-bold">peninsular</span> part of
                  India is projected towards the Indian Ocean, which divides the
                  Indian Ocean into two parts. The eastern part is termed as Bay
                  of Bengal and western part is termed as Arabian Sea.
                </li>
                <p className=" mb-4 mt-4 break-words rounded border-2 border-solid border-slate-600 bg-slate-300 py-2 text-justify text-base dark:text-gray-400">
                  <span className="font-bold">Peninsula:</span> Peninsula is a
                  part of land which is surrounded by water from three sides.
                </p>
                <Image
                  src="https://digital-ocean-space-bucket.blr1.digitaloceanspaces.com/peninsula.png"
                  alt="Indian Standard point"
                  height="800"
                  width="500"
                />
                <li className="break-words pt-4 text-justify text-base dark:text-gray-400">
                  Due to its peninsular shape, India is surrounded by Bay of
                  Bengal in the east, Arabian Sea in the west and Indian Ocean
                  in the south.
                </li>
                <li className="break-words text-justify text-base dark:text-gray-400">
                  The Indian peninsula is wide in the north and has been
                  gradually sloping towards south from{" "}
                  <span classname="font-bold">22°</span> N.
                </li>
                <li className="break-words text-justify text-base dark:text-gray-400">
                  North-west, north and north-east boundary of India is
                  surrounded by the{" "}
                  <span className="font-bold">
                    New Fold Mountains (Himalayas).
                  </span>
                </li>
                <li className="break-words text-justify text-base dark:text-gray-400">
                  At the southern tip, the shape of India's mainland has changed
                  into Ness. It is called Kumari{" "}
                  <span className="font-bold">Ness</span> or{" "}
                  <span className="font-bold">Kanyakumari</span>, which is
                  narrow towards the Indian Ocean.
                </li>
                <p className=" mb-4 mt-4 break-words rounded border-2 border-solid border-slate-600 bg-slate-300 py-2 text-justify text-base dark:text-gray-400">
                  <span className="font-bold">Ness:</span> Narrow part from
                  mainland towards sea and surrounded by sea from three sides is
                  termed as Ness.
                </p>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
export default Unit3;
