function projects() {
	// add a new list
	const project = [];

	function addProject() {
		project.push([]);
	}

	// add todo to specific list
	function addTodo(projectIndex, todoData) {
		project[projectIndex].push(todoData);
	}

	return {
		project,
		addProject,
		addTodo,
	};
}

export default projects;
