/* eslint-disable react/no-unescaped-entities */
import React from "react";
import SectionTitle from "@/components/Common/SectionTitle";
import Image from "next/image";

const Unit2 = () => {
  return (
    <section
      id="Latitudinal and Longitudinal Extent"
      className="lg:py-18 bg-slate-100 py-16 dark:bg-bg-color-dark md:py-20"
    >
      <div className="container mt-12">
        <SectionTitle
          title="Latitudinal and Longitudinal Extent"
          paragraph=""
          center
        />
        <section className="w-full py-4 md:py-24 lg:py-4">
          <div className="container grid max-w-4xl items-start justify-start gap-8 px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-yellow">
                Latitudinal and Longitudinal extent
              </h2>
              <ul className="list-disc">
                <li className="break-words text-xl dark:text-gray-400">
                  Longitudinal and latitudinal extension of India is almost the
                  same but their distance is a bit different on land because
                  distance between two longitudes{" "}
                  <span className="font-bold">reduces</span> towards poles while
                  distance between two latitudes remains uniform. Therefore, the
                  expansion along east-west longitude is less in comparison to
                  north-south.
                </li>
                <li className="break-words text-xl dark:text-gray-400">
                  The actual distance from east to west is{" "}
                  <span className="font-bold">281</span> km which is less than
                  the actual distance from north to south extent. Thus, the
                  mainland of India is{" "}
                  <span className="font-bold">quadrangular</span> in shape.
                </li>
              </ul>
              <Image
                alt="Responsive Layouts"
                // className="aspect-[2/3] overflow-hidden rounded-lg object-cover"
                height="800"
                src="https://digital-ocean-space-bucket.blr1.digitaloceanspaces.com/india-latitude-and-longitude-extent-map.jpg"
                width="500"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-yellow">
                Impact of Latitudinal Extension
              </h2>
              <ul className="list-disc">
                <li className="break-words text-xl dark:text-gray-400">
                  The <span className="font-bold">Tropic of Cancer</span>{" "}
                  divides India into two parts as Southern India and Northern
                  India. Southern part lies in the Tropical Zone and the
                  northern part lies in the Subtropical Zone. So, India is
                  extended between two zones Tropical and subtropical.
                </li>
                <li className="break-words text-xl dark:text-gray-400">
                  The difference between the duration of the shortest and
                  longest day of year{" "}
                  <span className="font-bold">increases</span> as one moves from
                  Southern latitude to Northern latitude.
                </li>
                <li className="break-words text-xl dark:text-gray-400">
                  There is a difference of{" "}
                  <span className="font-bold">45 minutes</span> between shortest
                  day and longest day in Kerala while a composite difference of{" "}
                  <span className="font-bold">5 </span>hours is found in Leh
                  (Jammu and Kashmir).
                </li>
                <li className="break-words text-xl dark:text-gray-400">
                  Due to the long distance from the equator, the northern part
                  of India receives less heat from the Sun and the climate is
                  colder than southern India. Whereas, the southern part of
                  India{" "}
                  <span className="font-bold">
                    (mainly Kerala and Tamil Nadu)
                  </span>{" "}
                  is near to the equator due to which it receives more heat from
                  the Sun. This results in diversity of flora and fauna in our
                  country.
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-yellow">
                Impact of Longitudinal Extension
              </h2>
              <ul className="list-disc">
                <li className="break-words text-xl dark:text-gray-400">
                  <span className="font-bold">82° 30'</span> East longitude
                  passes through{" "}
                  <span className="font-bold">Naini, Allahabad.</span> This
                  longitude is also called <span>Indian Standard Time.</span>
                </li>
                <li className="break-words text-xl dark:text-gray-400">
                  The Indian Standard Time divides the country into two halves.
                  It passes almost through the middle of the country. It passes
                  through 5 states of India which includes{" "}
                  <span className="font-bold">
                    Uttar Pradesh, Madhya Pradesh, Chhattisgarh, Odisha and
                    Andhra Pradesh.
                  </span>
                </li>
                <li className="break-words text-xl dark:text-gray-400">
                  There is a general understanding among the countries of the
                  world to select the standard meridian in multiples of{" "}
                  <span className="font-bold">7°30' E.</span>
                  Hence <span className="font-bold">82° 30' </span>has been
                  selected as the Standard Meridian of India.
                </li>
                <li className="break-words text-xl dark:text-gray-400">
                  Due to the Indian Standard Time (IST), watches show the same
                  time everywhere in India. Sun rises in the east in Arunachal
                  Pradesh <span className="font-bold"> 2 hours</span> ahead of
                  Gujarat (Kutch).
                </li>
              </ul>
              <p className="break-words text-xl italic dark:text-gray-400">
                There is a 30° longitudinal difference between Eastern point
                Kibithu (Arunachal Pradesh) and Western Point Gaur Mata
                (Gujarat). So, there is a difference of 2 hours (30°×4 minutes -
                120 minutes) between these two points.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md rounded-lg bg-yellow p-8 dark:bg-gray-800">
                <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                  <span className="font-bold">
                    (IST: Indian Standard Time (IST) is the time observed
                    throughout India, with a time offset of UTC + 05:30 India
                    does not observe Daylight Saving Time (DST) or seasonal
                    adjustment. In military and aviation time IST is designated
                    as E* (Echo-Star).
                  </span>
                </p>
                <ul className="list-disc">
                  <li className="leading-relaxed text-gray-700 dark:text-gray-300">
                    Indian Standard Time is calculated on the basis of 82° 30'
                    East longitude, passes through Mirzapur (Uttar Pradesh),
                    which is the corresponding longitude reference line.
                  </li>
                  <li className="leading-relaxed text-gray-700 dark:text-gray-300">
                    Earth rotates 360° in 24 hours. So, it takes 4 minutes to
                    move 1° longitude.)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
export default Unit2;
