import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlatforms from "../hooks/usePlatforms"
import { IParentPlatform } from "../interfaces/interfaces"

interface Props{
    onSelectPlatform:(platform:IParentPlatform)=>void,
    selectedPlatform:IParentPlatform|null
}

const PlatformSelector = ({onSelectPlatform,selectedPlatform}:Props) => {
    const {data,isLoading,error} = usePlatforms()
    if (error) return null;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>{selectedPlatform?.name||"Platform"}</MenuButton>
            <MenuList>
                {isLoading && <Spinner />}
                {
                    data.map(platform=><MenuItem onClick={()=>onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)
                }
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector