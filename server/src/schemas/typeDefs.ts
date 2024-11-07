const typeDefs = `
  type User {
    _id: ID
    firstname: String!
    email: String!
    password: String!
  }

  input UserInput {
    firstname: String!
    email: String!
    password: String!
  }
  
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user(email: String!): User
    me: User
  }

  type Mutation {
    addUser(input: UserInput!): Auth
    login(email: String!, password: String!): Auth
  }
`;

export default typeDefs;
