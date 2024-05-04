/* eslint-disable react/no-unescaped-entities */
import React from "react";
import SectionTitle from "@/components/Common/SectionTitle";
import Image from "next/image";
const Unit6 = () => {
  return (
    <section
      id="blog"
      className="lg:py-18 bg-slate-100 py-16 dark:bg-bg-color-dark md:py-20"
    >
      <div className="container mt-12">
        <SectionTitle
          title="Political Geography of India"
          paragraph=""
          center
        />
        <section className="w-full py-4 md:py-24 lg:py-4">
          <div className="container grid max-w-4xl items-start justify-start gap-8 px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-yellow">
                Political Geography of India.
              </h2>
              <p className="break-words text-justify text-base dark:text-gray-400">
                Political Map of India shows{" "}
                <span className="font-bold">28 states </span>and{" "}
                <span className="font-bold">8 union territories</span> of India.
                India is a vast country comprising around 140.76 crore people.
                The country represents people of different ethnicities,
                cultures, and religions. According to each region and state’s
                unique political, linguistic, and socioeconomic traits, the map
                has been split into several regions and states..
              </p>
              <p className="break-words text-justify text-base dark:text-gray-400">
                The country’s coastline is{" "}
                <span className="font-bold">7,517 </span>kilometers long, of
                which <span className="font-bold">2,094 </span>
                kilometers are in the Andaman, Nicobar, and Lakshadweep and
                <span className="font-bold">5,423</span> kilometers belong to
                peninsular India.
              </p>
              <Image
                className="my-4 rounded-lg border"
                src="https://digital-ocean-space-bucket.blr1.digitaloceanspaces.com/Indiastate.png"
                alt="Political Map of India"
                height="800"
                width="500"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-yellow">
                Geographical Description of India
              </h2>
              <p className="break-words text-justify text-base dark:text-gray-400">
                The Six part of Geographical Distribution of India is as
                follows:
              </p>
              <h3 className="text-xl font-bold text-yellow">
                1. Western India
              </h3>
              <p className="break-words text-justify text-base dark:text-gray-400">
                India’s western part spans an area of 508,052 square km.
                <span className="font-bold">Gujarat, Goa, Maharashtra</span> are
                some of the renowned states in the western part of India.
                Maharashtra’s capital city is Mumbai, the country’s financial
                hub. The people in the states of Western India feature English,
                Marathi, Gujarati, and Konkani as their official languages.
              </p>
              <h3 className="text-xl font-bold text-yellow">
                2. Eastern India
              </h3>
              <p className="break-words text-justify text-base dark:text-gray-400">
                The states of{" "}
                <span className="font-bold">
                  Bihar, Jharkhand, Odisha, and West Bengal{" "}
                </span>
                are situated in eastern India. 418,323 sq km is the total size
                of the Eastern zone. The ocial languages of the states of
                Odisha, Bihar, and Jharkhand are Odia and Hindi. Bengali is
                spoken in West Bengal. In Eastern India, people also speak
                English, Maithili, Nepali, and Urdu.
              </p>
              <h3 className="text-xl font-bold text-yellow">
                3. Northern India
              </h3>
              <p className="break-words text-justify text-base dark:text-gray-400">
                The six states which constitute North India are{" "}
                <span className="font-bold">
                  Himachal Pradesh, Uttar Pradesh, Rajasthan, Uttarakhand,
                  Punjab, and Haryana, along with the union territories of Jammu
                  and Kashmir, Chandigarh, Ladakh, and Delhi (National Capital
                  Territory).
                </span>{" "}
                New Delhi which is in North India is the capital of India. Other
                major cities in North India are Chandigarh, Lucknow, and
                Srinagar.
              </p>
              <h3 className="text-xl font-bold text-yellow">
                4. Southern India
              </h3>
              <p className="break-words text-justify text-base dark:text-gray-400">
                Along with the{" "}
                <span className="font-bold">
                  union territories of Lakshadweep and Puducherry, Southern
                  India covers the states of Tamil Nadu, Karnataka, Kerala,
                  Andhra Pradesh, and Telangana.
                </span>{" "}
                Since it is the nation’s largest exporter of IT goods,
                Bengaluru, the capital of Karnataka, is often referred to as the
                “Silicon Valley of India.” Bengaluru, Hyderabad, Chennai,
                Coimbatore, Cochin, and Mysore are the most populous cities in
                South India.
              </p>
              <h3 className="text-xl font-bold text-yellow">
                5. North-Eastern India
              </h3>
              <p className="break-words text-justify text-base dark:text-gray-400">
                The seven sibling states of{" "}
                <span className="font-bold">
                  Arunachal Pradesh, Assam, Meghalaya, Tripura, Mizoram,
                  Manipur, and Nagaland along with brother Sikkim makeup
                </span>{" "}
                northeastern India.
              </p>
              <h3 className="text-xl font-bold text-yellow">
                6. Central India
              </h3>
              <p className="break-words text-justify text-base dark:text-gray-400">
                The topography of Central India is diverse, with lush plains,
                undulating hills, and deep forests. The lush woods of{" "}
                <span className="font-bold">
                  Madhya Pradesh and Chhattisgarh{" "}
                </span>
                are renowned for their diverse flora and fauna, which includes a
                large number of species.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
export default Unit6;
