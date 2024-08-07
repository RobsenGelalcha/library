const add = document.querySelector(".add");
const root = document.querySelector(":root");
var isDark = false;
const addbox = document.createElement("div");
const bottom = document.querySelector("#bottom");
addbox.classList.add("addbox");

function makeBook(title,author,pages,read){
    return {
        title:title,
        author:author,
        pages:pages,
        read: read,
    };
}

booklist = [] 

const block = document.createElement("div");
block.classList.add("block");
block.textContent("WOrking");
block.style.backgroundColor("pink");




add.addEventListener("click", function(){
    

    if (!isDark) {
        root.style.opacity = "0.8";
        isDark = true;
    }
    else{
        root.style.opacity = "1";
        isDark = false;
    }
});




