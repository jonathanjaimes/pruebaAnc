import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useQuery } from '@apollo/client'
import { POKEMONS_QUERY } from '@/graphql/all_pokemons'

import Card from '@/components/Card'
import { Key } from 'react'
import { LISTCOMPANIES } from '@/graphql/listaCompanies'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const {data , error , loading} = useQuery(POKEMONS_QUERY,{ 
    variables:{
      limit:80,
      where:{}
    }
  })
  
  const result2 = useQuery(LISTCOMPANIES)
  console.log(result2, 'acaca');
  
  
  // const result = useQuery(POKEMONS_QUERY)
  // console.log(result);
  
  
  return (
    <main>
      <h1>Hello</h1>
      { loading  && <p>....cargando</p>}
      {data && data.pokemon_v2_pokemon && data.pokemon_v2_pokemon.length && data.pokemon_v2_pokemon.map( (pokemon: { id: number ; name: string }) => (
        <Card key={pokemon.id}
        id={pokemon.id} name={pokemon.name}        />
      ))}
    </main>
  )
}
