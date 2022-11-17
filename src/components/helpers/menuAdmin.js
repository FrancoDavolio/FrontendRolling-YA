
export const open_close_menu = () => {
    
    let bodyAdmin = document.getElementById("bodyAdmin");
    let menu_side = document.getElementById("menu_side");
    console.log(bodyAdmin);
    bodyAdmin.classList.toggle("body__move");
    menu_side.classList.toggle("menu__side__move");

};

export const cargaMenu = () => {
    
  let bodyAdmin = document.getElementById("bodyAdmin");
  let menu_side = document.getElementById("menu_side");
  console.log(bodyAdmin);
  if (window.innerWidth < 760) {
      bodyAdmin.classList.add("body__move");
      menu_side.classList.add("menu__side__move");
    }
    
  
    //Haciendo el menú responsive(adaptable)
  
    window.addEventListener("resize", function () {
      if (window.innerWidth > 760) {
        bodyAdmin.classList.remove("body_move");
        menu_side.classList.remove("menu__side_move");
      }
  
      if (window.innerWidth < 760) {
        bodyAdmin.classList.add("body_move");
        menu_side.classList.add("menu__side_move");
      }
    });

};

