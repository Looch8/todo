// Manage multiple projects
function projects() {
	// add a new list
	const projects = [];

	// add a new project object
	function addProject(project) {
		projects.push({ project });
	}

	// delete a todo from a specific list
	function deleteProject(projectIndex) {
		// delete only one element by taking array index, and having second argument as 1, so only 1 element is removed.
		projects.splice(projectIndex, 1);
	}

	return {
		projects,
		addProject,
		deleteProject,
	};
}

export default projects;
