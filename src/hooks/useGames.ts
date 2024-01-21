import { useEffect, useState } from 'react'
import { IApiResponse, IGame } from '../interfaces/interfaces'
import apiClient from '../services/api-client'
import { CanceledError } from 'axios'

const useGames = () => {
    const [games, setGames] = useState<IGame[]>([])
    const [error, setError] = useState('')

    useEffect(() => {
        const controller = new AbortController()
        apiClient.get<IApiResponse>("games", { signal: controller.signal })
            .then(res => setGames(res.data.results))
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err)
            })

        return () => {
            controller.abort
        }
    }, [])

    return { games, error }
}

export default useGames