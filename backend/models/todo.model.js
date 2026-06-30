let todos = [];
// { id: 1, text: "Sample TODO 1", completed: false },

let id = 1;

const TodoModel = {
  getAll: () => {
    return todos;
  },
  create: (text) => {
    const newTodo = { id: id++, text: text, completed: false };
    todos.push(newTodo);
    return newTodo;
  },
};

module.exports = TodoModel;
