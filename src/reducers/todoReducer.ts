/*
What's Reducer?
----
  * Reducer is a function that takes in two arguments: state and action
  * the function must return updated state 
  * if you want to call the reducer function, you must dispatch an action from the component
  * state is the current state of the application -- initial state
  * action is an object, must have type property and an optional payload property 
*/

export function todoReducer(state: any = [], action: any) {
  console.log("Inside todoReducer");
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];

    case "LIST_TODOS":
      return action.payload;
    default:
      return state;
  }
}
