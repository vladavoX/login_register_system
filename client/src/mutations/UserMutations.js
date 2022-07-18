import { gql } from "@apollo/client";

const REGISTER_USER = gql`
  mutation registerUser($username: String!, $password: String!) {
    registerUser(username: $username, password: $password) {
      id
      username
      password
    }
  }
`;

export { REGISTER_USER };