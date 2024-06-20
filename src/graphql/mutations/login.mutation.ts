import { gql } from 'apollo-angular';

export const LOGIN_MUTATION = gql`
  mutation login($userName: String!, $password: String!, $timezone: Int) {
    login(userName: $userName, password: $password, timezone: $timezone) {
      token
      refToken
      user {
        id
        firstName
        lastName
        email
      }
    }
  }
`
