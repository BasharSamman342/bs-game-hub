import './App.css'
import { Box, Flex, Grid, GridItem,  Show } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenreList from "./components/GenreList.tsx";
import { useState } from 'react';
import { IGenre, IParentPlatform } from './interfaces/interfaces.ts';
import PlatformSelector from './components/PlatformSelector.tsx';
import SortSelector from './components/SortSelector.tsx';
import GameHeading from './components/GameHeading.tsx';

export interface QueryObject{
  genre:IGenre|null,
  platform:IParentPlatform|null,
  sortOrder:string,
  searchText:string
}

function App() {
  const [query, setQuery] = useState<QueryObject>({} as QueryObject)

  const onSelectGenre = (genre:IGenre)=>{
    setQuery({...query,genre:genre})
  }

  const onSelectPlatform = (platform:IParentPlatform)=>{
    setQuery({...query,platform:platform})
  }

  const onSelectSortOrder = (sortOrder:string)=>{
    setQuery({...query,sortOrder:sortOrder})
  }

  const onSearch = (searchText:string)=>{
    setQuery({...query,searchText:searchText })
  }

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}
    templateColumns={{
      base:'1fr',
      lg:"200px 1fr"
    }}
    >
      <GridItem area={"nav"} >
        <Navbar onSearch={onSearch} />
      </GridItem>
      <Show above='lg'>
        <GridItem area={"aside"} paddingX={5}>
          <GenreList selectedGenre={query.genre} onSelectGenre={onSelectGenre} />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box paddingLeft={2}>
          <GameHeading gameQuery={query} />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector selectedPlatform={query.platform} onSelectPlatform={onSelectPlatform} />
            </Box>
            <SortSelector selectedSortOrder={query.sortOrder} onSelectSortOrder={onSelectSortOrder}/>
          </Flex>
        </Box>
        <GameGrid gameQuery={query} />
      </GridItem>
    </Grid>
  )
}

export default App
