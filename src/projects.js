function project() {
	// add a new list
	const list = [];

	// add todo to specific list
	function addTodo(todoData) {
		list.push(todoData);
	}

	// delete a todo from a specific list
	function deleteTodo(todoIndex) {
		// delete only one element by taking array index, and having second argument as 1, so only 1 element is remobed.
		list.splice(todoIndex, 1);
	}

	return {
		list,
		addTodo,
		deleteTodo,
	};
}

export default project;
