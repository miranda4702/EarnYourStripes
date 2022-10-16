const todoList = [];

const todoListItem = document.querySelector("#toDoList");

document.querySelector("add").addEventListener('click', add);


class Todo{
    constructor(item){
        this.ulItem = item;
    }

    add(){
        const toDoInput = document.querySelector('#todoListInput').value;
        if (toDoInput == ""){

        }else{
            const toDo = {
                id : todoList.length,
                toDoText : toDoInput,
                isDone : false,
            }
            
        todoList.unshift(toDo);
        this.display();
        document.querySelector('#input').value = '';

        }
    }

    done(x){
        const selectedToDoIndex = todoList.findIndex((item)=> item.id == x);
        todoList[selectedToDoIndex].isDone == false ? todoList[
            selectedToDoIndex].isDone = true : todoList[selectedToDoIndex].isDone = false;
            this.display();
    }

    display(){
        this.ulElement.innerHTML = "";

        todoList.forEach((obj_item) => {
            const liElement = document.createElement('li');
           
            liElement.innerText = obj_item.toDoText;
            liElement.setAttribute("data-id", obj_item.id);

            if (obj_item.isDone){
                liElement.classList.add('checked');
            }
            this.ulElement.appendChild(liElement);
        })
    }
}

const list = document.querySelector("#todoListInput");

toDoList = new Todo(listSection);

        document.querySelector(".add").addEventListener("click", function(){
            toDo.add()
        })

   

