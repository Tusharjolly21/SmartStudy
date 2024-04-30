/* eslint-disable react/no-unescaped-entities */
import React from "react";
import SectionTitle from "@/components/Common/SectionTitle";
import Image from "next/image";

const Unit5 = () => {
  return (
    <section
      id="blog"
      className="lg:py-18 bg-slate-100 py-16 dark:bg-bg-color-dark md:py-20"
    >
      <div className="container mt-12">
        <SectionTitle
          title="Political and Administrative Divisions Divisions of India"
          paragraph=""
          center
        />
        <section className="w-full py-4 md:py-24 lg:py-4">
          <div className="container grid max-w-4xl items-start justify-start gap-8 px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-yellow">
                Political and Administrative Divisions
              </h2>
              <ul className="list-disc">
                <li className="break-words text-justify text-base dark:text-gray-400">
                  For the proper functioning and operation of administrative
                  activities, India has been divided into 28 States and 8 Union
                  Territories. <span className="font-bold">New Delhi</span> is
                  the capital of India.
                </li>
                <li className="break-words text-justify text-base dark:text-gray-400">
                  In terms of area, the{" "}
                  <span className="font-bold">largest union territory</span> is
                  <span className="font-bold"> Ladakh</span> while the{" "}
                  <span className="font-bold">smallest </span>
                  being <span className="font-bold">Lakshadweep</span>
                </li>
                <li className="break-words text-justify text-base dark:text-gray-400">
                  In post independence India, the formation of some states has
                  been done on linguistic basis (eg. Andhra Pradesh). In terms
                  of areas, <span className="font-bold">Rajasthan</span> tops
                  the list while<span className="font-bold"> Goa</span> is the
                  smallest state.
                </li>
                <p className="mb-4 mt-4 break-words rounded border-2 border-solid border-slate-600 bg-slate-300 px-2 py-2 text-justify text-base dark:text-gray-400">
                  <span className="font-bold">
                    Area wise the four largest states in decreasing order
                    1.Rajasthan 2. Madhya Pradesh 3. Maharashtra 4. Uttar
                    Pradesh{" "}
                  </span>
                </p>
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-yellow">
                Water Bodies of India
              </h2>
              <ul className="list-disc">
                <li className="break-words text-justify text-base dark:text-gray-400">
                  Indian Water bodies have been classified into 3 parts as-{" "}
                  <span className="font-bold">Territorial Sea</span> or{" "}
                  <span className="font-bold">Marime Belt.</span>
                </li>
                <li className="break-words text-justify text-base dark:text-gray-400">
                  It is 12 Nautical Miles (NM) from the base line (a straight
                  imaginary line joining indented coastline) of the coast India
                  has complete right to use all kinds of resources within its
                  territorial Sea. The oceanic water between the land part and
                  the base line is called{" "}
                  <span className="font-bold">Internal Waters.</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-yellow">
                Contiguous Zone
              </h2>
              <ul className="list-disc">
                <li className="break-words text-justify text-base dark:text-gray-400">
                  Its extension lies between{" "}
                  <span className="font-bold">12 NM</span> and{" "}
                  <span className="font-bold">24 NM.</span> Laws relating to
                  immigration, customs, environmental cleanliness and fiscal
                  rights are applicable in this area.
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-yellow">
                Exclusive Economic Zone (EEZ)
              </h2>
              <ul className="list-disc">
                <li className="break-words text-justify text-base dark:text-gray-400">
                  Its extension being <span className="font-bold">176 NM</span>{" "}
                  lies between <span className="font-bold">24 NM </span>and{" "}
                  <span className="font-bold">200 NM.</span> This special area
                  remains under complete acquisition of the country and India is
                  authorized to use sea resources, keep vigil on animals, and
                  conserve the natural resources. minerals and conduct research
                  activities.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
export default Unit5;
