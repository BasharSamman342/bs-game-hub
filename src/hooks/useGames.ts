import { IGame } from '../interfaces/interfaces'
import useData from "./useData.ts";

const useGames = () => useData<IGame>("games")
export default useGames