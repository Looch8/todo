// List all todos
let listOfTodos = [];

function project(todo) {
	if (todo) {
		listOfTodos.push(todo);
	}

	return listOfTodos;
}

export default project;
