 import {Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react"
import {IGame} from "../interfaces/interfaces"
 import PlatformIconList from "./PlatformIconList.tsx";
 import CritiqScore from "./CritiqScore.tsx";
 import getCroppedImageUrl from "../services/image-url.ts";

interface Props {
    game: IGame
}

const GameCard = ({ game }: Props) => {
    return (

        <Card>
            <Image src={getCroppedImageUrl(game.background_image)} />
            <CardBody>
                <HStack marginBottom={3} justifyContent={"space-between"}>
                    <PlatformIconList platforms={game.parent_platforms.map(p=>p.platform)} />
                    <CritiqScore score={game.metacritic} />
                </HStack>
                <Heading fontSize={"2xl"}>{game.name}</Heading>
            </CardBody>
        </Card>
    )
}

export default GameCard