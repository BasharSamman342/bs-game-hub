import {useEffect, useState} from "react";
import { IGenre} from "../interfaces/interfaces.ts";
import apiClient from "../services/api-client.ts";
import {CanceledError} from "axios";

const useGenres=()=>{
    // const [genres, setGenres] = useState<IGenre[]>([])
    const [genres, setGenres] = useState<IGenre[]>([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        // setIsLoading(true)
        const controller = new AbortController()
        apiClient.get("genres", { signal: controller.signal })
            .then(res => {
                setGenres(res.data.results)
                setIsLoading(false)
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err)
                setIsLoading(false)
            })

        return () => {
            controller.abort
        }

    }, [])

    return { genres,isLoading,error }
}

export default useGenres