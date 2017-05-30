import { GraphQLList } from 'graphql'
import { filmType } from './../Types/filmType'
import { Films } from './../Models/Films'

export let filmsQuery = {
  type: new GraphQLList(filmType),
  resolve: function () {
    return Films
  }
}
