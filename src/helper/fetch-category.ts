import axios from "axios";
import config from "@/config";

export const fetchCategory = async () => {
  try {
    const response = await axios.get(
      `${process.env.STRAPI_URL}/api/categories`,
      {
        headers: {
          Authorization: `Bearer ${process.env.API_TOKEN}`,
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return null;
  }
};
