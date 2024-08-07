const add = document.querySelector(".add");
const root = document.documentElement; 
var isDark = false;
const addbox = document.createElement("div");
const bottom = document.querySelector("#bottom");
addbox.classList.add("addbox");

function makeBook(title, author, pages, read) {
    return {
        title: title,
        author: author,
        pages: pages,
        read: read,
    };
}

let booklist = [];

const block = document.createElement("div");
block.classList.add="block";
block.style.position="fixed";
block.style.backgroundColor = "#E5E5E5"
block.style.inset = "0px";
block.style.height = "400px";
block.style.maxWidth = "50vw";
block.style.maxHeight = "50vw";
block.style.margin = "auto";
block.style.zIndex = "100"
block.style.borderRadius = "14%";
block.style.borderColor = "#242F40";


const form = document.createElement("form");

const title = document.createElement("input");
title.type = 'text';
title.name = "title";
title.placeholder = "title";

const author = document.createElement("author");
author.type = "text";
author.name = "author";
author.placeholder = "author";

const pages = document.createElement("pages");
pages.type = "text";
pages.name = "pages";
pages.placeholder = "pages";

const read = document.createElement("read");
read.type = "checkbox";
read.name = "read";

const title_label = document.createElement("label");
const author_label = document.createElement("label");
const pages_label = document.createElement("label");
const read_label = document.createElement("label");




add.addEventListener("click", function () {
    if (!isDark) {
        root.style.opacity = "0.8";
        isDark = true;
        root.appendChild(block);
        

        
    } else {
        root.style.opacity = "1";
        isDark = false;
        root.removeChild(block);
        
        
    }
});





