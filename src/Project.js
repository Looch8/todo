function project() {
	const todos = [];
	// add todos to todo array
	const addTodo = (todo) => {
		todos.push(todo);
	};
	// add todos array to project array
	const addProject = () => {
		const project = {
			todos,
			addTodo,
		};
		projects.push(project);
		return project;
	};
	return {
		addProject,
	};
}

const projects = [];

export default project;

// So, this seems very manual. I feel like it would probably be nice if projects.js exported a function that just did all the steps to add a project to the projects array for you. That way you could just make a simple function call.

// This code defines an array named projects. Based on step three, you probably want a way to:
// Add a project to this projects list
// Be able to add a todo object to a specific project that exists in the projects list

// Can you add to this code, and create a function that does the first thing?

// I've given you an array named projects, and it is meant to hold multiple lists of todos, but you haven't added any lists to it.

// Because you haven't even created a list meant to hold todos, you haven't added todos to one of those lists.

// Try again. I specifically asked you to create a function that adds a 'project', or a list meant to hold todo objects, to the projects array.

// Try to focus on the requirements I laid out, and nothing else. To do the first point, you shouldn't even have to do anything with a todo object yet:
// Create a way to add a 'project' (or a list meant to hold todo objects) to the projects array
// Create a way to add a todo object to a specific project that exists in the projects array
