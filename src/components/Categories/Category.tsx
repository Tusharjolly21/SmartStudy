"use client";
import { CategoryContext } from "@/context/CategoryContext";
import React, { useContext } from "react";

const Category = ({ cat }: any) => {
  const { category, changeCategory } = useContext(CategoryContext);
  return (
    <div
      onClick={() => changeCategory(cat.attributes.Title)}
      className={`${
        cat.attributes.Title === category
          ? "flex min-w-16 cursor-pointer select-none flex-wrap items-center justify-center rounded-full border-2 border-blue-400 px-3 py-1 text-xs transition-all duration-300 hover:scale-105 hover:transform hover:shadow-lg sm:text-sm md:flex-wrap md:px-3 md:py-1"
          : "bg-[#FFB81C]"
      }  md:py-1shadow-md flex min-w-16 cursor-pointer select-none flex-wrap items-center justify-center rounded-full border-2 border-blue-400 px-3 py-1 text-xs transition-all duration-300 hover:scale-105 hover:transform hover:shadow-lg sm:text-sm md:flex-wrap md:px-3`}
    >
      {cat.attributes.Title}
    </div>
  );
};

export default Category;
