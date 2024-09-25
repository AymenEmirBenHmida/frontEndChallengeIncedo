import axiosInstance from "../axiosConfig";

export const searchArtists = async (fileName: string, name?: string) => {
  try {
    const response = await axiosInstance.get("/artist/search", {
      params: { name, fileName },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(`Error searching artist: ${error.message}`);
  }
};
export const downloadArtists = async (fileName: string, name?: string) => {
  try {
    console.log(process.env.NEXT_PUBLIC_API_BASE_URL);
    const response = await axiosInstance.get("/artist/download", {
      params: { name, fileName },
      responseType: "blob",
    });
    console.log(response.data); // Log the response data
    // Log response data for debugging
    const text = await response.data.text(); // Convert blob to text for inspection
    console.log("CSV Content:", text);
    return response.data;
  } catch (error: any) {
    throw new Error(`Error searching artist: ${error.message}`);
  }
};
