export const menuOrderMobileTomanage = () => {
    const buttonOpenOrder = document.getElementById("buttonFilterOrder");
    const menuOrderMobile = document.getElementById("menuOrderMobile");
    const buttonCloseMenuOrder = document.getElementById("closeMenuOrder")
    console.log(buttonCloseMenuOrder)
    console.log(buttonOpenOrder)
    console.log(menuOrderMobile)
    
    buttonOpenOrder.addEventListener("click", function () {
        console.log(menuOrderMobile.style.display);
        if(menuOrderMobile.style.display === ""){
            menuOrderMobile.style.display = 'none'
        }
        if (menuOrderMobile.style.display === "none") {
            menuOrderMobile.style.display = "flex";
        }
        console.log("Clicando");
    });

    buttonCloseMenuOrder.addEventListener("click", () => {
        if(menuOrderMobile.style.display === "flex"){
            menuOrderMobile.style.display = "none"
        }
    })
}

document.addEventListener("DOMContentLoaded", menuOrderMobileTomanage);
