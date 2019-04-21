const sidebarBtn = document.getElementById("sidebarBtn");
const dropBtn = document.getElementById("dropBtn");
const subMenu = document.querySelector(".submenu"); 
const btnLines = document.querySelectorAll(".btn-lines")


sidebarBtn.onclick = function(){
        document.getElementById("mainNav").classList.toggle("active");
        btnLines.forEach(line => line.classList.toggle('close'));
        this.classList.toggle("active");
}

dropBtn.onclick = function(){
    subMenu.classList.toggle("toggle"); 
    document.querySelector(".nav-caret").classList.toggle("toggle");
}
