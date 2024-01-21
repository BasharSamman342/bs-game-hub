import { IGame, IGenre, IParentPlatform } from '../interfaces/interfaces'
import useData from "./useData.ts";


const useGames = (selectedGenre:IGenre|null,selectedPlatform:IParentPlatform|null) => useData<IGame>("games",{params:{genres:selectedGenre?.id,platforms:selectedPlatform?.id}},[selectedGenre?.id,selectedPlatform?.id])
export default useGames