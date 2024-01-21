import useGenres from "../hooks/useGenres.tsx";
import {IGenre} from "../interfaces/interfaces.ts";

const GenreList = ()=>{
    // @ts-ignore
    const { data } = useGenres()
    return (
        <ul>
            {
                data.map((item:IGenre)=>{
                    return <li key={item.id}>{item.name}</li>
                })
            }
        </ul>
    )
}

export default  GenreList