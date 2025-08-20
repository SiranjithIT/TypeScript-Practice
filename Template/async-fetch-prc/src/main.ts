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
const filter = document.querySelector<HTMLSelectElement>('#filter-select');
const filterContent = document.querySelector<HTMLSelectElement>('#filter-content');

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
      card.addEventListener('click', ()=>{
        localStorage.setItem('todo-item', JSON.stringify(item));
        window.location.href = 'details.html';
      })
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

const filterPriority = (todoList: TodoList[]|null, priority: string):TodoList[] => {
  if(todoList != null){
    if(priority === '--None--')  return todoList;
    let filteredList: TodoList[] = todoList.filter(
      (todo) =>  todo.priority === priority
    );
    console.log(filteredList);
    return filteredList;
  }
  else return [];
}

const filterStatus = (todoList: TodoList[]|null, status: string):TodoList[] => {
  if(todoList != null){
    if(status === '--None--') return todoList;
    let filteredList: TodoList[] = todoList.filter(
      (todo) =>  todo.status === status
    );
    console.log(filteredList);
    return filteredList;
  }
  else return [];
}

const addSelection = (contentList:string[]) =>{
    contentList.forEach((content)=>{
    const option = document.createElement("option") as HTMLOptionElement;
    option.value = content;
    option.innerHTML = `${content}`;
    filterContent?.appendChild(option);
  })
}

filter?.addEventListener('change', ()=>{
  filterContent?.replaceChildren();
  if(filter.value === 'status'){
    const statusList: string[] = ['--None--', 'New', 'Ongoing', 'Done'];
    addSelection(statusList);
    filterContent?.addEventListener('change', ()=>{
      const filteredList: TodoList[] = filterStatus(todoList, filterContent.value);
      addToScreen(filteredList);
    })
  }else if(filter.value === 'priority'){
    const priorityList: string[] = ['--None--','High', 'Medium', 'Low'];
    addSelection(priorityList);
    filterContent?.addEventListener('change', ()=>{
      const filteredList: TodoList[] = filterPriority(todoList, filterContent.value);
      addToScreen(filteredList);
    })
  }else{
    addSelection(['--None--'])
  }
  addToScreen(todoList);
})


fetchItems();