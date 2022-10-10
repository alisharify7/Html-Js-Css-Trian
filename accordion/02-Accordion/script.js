let accordions = document.querySelectorAll(".accordion");

accordions.forEach((each)=>{
    let accordion = Array.from(each.children);
    for (let each of accordion)
    {
        each.addEventListener("click", (e)=> {
            let curent = e.currentTarget;
            
            if(curent.classList.contains("show"))
            {
                curent.classList.toggle("show");
                curent.children[1].style.maxHeight = 0 +"px"; 
            }
            else
            {
                curent.classList.toggle("show")
                curent.children[1].style.maxHeight = curent.children[1].scrollHeight + 30 + "px"; 
            }
        })
    }

})