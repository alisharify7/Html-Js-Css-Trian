
let wrappers = document.querySelectorAll(".wrapper > p");


function close_accordion(curent)
{
    // this function take an element and close all accordion that is open
    // except that one that is take it
    let accorions = document.querySelectorAll(".wrapper");
    for(let each of accorions)
    {
        if (each == curent)
        {
            continue
        }
        else{
            if(each.classList.contains("show"))
            {
                (each.classList.remove("show"))
            }
        }
    }

}

for(let each of wrappers)
{
    each.addEventListener("click", (e)=>{
        // close all accordion except this one
        close_accordion(each.parentElement);
        if(each.parentElement.classList.contains("show"))
        {
            each.parentElement.classList.remove("show");
            each.parentElement.children[0].children[1].innerText = "+"
        }
        else
        {
            each.parentElement.classList.add("show");
            each.parentElement.children[0].children[1].innerText = "-"
        }

    })
}