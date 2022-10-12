let todo_container = document.querySelector("#todos-container");

// get all todos from localStorage
let todos = window.localStorage.getItem("todos");

// try to parse data to normal format
try
{
    todos = JSON.parse(todos);
    todos = todos.length ? todos : null
}
catch(e)
{
    todos = null;
}

if(!todos)
{
    todos = [
        {content:"test", status: false},
        {content:"test", status: true},
        {content:"test", status: false}
    ]
    localStorage.setItem("todos", JSON.stringify(todos))
}

function create_list(todos){
    todo_container.innerHTML = "";
    todos.forEach((todo,index) => {
        // create li element 
        let li = document.createElement("li");
        li.classList.add("list-group-item");
        li.classList.add("d-flex");
        li.classList.add("justify-content-between");
        li.classList.add("align-items-center");
        
        // create content of li 
        let span1 = document.createElement("span");
        span1.classList.add("cursor-pointer");
        span1.textContent = todo.content;

        // check for done tasks
        let line = todo.status ? "text-decoration-line-through" : "text-decoration-none"
        span1.classList.add(line)
        
        let span2 = document.createElement("span");
        span2.classList.add("cursor-pointer");
        span2.innerHTML = `<i class="bi bi-trash-fill"></i>`;
        
        // add content to li
        li.append(span1);
        li.append(span2);
        
        // add li to ul
        todo_container.append(li)

        // add event for delete button
        span2.addEventListener("click", e => {
            todos.splice(index, 1);
            localStorage.setItem("todos", JSON.stringify(todos));
            create_list(todos);
        });
        
        span1.addEventListener("click", e => {
            todos[index].status = !todos[index].status
            localStorage.setItem("todos", JSON.stringify(todos));
            create_list(todos);


            // way two
            // if(span1.classList.contains("text-decoration-line-through"))
            // {
            //     todos[index].status = false;
            //     localStorage.setItem("todos", JSON.stringify(todos));
            //     create_list(todos);
            // }
            // else{
            //     todos[index].status = true;
            //     localStorage.setItem("todos", JSON.stringify(todos));
            //     create_list(todos);
            // }

        });

    })
}
create_list(todos);


// add and search buttons
let action_wrapper = document.querySelector("#actions");
let FormWrapper = document.querySelector("#WrapperForm");

Array.from(action_wrapper.children).forEach(each => {
    each.addEventListener("click", e => {
        if(e.target.dataset.action == "search")
        {
            FormWrapper.innerHTML = `
            <form action="" id="search">
            <div class="form-group">
            <input class="form-control my-3 " type="text" name="search"  placeholder="Search...">
            </div>
            </form>`;

            let search = document.querySelector("#search");
            search.addEventListener("keyup", e => {
                e.preventDefault();
                let value = (search.search.value);
                if(value)
                {
                    let filtered_todos = todos.filter(todo => todo.content.toLowerCase().includes(value.toLowerCase()))   
                    create_list(filtered_todos);
                }else{
                    create_list(todos);
    
                }
                
            })


        }
        else{
            FormWrapper.innerHTML = `
            <form action="" id="add">
                <div class="form-group">
                    <input class="form-control my-3" type="text" name="add" placeholder="Add ... ">
                </div>
            </form>`;

            create_list(todos);
            
            
        let add = document.querySelector("#add");
        add.addEventListener("submit", e => {
            e.preventDefault();
            let value = (add.add.value);
            if(value)
            {
                add.add.value = "";
                todos.push({content:value,status:false});
                localStorage.setItem("todos", JSON.stringify(todos));
                create_list(todos);
            }

            
        });
        }




        
    })
})