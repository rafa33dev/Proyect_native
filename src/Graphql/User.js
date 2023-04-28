import { gql } from '@apollo/client';

export const USER_LOGIN = gql`
  query UserLogin( $email: String!, $password: String!){
    userLogin(email: $email, password: $password){
      email
      password
    }
  }
`;