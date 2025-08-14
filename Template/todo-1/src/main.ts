import './style.css';

interface TodoList {
  id: number;
  task: string;
  category: string;
  priority: 'High' | 'Medium' | 'Low';
  dueDate: string;
  status: 'New' | 'Ongoing' | 'Done';
}

let todoList: TodoList[] = [];

const buttons = document.querySelectorAll<HTMLButtonElement>('.sidebar button');
const mainBody = document.querySelector<HTMLDivElement>('.main-body');

buttons.forEach((btn)=>{
  btn.addEventListener('click', () => {
    buttons.forEach((b)=>{
      b.classList.remove('highlight');
    })
    btn.classList.add('highlight')
    if(mainBody) mainBody.innerHTML="";
    if(btn.classList.contains('dashboard')){
      loadDashboard();
    }else if(btn.classList.contains('create')){
      createTodo();
    }
  })
})

const loadDashboard = async() => {
  if(mainBody){
    const data = await fetch('/todo.json');
    todoList = await data.json();
    const container: HTMLDivElement = document.createElement('div');
    container.className = 'todo-container';
    todoList.forEach((item)=>{
      const card: HTMLDivElement = document.createElement('div');
      card.className = 'todo-card';

      card.innerHTML = `
        <h2>${item.task}</h2>
        <p>Category: ${item.category}</p>
        <p>Due Date: ${item.dueDate}</p>
        <div>
          <p>${item.priority} Priority</p>
          <p>${item.status} </p>
        </div>
      `
      container.appendChild(card);
    })
    mainBody.appendChild(container);
  }
}

const createTodo = () =>{
  const container = document.createElement('div');
  container.className = 'create-container'
  container.textContent = 'Dashboard';
  mainBody?.appendChild(container);
}

loadDashboard();