export const menuOrderMobileTomanage = () => {

    const menuOpenAndClose = () => {

        const buttonOpenOrder = document.getElementById("buttonFilterOrder");
        const menuOrderMobile = document.getElementById("menuOrderMobile");
        const buttonCloseMenuOrder = document.getElementById("closeMenuOrder")
        
        buttonOpenOrder.addEventListener("click", function () {
            if(menuOrderMobile.style.display === ""){
                menuOrderMobile.style.display = 'none'
            }
            if (menuOrderMobile.style.display === "none") {
                menuOrderMobile.style.display = "flex";
            }
        });
    
        buttonCloseMenuOrder.addEventListener("click", () => {
            if(menuOrderMobile.style.display === "flex"){
                menuOrderMobile.style.display = "none"
            }
        })
    }


    menuOpenAndClose()

}

document.addEventListener("DOMContentLoaded", menuOrderMobileTomanage);
