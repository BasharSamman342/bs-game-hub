// import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react"
import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react"

const ColorModeSwitch = () => {
    const { toggleColorMode, colorMode } = useColorMode()
    return (
        <HStack padding={"10px"}>
            <Switch colorScheme="green" onChange={toggleColorMode} isChecked={colorMode === "dark" ? true : false} />
            <Text whiteSpace={"nowrap"}>Dark Mode</Text>
        </HStack>
    )
}

export default ColorModeSwitch