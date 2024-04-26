import axios from "axios";
import config from "@/config";

export const fetchBlogs = async (params) => {
  try {
    const response = await axios.get(
      `${config.api}/api/blogs?populate=*&${params}`,
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
