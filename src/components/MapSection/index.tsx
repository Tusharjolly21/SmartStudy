import Link from "next/link";
import React from "react";
import { fetchMaps } from "@/helper/fetch-maps";

const SingleMap = async () => {
  const mapData = await fetchMaps();
  return (
    <section className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 md:p-6">
      {mapData.data.map((singleData) => (
        <div
          key={singleData.id}
          className="rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-950"
        >
          <div className="p-6">
            <h3 className="mb-4 text-2xl font-bold text-yellow">
              {singleData.attributes.StateName}
            </h3>
            <nav className="grid gap-2">
              <Link
                className="flex items-center justify-between text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href={`india-map/${singleData.attributes.slug1}`}
              >
                <span>{singleData.attributes.stateInfo1}</span>
                <ChevronRightIcon className="h-5 w-5" />
              </Link>
              <Link
                className="flex items-center justify-between text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href={`india-map/${singleData.attributes.slug2}`}
              >
                <span>{singleData.attributes.stateInfo2}</span>
                <ChevronRightIcon className="h-5 w-5" />
              </Link>
              <Link
                className="flex items-center justify-between text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href={`india-map/${singleData.attributes.slug3}`}
              >
                <span>{singleData.attributes.stateinfo3}</span>
                <ChevronRightIcon className="h-5 w-5" />
              </Link>
            </nav>
          </div>
        </div>
      ))}
    </section>
  );
};
function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export default SingleMap;
