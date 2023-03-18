// initialize task list
let taskList = [];

// get input and list elements
const taskInput = document.getElementById('task-input');
const taskListElement = document.getElementById('task-list');

// function to render task list
function renderTaskList() {
	// clear list element
	taskListElement.innerHTML = '';

	// loop through task list and add to list element
	taskList.forEach((task, index) => {
		// create list item element
		const li = document.createElement('li');

		// create span element for task text
		const taskText = document.createElement('span');
		taskText.innerText = task;

		// create button element for edit task
		const editBtn = document.createElement('button');
		editBtn.innerText = 'Edit';
		editBtn.className = 'edit-btn';
		editBtn.onclick = () => editTask(index);

		// create button element for delete task
		const deleteBtn = document.createElement('button');
		deleteBtn.innerText = 'Delete';
		deleteBtn.onclick = () => deleteTask(index);

		// append span and button elements to list item element
		li.appendChild(taskText);
		li.appendChild(editBtn);
		li.appendChild(deleteBtn);

		// append list item element to list element
		taskListElement.appendChild(li);
	});
}

// function to add task to task list
function addTask() {
	// get task input value and clear input field
	const taskInputValue = taskInput.value.trim();
	taskInput.value = '';
	// check if task input value is empty
	if (!taskInputValue) {
		return;
	}

	// add task to task list
	taskList.push(taskInputValue);

	// render task list
	renderTaskList();
}
// function to edit task in task list
function editTask(index) {
	// get task text
	const taskText = taskList[index];
	// prompt user for new task text
	const newTaskText = prompt('Edit the task:', taskText);

	// check if new task text is empty
	if (!newTaskText) {
		return;
	}

	// update task in task list
	taskList[index] = newTaskText;

	// render task list
	renderTaskList();
}
// function to delete task from task list
function deleteTask(index) {
	// remove task from task list
	taskList.splice(index, 1);
	// render task list
	renderTaskList();
}

// render initial task list
renderTaskList();


