// import

import {
  ADD_TASK,
  DELETE_TASK,
  DONE_TASK,
  EDIT_TASK,
} from "../ActionTypes/ListTask";

//initstate

const initState = {
  listeTask: [
    { id: Math.random(), text: "Task1", isDone: false },
    { id: Math.random(), text: "Task2", isDone: false },
  ],
};

//pure function

const listReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return { ...state, listeTask: [...state.listeTask, payload] };
    case DELETE_TASK:
      return {
        ...state,
        listeTask: state.listeTask.filter((el) => el.id !== payload),
      };
    case DONE_TASK:
      return {
        ...state,
        listeTask: state.listeTask.map((el) =>
          el.id === payload ? { ...el, isDone: !el.isDone } : el
        ),
      };
    case EDIT_TASK:
      return {
        ...state,
        listeTask: state.listeTask.map((el) =>
          el.id === payload.id ? { ...el, text: payload.newTask } : el
        ),
      };

    default:
      return state;
  }
};
export default listReducer;
