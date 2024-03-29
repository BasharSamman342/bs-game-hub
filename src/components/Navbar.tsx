import { HStack, Image } from '@chakra-ui/react'
import Logo from "../assets/Logo/logo.webp"
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

interface Props{
    onSearch:(searchValue:string)=>void
}

const Navbar = ({onSearch}:Props) => {
    return (
        <HStack justifyContent={"space-between"} padding={"10px"}>
            <Image src={Logo} boxSize={"60px"} />
            <SearchInput onSearch={onSearch} />
            <ColorModeSwitch />
        </HStack>
    )
}

export default Navbar