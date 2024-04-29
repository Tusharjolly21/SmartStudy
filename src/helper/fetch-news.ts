import axios from "axios";

export const fetchNews = async () => {
  try {
    const response = await axios.get(
      `${process.env.STRAPI_URL}/api/news?sort[0]=id:desc`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEWS_API_TOKEN}`,
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return null;
  }
};
