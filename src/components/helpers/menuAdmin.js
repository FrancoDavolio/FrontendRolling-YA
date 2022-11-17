
export const open_close_menu = () => {
    
    let bodyAdmin = document.getElementById("bodyAdmin");
    let menu_side = document.getElementById("menu_side");
    console.log(bodyAdmin);
    bodyAdmin.classList.toggle("body__move");
    menu_side.classList.toggle("menu__side__move");

};

