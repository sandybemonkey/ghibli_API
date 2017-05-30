import {
  GraphQLObjectType,
  GraphQLString
} from 'graphql'

export let filmType = new GraphQLObjectType({
  name: 'Films',
  fields: {
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    director: { type: GraphQLString },
    producer: { type: GraphQLString },
    rt_score: { type: GraphQLString }
  }
})
