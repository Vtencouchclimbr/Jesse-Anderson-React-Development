import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        firstname
        email
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($input: UserInput!) {
  addUser(input: $input) {
      user {
      firstname
      email
      comments
    }
    token
    }
  }
`;

