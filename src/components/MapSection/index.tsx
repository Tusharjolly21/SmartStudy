import Link from "next/link";
import React from "react";
import { fetchMaps } from "@/helper/fetch-maps";

const SingleMap = async () => {
  const mapData = await fetchMaps();
  return (
    <div>
      <section
        id="blog"
        className=" bg-slate-100 py-2 dark:bg-bg-color-dark md:py-20 lg:py-2"
      >
        <div className="container mt-12">
          <section className="w-full py-4 md:py-24 lg:py-4">
            <div className="container grid max-w-4xl items-start justify-start gap-8 px-4 md:px-6">
              {mapData.data.map((singleData) => (
                <div key={singleData.id} className="space-y-4">
                  <ul className="list-disc">
                    <li className="text-3xl font-bold text-yellow">
                      {singleData.attributes.StateName}
                    </li>
                  </ul>
                  <ul className="flex list-disc flex-col">
                    <li className="hover:text-yellow">
                      <Link href={`india-map/${singleData.attributes.slug1}`}>
                        {singleData.attributes.stateInfo1}
                      </Link>
                    </li>
                    <li className="hover:text-yellow">
                      <Link href={`india-map/${singleData.attributes.slug2}`}>
                        {singleData.attributes.stateInfo2}
                      </Link>
                    </li>
                    <li className="hover:text-yellow">
                      <Link href={`india-map/${singleData.attributes.slug3}`}>
                        {singleData.attributes.stateinfo3}
                      </Link>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default SingleMap;
