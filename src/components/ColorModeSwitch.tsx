// import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react"
import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react"

const ColorModeSwitch = () => {
    const { toggleColorMode, colorMode } = useColorMode()
    return (
        <HStack justifyContent={"space-between"} padding={"10px"}>
            <Switch colorScheme="green" onChange={toggleColorMode} isChecked={colorMode === "dark" ? true : false} />
            <Text>Dark Mode</Text>
        </HStack>
    )
}

export default ColorModeSwitch