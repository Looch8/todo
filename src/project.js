// Manage a single project
function project() {
	// add a new list
	const list = [];

	// add todo to specific list
	function addTodo(todoData) {
		list.push(todoData);
	}

	// delete a todo from a specific list
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

// f not, you could probably start working on how you're going to store and manage multiple of these project objects now.

// We've kind of already covered how we might handle multiple projects in a very basic way.

// All you would have to do is look at the code I'm replying to, and replace the simple array in addProject with a new project object. You probably wouldn't even need the addTodo method.

// You might also want a way to delete a project.
