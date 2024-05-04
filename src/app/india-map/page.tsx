import React from "react";
import SectionTitle from "@/components/Common/SectionTitle";
import { Metadata } from "next";
import Link from "next/link";
import SingleMap from "@/components/MapSection/index";

export const metadata: Metadata = {
  title: "Map- India Map",
  description: "This is India Map Page",
};
function IndiaMap() {
  return (
    <section
      id="blog"
      className="bg-slate-100 py-32 dark:bg-bg-color-dark md:py-20 lg:py-32"
    >
      <SectionTitle title="India Maps" paragraph="" center />
      <SingleMap />
    </section>
  );
}

export default IndiaMap;
