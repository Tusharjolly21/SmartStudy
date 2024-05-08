import axios from "axios";

export const fetchStaticData = async () => {
  try {
    const response = await axios.get(
      `${process.env.STRAPI_URL}/api/static-parts?populate=*&`,
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
