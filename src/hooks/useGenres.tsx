import { IGenre} from "../interfaces/interfaces.ts";
import useData from "./useData.ts";

const useGenres=()=> useData<IGenre>("genres")

export default useGenres