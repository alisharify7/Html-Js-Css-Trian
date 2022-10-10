let accordions = document.querySelectorAll(".accordion");

accordions.forEach((each)=>{
    let accordion = Array.from(each.children);
    for (let each of accordion)
    {
        each.addEventListener("click", (e)=> {
            let curent = e.currentTarget;
            
            let accordion_body = curent.children[1];
            
            if(accordion_body.classList.contains("show"))
            {
                accordion_body.classList.toggle("show")
            }
            else{
                accordion_body.classList.toggle("show")
                
            }
        })
    }

})