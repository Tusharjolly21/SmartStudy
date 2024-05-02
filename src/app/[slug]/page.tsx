import Image from "next/image";
import { fetchBlogs } from "@/helper/fetch-blogs";
import { Metadata } from "next";
import config from "@/config";
import Comment from "@/components/Comment/comment";

export const metadata: Metadata = {
  title: "Blog Details",
  description: "This is Blog Details Page",
};

const BlogDetailsPage = async (props) => {
  const blogs = await fetchBlogs(`&filters[slug][$eq]=${props.params.slug}`);
  if (blogs.data.length === 0) {
    return null;
  }
  const blog = blogs.data[0];
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12 ">
              <div>
                <h2 className="mb-8 text-justify text-4xl font-extrabold leading-tight tracking-tight text-black dark:text-white sm:text-4xl sm:leading-tight lg:text-5xl">
                  {blog.attributes.Title}
                </h2>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="flex flex-wrap items-center">
                    <div className="mb-5 mr-10 flex items-center">
                      <div className="mr-4"></div>
                      <div className="w-full">
                        <span className="mb-1 text-base font-medium text-body-color">
                          By <span>{blog.attributes.Author}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mb-5">
                    <a
                      href="#0"
                      className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                    >
                      {blog.attributes.Category}
                    </a>
                  </div>
                </div>
                <p className="center mx-auto mb-4 flex max-w-screen-lg items-center justify-center text-justify text-gray-600 dark:text-gray-400 sm:flex-col md:sm:flex lg:flex lg:w-full">
                  {blog.attributes.Summary}
                </p>
                <div className="mb-10 w-full overflow-hidden rounded">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={`${blog.attributes.Thumbnail.data.attributes.url}`}
                      alt="image"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            {blog.attributes.Content.map((content) =>
              content.children.map((child) => (
                <>
                  <br />
                  <div
                    className="center ctext-gray-600  mx-auto flex max-w-screen-lg items-center justify-center text-justify text-gray-600 dark:text-gray-400 sm:flex-col md:sm:flex lg:flex lg:w-full"
                    key={blog.id}
                    dangerouslySetInnerHTML={{ __html: child.text }}
                  />
                </>
              )),
            )}
          </div>
          <Comment />
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
