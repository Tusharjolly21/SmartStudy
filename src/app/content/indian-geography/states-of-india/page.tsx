/* eslint-disable react/no-unescaped-entities */
import React from "react";
import SectionTitle from "@/components/Common/SectionTitle";
import Image from "next/image";
const Unit7 = () => {
  return (
    <section
      id="blog"
      className="lg:py-18 bg-slate-100 py-16 dark:bg-bg-color-dark md:py-20"
    >
      <div className="container mt-12">
        <SectionTitle title="States of India" paragraph="" center />
        <section className="w-full py-4 md:py-24 lg:py-4">
          <div className="container grid max-w-4xl items-start justify-start gap-8 px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-yellow">
                States of India: 28 States Important Points.
              </h2>
              <p className="break-words text-justify text-base dark:text-gray-400">
                A brief overview of the different states of India is listed
                below:
              </p>
            </div>
            {/* Andhra Pradesh */}
            <h3 className="text-yellow-400 pt-6 font-sans text-3xl font-bold dark:text-white">
              1. Andhra Pradesh
            </h3>
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="flex-1 break-words pt-1 text-left text-lg text-gray-900 dark:text-white">
                <ul className="list-disc break-words text-justify text-base dark:text-gray-400">
                  <li>
                    Andhra Pradesh is located on the southeastern coast of
                    India.
                  </li>
                  <li>
                    It is bordered by{" "}
                    <span className="font-bold">
                      Telangana in the northwest, Chhattisgarh in the north,
                      Tamil Nadu in the south, Karnataka in the west, and the
                      Bay of Bengal
                    </span>{" "}
                    in the eastern side.
                  </li>
                  <li>
                    Andhra Pradesh is the{" "}
                    <span className="font-bold">
                      first state to be formed on a linguistic basis
                    </span>{" "}
                    in India on 1 October 1953.
                  </li>
                  <li>
                    The official language spoken is Telugu and is known as the
                    <span className="font-bold">“rice bowl of India”.</span>
                  </li>
                </ul>
                <div className="rounded bg-gray-200 p-2">
                  <ul className="break-words text-justify text-base dark:text-gray-400">
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Capital:{" "}
                        </strong>
                        Vishakapatnam
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Founded on:{" "}
                        </strong>
                        Founded on: 1 Nov. 1956{" "}
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Offical language:{" "}
                        </strong>
                        Telugu
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="text-base text-gray-900 dark:text-white">
                          {" "}
                          Sex Ratio:{" "}
                        </strong>
                        940 females per 1000 males
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="text-base text-gray-900 dark:text-white">
                          {" "}
                          Literacy Rate:{" "}
                        </strong>
                        67.77%
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-1">
                <Image
                  className="h-21 mx-auto object-cover"
                  src="https://digital-ocean-space-bucket.blr1.digitaloceanspaces.com/andrapradeshmap.png"
                  alt=""
                  width="500"
                  height="800"
                />
              </div>
            </div>
            {/* Arunachal Pradesh */}
            <h3 className="text-yellow-400 pt-6 font-sans text-3xl font-bold dark:text-white">
              2. Arunachal Pradesh
            </h3>
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="flex-1 break-words pt-1 text-left text-lg text-gray-900 dark:text-white">
                <ul className="list-disc break-words text-justify text-base dark:text-gray-400">
                  <li>
                    Arunachal Pradesh shares its borders with{" "}
                    <span className="font-bold">
                      Assam and Nagaland. It shares international borders with
                      Bhutan, Myanmar, and China.
                    </span>
                  </li>
                  <li>
                    Arunachal Pradesh is home to{" "}
                    <span className="font-bold">26</span> major tribes of India
                    and about <span className="font-bold">100 </span>sub-tribes.
                  </li>
                  <li>
                    Arunachal Pradesh is carved out of the{" "}
                    <span className="fopnt-bold">
                      North-East Frontier Agency region
                    </span>{" "}
                    and is the{" "}
                    <span className="font-bold">
                      largest state among the Seven Sister States.
                    </span>
                  </li>
                </ul>
                <div className="rounded bg-gray-200 p-2">
                  <ul className="text-justify">
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Capital:{" "}
                        </strong>
                        Itanagar
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Founded on:{" "}
                        </strong>
                        Founded on: 20 Feb. 1987{" "}
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Offical language:{" "}
                        </strong>
                        English
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Sex Ratio:{" "}
                        </strong>
                        938 females per 1000 males
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Literacy Rate:{" "}
                        </strong>
                        65.38%
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-1">
                <Image
                  className="lg:h-21 mx-auto object-cover"
                  src="https://digital-ocean-space-bucket.blr1.digitaloceanspaces.com/arunachal.png"
                  alt=""
                  width="500"
                  height="800"
                />
              </div>
            </div>
            {/* Assam */}
            <h3 className="text-yellow-400 pt-6 font-sans text-3xl font-bold dark:text-white">
              3. Assam
            </h3>
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="flex-1 break-words pt-1 text-left text-lg text-gray-900 dark:text-white">
                <ul className="list-disc break-words text-justify text-base dark:text-gray-400">
                  <li>
                    Assam shares a border with{" "}
                    <span className="font-bold">
                      Bhutan, Arunachal Pradesh, Nagaland, Manipur, Meghalaya,
                      Tripura, Mizoram, Bangladesh, and West Bengal.
                    </span>
                  </li>
                  <li>
                    <span className="font-bold">Dispur</span> is the capital and
                    <span className="font-bold"> Assamese</span> is the offcial
                    language.
                  </li>
                  <li>
                    The <span className="font-bold">first place</span> where oil
                    drilling took place in Asia was{" "}
                    <span className="font-bold">Assam.</span>
                  </li>
                  <li>
                    The economy and society of Assam are dependent on the
                    <span className="font-bold">
                      {" "}
                      wildlife tourism of Kaziranga and Manas National Parks.
                    </span>
                    These two wildlife parks are{" "}
                    <span className="font-bold">World Heritage Sites.</span>
                  </li>
                </ul>
                <div className="rounded bg-gray-200 p-2">
                  <ul className="text-justify">
                    <li>
                      <p className="text-lg text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Capital:{" "}
                        </strong>
                        Dispur
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Founded on:{" "}
                        </strong>
                        Founded on: 26 Jan. 1950{" "}
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Offical language:{" "}
                        </strong>
                        Assamese
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Sex Ratio:{" "}
                        </strong>
                        958 females per 1000 males
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Literacy Rate:{" "}
                        </strong>
                        72.19%
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-1">
                <Image
                  className="lg:h-21 mx-auto object-cover"
                  src="https://digital-ocean-space-bucket.blr1.digitaloceanspaces.com/assam.png"
                  alt=""
                  width="500"
                  height="800"
                />
              </div>
            </div>
            {/* Bihar */}
            <h3 className="text-yellow-400 pt-6 font-sans text-3xl font-bold dark:text-white">
              4. Bihar
            </h3>
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="flex-1 break-words pt-1 text-left text-lg text-gray-900 dark:text-white">
                <ul className="list-disc break-words text-justify text-base dark:text-gray-400">
                  <li>
                    Bihar shares borders with{" "}
                    <span className="font-bold">
                      Uttar Pradesh, Nepal, West Bengal, and Jharkhand.
                    </span>
                  </li>
                  <li>
                    The plains of Bihar are split by the{" "}
                    <span className="font-bold">river Ganga,</span> which flows
                    from west to east.
                  </li>
                  <li>
                    Bihar is the{" "}
                    <span className="font-bold">
                      world’s fourth-most populous state and the common
                      languages spoken are Hindi, Urdu, Maithili, Magahi,
                      Bhojpuri, etc.
                    </span>
                  </li>
                </ul>
                <div className="rounded bg-gray-200 p-2">
                  <ul className="text-justify">
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Capital:{" "}
                        </strong>
                        Patna
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Founded on:{" "}
                        </strong>
                        Founded on: 26 Jan. 1950{" "}
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Offical language:{" "}
                        </strong>
                        Hindi
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Sex Ratio:{" "}
                        </strong>
                        918 females per 1000 males
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Literacy Rate:{" "}
                        </strong>
                        61.80%
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-1">
                <Image
                  className="h-21 mx-auto object-cover"
                  src="https://digital-ocean-space-bucket.blr1.digitaloceanspaces.com/bihar.jpeg"
                  alt=""
                  width="500"
                  height="800"
                />
              </div>
            </div>
            {/* Chhattisgarh */}
            <h3 className="text-yellow-400 pt-6 font-sans text-3xl font-bold dark:text-white">
              5. Chhattisgarh
            </h3>
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="flex-1 break-words pt-1 text-left text-lg text-gray-900 dark:text-white">
                <ul className="list-disc break-words text-justify text-base dark:text-gray-400">
                  <li>
                    Chhattisgarh is the{" "}
                    <span className="font-bold">9th-largest</span> state in
                    India.
                  </li>
                  <li>
                    The state was formed by the partition of ten Chhattisgarhi
                    and{" "}
                    <span className="font-bold">
                      six Gondi-speaking districts in the southeast of Madhya
                      Pradesh.
                    </span>{" "}
                    Its capital city is{" "}
                    <span className="font-bold">Raipur.</span>
                  </li>
                  <li>
                    It shares its borders with{" "}
                    <span className="font-bold">
                      Uttar Pradesh, Madhya Pradesh, Maharashtra, Jharkhand,
                      Odisha, Telangana, and Andhra Pradesh.
                    </span>{" "}
                    Currently, it comprises 28 districts.
                  </li>
                </ul>
                <div className="rounded bg-gray-200 p-2">
                  <ul className="text-justify">
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Capital:{" "}
                        </strong>
                        Raipur
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Founded on:{" "}
                        </strong>
                        Founded on: 1 Nov. 2000{" "}
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Offical language:{" "}
                        </strong>
                        Hindi
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Sex Ratio:{" "}
                        </strong>
                        990 females per 1000 males
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Literacy Rate:{" "}
                        </strong>
                        70.28%
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-1">
                <Image
                  className="h-21 mx-auto object-cover"
                  src="https://digital-ocean-space-bucket.blr1.digitaloceanspaces.com/chattishgarh.png"
                  alt=""
                  width="500"
                  height="800"
                />
              </div>
            </div>
            {/* Goa */}
            <h3 className="text-yellow-400 pt-6 font-sans text-3xl font-bold dark:text-white">
              6. Goa
            </h3>
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="flex-1 break-words pt-1 text-left text-lg text-gray-900 dark:text-white">
                <ul className="list-disc break-words text-justify text-base dark:text-gray-400">
                  <li>
                    Goa is surrounded by the Indian states of{" "}
                    <span className="font-bold">
                      Maharashtra to the north and Karnataka to the east and
                      south, with the Arabian Sea forming its western coast.
                    </span>
                  </li>
                  <li>
                    It is India’s{" "}
                    <span className="font-bold">smallest state by area</span>{" "}
                    and{" "}
                    <span className="font-bold">
                      fourth-smallest by population.
                    </span>
                  </li>
                  <li>
                    Goa has the{" "}
                    <span className="font-bold">highest GDP per capita</span>{" "}
                    among all Indian states and it is the{" "}
                    <span className="font-bold">
                      third-highest ranking among Indian states in the human
                      development index.
                    </span>
                  </li>
                  <li>
                    Until it was annexed by India in{" "}
                    <span className="font-bold">1961</span> Goa was the overseas
                    territory of the{" "}
                    <span className="font-bold">Portuguese Empire.</span> Goa’s
                    offcial language, which is spoken by a majority of its
                    inhabitants, is <span className="font-bold">Konkani.</span>
                  </li>
                </ul>
                <div className="rounded bg-gray-200 p-2">
                  <ul className="text-justify">
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Capital:{" "}
                        </strong>
                        Panaji
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Founded on:{" "}
                        </strong>
                        Founded on: 30 May. 1987{" "}
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Offical language:{" "}
                        </strong>
                        Konkani,English
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Sex Ratio:{" "}
                        </strong>
                        968females per 1000 males
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Literacy Rate:{" "}
                        </strong>
                        88.7%
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-1">
                <Image
                  className="h-21 mx-auto object-cover"
                  src="https://digital-ocean-space-bucket.blr1.digitaloceanspaces.com/goa.jpeg"
                  alt=""
                  width="500"
                  height="800"
                />
              </div>
            </div>
            {/* Gujarat */}
            <h3 className="text-yellow-400 pt-6 font-sans text-3xl font-bold dark:text-white">
              7. Gujarat
            </h3>
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="flex-1 break-words pt-1 text-left text-lg text-gray-900 dark:text-white">
                <ul className="list-disc break-words text-justify text-base dark:text-gray-400">
                  <li>
                    Gujarat is a state on the western coast of India with a
                    coastline of <span className="font-bold">1,600 km,</span>{" "}
                    and it is the state of India having the{" "}
                    <span className="font-bold">longest coastline.</span>
                  </li>
                  <li>
                    It is the <span className="font-bold">fifth-largest</span>{" "}
                    Indian state by area and the{" "}
                    <span className="font-bold">
                      ninth-largest state by population.
                    </span>
                  </li>
                  <li>
                    The capital city of Gujarat is{" "}
                    <span className="font-bold">Gandhinagar,</span> while its
                    largest city is{" "}
                    <span className="font-bold">Ahmedabad.</span> The Gujarati
                    people of India are indigenous to the state, and their
                    language <span className="font-bold">Gujarati</span> is the
                    state’s official language.
                  </li>
                </ul>
                <div className="rounded bg-gray-200 p-2">
                  <ul className="text-justify">
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Capital:{" "}
                        </strong>
                        Gandhinagar
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Founded on:{" "}
                        </strong>
                        Founded on: 1 May. 1960{" "}
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Offical language:{" "}
                        </strong>
                        Gujarati
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Sex Ratio:{" "}
                        </strong>
                        918 females per 1000 males
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Literacy Rate:{" "}
                        </strong>
                        80.37%
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-1">
                <Image
                  className="h-21 mx-auto object-cover"
                  src="https://digital-ocean-space-bucket.blr1.digitaloceanspaces.com/gujarat.jpeg"
                  alt=""
                  width="500"
                  height="800"
                />
              </div>
            </div>
            {/* Haryana */}
            <h3 className="text-yellow-400 pt-6 font-sans text-3xl font-bold dark:text-white">
              8. Haryana
            </h3>
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="flex-1 break-words pt-1 text-left text-lg text-gray-900 dark:text-white">
                <ul className="list-disc break-words text-justify text-base dark:text-gray-400">
                  <li>
                    Haryana shares its borders with{" "}
                    <span className="font-bold">
                      Punjab, Himachal Pradesh, Uttar Pradesh, Delhi and
                      Rajasthan.
                    </span>
                  </li>
                  <li>
                    <span className="font-bold">Chandigarh</span> is the state
                    capital, and Faridabad in National Capital Region (NCR) is
                    the most populous city of the state.
                  </li>
                  <li>
                    <span className="font-bold">Gurgaon</span> is considered one
                    of the{" "}
                    <span className="font-bold">
                      major information technology and automobile hubs of India.
                    </span>
                  </li>
                </ul>
                <div className="rounded bg-gray-200 p-2">
                  <ul className="text-justify">
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Capital:{" "}
                        </strong>
                        Chandigarh
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Founded on:{" "}
                        </strong>
                        Founded on: 1 Nov. 1966{" "}
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Offical language:{" "}
                        </strong>
                        Hindi
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Sex Ratio:{" "}
                        </strong>
                        879 females per 1000 males
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Literacy Rate:{" "}
                        </strong>
                        75.6%
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-1">
                <Image
                  className="h-21 mx-auto object-cover"
                  src="https://digital-ocean-space-bucket.blr1.digitaloceanspaces.com/haryanamap.jpeg"
                  alt=""
                  width="500"
                  height="800"
                />
              </div>
            </div>
            {/* Himachal Pradesh */}
            <h3 className="text-yellow-400 pt-6 font-sans text-3xl font-bold dark:text-white">
              9. Himachal Pradesh
            </h3>
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="flex-1 break-words pt-1 text-left text-lg text-gray-900 dark:text-white">
                <ul className="list-disc break-words text-justify text-base dark:text-gray-400">
                  <li>
                    Himachal Pradesh shares its border with{" "}
                    <span className="font-bold">
                      Jammu and Kashmir, Ladakh, Punjab, Haryana, Uttarakhand,
                      and a very narrow border shared with Uttar Pradesh to the
                      South.
                    </span>
                  </li>
                  <li>
                    The state also shares an international border with the{" "}
                    <span className="font-bold">
                      Tibet Autonomous Region in China.
                    </span>
                  </li>
                  <li>
                    In 1966, hilly areas of neighboring Punjab state were{" "}
                    <span className="font-bold">merged into Himachal</span> and
                    it was ultimately granted{" "}
                    <span className="font-bold">full statehood in 1971.</span>
                  </li>
                  <li>
                    Nearly 90% of the state’s population lives in rural areas.
                    The important constituents of the state’s economy are
                    <span className="font-bold">
                      {" "}
                      agriculture, horticulture, hydropower, and tourism.
                    </span>
                  </li>
                </ul>
                <div className="rounded bg-gray-200 p-2">
                  <ul className="text-justify">
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Capital:{" "}
                        </strong>
                        Shimla
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Founded on:{" "}
                        </strong>
                        Founded on: 25 Jan. 1971{" "}
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Offical language:{" "}
                        </strong>
                        Hindi
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Sex Ratio:{" "}
                        </strong>
                        972 females per 1000 males
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Literacy Rate:{" "}
                        </strong>
                        82.80%
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-1">
                <Image
                  className="h-21 mx-auto object-cover"
                  src="https://digital-ocean-space-bucket.blr1.digitaloceanspaces.com/HimachalPradeshmap.jpeg"
                  alt=""
                  width="500"
                  height="800"
                />
              </div>
            </div>
            {/* Mizoram */}
            <h3 className="text-yellow-400 pt-6 font-sans text-3xl font-bold dark:text-white">
              10. Mizoram
            </h3>
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="flex-1 break-words pt-1 text-left text-lg text-gray-900 dark:text-white">
                <ul className="list-disc break-words text-justify text-base dark:text-gray-400">
                  <li>
                    Mizoram shared borders with{" "}
                    <span className="font-bold">
                      three of the Seven Sister States Tripura, Assam, and
                      Manipur.
                    </span>
                  </li>
                  <li>
                    The state also shares a{" "}
                    <span className="font-bold">722-kilometer</span> border with
                    the neighboring countries of{" "}
                    <span className="font-bold">Bangladesh and Myanmar.</span>
                  </li>
                  <li>
                    Like several other northeastern states of India,
                    <span className="font-bold">
                      {" "}
                      Mizoram was previously part of Assam until 1972.
                    </span>
                  </li>
                </ul>
                <div className="rounded bg-gray-200 p-2">
                  <ul className="text-justify">
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Capital:{" "}
                        </strong>
                        Aizawl
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Founded on:{" "}
                        </strong>
                        Founded on: 20 Feb. 1987{" "}
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Offical language:{" "}
                        </strong>
                        Mizo
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Sex Ratio:{" "}
                        </strong>
                        976 females per 1000 males
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Literacy Rate:{" "}
                        </strong>
                        91.33%
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-1">
                <Image
                  className="h-21 mx-auto object-cover"
                  src="https://digital-ocean-space-bucket.blr1.digitaloceanspaces.com/mizoram.png"
                  alt=""
                  width="500"
                  height="800"
                />
              </div>
            </div>
            {/* Jharkhand */}
            <h3 className="text-yellow-400 pt-6 font-sans text-3xl font-bold dark:text-white">
              11. Jharkhand
            </h3>
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="flex-1 break-words pt-1 text-left text-lg text-gray-900 dark:text-white">
                <ul className="list-disc break-words text-justify text-base dark:text-gray-400">
                  <li>
                    Jharkhand is a state in eastern India and it shares its
                    border with the states of{" "}
                    <span className="font-bold">
                      Bihar, Uttar Pradesh, Chhattisgarh, Odisha, and West
                      Bengal.
                    </span>
                  </li>
                  <li>
                    It has an area of{" "}
                    <span className="font-bold">79,710 km2</span> which is the
                    <span className="font-bold">
                      15th largest state by area
                    </span>{" "}
                    and the{" "}
                    <span className="font-bold">
                      14th largest by population.
                    </span>{" "}
                    Hindi is the official language of the state.
                  </li>
                  <li>
                    The city of <span className="font-bold">Ranchi</span> is its
                    capital and{" "}
                    <span className="font-bold">Dumka is its sub-capital.</span>
                  </li>
                </ul>
                <div className="rounded bg-gray-200 p-2">
                  <ul className="text-justify">
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Capital:{" "}
                        </strong>
                        Ranchi
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Founded on:{" "}
                        </strong>
                        Founded on: 15 Nov. 2000{" "}
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Offical language:{" "}
                        </strong>
                        Hindi
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Sex Ratio:{" "}
                        </strong>
                        950 females per 1000 males
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Literacy Rate:{" "}
                        </strong>
                        67.63%
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-1">
                <Image
                  className="h-21 mx-auto object-cover"
                  src="https://digital-ocean-space-bucket.blr1.digitaloceanspaces.com/jharkhand.jpeg"
                  alt=""
                  width="500"
                  height="800"
                />
              </div>
            </div>
            {/* Karnataka */}
            <h3 className="text-yellow-400 pt-6 font-sans text-3xl font-bold dark:text-white">
              12. Karnataka
            </h3>
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="flex-1 break-words pt-1 text-left text-lg text-gray-900 dark:text-white">
                <ul className="list-disc break-words text-justify text-base dark:text-gray-400">
                  <li>
                    According to the size, Karnataka is the{" "}
                    <span className="font-bold">
                      largest state in South India
                    </span>{" "}
                    and the{" "}
                    <span className="font-bold">sixth-largest in India.</span>
                  </li>
                  <li>
                    The state is in the southwestern region of India. Its
                    capital and{" "}
                    <span className="font-bold">
                      largest city is Bangalore{" "}
                    </span>
                    and it shares borders with the{" "}
                    <span className="font-bold">
                      Arabian Sea to the west, Goa, Maharashtra, Telangana,
                      Andhra Pradesh, Tamil Nadu, and Kerala.
                    </span>
                  </li>
                  <li>
                    It is the{" "}
                    <span className="font-bold">
                      only southern state to have land borders with all of the
                      other 4 southern Indian sister states.
                    </span>
                  </li>
                </ul>
                <div className="rounded bg-gray-200 p-2">
                  <ul className="text-justify">
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Capital:{" "}
                        </strong>
                        Bangalore
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Founded on:{" "}
                        </strong>
                        Founded on: 1 Nov. 1956{" "}
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Offical language:{" "}
                        </strong>
                        Kannada
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Sex Ratio:{" "}
                        </strong>
                        976 females per 1000 males
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Literacy Rate:{" "}
                        </strong>
                        75.36%
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-1">
                <Image
                  className="h-21 mx-auto object-cover"
                  src="https://digital-ocean-space-bucket.blr1.digitaloceanspaces.com/karnataka.png"
                  alt=""
                  width="500"
                  height="800"
                />
              </div>
            </div>
            {/* Kerala */}
            <h3 className="text-yellow-400 pt-6 font-sans text-3xl font-bold dark:text-white">
              13. Kerala
            </h3>
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="flex-1 break-words pt-1 text-left text-lg text-gray-900 dark:text-white">
                <ul className="list-disc break-words text-justify text-base dark:text-gray-400">
                  <li>
                    Kerala is a state on the{" "}
                    <span className="font-bold">Malabar Coast of India.</span>
                  </li>
                  <li>
                    It is bordered by{" "}
                    <span className="font-bold">
                      Karnataka, Tamil Nadu, and the Lakshadweep Sea.
                    </span>
                  </li>
                  <li>
                    It is the{" "}
                    <span className="font-bold">
                      thirteenth-largest Indian state by population.
                    </span>
                  </li>
                </ul>
                <div className="rounded bg-gray-200 p-2">
                  <ul className="text-justify">
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Capital:{" "}
                        </strong>
                        Thiruvananthapuram
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Founded on:{" "}
                        </strong>
                        Founded on: 1 Nov. 1956{" "}
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Offical language:{" "}
                        </strong>
                        Malayalam
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Sex Ratio:{" "}
                        </strong>
                        1084 females per 1000 males
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Literacy Rate:{" "}
                        </strong>
                        94%
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-1">
                <Image
                  className="h-21 mx-auto object-cover"
                  src="https://digital-ocean-space-bucket.blr1.digitaloceanspaces.com/kerala.png"
                  alt=""
                  width="500"
                  height="800"
                />
              </div>
            </div>
            {/* Madhya Pradesh */}
            <h3 className="text-yellow-400 pt-6 font-sans text-3xl font-bold dark:text-white">
              14. Madhya Pradesh
            </h3>
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="flex-1 break-words pt-1 text-left text-lg text-gray-900 dark:text-white">
                <ul className="list-disc break-words text-justify text-base dark:text-gray-400">
                  <li>
                    Madhya Pradesh is a state in central India. Its capital is
                    Bhopal, and Madhya Pradesh is the{" "}
                    <span className="font-bold">
                      second-largest Indian state by area
                    </span>{" "}
                    and the{" "}
                    <span className="font-bold">
                      fifth-largest state by population with over 72 million
                      residents.
                    </span>
                  </li>
                  <li>
                    It borders the states of{" "}
                    <span className="font-bold">
                      Uttar Pradesh, Chhattisgarh, Maharashtra, Gujarat, and
                      Rajasthan.
                    </span>
                  </li>
                  <li>
                    The economy of Madhya Pradesh is the{" "}
                    <span className="font-bold">10th-largest</span> in India and
                    has the country’s{" "}
                    <span className="font-bold">
                      26th-highest per-capita income.
                    </span>
                  </li>
                </ul>
                <div className="rounded bg-gray-200 p-2">
                  <ul className="text-justify">
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Capital:{" "}
                        </strong>
                        Bhopal
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Founded on:{" "}
                        </strong>
                        Founded on: 1 Nov. 1956{" "}
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Offical language:{" "}
                        </strong>
                        Hindi
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Sex Ratio:{" "}
                        </strong>
                        931 females per 1000 males
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Literacy Rate:{" "}
                        </strong>
                        70.6%
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-1">
                <Image
                  className="h-21 mx-auto object-cover"
                  src="https://digital-ocean-space-bucket.blr1.digitaloceanspaces.com/madhyapradesh.jpeg"
                  alt=""
                  width="500"
                  height="800"
                />
              </div>
            </div>
            {/* Maharashtra */}
            <h3 className="text-yellow-400 pt-6 font-sans text-3xl font-bold dark:text-white">
              15. Maharashtra
            </h3>
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="flex-1 break-words pt-1 text-left text-lg text-gray-900 dark:text-white">
                <ul className="list-disc break-words text-justify text-base dark:text-gray-400">
                  <li>
                    Maharashtra is divided into{" "}
                    <span className="font-bold">
                      6 divisions and 36 districts,
                    </span>
                    with the{" "}
                    <span className="font-bold">
                      state capital being Mumbai,
                    </span>{" "}
                    also the most populous urban area in India, and{" "}
                    <span className="font-bold">
                      Nagpur serving as the winter capital.
                    </span>
                  </li>
                  <li>
                    The{" "}
                    <span className="font-bold">Godavari and the Krishna</span>{" "}
                    are the two major rivers in the state. Nearly 60% of
                    cultivable land in Maharashtra is producing Jowar.
                  </li>
                  <li>
                    Spread over <span className="font-bold">307,713 km2,</span>{" "}
                    it is the{" "}
                    <span className="font-bold">
                      third-largest state by area in India.
                    </span>{" "}
                    <span className="font-bold">
                      Pune and Nashik are known as the ‘Oxford of the East’
                    </span>{" "}
                    and the{" "}
                    <span className="font-bold">‘Wine Capital of India’</span>{" "}
                    respectively.
                  </li>
                </ul>
                <div className="rounded bg-gray-200 p-2">
                  <ul className="text-justify">
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Capital:{" "}
                        </strong>
                        Mumbai
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Founded on:{" "}
                        </strong>
                        Founded on: 1 May. 1960{" "}
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Offical language:{" "}
                        </strong>
                        Marathi
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Sex Ratio:{" "}
                        </strong>
                        929 females per 1000 males
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Literacy Rate:{" "}
                        </strong>
                        82.34%
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-1">
                <Image
                  className="h-21 mx-auto object-cover"
                  src="https://digital-ocean-space-bucket.blr1.digitaloceanspaces.com/maharashtra.jpg"
                  alt=""
                  width="500"
                  height="800"
                />
              </div>
            </div>
            {/* Manipur */}
            <h3 className="text-yellow-400 pt-6 font-sans text-3xl font-bold dark:text-white">
              16. Manipur
            </h3>
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="flex-1 break-words pt-1 text-left text-lg text-gray-900 dark:text-white">
                <ul className="list-disc break-words text-justify text-base dark:text-gray-400">
                  <li>
                    Manipur is bounded by the Indian states of{" "}
                    <span className="font-bold">
                      Nagaland, Mizoram, and Assam.
                    </span>
                  </li>
                  <li>
                    The state covers an area of{" "}
                    <span className="font-bold">22,327 square kilometers</span>{" "}
                    and has a population of almost{" "}
                    <span className="font-bold">3 million.</span>
                  </li>
                  <li>
                    According to the 2011 census,{" "}
                    <span className="font-bold">
                      Hinduism is the major religion
                    </span>
                    in the state,{" "}
                    <span className="font-bold">followed by Christianity.</span>
                  </li>
                </ul>
                <div className="rounded bg-gray-200 p-2">
                  <ul className="text-justify">
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Capital:{" "}
                        </strong>
                        Imphal
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Founded on:{" "}
                        </strong>
                        Founded on: 21 Jan. 1972{" "}
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Offical language:{" "}
                        </strong>
                        Manipuri
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Sex Ratio:{" "}
                        </strong>
                        958 females per 1000 males
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Literacy Rate:{" "}
                        </strong>
                        86.1%
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-1">
                <Image
                  className="h-21 mx-auto object-cover"
                  src="https://digital-ocean-space-bucket.blr1.digitaloceanspaces.com/manipur.jpeg"
                  alt=""
                  width="500"
                  height="800"
                />
              </div>
            </div>
            {/* Meghalaya */}
            <h3 className="text-yellow-400 pt-6 font-sans text-3xl font-bold dark:text-white">
              17. Meghalaya
            </h3>
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="flex-1 break-words pt-1 text-left text-lg text-gray-900 dark:text-white">
                <ul className="list-disc break-words text-justify text-base dark:text-gray-400">
                  <li>
                    On <span className="font-bold">21 January 1972,</span>{" "}
                    Meghalaya was formed by carving out{" "}
                    <span className="font-bold">
                      two districts from the state of Assam Hills.
                    </span>
                  </li>
                  <li>
                    The population of Meghalaya as of 2016 is estimated to be
                    <span className="font-bold"> 3,211,474.</span> Meghalaya
                    covers an area of approximately{" "}
                    <span className="font-bold">22,430 square kilometers.</span>
                  </li>
                  <li>
                    The state is bound to the{" "}
                    <span className="font-bold">
                      south and west by Bangladesh, and to the north and east by
                      Assam.
                    </span>
                  </li>
                </ul>
                <div className="rounded bg-gray-200 p-2">
                  <ul className="text-justify">
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Capital:{" "}
                        </strong>
                        Shillong
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Founded on:{" "}
                        </strong>
                        Founded on: 21 Jan. 1972{" "}
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Offical language:{" "}
                        </strong>
                        English
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Sex Ratio:{" "}
                        </strong>
                        986 females per 1000 males
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Literacy Rate:{" "}
                        </strong>
                        74.43%
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-1">
                <Image
                  className="h-21 mx-auto object-cover"
                  src="https://digital-ocean-space-bucket.blr1.digitaloceanspaces.com/meghalaya.png"
                  alt=""
                  width="500"
                  height="800"
                />
              </div>
            </div>
            {/* Nagaland */}
            <h3 className="text-yellow-400 pt-6 font-sans text-3xl font-bold dark:text-white">
              18. Nagaland
            </h3>
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="flex-1 break-words pt-1 text-left text-lg text-gray-900 dark:text-white">
                <ul className="list-disc break-words text-justify text-base dark:text-gray-400">
                  <li>
                    Nagaland is bordered by the state of
                    <span className="font-bold">
                      {" "}
                      Arunachal Pradesh, Assam, Manipur, and Myanmar.
                    </span>
                  </li>
                  <li>
                    Nagaland’s capital city is{" "}
                    <span className="font-bold">Kohima</span> and its largest
                    city is
                    <span className="font-bold"> Dimapur.</span>
                  </li>
                  <li>
                    It has an area of{" "}
                    <span className="font-bold">16,579 square kilometers</span>{" "}
                    with a population of{" "}
                    <span className="font-bold">
                      1,980,602 per the 2011 Census of India,
                    </span>
                    making it{" "}
                    <span className="font-bold">
                      one of the smallest states of India.
                    </span>
                  </li>
                </ul>
                <div className="rounded bg-gray-200 p-2">
                  <ul className="text-justify">
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Capital:{" "}
                        </strong>
                        Kohima
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Founded on:{" "}
                        </strong>
                        Founded on: 1 Dec. 1963{" "}
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Offical language:{" "}
                        </strong>
                        English
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Sex Ratio:{" "}
                        </strong>
                        931 females per 1000 males
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Literacy Rate:{" "}
                        </strong>
                        79.55%
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-1">
                <Image
                  className="h-21 mx-auto object-cover"
                  src="https://digital-ocean-space-bucket.blr1.digitaloceanspaces.com/Nagaland.jpeg"
                  alt=""
                  width="500"
                  height="800"
                />
              </div>
            </div>
            {/* Odisha */}
            <h3 className="text-yellow-400 pt-6 font-sans text-3xl font-bold dark:text-white">
              19. Odisha
            </h3>
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="flex-1 break-words pt-1 text-left text-lg text-gray-900 dark:text-white">
                <ul className="list-disc break-words text-justify text-base dark:text-gray-400">
                  <li>
                    Odisha is the{" "}
                    <span className="font-bold">8th largest state by area</span>{" "}
                    and the{" "}
                    <span className="font-bold">
                      11th largest by population.
                    </span>{" "}
                    The state has the{" "}
                    <span className="font-bold">
                      third-largest population of Scheduled Tribes in India.
                    </span>
                  </li>
                  <li>
                    It shares borders with{" "}
                    <span className="font-bold">
                      West Bengal, Jharkhand, Chhattisgarh, Andhra Pradesh, and
                      Telangana. Odisha has a coastline of 485 kilometers along
                      the Bay of Bengal.
                    </span>
                  </li>
                </ul>
                <div className="rounded bg-gray-200 p-2">
                  <ul className="text-justify">
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Capital:{" "}
                        </strong>
                        Bhubaneshwar
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Founded on:{" "}
                        </strong>
                        Founded on: 26 Jan. 1950{" "}
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Offical language:{" "}
                        </strong>
                        Odia
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Sex Ratio:{" "}
                        </strong>
                        979 females per 1000 males
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Literacy Rate:{" "}
                        </strong>
                        72.9%
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-1">
                <Image
                  className="h-21 mx-auto object-cover"
                  src="https://digital-ocean-space-bucket.blr1.digitaloceanspaces.com/odisha.jpeg"
                  alt=""
                  width="500"
                  height="800"
                />
              </div>
            </div>
            {/* Punjab */}
            <h3 className="text-yellow-400 pt-6 font-sans text-3xl font-bold dark:text-white">
              20. Punjab
            </h3>
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="flex-1 break-words pt-1 text-left text-lg text-gray-900 dark:text-white">
                <ul className="list-disc break-words text-justify text-base dark:text-gray-400">
                  <li>
                    Punjab covers an area of{" "}
                    <span className="font-bold">50,362 square kilometers</span>{" "}
                    which is only{" "}
                    <span className="font-bold">
                      1.53% of India’s total geographical area.
                    </span>
                  </li>
                  <li>
                    It is the{" "}
                    <span className="font-bold">
                      20th-largest Indian state by area.
                    </span>
                    . With over{" "}
                    <span className="font-bold">27 million inhabitants,</span>{" "}
                    Punjab is the{" "}
                    <span className="font-bold">
                      16th-largest state by population, comprising 23 districts.
                    </span>
                  </li>
                  <li>
                    The state capital is{" "}
                    <span className="font-bold">Chandigarh,</span> a Union
                    Territory and also the{" "}
                    <span className="font-bold">
                      capital of the neighboring state of Haryana.
                    </span>
                  </li>
                </ul>
                <div className="rounded bg-gray-200 p-2">
                  <ul className="text-justify">
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Capital:{" "}
                        </strong>
                        Chandigarh
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Founded on:{" "}
                        </strong>
                        Founded on: 1 Nov. 1956{" "}
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Offical language:{" "}
                        </strong>
                        Punjabi
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Sex Ratio:{" "}
                        </strong>
                        895 females per 1000 males
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Literacy Rate:{" "}
                        </strong>
                        75.84%
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-1">
                <Image
                  className="h-21 mx-auto object-cover"
                  src="https://digital-ocean-space-bucket.blr1.digitaloceanspaces.com/punjab.png"
                  alt=""
                  width="500"
                  height="800"
                />
              </div>
            </div>
            {/* Rajasthan */}
            <h3 className="text-yellow-400 pt-6 font-sans text-3xl font-bold dark:text-white">
              21. Rajasthan
            </h3>
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="flex-1 break-words pt-1 text-left text-lg text-gray-900 dark:text-white">
                <ul className="list-disc break-words text-justify text-base dark:text-gray-400">
                  <li>
                    Rajasthan is the{" "}
                    <span className="font-bold">
                      largest state by area in India
                    </span>{" "}
                    and it is located on the northwestern side of the country.
                  </li>
                  <li>
                    The state shares its borders with{" "}
                    <span className="font-bold">
                      Pakistan to the northwest, and to the north and northeast
                      with the states of Punjab, Haryana, Uttar Pradesh, and
                      Madhya Pradesh.
                    </span>
                  </li>
                  <li>
                    The capital city of Rajasthan is
                    <span className="font-bold"> Jaipur,</span> which is also
                    known as the <span className="font-bold">Pink City.</span>
                  </li>
                </ul>
                <div className="rounded bg-gray-200 p-2">
                  <ul className="text-justify">
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Capital:{" "}
                        </strong>
                        Jaipur
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Founded on:{" "}
                        </strong>
                        Founded on: 1 Nov. 1956{" "}
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Offical language:{" "}
                        </strong>
                        Hindi
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Sex Ratio:{" "}
                        </strong>
                        928 females per 1000 males
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Literacy Rate:{" "}
                        </strong>
                        66.11%
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-1">
                <Image
                  className="h-21 mx-auto object-cover"
                  src="https://digital-ocean-space-bucket.blr1.digitaloceanspaces.com/rajasthan.png"
                  alt=""
                  width="500"
                  height="800"
                />
              </div>
            </div>
            {/* Sikkim */}
            <h3 className="text-yellow-400 pt-6 font-sans text-3xl font-bold dark:text-white">
              22. Sikkim
            </h3>
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="flex-1 break-words pt-1 text-left text-lg text-gray-900 dark:text-white">
                <ul className="list-disc break-words text-justify text-base dark:text-gray-400">
                  <li>
                    Sikkim is a state in{" "}
                    <span className="font-bold">northeastern India.</span> It
                    shares its borders with{" "}
                    <span className="font-bold">
                      Bhutan to the east, Nepal to the west, and the Indian
                      state of West Bengal to the south.
                    </span>
                  </li>
                  <li>
                    Sikkim is also close to India’s{" "}
                    <span className="font-bold">
                      Siliguri Corridor near Bangladesh.
                    </span>
                  </li>
                  <li>
                    Sikkim is the{" "}
                    <span className="font-bold">
                      least populous and second smallest among the Indian
                      states.
                    </span>
                  </li>
                </ul>
                <div className="rounded bg-gray-200 p-2">
                  <ul className="text-justify">
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Capital:{" "}
                        </strong>
                        Gangtok
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Founded on:{" "}
                        </strong>
                        Founded on: 16 May. 1975{" "}
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Offical language:{" "}
                        </strong>
                        English,Nepali,Sikkimese,Lepcha
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Sex Ratio:{" "}
                        </strong>
                        889 females per 1000 males
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Literacy Rate:{" "}
                        </strong>
                        76.43%
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-1">
                <Image
                  className="h-21 mx-auto object-cover"
                  src="https://digital-ocean-space-bucket.blr1.digitaloceanspaces.com/sikkim.jpeg"
                  alt=""
                  width="500"
                  height="800"
                />
              </div>
            </div>
            {/* Tamil Nadu */}
            <h3 className="text-yellow-400 pt-6 font-sans text-3xl font-bold dark:text-white">
              23. Tamil Nadu
            </h3>
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="flex-1 break-words pt-1 text-left text-lg text-gray-900 dark:text-white">
                <ul className="list-disc break-words text-justify text-base dark:text-gray-400">
                  <li>
                    Tamil Nadu lies in the southernmost part of the Indian
                    subcontinent and is bordered by the{" "}
                    <span className="font-bold">
                      union territory of Puducherry and the South Indian states
                      of Kerala, Karnataka, and Andhra Pradesh.
                    </span>
                  </li>
                  <li>
                    It is bounded by the{" "}
                    <span className="font-bold">
                      Eastern Ghats on the north, by the Nilgiri Mountains, the
                      Meghamalai Hills, and Kerala on the west, by the Bay of
                      Bengal in the east, by the Gulf of Mannar and the Palk
                      Strait on the southeast, and by the Indian Ocean on the
                      south.
                    </span>
                  </li>
                  <li>
                    The state shares a maritime border with the nation of
                    <span className="font-bold"> Sri Lanka.</span>
                  </li>
                </ul>
                <div className="rounded bg-gray-200 p-2">
                  <ul className="text-justify">
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Capital:{" "}
                        </strong>
                        Chennai
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Founded on:{" "}
                        </strong>
                        Founded on: 26 Jan. 1950{" "}
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Offical language:{" "}
                        </strong>
                        Tamil
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Sex Ratio:{" "}
                        </strong>
                        996 females per 1000 males
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Literacy Rate:{" "}
                        </strong>
                        80.09%
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-1">
                <Image
                  className="h-21 mx-auto object-cover"
                  src="https://digital-ocean-space-bucket.blr1.digitaloceanspaces.com/tamilnadu.jpeg"
                  alt=""
                  width="500"
                  height="800"
                />
              </div>
            </div>
            {/* Tripura */}
            <h3 className="text-yellow-400 pt-6 font-sans text-3xl font-bold dark:text-white">
              24. Tripura
            </h3>
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="flex-1 break-words pt-1 text-left text-lg text-gray-900 dark:text-white">
                <ul className="list-disc break-words text-justify text-base dark:text-gray-400">
                  <li>
                    Tripura is a state on the northeastern side of India. The
                    <span className="font-bold">
                      third-smallest state in the country
                    </span>
                  </li>
                  <li>
                    According to the 2011 census, the state had{" "}
                    <span className="font-bold">
                      3,671,032 residents, constituting 0.3% of the country’s
                      population.
                    </span>
                  </li>
                  <li>
                    Forests cover more than{" "}
                    <span className="font-bold">half of the area,</span> in
                    which{" "}
                    <span className="font-bold">
                      bamboo and cane tracts are common.
                    </span>{" "}
                    Tripura has the
                    <span className="font-bold">
                      {" "}
                      highest number of primate species found in any Indian
                      state.
                    </span>
                  </li>
                </ul>
                <div className="rounded bg-gray-200 p-2">
                  <ul className="text-justify">
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Capital:{" "}
                        </strong>
                        Agartala
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Founded on:{" "}
                        </strong>
                        Founded on: 21 Jan. 1972{" "}
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Offical language:{" "}
                        </strong>
                        Bengali,English,Kokborok
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Sex Ratio:{" "}
                        </strong>
                        960 females per 1000 males
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Literacy Rate:{" "}
                        </strong>
                        87.75%
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-1">
                <Image
                  className="h-21 mx-auto object-cover"
                  src="https://digital-ocean-space-bucket.blr1.digitaloceanspaces.com/tripura.jpeg"
                  alt=""
                  width="500"
                  height="800"
                />
              </div>
            </div>
            {/* Telangana */}
            <h3 className="text-yellow-400 pt-6 font-sans text-3xl font-bold dark:text-white">
              25. Telangana
            </h3>
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="flex-1 break-words pt-1 text-left text-lg text-gray-900 dark:text-white">
                <ul className="list-disc break-words text-justify text-base dark:text-gray-400">
                  <li>
                    Telangana is a state in Southern India situated on the
                    <span className="font-bold">
                      south-central stretch of the Indian peninsula on the high
                      Deccan Plateau.
                    </span>
                  </li>
                  <li>
                    It is the{" "}
                    <span className="font-bold">eleventh-largest state</span>{" "}
                    and the{" "}
                    <span className="font-bold">
                      twelfth most populated state in India
                    </span>{" "}
                    with a geographical area of{" "}
                    <span className="font-bold">112,077 km2</span>
                  </li>
                  <li>
                    Telangana is bordered by the states of{" "}
                    <span className="font-bold">
                      Maharashtra to the north, Chhattisgarh to the east,
                      Karnataka to the west, and Andhra Pradesh to the east and
                      south.
                    </span>
                  </li>
                </ul>
                <div className="rounded bg-gray-200 p-2">
                  <ul className="text-justify">
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Capital:{" "}
                        </strong>
                        Hyderabad
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Founded on:{" "}
                        </strong>
                        Founded on: 2 June. 2014{" "}
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Offical language:{" "}
                        </strong>
                        Telugu
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Sex Ratio:{" "}
                        </strong>
                        988 females per 1000 males
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Literacy Rate:{" "}
                        </strong>
                        66.46%
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-1">
                <Image
                  className="h-21 mx-auto object-cover"
                  src="https://digital-ocean-space-bucket.blr1.digitaloceanspaces.com/telangana.jpeg"
                  alt=""
                  width="500"
                  height="800"
                />
              </div>
            </div>
            {/* Uttar Pradesh */}
            <h3 className="text-yellow-400 pt-6 font-sans text-3xl font-bold dark:text-white">
              26. Uttar Pradesh
            </h3>
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="flex-1 break-words pt-1 text-left text-lg text-gray-900 dark:text-white">
                <ul className="list-disc break-words text-justify text-base dark:text-gray-400">
                  <li>
                    Uttar Pradesh is the{" "}
                    <span className="font-bold">
                      most populous state in India
                    </span>{" "}
                    as well as the{" "}
                    <span className="font-bold">
                      most populous country subdivision in the world.
                    </span>
                  </li>
                  <li>
                    The state is divided into{" "}
                    <span className="font-bold">
                      18 divisions and 75 districts,
                    </span>
                    with the state capital being{" "}
                    <span className="font-bold">Lucknow,</span> and{" "}
                    <span className="font-bold"> Allahabad </span>serving as the
                    judicial capital.
                  </li>
                  <li>
                    The forest cover in the state is{" "}
                    <span className="font-bold">
                      6.1% of the state’s geographical area.
                    </span>{" "}
                    The state is bordered by{" "}
                    <span className="font-bold">
                      Rajasthan, Haryana, Himachal Pradesh, Delhi, Uttarakhand,
                      Bihar, Madhya Pradesh, Jharkhand, Chhattisgarh, and an
                      international border with Nepal.
                    </span>
                  </li>
                </ul>
                <div className="rounded bg-gray-200 p-2">
                  <ul className="text-justify">
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Capital:{" "}
                        </strong>
                        Lucknow
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Founded on:{" "}
                        </strong>
                        Founded on: 26 Jan. 1950{" "}
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Offical language:{" "}
                        </strong>
                        Hindi
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Sex Ratio:{" "}
                        </strong>
                        912 females per 1000 males
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Literacy Rate:{" "}
                        </strong>
                        67.68%
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-1">
                <Image
                  className="h-21 mx-auto object-cover"
                  src="https://digital-ocean-space-bucket.blr1.digitaloceanspaces.com/uttarpradesh.png"
                  alt=""
                  width="500"
                  height="800"
                />
              </div>
            </div>
            {/* Uttarakhand */}
            <h3 className="text-yellow-400 pt-6 font-sans text-3xl font-bold dark:text-white">
              27. Uttarakhand
            </h3>
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="flex-1 break-words pt-1 text-left text-lg text-gray-900 dark:text-white">
                <ul className="list-disc break-words text-justify text-base dark:text-gray-400">
                  <li>
                    Uttarakhand is a state in the northern part of India.
                    Uttarakhand is known for the{" "}
                    <span className="font-bold">
                      natural environment of the Himalayas, the Bhabar, and the
                      Terai regions.
                    </span>
                  </li>
                  <li>
                    It shares international borders with{" "}
                    <span className="font-bold">
                      China and Nepal whereas it shares borders with the Indian
                      states Uttar Pradesh and Himachal Pradesh.
                    </span>
                  </li>
                  <li>
                    According to the 2011 Census of India, Uttarakhand has a
                    population of <span className="font-bold">10,086,292,</span>{" "}
                    making it the{" "}
                    <span className="font-bold">
                      20th most populous state in India.
                    </span>
                  </li>
                </ul>
                <div className="rounded bg-gray-200 p-2">
                  <ul className="text-justify">
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Capital:{" "}
                        </strong>
                        Dehradun
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Founded on:{" "}
                        </strong>
                        Founded on: 9 Nov. 2000{" "}
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Offical language:{" "}
                        </strong>
                        Hindi
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Sex Ratio:{" "}
                        </strong>
                        936 females per 1000 males
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Literacy Rate:{" "}
                        </strong>
                        78.82%
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-1">
                <Image
                  className="h-21 mx-auto object-cover"
                  src="https://digital-ocean-space-bucket.blr1.digitaloceanspaces.com/uttarakhand.jpeg"
                  alt=""
                  width="500"
                  height="800"
                />
              </div>
            </div>
            {/* West Bengal */}
            <h3 className="text-yellow-400 pt-6 font-sans text-3xl font-bold dark:text-white">
              28. West Bengal
            </h3>
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="flex-1 break-words pt-1 text-left text-lg text-gray-900 dark:text-white">
                <ul className="list-disc break-words text-justify text-base dark:text-gray-400">
                  <li>
                    West Bengal is a state in the eastern region of India along
                    the Bay of Bengal.
                  </li>
                  <li>
                    With over{" "}
                    <span className="font-bold">91 million inhabitants,</span>{" "}
                    it is the{" "}
                    <span className="font-bold">
                      fourth-most populous state
                    </span>{" "}
                    and the{" "}
                    <span className="font-bold">
                      fourteenth-largest state by area
                    </span>{" "}
                    in India. Covering an area of{" "}
                    <span className="font-bold">88,752 km2,</span> it is also
                    the
                    <span className="font-bold">
                      {" "}
                      eighth-most populous country subdivision of the world.
                    </span>
                  </li>
                  <li>
                    It shares its borders with{" "}
                    <span className="font-bold">
                      Bangladesh in the east and Nepal and Bhutan in the north.
                      It also borders the Indian states of Odisha, Jharkhand,
                      Bihar, Sikkim, and Assam.
                    </span>
                  </li>
                </ul>
                <div className="rounded bg-gray-200 p-2">
                  <ul className="text-justify">
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Capital:{" "}
                        </strong>
                        Kolkata
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Founded on:{" "}
                        </strong>
                        Founded on: 1 Nov. 1956{" "}
                      </p>
                    </li>
                    <li>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Offical language:{" "}
                        </strong>
                        Bengali
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Sex Ratio:{" "}
                        </strong>
                        956 females per 1000 males
                      </p>
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {" "}
                          Literacy Rate:{" "}
                        </strong>
                        77.08%
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-1">
                <Image
                  className="h-21 mx-auto object-cover"
                  src="https://digital-ocean-space-bucket.blr1.digitaloceanspaces.com/westbengal.png"
                  alt=""
                  width="500"
                  height="800"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
export default Unit7;
