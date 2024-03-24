import projects from "./projects";
import project from "./project";
import projectManager from ".";
import todo from "./todos";

const projectDOM = (content) => {
	content = document.querySelector("#content");
	const div = document.createElement("div");
	div.textContent = new todo("hi", "hello", "bye");
	content.append(div);

	return content;
};

export default projectDOM;
