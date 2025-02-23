console.log("JS file is connected!");

let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px";

function toggelMenue(){
    if(menuList.style.maxHeight == "0px")
    {
    menuList.style.maxHeight = "300px";
    }
    else{
        menuList.style.maxHeight = "0px";
    }
}
