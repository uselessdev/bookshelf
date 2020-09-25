import { gql } from 'apollo-server'

export const schema = gql`
  type Author {
    id: ID
    name: String
  }

  extend type Query {
    author(id: ID!): Author
    authors: [Author]
  }
`
