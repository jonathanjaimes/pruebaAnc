import { gql }  from '@apollo/client'

// export const ALL_POKEMON = gql`
//     query GetPokemons{
//         pokemons{
//             results{
//                 name
//             }
//         }
//     }
// `;

export const POKEMONS_QUERY = gql`
query GetPokemons($limit: Int!) {
  pokemon_v2_pokemon(limit: $limit, where: {}) {
    id
    name
    
  } 
}
`;