// State argument is not application state, only the state
// this argument is repsonsible for 
export default function(state = null, action) {
   switch (action.type) {
       case 'SELECTED_BOOK':
       return action.payload;
   }
    return state; 
}