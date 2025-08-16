import './details.css'

interface TodoList {
  id: number;
  task: string;
  category: string;
  priority: 'High' | 'Medium' | 'Low';
  dueDate: string;
  status: 'New' | 'Ongoing' | 'Done';
}

const item = localStorage.getItem('todo-item');
let todo: TodoList|null = null;
if(item){
  todo = JSON.parse(item);
}

const container = document.querySelector<HTMLDivElement>('.container');

const identification = document.createElement('div');
identification.innerHTML = `
  <p><b>Todo Id</b>  ${todo?.id}</p>
`;
container?.appendChild(identification);

const addTask = (todo:TodoList|null) =>{
  const task = document.createElement('div');
  task.innerHTML = `
    <p><b>Task</b>  ${todo?.task}</p>
    <button class="task-btn">Edit</button>
    <span class="edit-task">
    <input type="text" placeholder="Edit the task">
    <button class="edit-btn">Done</button>
    </span>
  `
  return task;
}
const task = addTask(todo);
container?.appendChild(task);
const editTask = document.querySelector(".edit-task") as HTMLSpanElement;
const taskBtn = document.querySelector(".task-btn") as HTMLButtonElement;
const editBtn = document.querySelector(".edit-btn") as HTMLButtonElement;
const inputTask = document.querySelector(".edit-task input") as HTMLInputElement;
taskBtn?.addEventListener('click', ()=>{
  editTask.style.display="flex";
  editTask.style.gap="5px";
})
editBtn?.addEventListener('click', () => {
  if (todo) {
    todo.task = inputTask.value;
    task.querySelector('p')!.innerHTML = `<b>Task</b> ${todo.task}`;
    editTask.style.display = "none";
  }
});



