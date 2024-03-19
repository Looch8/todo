// Factory
// function createTodo(title, description, dueDate) {
// 	return {
// 		title,
// 		description,
// 		dueDate,
// 	};
// }

// export default createTodo;

// class
class Todo {
	constructor(title, description, dueDate) {
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
	}
}

export default Todo;
