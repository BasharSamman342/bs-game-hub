import { useEffect, useState } from 'react'
import { IApiResponse, IGame } from '../interfaces/interfaces'
import apiClient from '../services/api-client'
import { CanceledError } from 'axios'

const useGames = () => {
    const [games, setGames] = useState<IGame[]>([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        setIsLoading(true)
        const controller = new AbortController()
        apiClient.get<IApiResponse>("games", { signal: controller.signal })
            .then(res => {
                setGames(res.data.results)
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

    return { games, isLoading,error }
}

export default useGames