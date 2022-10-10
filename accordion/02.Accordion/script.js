let accordions = document.querySelectorAll(".accordion");

accordions.forEach((each)=>{
    let accordion = Array.from(each.children);
    for (let each of accordion)
    {
        each.addEventListener("click", (e)=> {
            let curent = e.currentTarget;
            
            if(curent.classList.contains("show"))
            {
                curent.classList.toggle("show")
            }
            else{
                curent.classList.toggle("show")
            }
        })
    }

})