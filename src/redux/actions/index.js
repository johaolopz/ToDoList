export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TO_IN_PROGRESS = 'TO_IN_PROGRESS';
export const TO_DONE = 'TO_DONE';

let todoId = 0

export const addTodo = (payload) => {
    todoId++;
    payload.id= todoId;
    payload.status= "Todo"
    return { type: ADD_TODO, payload: payload };
};

export const removeTodo = (payload) => {
    return { type: REMOVE_TODO, payload: payload };
};

export const toInProgress = (payload) => {
    return { type: TO_IN_PROGRESS, payload: payload };
};

export const toDone = (payload) => {
    return { type: TO_DONE, payload: payload };
};