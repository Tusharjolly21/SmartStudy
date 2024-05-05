/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";

const contructionPage = () => {
  return (
    <div className="flex h-[100dvh] flex-col items-center justify-center bg-gray-100 dark:bg-gray-800">
      <div className="space-y-4 text-center">
        <h1 className="text-6xl font-bold text-yellow dark:text-gray-50">
          503
        </h1>
        <p className="text-black-500 text-2xl dark:text-gray-400">
          "Oops! It seems like this page is still under construction.
        </p>
        <p className="text-black-500 text-2xl dark:text-gray-400">
          We're working hard to bring you the content you're looking for. Please
          check back soon or explore our other sections in the meantime. Thank
          you for your understanding!"
        </p>
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md bg-yellow px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          href="/"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default contructionPage;
