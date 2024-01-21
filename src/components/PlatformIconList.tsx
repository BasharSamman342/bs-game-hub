import {FaWindows,FaXbox,FaPlaystation,FaApple,FaLinux,FaAndroid} from "react-icons/fa"
import {MdPhoneIphone} from "react-icons/md"
import {SiNintendo} from "react-icons/si"
import {BsGlobe} from "react-icons/bs";
import {IParentPlatform} from "../interfaces/interfaces.ts";
import {HStack, Icon} from "@chakra-ui/react";
import {IconType} from "react-icons";

interface IProps{
    platforms:IParentPlatform[]
}
const PlatformIconList = ({platforms}:IProps)=>{
    const iconMap:{[key:string]:IconType} = {
        pc:FaWindows,
        playstation:FaPlaystation,
        xbox:FaXbox,
        nintendo:SiNintendo,
        mac:FaApple,
        linux:FaLinux,
        ios:MdPhoneIphone,
        web:BsGlobe,
        android:FaAndroid
    }
    return (
        <HStack marginY={1}>
        {platforms.map((platform:IParentPlatform)=>{
                return <Icon as={iconMap[platform.slug]} color={'gray.500'} />
            })}
        </HStack>
    )
}

export default  PlatformIconList