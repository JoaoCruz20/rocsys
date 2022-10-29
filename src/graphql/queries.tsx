import {gql} from '@apollo/client';


export const LOAD_USERS = gql`
query MyQuery {
    user {
      created_at
      email
      first_name
      id
      is_super_user
      last_name
    }
  }

`