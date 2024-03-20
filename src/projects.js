function project() {
	// add a new list
	const list = [];

	// add todo to specific list
	function addTodo(todoData) {
		list.push(todoData);
	}

	// delete a todo from a specific list
	function deleteTodo(todoIndex) {
		list.delete(todoIndex);
	}

	return {
		list,
		addTodo,
		deleteTodo,
	};
}

export default project;
