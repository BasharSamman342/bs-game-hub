import { IParentPlatform } from "../interfaces/interfaces"
import useData from "./useData"

const usePlatforms = () => useData<IParentPlatform>("platforms/lists/parents")

export default usePlatforms