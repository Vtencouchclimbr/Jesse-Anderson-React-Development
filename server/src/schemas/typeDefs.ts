const typeDefs = `
  type User {
    _id: ID
    firstname: String!
    email: String!
    password: String!
    comments: [String]
  }

  input UserInput {
    firstname: String!
    email: String!
    password: String!
    comment: [String]
  }
  
  type Auth {
    token: ID!
    user: User
  }

  type Comment {
  comment: [String]
  }

  input Comment {
    comment: [String]
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
