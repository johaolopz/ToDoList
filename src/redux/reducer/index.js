import {ADD_TODO, REMOVE_TODO, TO_IN_PROGRESS, TO_DONE, DETAILS} from "../actions/index";
const initialState = {
    stateTodo : [],
    details : [{
      title:"",
      description:"",
      place:"",
      date:""
    }]
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
        case DETAILS:
          const details = state.stateTodo.filter((el) => el.id === action.payload);
          return {...state,
          details : details
          };
        default:
            return {...state}
    }
}