import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import GameCardContainer from "./GameCardContainer.tsx";
import { IGenre, IParentPlatform } from '../interfaces/interfaces.ts';

interface Props{
    selectedGenre:IGenre|null,
    selectedPlatform:IParentPlatform|null
}

const GameGrid = ({selectedGenre,selectedPlatform}:Props) => {
    const { data,isLoading, error } = useGames(selectedGenre,selectedPlatform)
    const skeletons=[1,2,3,4,5,6]

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{
                sm: 1, md: 2, lg: 3, xl: 4
            }} padding={"10px"} spacing={10}>
                {isLoading && skeletons.map(skeleton=> <GameCardContainer key={skeleton}><GameCardSkeleton  /></GameCardContainer>) }
                {data.map((game) => {
                    return <GameCardContainer key={game.id}>
                        <GameCard game={game} />
                    </GameCardContainer>
                })}
            </SimpleGrid>
        </>
    )
}

export default GameGrid