function createTodo(title, description, dueDate) {
	return {
		title,
		description,
		dueDate,
	};
}

export default createTodo;

// TODO - maybe convert this to factory function instead of classes
// class Todo {
// 	constructor(title, description, dueDate) {
// 		this.title = title;
// 		this.description = description;
// 		this.dueDate = dueDate;
// 	}
// }

// export default Todo;
