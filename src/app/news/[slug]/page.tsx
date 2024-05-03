import { fetchNews } from "@/helper/fetch-news";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "News Details",
  description: "This is News Details Page",
  // other metadata
};

const NewsMainPage = async (props) => {
  const newsData = await fetchNews(`&filters[slug][$eq]=${props.params.slug}`);

  return newsData.data.map((singleNewsData) => (
    <article
      key={newsData.id}
      className="px-4 py-32 sm:py-32 md:px-32 md:py-12 lg:py-32"
    >
      <div className="prose prose-gray dark:prose-invert mx-auto max-w-6xl py-4">
        <div className="not-prose space-y-2">
          <h1 className="text-justify text-4xl font-extrabold tracking-tight lg:text-5xl">
            {singleNewsData.attributes.Title}
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            By {singleNewsData.attributes.Author} | Published on{" "}
            {singleNewsData.attributes.Newsdate}
          </p>
          <p className="text-justify text-gray-600 dark:text-gray-400">
            {singleNewsData.attributes.Summary}
          </p>
        </div>
        <Image
          alt="News Image"
          className=" aspect-[2/1] overflow-hidden rounded-lg object-fill pt-4"
          height="400"
          src={`${process.env.STRAPI_URL}${singleNewsData.attributes.NewsImage.data.attributes.url}`}
          width="900"
        />
        <div>
          {singleNewsData.attributes.NewsContent.map((content) =>
            content.children.map((child) => (
              <>
                <br />
                <div
                  className="center flex max-w-screen-lg  items-center justify-center text-justify text-base text-gray-500 dark:text-gray-400 sm:flex-col md:sm:flex lg:flex lg:w-full"
                  key={newsData.id}
                  dangerouslySetInnerHTML={{ __html: child.text }}
                />
              </>
            )),
          )}
        </div>
      </div>
    </article>
  ));
};
export default NewsMainPage;
