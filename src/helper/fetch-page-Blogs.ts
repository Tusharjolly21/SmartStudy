import axios from "axios";
import config from "@/config";

export const fetchPageBlogs = async () => {
  try {
    const response = await axios.get(
      `${process.env.STRAPI_URL}/api/blogs?populate=*&`,
      {
        headers: {
          Authorization: `Bearer ${process.env.API_TOKEN}`,
        },
      },
    );

    return response.data; // Return the data directly instead of response.json
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return null;
  }
};
