import useGenres from "../hooks/useGenres.tsx";
import {IGenre} from "../interfaces/interfaces.ts";
import {Button, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";

interface Props{
    onSelectGenre:(genre:IGenre)=>void
}

const GenreList = ({onSelectGenre}:Props)=>{
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
                            <Button onClick={()=>onSelectGenre(item)} fontSize={'lg'} variant={'link'}>{item.name}</Button>
                        </HStack>
                    </ListItem>
                })
            }
        </List>
    )
}

export default  GenreList