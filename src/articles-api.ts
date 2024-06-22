import axios from "axios";

const baseURL: string = "https://api.unsplash.com/";
const API_KEY: string = "sUVy_4Xtw_sm-woEsymdXeZecjTCOBJZTSCcmIQf3BQ";

export type ImageResult = {
  id: string;
  description: string | null;
  alt_description: string | null;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
};

type ApiResponse = {
  results: ImageResult[];
  total: number;
  total_pages: number;
};

type Params = {
  query: string;
  client_id: string;
  page: number;
};

export const fetchArticlesWithTopic = async (
  query: string,
  page: number
): Promise<ImageResult[]> => {
  try {
    const params: Params = {
      query,
      client_id: API_KEY,
      page,
    };

    const response = await axios.get<ApiResponse>(`${baseURL}/search/photos`, {
      params,
    });

    return response.data.results;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Error fetching articles:", error.message);
    } else {
      console.error("Error fetching articles:", error);
    }
    throw error;
  }
};