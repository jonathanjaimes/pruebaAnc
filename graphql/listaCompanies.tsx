import { gql } from "@apollo/client";

export const LISTCOMPANIES = gql`
  query ListCompanies {
    listCompanies {
      id
      name
    }
  }
`;
