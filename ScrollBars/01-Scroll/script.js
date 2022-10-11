document.addEventListener("scroll", function(e) {
    if(window.scrollY >= 3500)
    {
        document.querySelector(".scroll").classList.add("show");
        document.querySelector(".scroll").addEventListener("click", e => {
            if(window.scrollY >= 3500)
            {
                window.scrollTo({top:0, behavior:"smooth"});
            }
        })
        
    }
    else
    {
        document.querySelector(".scroll").classList.remove("show");
    }
})