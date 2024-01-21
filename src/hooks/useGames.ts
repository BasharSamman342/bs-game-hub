import { IGame, IGenre } from '../interfaces/interfaces'
import useData from "./useData.ts";


const useGames = (selectedGenre:IGenre|null) => useData<IGame>("games",{params:{genres:selectedGenre?.id}},[selectedGenre])
export default useGames