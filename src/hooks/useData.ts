import {useEffect, useState} from "react";
import apiClient from "../services/api-client.ts";
import {CanceledError} from "axios";
import {IApiResponse} from "../interfaces/interfaces.ts";

const useData=<T>(endpoint:string)=>{
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        setIsLoading(true)
        const controller = new AbortController()
        apiClient.get<IApiResponse<T>>(endpoint, { signal: controller.signal })
            .then(res => {
                setData(res.data.results)
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

    return { data,isLoading,error }
}

export default useData