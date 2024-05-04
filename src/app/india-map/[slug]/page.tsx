import React from "react";
import SectionTitle from "@/components/Common/SectionTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maps",
  description: "This is India Map Page",
};

function MapPage(props) {
  return (
    <section
      id="Map"
      className="lg:py-18 bg-slate-100 py-16 dark:bg-bg-color-dark md:py-20"
    >
      <div className="container mt-12">
        <SectionTitle title="Coming soon!" paragraph="" center />
      </div>
    </section>
  );
}

export default MapPage;
