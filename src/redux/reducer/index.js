import {ADD_TODO, REMOVE_TODO, TO_IN_PROGRESS, TO_DONE} from "../actions/index";
const initialState = {
    stateTodo : []
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        // Aca va tu codigo;
        case ADD_TODO:
          state.stateTodo.push(action.payload)
          return state;
        case REMOVE_TODO:
          state.stateTodo = state.stateTodo.filter(c=>c.id !== action.payload);
          return state
        case TO_IN_PROGRESS:
          state.stateTodo.forEach(c => {if(c.id === action.payload){
                c.status = "InProgress";
          };});
          return state;
        case TO_DONE:
          state.stateTodo.forEach(c => {
            if(c.id === action.payload){
            c.status = "Done";
      };});
      return state;
        default:
            return {...state}
    }
}