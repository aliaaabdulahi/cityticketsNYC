import { GET_USERS } from './admin_users'

export default function isLoading(state = true, action) {
   switch (action.type) {
      case GET_USERS:
         return false
      default:
         return state
   }
}