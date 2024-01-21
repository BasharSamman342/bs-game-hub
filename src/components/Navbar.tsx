import { HStack, Image } from '@chakra-ui/react'
import Logo from "../assets/Logo/logo.webp"
import ColorModeSwitch from './ColorModeSwitch'

const Navbar = () => {
    return (
        <HStack justifyContent={"space-between"} padding={"10px"}>
            <Image src={Logo} boxSize={"60px"} />
            <ColorModeSwitch />
        </HStack>
    )
}

export default Navbar