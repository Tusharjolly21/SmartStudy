import Image from "next/image";
import Link from "next/link";
import React from "react";
import config from "@/config";
import SectionTitle from "../Common/SectionTitle";
import { fetchPageBlogs } from "@/components/helper/fetch-page-blogs";

const BlogCard = ({ blog }: any) => {
  const truncateBlogDesc =
    blog.attributes.Summary.length > 80
      ? blog.attributes.Summary.substring(0, 80) + "..."
      : blog.attributes.Summary;

  return (
    <div
      key={blog.id}
      className="h-full max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800"
    >
      <Link
        href={`${blog.attributes.slug}`}
        className="relative block aspect-[37/22] w-full"
      >
        <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
          {blog.attributes.Category}
        </span>
        <Image
          className="rounded-t-lg"
          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${blog.attributes.Thumbnail.data.attributes.url}`}
          alt=""
          width={400}
          height={250}
        />
      </Link>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {blog.attributes.Title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {blog.attributes.Summary.length > 80
            ? blog.attributes.Summary.substring(0, 80) + "..."
            : blog.attributes.Summary}
        </p>
        <div className="flex items-center">
          <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
            <div className="w-full">
              <h4 className="mb-4 text-sm font-medium text-dark dark:text-white">
                By {blog.attributes.Author}
              </h4>
            </div>
          </div>
          <div className="inline-block">
            <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
              Date
            </h4>
            <p className="text-xs text-body-color">
              {new Date(blog.attributes.publishedAt).toLocaleString()}
            </p>
          </div>
        </div>

        <a
          href={`${blog.attributes.slug}`}
          className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
