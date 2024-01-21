 import {Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react"
import {IGame} from "../interfaces/interfaces"
 import PlatformIconList from "./PlatformIconList.tsx";
 import CritiqScore from "./CritiqScore.tsx";

interface Props {
    game: IGame
}

const GameCard = ({ game }: Props) => {
    return (

        <Card borderRadius={10} overflow={"hidden"}>
            <Image src={game.background_image} />
            <CardBody>
                <Heading fontSize={"2xl"}>{game.name}</Heading>
                <HStack justifyContent={"space-between"}>
                    <PlatformIconList platforms={game.parent_platforms.map(p=>p.platform)} />
                    <CritiqScore score={game.metacritic} />
                </HStack>
            </CardBody>
        </Card>
    )
}

export default GameCard