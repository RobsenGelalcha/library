const add = document.querySelector(".add");
const root = document.querySelector(":root");
var isDark = false;
const addbox = document.createElement("div");
addBox.classList.add("addbox");

function makeBook(title,author,pages,read){
    return {
        title:title,
        author:author,
        pages:pages,
        read: read,
    };
}

booklist = []


add.addEventListener("click", function(){
    root.style.opacity = "23%";

});



