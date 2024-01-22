import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"


const SortSelector = () => {
    const orderItems = ["Relevance","Date added","Name","Release date","Popularity","Average rating"]
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>Order by : Relevance</MenuButton>
            <MenuList>
                {
                    orderItems.map(item=><MenuItem  key={item}>{item}</MenuItem>)
                }
            </MenuList>
        </Menu>
    )
}

export default SortSelector