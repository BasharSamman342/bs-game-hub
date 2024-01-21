import { QueryObject } from '../App.tsx';
import { IGame,  } from '../interfaces/interfaces'
import useData from "./useData.ts";


const useGames = (gameQuery:QueryObject) => useData<IGame>("games",{params:{genres:gameQuery.genre?.id,platforms:gameQuery.platform?.id}},[gameQuery])
export default useGames