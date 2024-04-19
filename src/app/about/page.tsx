import AboutSectionOne from "@/components/About/AboutSectionOne";
// import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="Discover SmartStudy, your ultimate learning companion. We believe education should be accessible to all, which is why we offer a plethora of free study materials, curated news to keep you informed, interactive quizzes to challenge your mind, and a library of downloadable PDF resources—all at your fingertips. Whether you're a student striving for excellence or an educator passionate about sharing knowledge, SmartStudy is here to ignite your curiosity and fuel your intellectual growth. Join our vibrant community today and embark on a journey of discovery and empowerment. Let's unlock the doors to knowledge together!"
      />
      <AboutSectionOne />
      {/* <AboutSectionTwo /> // remove the second About Us page for now , if needed will add later */}   
    </>
  );
};

export default AboutPage;
