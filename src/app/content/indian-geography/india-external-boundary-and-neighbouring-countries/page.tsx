/* eslint-disable react/no-unescaped-entities */
import React from "react";
import SectionTitle from "@/components/Common/SectionTitle";
import Image from "next/image";

const Unit4 = () => {
  return (
    <section
      id="blog"
      className="lg:py-18 bg-slate-100 py-16 dark:bg-bg-color-dark md:py-20"
    >
      <div className="container mt-12">
        <SectionTitle
          title="India's external boundary and neighboring countries"
          paragraph=""
          center
        />
        <section className="w-full py-4 md:py-24 lg:py-4">
          <div className="container grid max-w-4xl items-start justify-start gap-8 px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-yellow">
                India's external boundary and neighboring countries
              </h2>
              <p className="break-words text-justify text-base dark:text-gray-400">
                India's external boundary and neighboring countries India shares
                its land frontiers with{" "}
                <span className="font-bold">Pakistan</span> in the west and
                north-west, <span className="font-bold">Afghanistan</span> in
                the north-west,{" "}
                <span className="font-bold">China , Nepal, and Bhutan</span> in
                the north, and{" "}
                <span className="font-bold">Bangladesh and Myanmar</span> in the
                east. India shares her water frontier with{" "}
                <span className="font-bold">Sri Lanka.</span> India shares her
                longest border with.{" "}
                <span className="font-bold">Bangladesh</span> and the shortest
                border with <span className="font-bold">Afghanistan</span>.
              </p>
            </div>
            <div className="relative overflow-x-auto pt-4 shadow-md sm:rounded-lg">
              <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
                <thead className="text-xs uppercase text-gray-700 dark:text-gray-400">
                  <tr>
                    <th
                      scope="col"
                      className="bg-gray-50 px-6 py-3 dark:bg-gray-800"
                    >
                      Country
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Capital
                    </th>
                    <th
                      scope="col"
                      className="bg-gray-50 px-6 py-3 dark:bg-gray-800"
                    >
                      Border length
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Bordering states
                    </th>
                    <th
                      scope="col"
                      className="bg-gray-50 px-6 py-3 dark:bg-gray-800"
                    >
                      Boundary Line
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      className="whitespace-nowrap bg-gray-50 px-6 py-4 font-medium text-gray-900 dark:bg-gray-800 dark:text-white"
                    >
                      Bangladesh
                    </th>
                    <td className="px-6 py-4">Dhaka</td>
                    <td className="bg-gray-50 px-6 py-4 dark:bg-gray-800">
                      4,096.7 km
                    </td>
                    <td className="px-6 py-4">
                      5 (West Bengal, Assam, Meghalaya, Tripura, Mizoram)
                    </td>
                    <td className="bg-gray-50 px-6 py-4 dark:bg-gray-800">
                      Redcliffe Line
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      className="whitespace-nowrap bg-gray-50 px-6 py-4 font-medium text-gray-900 dark:bg-gray-800 dark:text-white"
                    >
                      China
                    </th>
                    <td className="px-6 py-4">Beijing</td>
                    <td className="bg-gray-50 px-6 py-4 dark:bg-gray-800">
                      3,488 km
                    </td>
                    <td className="px-6 py-4">
                      5 (ladakh, Himachal Pradesh, Uttarakhand, Sikkim,
                      Arunachal Pradesh)
                    </td>
                    <td className="bg-gray-50 px-6 py-4 dark:bg-gray-800">
                      McMahon Line & Johnson Line
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      className="whitespace-nowrap bg-gray-50 px-6 py-4 font-medium text-gray-900 dark:bg-gray-800 dark:text-white"
                    >
                      Pakistan
                    </th>
                    <td className="px-6 py-4">Islamabad</td>
                    <td className="bg-gray-50 px-6 py-4 dark:bg-gray-800">
                      3,323 km
                    </td>
                    <td className="px-6 py-4">
                      5 (Jammu & Kashmir,Ladakh, Punjab, Rajasthan, Gujarat)
                    </td>
                    <td className="bg-gray-50 px-6 py-4 dark:bg-gray-800">
                      Radcliffe Line
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      className="whitespace-nowrap bg-gray-50 px-6 py-4 font-medium text-gray-900 dark:bg-gray-800 dark:text-white"
                    >
                      Nepal
                    </th>
                    <td className="px-6 py-4">Kathmandu</td>
                    <td className="bg-gray-50 px-6 py-4 dark:bg-gray-800">
                      1,751 km
                    </td>
                    <td className="px-6 py-4">
                      5 (Uttarakhand, Uttar Pradesh, Bihar, Sikkim, West Bengal)
                    </td>
                    <td className="bg-gray-50 px-6 py-4 dark:bg-gray-800">-</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      className="whitespace-nowrap bg-gray-50 px-6 py-4 font-medium text-gray-900 dark:bg-gray-800 dark:text-white"
                    >
                      Myanmar
                    </th>
                    <td className="px-6 py-4">Naypyidaw</td>
                    <td className="bg-gray-50 px-6 py-4 dark:bg-gray-800">
                      1,643 km
                    </td>
                    <td className="px-6 py-4">
                      4 (Arunachal Pradesh, Nagaland, Manipur, Mizoram)
                    </td>
                    <td className="bg-gray-50 px-6 py-4 dark:bg-gray-800">-</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      className="whitespace-nowrap bg-gray-50 px-6 py-4 font-medium text-gray-900 dark:bg-gray-800 dark:text-white"
                    >
                      Bhutan
                    </th>
                    <td className="px-6 py-4">Thimphu</td>
                    <td className="bg-gray-50 px-6 py-4 dark:bg-gray-800">
                      699 km
                    </td>
                    <td className="px-6 py-4">
                      4 (Sikkim, Arunachal Pradesh, Assam, West Bengal)
                    </td>
                    <td className="bg-gray-50 px-6 py-4 dark:bg-gray-800">-</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      className="whitespace-nowrap bg-gray-50 px-6 py-4 font-medium text-gray-900 dark:bg-gray-800 dark:text-white"
                    >
                      Afghanistan
                    </th>
                    <td className="px-6 py-4">Kabul</td>
                    <td className="bg-gray-50 px-6 py-4 dark:bg-gray-800">
                      106 km
                    </td>
                    <td className="px-6 py-4">1 (Ladakh)</td>
                    <td className="bg-gray-50 px-6 py-4 dark:bg-gray-800">
                      Durand Line
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className=" grid gap-6 py-8 lg:grid-cols-2">
              <div className="rounded bg-gray-200 p-2">
                <strong className="font-semibold text-gray-900 underline dark:text-white">
                  India Pakistan border determination
                </strong>
                <ul className="pt-4">
                  <li>
                    • The boundary starts from Kashmir, passing through Punjab,
                    western Rajasthan and extends up to Kutch region of Gujarat:
                  </li>
                  <li>
                    • The length of the boundary which extends from Punjab to
                    Gujarat via Rajasthan being 3,323 km happens to be the
                    second longest border after that of India-Bangladesh.
                  </li>
                  <li>
                    • Sutlej and Ravi form a natural boundary between India and
                    Pakistan. Ravi river acts as a boundary line in Amritsar
                    district of Punjab while Sutlej river creates boundary line
                    between India and Pakistan, towards south of Firozpur
                    district.
                  </li>
                </ul>
              </div>
              <Image
                className="my-4 rounded-lg border"
                src="https://digital-ocean-space-bucket.blr1.digitaloceanspaces.com/indiapakborder.png"
                alt="Indian Standard point"
                height="800"
                width="500"
              />
              <div className="rounded bg-gray-200 p-2">
                <strong className="font-semibold text-gray-900 underline dark:text-white">
                  Radcliffe Line
                </strong>
                <ul className="p-2">
                  <li>
                    • After partition, on 17th August, 1947 the boundary
                    demarcated between India and Pakistan is known as Radcliffe
                    Line. This line was determined by the Border Commission.
                  </li>
                  <li>
                    • As Cyril Radcliffe was the President of the Commission,
                    the boundary line between India and Pakistan is named after
                    him.
                  </li>
                  <li>
                    • Today, its western part still serves as the Indo-Pakistan
                    border and the eastern part serves as the Indo-Bangladesh
                    border.
                  </li>
                  <li>
                    • The commission had to separate the Punjab and Bengal
                    province on the basis of Hindu and Muslim population.
                  </li>
                </ul>
              </div>
              <Image
                className="my-4 rounded-lg border"
                src="https://digital-ocean-space-bucket.blr1.digitaloceanspaces.com/redclliffe.png"
                alt="RedCliffe Line"
                height="800"
                width="500"
              />
              <div className="rounded bg-gray-200 p-2">
                <strong className="font-semibold text-gray-900 underline dark:text-white">
                  Line of Control(LOC)
                </strong>
                <ul className="p-2">
                  <li>
                    • The term Line of Control refers to the military control
                    line between India and Pakistan occupied parts of the former
                    princely state of Jammu and Kashmir.
                  </li>
                  <li>
                    • The line does not constitute a legally recognized
                    international boundary, but remains the de-facto border,
                    originally being Cease-Fire Line.
                  </li>
                  <li>
                    • It was re-designated as LoC following the Shimla Agreement
                    on 3rd July, 1972. Pak Occupied Kashmir (PoK)
                  </li>
                  <li>
                    • With the help of local tribal people, Pakistan attacked
                    Kashmir in 1947 and acquired a large area. The occupied land
                    later came to be known as PoK.This part of land still
                    remains under the acquisition of Pakistan Muraffarhad is the
                    capital of PoK
                  </li>
                </ul>
              </div>
              <Image
                className="my-4 rounded-lg border"
                src="https://digital-ocean-space-bucket.blr1.digitaloceanspaces.com/LOC.jpg"
                alt="LOC"
                height="800"
                width="500"
              />
              <div className="rounded bg-gray-200 p-2">
                <strong className="font-semibold text-gray-900 underline dark:text-white">
                  India and Bangladesh Land Boundary Agreement
                </strong>
                <ul className="p-2">
                  <li>
                    • India and Bangladesh have signed a pact to operationalise
                    the historic Land Boundary Agreement (LBA) between both
                    nations.
                  </li>
                  <li>
                    • To give effect to this agreement, Parliament had passed a
                    historical 100th Constitutional Amendment Act in 2015.
                  </li>
                  <li>
                    • It envisaged exchange of land including enclaves and
                    adverse possessions from West Bengal, Meghalaya, Tripura and
                    Assam.
                  </li>
                  <li>
                    • The swap has involved handing over 17,000 acres of land to
                    Bangladesh in return for 7,000 acres in 111 enclaves in West
                    Bengal, Assam, Tripura and Meghalaya. It was first decided
                    under the 1974 Land Boundary Agreement (LBA) between India
                    and Bangladesh, but never ratified by the Parliament.
                  </li>
                  <li>
                    • It also settles the question of citizenship for over
                    50,000 people in these enclaves.
                  </li>
                </ul>
              </div>
              <Image
                className="my-4 rounded-lg border"
                src="https://digital-ocean-space-bucket.blr1.digitaloceanspaces.com/enclave.jpg"
                alt="enclave"
                height="800"
                width="500"
              />
              <div className="rounded bg-gray-200 p-2">
                <strong className="font-semibold text-gray-900 underline dark:text-white">
                  Border Line between India and Myanmar
                </strong>
                <ul className="p-2">
                  <li>
                    • Eastern Himalayan mountain ranges create boundary line
                    between these two countries. (Mt. Ranges: Lushai, Patkai and
                    Arakan Yoma).
                  </li>
                  <li>
                    • These ranges separate India from Myanmar along the
                    Irrawaddy river.
                  </li>
                  <li>
                    • India-Myanmar Barrier is a border barrier that India is
                    constructing to seal its 1,624 km long border with Myanmar,
                    to curtail cross-border crimes including goods, arms, drug
                    trafficking, insurgency and counterfeit Indian currency
                    smuggling.
                  </li>
                  <li>
                    • Four north-east Indian states sharing the border with
                    Burma (Myanmar) are Arunachal Pradesh, Nagaland, Mizoram and
                    Manipur.
                  </li>
                  <li>
                    • Brahmaputra Valley in the east and Valley of Mekong,
                    Irrawaddy and Salween along with passes of Een, Tungup
                    Manipur, Tulu and Telai are very important as they connect
                    India to Tibet and China..
                  </li>
                  <li>
                    • Free Movement Regime operates on the border of India and
                    Myanmar, that allows movement of the tribal people within 16
                    km in India and Myanmar without any Visa.
                  </li>
                </ul>
              </div>
              <Image
                className="my-4 rounded-lg border"
                src="https://digital-ocean-space-bucket.blr1.digitaloceanspaces.com/myanmarindia.jpg"
                alt="Myanmmar India"
                height="800"
                width="500"
              />
              <div className="rounded bg-gray-200 p-2">
                <strong className="font-semibold text-gray-900 underline dark:text-white">
                  McMahon Line
                </strong>
                <ul className="p-2">
                  <li>
                    • The McMahon Line is a border line between Tibetan region
                    of China and North-East Region of India, proposed by Henry
                    McMahon on (27th April, 1914) at Shimla Convention between
                    the British and Tibetan representatives.
                  </li>
                  <li>
                    • Currently, it remains an effective boundary between China
                    and India. The line is named after Sir Henry McMahon, a
                    Foreign Secretary of British India.
                  </li>
                  <li>
                    • The McMahon Line has been regarded by India as the legal
                    national border, but China rejects the Shimla Accord and
                    further the McMahon Line.
                  </li>
                </ul>
              </div>
              <Image
                className="my-4 rounded-lg border"
                src="https://digital-ocean-space-bucket.blr1.digitaloceanspaces.com/macmohanline.png"
                alt="MacMohan Line"
                height="800"
                width="500"
              />
              <div className="rounded bg-gray-200 p-2 ">
                <strong className="font-semibold text-gray-900 underline dark:text-white">
                  Line of Actual Control (LAC)
                </strong>
                <ul className="p-2">
                  <li>
                    • Line of Actual Control is a real boundary line between
                    India and China. LAC separated China occupied region (Aksai
                    Chin) from Indian mainland in Jammu and Kashmir.
                  </li>
                  <li>
                    • The line passes through Ladakh, Kashmir, Uttarakhand,
                    Himachal Pradesh, Sikkim and Arunachal Pradesh.
                  </li>
                  <li>
                    • The line where armies of both the countries stand in front
                    of each-other is termed Line of Actual Control. This
                    situation arose during the Indo-China War of 1962.
                  </li>
                </ul>
              </div>
              <Image
                className="my-4 rounded-lg border"
                src="https://digital-ocean-space-bucket.blr1.digitaloceanspaces.com/lac.jpg"
                alt="LAC"
                height="800"
                width="500"
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
export default Unit4;
