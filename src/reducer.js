// import TodoItem from "./todoItem/TodoItem";

// const initialState = [{}];

export default function (state, action) {
  switch (action.type) {
    case 'add':
      if (state !== null) {
        return [
          ...state,
          {
            id: Date.now(),
            title: action.payload,
            checked: false,
          },
        ];
      } else {
        return [
          {
            id: Date.now(),
            title: action.payload,
            checked: false,
          },
        ];
      }

    case 'checkToggle':
      return state.map((item) => {
        if (item.id === action.payload) {
          item.checked = !item.checked;
        }
        return item;
      });
    case 'remove':
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}
