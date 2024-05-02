import axios from "axios";

export const fetchSingleNews = async () => {
  try {
    const response = await axios.get(
      `${process.env.STRAPI_URL}/api/news?populate=*&sort[0]=id:desc`,
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
