import './style.css';

interface TodoList {
  id: number;
  task: string;
  category: string;
  priority: 'High' | 'Medium' | 'Low';
  dueDate: string;
  status: 'New' | 'Ongoing' | 'Done';
}

const buttons = document.querySelectorAll<HTMLButtonElement>('.sidebar button');
const mainContainer = document.querySelector<HTMLDivElement>('.main-container');

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    buttons.forEach((b) => b.classList.remove('highlight-btn'));
    btn.classList.add('highlight-btn');

    if (mainContainer) {
      mainContainer.innerHTML = '';
    }

    if (btn.classList.contains('dashboard')) {
      dashBoard();
    }else if(btn.classList.contains('issues')){
      issues();
    }
  });
});

const dashBoard = () => {
  const container = document.createElement('div');
  container.textContent = 'Dashboard';
  mainContainer?.appendChild(container);
};

const issues = async() => {
  if (mainContainer){
    const data = await fetch('/todo.json')
    const todoList: TodoList[] = await data.json();
    const container = document.createElement('div');
    container.className = 'todo-container';

    todoList.forEach((item)=>{
      const card = document.createElement('div');
      card.className = 'todo-card';
      
      card.innerHTML = `
        <div>
        <h3>${item.task}</h3>
          <p>Category: ${item.category}</p>
          <p>Priority: ${item.priority}</p>
          <p>Due: ${item.dueDate}</p>
          <p>Status: ${item.status}</p>
        </div>
        `
        container.appendChild(card);
    })
    mainContainer.appendChild(container);
  }
}

dashBoard();
