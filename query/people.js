import { GraphQLList } from 'graphql'
import { peopleType } from './../Types/peopleType'
import { People } from './../Models/People'

export let peopleQuery = {
  type: new GraphQLList(peopleType),
  resolve: function () {
    return People
  }
}
