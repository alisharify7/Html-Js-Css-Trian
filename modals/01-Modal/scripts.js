


document.querySelector("#open_modal").addEventListener("click", e => {
    let curent = (e.currentTarget);
    let target = (curent.dataset.target);
    if(target)
    {
        let modal = (document.querySelector(`#${target}`))
        modal.style.display="block";
        
        document.querySelectorAll(".close-modal").forEach(each => {
            each.addEventListener("click", e => {
                modal.style.display="none"
            });
        })

        let backdrop = modal.children[0];
        backdrop.addEventListener("click", e=> {
            modal.style.display="none"
        })
    }

});