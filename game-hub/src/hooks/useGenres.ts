import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ['genres'],
    queryFn: async () => {
      const response = await apiClient.get<FetchResponse<Genre>>('/genres');
      return response.data;
    },
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: genres.length, results: genres },
  });
export default useGenres;