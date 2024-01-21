import useGenres from "../hooks/useGenres.tsx";
import {IGenre} from "../interfaces/interfaces.ts";

const GenreList = ()=>{
    // @ts-ignore
    const { genres } = useGenres()
    return (
        <ul>
            {
                genres.map((item:IGenre)=>{
                    return <li key={item.id}>{item.name}</li>
                })
            }
        </ul>
    )
}

export default  GenreList