import React, { useEffect, useState } from 'react'
import { IApiResponse, IGame } from '../interfaces/interfaces'
import apiClient from '../services/api-client'
import { Text } from '@chakra-ui/react'

const GameGrid = () => {
    const [games, setGames] = useState<IGame[]>([])
    const [error, setError] = useState('')

    useEffect(() => {
        const controller = new AbortController()
        apiClient.get<IApiResponse>("games")
            .then(res => setGames(res.data.results))
            .catch(err => setError(err))

        return () => {
            controller.abort
        }
    }, [])


    return (
        <>
            {error && <Text>{error}</Text>}
            <ul>
                {games.map((game) => {
                    return <li key={game.id}>{game.name}</li>
                })}
            </ul>
        </>
    )
}

export default GameGrid