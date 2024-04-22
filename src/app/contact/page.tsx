import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact us",
  description: "This is Contact Page",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="Contact Page" description="Get in Touch with Us" />

      <Contact />
    </>
  );
};

export default ContactPage;
