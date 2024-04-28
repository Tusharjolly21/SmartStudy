import axios from "axios";

export const fetchNews = async () => {
  try {
    const response = await axios.get(`${process.env.STRAPI_URL}/api/news`, {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    });

    return response.data; // Return the data directly instead of response.json
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return null; // Return null or handle the error as per your application's logic
  }
};
