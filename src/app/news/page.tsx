import React from "react";
import NewsData from "@/components/NewsPage";
import SectionTitle from "@/components/Common/SectionTitle";

const NewsPage = () => {
  return (
    <div>
      <section
        id="blog"
        className="lg:py-18 bg-slate-100 py-16 dark:bg-bg-color-dark md:py-20"
      >
        <div className="container mt-12">
          <SectionTitle title="Check out Latest News" paragraph="" center />

          <NewsData />
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
