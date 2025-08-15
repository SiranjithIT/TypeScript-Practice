import './style.css'

interface TodoList {
  id: number;
  task: string;
  category: string;
  priority: 'High' | 'Medium' | 'Low';
  dueDate: string;
  status: 'New' | 'Ongoing' | 'Done';
}

let todoList: TodoList[]|null = null; 

const container = document.querySelector<HTMLDivElement>('#container');
const priorityFilter = document.querySelector<HTMLSelectElement>('#priority-select');

const addToScreen = (todoList: TodoList[] | null):void => {
  container?.replaceChildren();
  if(todoList != null){
    todoList.forEach((item)=>{
      const card = document.createElement('div');
      card.className = "todo-card"

      let priorityClassName = item.priority === 'High' ? "high-priority": "other-priority"

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
  }else{
    const card = document.createElement('div');
    card.className = "todo-card"
    card.innerHTML = `<h2>No data available</h2>`
    container?.appendChild(card);
  }
}


const fetchItems = async():Promise<void> =>{
  const data = await fetch("./todo.json");
  todoList = await data.json();
  addToScreen(todoList)
}

const filterList = (todoList: TodoList[]|null, priority: string):TodoList[] => {
  if(todoList != null){
    let filteredList: TodoList[] = todoList.filter(
      (todo) =>  todo.priority === priority
    );
    console.log(filteredList);
    return filteredList;
  }
  else return [];
}

priorityFilter?.addEventListener('change', ()=>{
  const filteredList: TodoList[] = filterList(todoList, priorityFilter.value);
  addToScreen(filteredList);
})

fetchItems();