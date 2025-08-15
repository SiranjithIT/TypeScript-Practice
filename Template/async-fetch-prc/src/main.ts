import './style.css'

interface TodoList {
  id: number;
  task: string;
  category: string;
  priority: 'High' | 'Medium' | 'Low';
  dueDate: string;
  status: 'New' | 'Ongoing' | 'Done';
}

const container = document.querySelector<HTMLDivElement>('#container');

const fetchItems = async() =>{
  const data = await fetch("./todo.json");
  const todoList: TodoList[] = await data.json();

  todoList.forEach((item)=>{
    const card = document.createElement('div');
    card.className = "todo-card"
    
    let priorityClassName = "";
    if(item.priority === 'High'){
      priorityClassName = "high-priority"
    }else{
      priorityClassName = "other-priority"
    }

    let statusClassName = "";
    if(item.status === "Done"){
      statusClassName = "status-completed";
    }else if(item.status === "Ongoing"){
      statusClassName = "status-ongoing";
    }else{
      statusClassName = "status-new";
    }

    card.innerHTML = `
      <h2>${item.task}</h2>
      <p>Category: ${item.category}</p>
      <p>Due Date: ${item.dueDate}</p>
      <div class="card-end">
        <p class="${priorityClassName}">${item.priority} Priority</p>
        <p class="${statusClassName}">${item.status} </p>
      </div>
    `
    container?.appendChild(card);
  })
}

fetchItems();