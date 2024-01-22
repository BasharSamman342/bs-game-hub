import { Heading } from "@chakra-ui/react"
import { QueryObject } from "../App"

interface Props{
    gameQuery:QueryObject
}

const GameHeading = ({gameQuery}:Props) => {

    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`
    return (
        <Heading fontSize={"5xl"} marginY={5} as={"h1"}>{heading}</Heading>
  )
}

export default GameHeading