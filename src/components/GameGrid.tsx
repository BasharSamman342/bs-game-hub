import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import GameCardContainer from "./GameCardContainer.tsx";

const GameGrid = () => {
    const { games,isLoading, error } = useGames()
    const skeletons=[1,2,3,4,5,6]

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{
                sm: 1, md: 2, lg: 3, xl: 4
            }} padding={"10px"} spacing={10}>
                {isLoading && skeletons.map(skeleton=> <GameCardContainer key={skeleton}><GameCardSkeleton  /></GameCardContainer>) }
                {games.map((game) => {
                    return <GameCardContainer key={game.id}>
                        <GameCard game={game} />
                    </GameCardContainer>
                })}
            </SimpleGrid>
        </>
    )
}

export default GameGrid