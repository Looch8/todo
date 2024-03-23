import todo from "./todos";
import project from "./project";
import projects from "./projects";

// Hardcode todos for testing - can remove later
const todo1 = todo("title1", "desc 1", "date 1");
const todo2 = todo("title2", "desc 2", "date 2");
const todo3 = todo("title3", "desc 3", "date 3");
const todo4 = todo("title4", "desc 4", "date 4");

// projects instance to manage projects
const projectManager = projects();

// Add new project function
const addNewProject = () => projectManager.addProject(project());

// add new Todo function
const addNewTodo = (projectIndex, title, description, dueDate, priority) => {
	projectManager.projects[projectIndex].addTodo(
		title,
		description,
		dueDate,
		priority
	);
};

// Delete a todo
const deleteTodo = (projectIndex, todoIndex) =>
	projectManager.projects[projectIndex].deleteTodo(todoIndex);

// Delete a project
const deleteProject = (projectIndex) =>
	projectManager.deleteProject(projectIndex);

// Mark todo as complete
const markTodoComplete = (projectIndex, listIndex) => {
	projectManager.projects[projectIndex].list[listIndex].isComplete = true;
};

addNewProject();
addNewProject();
addNewProject();
addNewProject();
addNewProject();

// Adding new todo
addNewTodo(3, "hello", "random", "random date", "low");
addNewTodo(3, "bye", "random", "random date", "low");

markTodoComplete(3, 0);

console.log(projectManager.projects[3].list);
// console.log((projectManager.projects[3].list[0].isComplete = true));
// deleteTodo(3, 1);
// deleteProject(0);

// projectManager.projects[0].addTodo("newer title", "newer desc", "newer date");
// projectManager.projects[0].addTodo("title 2", "desc 2", "date 2");
// projectManager.projects[2].addTodo(
// 	"another title",
// 	"another desc",
// 	"another date"
// );

// projectManager.projects[1].addTodo({
// 	title: "new title",
// 	descrption: "new desc",
// 	dueDate: "new Date",
// });
