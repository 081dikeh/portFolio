let menuBtn = document.getElementById("menuBtn")
let sideNav = document.getElementById("menu_nav-links")
let menu = document.getElementById("menu-list")

sideNav.style.right = "-250px";

/* menuBtn.onclick = function() {
    if (sideNav.style.right == "-250px") {
        sideNav.style.right = "0";
        menu.src = "images/x.svg"
    }
    else {
        sideNav.style.right = "-250px";
        menu.src = "Images/align-right.png"

    }
} */
menuBtn.addEventListener('click', function(){
    if (sideNav.style.right == "-250px") {
        sideNav.style.right = "0";
        menu.src = "images/x.png"
    }
    else {
        sideNav.style.right = "-250px";
        menu.src = "Images/align-right.png"

    }
});
    


var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});