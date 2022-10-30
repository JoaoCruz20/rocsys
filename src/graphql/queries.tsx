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

export const LOAD_DATA = gql`
query MyQuery {
  device {
    id
    serial_number
    site {
      name
    }
    device_type {
      model_number
    }
  }
}


`