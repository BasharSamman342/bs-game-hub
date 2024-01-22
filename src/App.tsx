import './App.css'
import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenreList from "./components/GenreList.tsx";
import { useState } from 'react';
import { IGenre, IParentPlatform } from './interfaces/interfaces.ts';
import PlatformSelector from './components/PlatformSelector.tsx';
import SortSelector from './components/SortSelector.tsx';

export interface QueryObject{
  genre:IGenre|null,
  platform:IParentPlatform|null,

}

function App() {
  const [query, setQuery] = useState<QueryObject>({} as QueryObject)

  const onSelectGenre = (genre:IGenre)=>{
    setQuery({...query,genre:genre})
  }

  const onSelectPlatform = (platform:IParentPlatform)=>{
    setQuery({...query,platform:platform})
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
        <Navbar />
      </GridItem>
      <Show above='lg'>
        <GridItem area={"aside"} paddingX={5}>
          <GenreList selectedGenre={query.genre} onSelectGenre={onSelectGenre} />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <HStack spacing={5} paddingLeft={2} marginBottom={5}>
          <PlatformSelector selectedPlatform={query.platform} onSelectPlatform={onSelectPlatform} />
          <SortSelector />
        </HStack>
        <GameGrid gameQuery={query} />
      </GridItem>
    </Grid>
  )
}

export default App
