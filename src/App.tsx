import './App.css'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenreList from "./components/GenreList.tsx";
import { useState } from 'react';
import { IGenre, IParentPlatform } from './interfaces/interfaces.ts';
import PlatformSelector from './components/PlatformSelector.tsx';

function App() {
  const [selectedGenre,setSelectedGenre] = useState<IGenre|null>(null)
  const [selectedPlatform,setSelectedPlatform] = useState<IParentPlatform|null>(null)

  const onSelectGenre = (genre:IGenre)=>{
    setSelectedGenre(genre)
  }

  const onSelectPlatform = (platform:IParentPlatform)=>{
    setSelectedPlatform(platform)
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
          <GenreList selectedGenre={selectedGenre} onSelectGenre={onSelectGenre} />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={onSelectPlatform} />
        <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  )
}

export default App
