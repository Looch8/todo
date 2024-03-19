import Todo from "./Todo";
import project from "./Project";

const todo1 = new Todo("chores", "cleaning", "now");
const todo2 = new Todo("walk", "30 minutes", "today");
project(todo1);
project(todo2);
console.log(project());

// Your todo list should have projects or separate lists of todos. When a user first opens the app, there should be some sort of ‘default’ project to which all of their todos are put. Users should be able to create new projects and choose which project their todos go into.
