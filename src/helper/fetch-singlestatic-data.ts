import axios from "axios";

export const fetchSingleStaticData = async (params) => {
  try {
    const response = await axios.get(
      `${process.env.STRAPI_URL}/api/static-parts?populate=*&${params}`,
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
