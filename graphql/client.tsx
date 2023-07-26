import { ApolloClient , InMemoryCache , HttpLink , ApolloLink} from '@apollo/client'
import  { createAuthLink } from 'aws-appsync-auth-link'
import { createSubscriptionHandshakeLink} from 'aws-appsync-subscription-link'
import appSyncConfig from '@/apollo/aws-export'

const url = appSyncConfig.aws_appsync_graphqlEndpoint
const region = appSyncConfig.aws_appsync_region

interface AuthOptionsApiKey {
    type:"API_KEY";
    apiKey: string;
  }
const auth:AuthOptionsApiKey =  {
    type:"API_KEY",
    // type:appSyncConfig.aws_appsync_authenticationType,
    apiKey: appSyncConfig.aws_appsync_apiKey
}

const httpLink = new HttpLink({uri: url})

const link =  ApolloLink.from([
    createAuthLink({url , region , auth }),
    createSubscriptionHandshakeLink({ url, region, auth }, httpLink),
])

const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "cache-and-network",
      },
    },
  });
  
//   export default client;

//pokemon

// const client = new ApolloClient({
//     uri:"https://beta.pokeapi.co/graphql/v1beta",
//     cache:new InMemoryCache()
// })



export default client