import SectionTitle from "@/components/Common/SectionTitle";
import config from "@/config";
import { fetchPageBlogs } from "@/helper/fetch-page-Blogs";
import { fetchCategory } from "@/helper/fetch-category";
import Categories from "@/components/Categories/Categories";
import Blogs from "@/components/BlogCard/Blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "This is Blog Page",
};

const Blog = async () => {
  const blogs = await fetchPageBlogs();
  const categories = await fetchCategory();
  return (
    <section
      id="blog"
      className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
    >
      <div className="container my-16">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="Stay in the know with our quick and insightful updates on general awareness topics. Get the latest news, trends, and must-know information in a snap. Dive in now for a fresh perspective on what's happening around the world!"
          center
        />
        <Categories categories={categories} />
        <Blogs blogs={blogs} />
      </div>
    </section>
  );
};

export default Blog;
