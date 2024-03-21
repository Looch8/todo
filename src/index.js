import todo from "./todos";
import project from "./project";
import projects from "./projects";

const todo1 = todo("title1", "desc 1", "date 1");
const todo2 = todo("title2", "desc 2", "date 2");
const todo3 = todo("title3", "desc 3", "date 3");
const todo4 = todo("title4", "desc 4", "date 4");

const project1 = project();
const project2 = project();
const project3 = project();

// projects instance to manage projects
const manageProjects = projects();

manageProjects.addProject(project1);
manageProjects.addProject(project2);
manageProjects.deleteProject(0);
console.log(manageProjects);

project1.addTodo(todo1);
project2.addTodo(todo2);
project2.addTodo(todo3);
project1.addTodo(todo4);
project3.addTodo(todo3);
// console.log(project1);
// console.log(project2);
// project1.deleteTodo(1);
// console.log(project1);

// projects.addProject(project1);
// projects.addProject(project2);
// console.log(projects);

// console.log(project1);
// console.log(project().addProject(project1));
// console.log(project().addProject(project2));
// console.log(project());

// This is all about what you want to do, and the plan that you're making.
// You know you need to:
// - store lists (or 'projects') and be able to create new ones
// - Add todo objects to a specific project

// The way you implement that generally *doesn't matter*, as long as it makes sense to *you*. It's just a very very good idea to separate the data management into it's own module- away from DOM stuff. If you don't do this early on- it's likely you'll start mixing DOM management with data management- and that tends to get many people who do this project into a big mess.

// > create new projects too
// You think a particular `Project` object should be able to create *new* projects? What would it do with them? What's wrong with calling the class to create another one? (providing you still want to use a class)

// Your todo list should have projects or separate lists of todos. When a user first opens the app, there should be some sort of ‘default’ project to which all of their todos are put. Users should be able to create new projects and choose which project their todos go into.

// You'll want multiple lists containing todos, not just one. So, you're probably going to want to:
// Figure out how you're going to store lists (or 'projects') and create new ones
// Figure out how to add todo objects to a specific projec

// I think you should be focusing on improving this module to do the two things I mentioned before:
// - Storing lists (or 'projects') and creating new ones
// - Adding todo objects to a specific project
