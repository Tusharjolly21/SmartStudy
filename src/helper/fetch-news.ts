import axios from "axios";
import config from "@/config";

export const fetchNews = async () => {
  try {
    const response = await axios.get(`${cprocess.env.STRAPI_URi}/api/news`, {
      headers: {
        Authorization: `Bearer ${process.env.NEWS_API_TOKEN}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return null;
  }
};
