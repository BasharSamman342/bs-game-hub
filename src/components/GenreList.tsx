import useGenres from "../hooks/useGenres.tsx";
import {IGenre} from "../interfaces/interfaces.ts";
import {Button, HStack,  Heading,  Image, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";

interface Props{
    onSelectGenre:(genre:IGenre)=>void,
    selectedGenre:IGenre|null
}

const GenreList = ({onSelectGenre,selectedGenre}:Props)=>{
    const { data,isLoading,error } = useGenres()

    if (error) return null
    if (isLoading) return <Spinner />
    return (
        <>
            <Heading fontSize={'2xl'} marginBottom={3}>Genres</Heading>
            <List>
                {
                    data.map((item:IGenre)=>{
                        return <ListItem key={item.id} paddingY={"5px"}>
                            <HStack>
                                <Image objectFit={"cover"} borderRadius={8} boxSize={"32px"} src={getCroppedImageUrl(item.image_background)} />
                                {/* <Image  borderRadius={8} boxSize={"32px"} src={getCroppedImageUrl(item.image_background)} /> */}
                                <Button textAlign={"left"} whiteSpace={"normal"} fontWeight={selectedGenre?.id==item.id?"bold":"normal"} onClick={()=>onSelectGenre(item)} fontSize={'lg'} variant={'link'}>{item.name}</Button>
                                {/* <Button  fontWeight={selectedGenre?.id==item.id?"bold":"normal"} onClick={()=>onSelectGenre(item)} fontSize={'lg'} variant={'link'}>{item.name}</Button> */}
                            </HStack>
                        </ListItem>
                    })
                }
            </List>
        </>
    )
}

export default  GenreList