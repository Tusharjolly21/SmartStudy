import React from "react";
import Link from "next/link";
import { fetchNews } from "@/helper/fetch-news.ts";

const NewsCard = async () => {
  const news = await fetchNews();
  return (
    <div>
      <section className="mt-36 grid grid-cols-1 gap-6 px-4 py-12 sm:grid-cols-2 md:grid-cols-3 md:px-6 md:py-16 lg:grid-cols-4">
        {news.data.map((newsData) => (
          <Link key={newsData.id} href={newsData.attributes.slug}>
            <div className="cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-gray-950">
              <div className="p-4 md:p-6">
                <span className="mb-2 inline-block text-sm font-medium text-primary-500 dark:text-primary-400">
                  {newsData.attributes.Category}
                </span>
                <h3 className="mb-2 text-lg font-semibold hover:underline">
                  {newsData.attributes.Title}
                </h3>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <span>{newsData.attributes.Author}</span>
                  <span className="mx-2">•</span>
                  <span>
                    {new Date(newsData.attributes.Date).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default NewsCard;
