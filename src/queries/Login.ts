import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation caregiverLogin($authInput: AuthInput) {
    caregiverLogin(authInput: $authInput) {
      token
      data {
        firstName
        lastName
      }
    }
  }
`;
