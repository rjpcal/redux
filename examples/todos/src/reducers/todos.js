const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
          id: action.id,
          text: action.text,
	  prio: action.prio,
          completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      var result = [
        ...state,
        todo(undefined, action)
      ];
      result.sort(function(a, b) {
	  return b.prio - a.prio;
      });
      return result
  case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

export default todos
