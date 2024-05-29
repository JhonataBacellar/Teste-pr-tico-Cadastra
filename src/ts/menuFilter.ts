export const menuFilterMobile = () => {
    const menuOpenAndClose = () => {
        const buttonOpen = document.getElementById("buttonFiltersMobile");
        const menuFilterMobile = document.getElementById("menuFilterMobile");
        const buttonClose = document.getElementById("closeMenuFilterMobile")
        
        buttonOpen.addEventListener("click", function () {
            if(menuFilterMobile.style.display === ""){
                menuFilterMobile.style.display = 'none'
            }
            if (menuFilterMobile.style.display === "none") {
                menuFilterMobile.style.display = "flex";
            }
            console.log("Clicando");
        });
    
        buttonClose.addEventListener("click", () => {
            if(menuFilterMobile.style.display === "flex"){
                menuFilterMobile.style.display = "none"
            }
        })
    }

    menuOpenAndClose()
}

document.addEventListener("DOMContentLoaded", menuFilterMobile);
