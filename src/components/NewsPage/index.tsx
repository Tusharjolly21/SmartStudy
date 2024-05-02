import React from "react";
import { fetchSingleNews } from "@/helper/fetch-single-news";
import Link from "next/link";

const NewsData = async () => {
  const newsData = await fetchSingleNews();

  return (
    <div>
      <section className="mx-auto mt-32 grid max-w-6xl grid-cols-1 gap-6 p-4 md:grid-cols-2 md:p-6 lg:grid-cols-4">
        {newsData.data.map((singleNews) => (
          <div
            key={singleNews.id} // Assuming each news item has a unique identifier
            className="min-h-80 overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-950"
          >
            <div className="p-4 md:p-6">
              <div className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                {singleNews.attributes.Newscategory}
              </div>
              <Link
                className="mb-2 text-xl font-bold hover:underline"
                href={`/news/${singleNews.attributes.slug}`}
              >
                {singleNews.attributes.Title}
              </Link>
              <h3 className="mb-2 text-xl font-bold">{singleNews.title}</h3>
              <p className="mb-4 line-clamp-3 text-gray-700 dark:text-gray-300">
                {singleNews.attributes.Summary}
              </p>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <span>{singleNews.attributes.Author}</span>
                <span className="mx-2">·</span>
                <span>{singleNews.attributes.Newsdate}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default NewsData;
