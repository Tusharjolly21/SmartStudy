import axios from "axios";
import config from "@/config";

export const fetchMaps = async () => {
  try {
    const response = await axios.get(
      `${process.env.STRAPI_URL}/api/indian-maps`,
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
