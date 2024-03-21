// Manage a single project
function project() {
	// add a new list
	const list = [];

	// add todo data
	function addTodo(title, description, dueDate) {
		const todoData = { title, description, dueDate };
		list.push(todoData);
	}

	// delete todo date
	function deleteTodo(todoIndex) {
		// delete only one element by taking array index, and having second argument as 1, so only 1 element is removed.
		list.splice(todoIndex, 1);
	}

	return {
		list,
		addTodo,
		deleteTodo,
	};
}

export default project;
