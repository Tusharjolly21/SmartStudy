import React from "react";
import { fetchSingleStaticData } from "@/helper/fetch-singlestatic-data";
import SectionTitle from "@/components/Common/SectionTitle";
import { Metadata } from "next";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";

export const metadata: Metadata = {
  title: "Important Static Facts",
  description: "This is Static Facts Page",
};

const StaticPage = async (props) => {
  const singleData = await fetchSingleStaticData(
    `&filters[slug][$eq]=${props.params.slug}`,
  );
  const data = singleData.data[0];
  const content: BlocksContent = singleData.data[0].attributes.MainContent;
  return (
    <section
      id="Map"
      className="lg:py-18 bg-slate-100 py-16 dark:bg-bg-color-dark md:py-20"
    >
      <div className="container mt-12">
        <SectionTitle
          title={singleData.data[0].attributes.Title}
          paragraph=""
          center
        />
        <div
          className="prose dark:prose-invert prose-ul:text-base prose-p:text-base prose-headings:text-yellow lg:prose-xl mx-auto my-10 flex max-w-screen-lg flex-col justify-center text-justify text-gray-600 dark:text-gray-400 lg:flex lg:w-full"
          key={singleData.id}
        >
          <BlocksRenderer content={content} />
        </div>
      </div>
    </section>
  );
};

export default StaticPage;
