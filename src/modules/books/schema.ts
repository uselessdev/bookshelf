import { gql } from 'apollo-server'

export const schema = gql`
  type Book implements Node {
    id: ID!
    title: String
    author: AuthorEdge
  }

  type BookEdge {
    node: Book
  }

  type BookConnection {
    edges: [BookEdge]
  }

  extend type Query {
    books: BookConnection
  }

  input createBookInput {
    title: String!
    author: ID!
    clientMutationId: String
  }

  type BookPaylod {
    book: Book
    clientMutationId: String
  }

  extend type Mutation {
    createBook(input: createBookInput!): BookPaylod
  }
`
