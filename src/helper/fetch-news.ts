import axios from "axios";

export const fetchNews = async (params) => {
  try {
    const response = await axios.get(
      `${process.env.STRAPI_URL}/api/news?populate=*&sort[0]=id:desc&${params}`,
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
