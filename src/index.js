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

addNewProject();
addNewProject();
addNewProject();
addNewProject();
addNewProject();

// add new Todo function
const addNewTodo = (projectIndex, title, description, dueDate) => {
	projectManager.projects[projectIndex].addTodo(title, description, dueDate);
};

// Adding new todo
addNewTodo(3, "hello", "random", "random date");
console.log(projectManager);

// This is the way to add todos now
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
