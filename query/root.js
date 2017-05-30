import {
  GraphQLObjectType
} from 'graphql'

import { filmsQuery } from './films'
import { peopleQuery } from './people'

// Define the Query  type
export const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    films: filmsQuery,
    people: peopleQuery
  }
})
