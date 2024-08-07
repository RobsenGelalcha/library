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
block.className = "block";
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





const title_label = document.createElement("label");
title_label.htmlFor = "title";
title_label.textContent = "Title:";
form.appendChild(title_label);

const title = document.createElement("input");
title.type = 'text';
title.name = "title";
title.id = "title";
title.placeholder = "title";
form.appendChild(title);



const author_label = document.createElement("label");
author_label.htmlFor = "author";
author_label.textContent = "Author";
form.appendChild(author_label);

const author = document.createElement("input");
author.type = "text";
author.name = "author";
title.id = "author";
author.placeholder = "author";
form.appendChild(author);


const pages_label = document.createElement("label");
pages_label.textContent = "Pages";
author_label.htmlFor = "pages";
form.appendChild(pages_label);

const pages = document.createElement("input");
pages.type = "text";
pages.name = "pages";
pages.id = "pages"
pages.placeholder = "pages";
form.appendChild(pages);


const read_label = document.createElement("label");
read_label.textContent = "Have you read it?";
read_label.htmlFor = "read";
form.appendChild(read_label);

const read = document.createElement("input");
read.type = "checkbox";
read.name = "read";
read.id = "read";
form.appendChild(read);
block.appendChild(form);

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





