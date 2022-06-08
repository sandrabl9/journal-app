import { types } from '../../types/types'
// {
//     uid: 'nahndk1264a2',
//     user: 'Sandra'
// }

export const authReducer = (state = {}, action) => {
    switch ( action.type ) {
        case types.login:
            return {
                uid: action.payload.uid,
                user: action.payload.displayName
            }
         
        case types.logout:
            return {}    
        default:
            return state;
    }

}