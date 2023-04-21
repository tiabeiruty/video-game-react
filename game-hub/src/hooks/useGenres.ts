
import useData from "./useData";

interface Genre {
  id: number;
  name: string;
}



const useGenres = () => useData<Genre>('/genre');

export default useGenres;