import {useQuery} from '@apollo/client'
import {USER_LOGIN} from '../Graphql/User'

export const useSignInScreen = ({email, password}) => {
  const {loading, error, data} = useQuery(USER_LOGIN, {
    variables: {
      email,
      password,
    },
  })

  return {loading, error, data}
}
