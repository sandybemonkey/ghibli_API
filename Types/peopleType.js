import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql'


export let peopleType = new GraphQLObjectType({
  name: 'People',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    gender: { type: GraphQLString },
    age: { type: GraphQLString },
    eye_color: { type: GraphQLString },
    hair_color: { type: GraphQLString },
    films: { type: new GraphQLList(GraphQLString),
      resolve(data) {
        let string = data.films
        console.log(data.films.length);
        return data.films.length

      }
    }
  }
})
