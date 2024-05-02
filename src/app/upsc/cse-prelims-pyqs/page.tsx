import SectionTitle from "@/components/Common/SectionTitle";
import { Metadata } from "next";
import Link from "next/link";
import csePyqData from "@/app/upsc/cse-prelims-pyqs/csedata";

export const metadata: Metadata = {
  title: "UPSC CSE PYQS",
  description: "This is UPSC CSE PYQS Page",
  // other metadata
};

const CSEPYQ = () => {
  return (
    <section
      id="blog"
      className="bg-gray-light py-32 dark:bg-bg-color-dark md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="UPSC CSE Previous Year Question Papers"
          paragraph="Practice doesn't make perfect; it makes progress. We've got your back with last year's question paper, ready for you "
          center
        />
        <section className="grid grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:grid-cols-2 lg:gap-6">
          {csePyqData.map((pyqData, index) => (
            <Link
              key={index}
              className="flex items-center justify-between rounded-lg border-4 px-4 py-6 text-sm font-bold transition-colors hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 dark:focus-visible:ring-gray-300"
              href={pyqData.path}
              target="_blank"
            >
              {pyqData.subject}
            </Link>
          ))}
        </section>
      </div>
    </section>
  );
};
export default CSEPYQ;
