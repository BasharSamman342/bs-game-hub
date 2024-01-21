import {useEffect, useState} from "react";
import apiClient from "../services/api-client.ts";
import {AxiosRequestConfig, CanceledError} from "axios";
import {IApiResponse} from "../interfaces/interfaces.ts";

const useData=<T>(endpoint:string,requestConfig?:AxiosRequestConfig,deps?:any[])=>{
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        setIsLoading(true)
        const controller = new AbortController()
        apiClient.get<IApiResponse<T>>(endpoint, { signal: controller.signal,...requestConfig })
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

    }, deps?[...deps]:[])

    return { data,isLoading,error }
}

export default useData