import useGenres from "../hooks/useGenres.tsx";
import {IGenre} from "../interfaces/interfaces.ts";
import {HStack, Image, List, ListItem, Spinner, Text} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";

const GenreList = ()=>{
    const { data,isLoading,error } = useGenres()

    if (error) return null
    if (isLoading) return <Spinner />
    return (
        <List>
            {
                data.map((item:IGenre)=>{
                    return <ListItem key={item.id} paddingY={"5px"}>
                        <HStack>
                            <Image borderRadius={8} boxSize={"32px"} src={getCroppedImageUrl(item.image_background)} />
                            <Text fontSize={'lg'}>{item.name}</Text>
                        </HStack>
                    </ListItem>
                })
            }
        </List>
    )
}

export default  GenreList