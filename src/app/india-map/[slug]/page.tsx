import React from "react";
import SectionTitle from "@/components/Common/SectionTitle";
import { Metadata } from "next";
import { fetchSingleMap } from "@/helper/fetch-single-map";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";

export const metadata: Metadata = {
  title: "Maps",
  description: "This is India Map Page",
};

const MapPage = async (props) => {
  const maps = await fetchSingleMap(`&filters[slug][$eq]=${props.params.slug}`);
  const blog = maps.data[0];
  // const content: BlocksContent = maps.data[0].attributes.MapContent;

  return (
    <section
      id="Map"
      className="lg:py-18 bg-slate-100 py-16 dark:bg-bg-color-dark md:py-20"
    >
      <div className="container mt-12">
        <SectionTitle
          title={maps.data[0].attributes.Title}
          paragraph=""
          center
        />
        <div
          className="prose mx-auto my-10 flex max-w-screen-lg flex-col justify-center text-justify text-gray-600 dark:text-gray-400 lg:flex lg:w-full"
          key={maps.id}
        >
          {/* <BlocksRenderer content={content} /> */}
          <h1 className="flex justify-center text-4xl font-bold text-yellow">
            Coming soon!
          </h1>
        </div>
      </div>
    </section>
  );
};

export default MapPage;
