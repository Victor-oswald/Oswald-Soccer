function openNavigation(){
var sideBar=document.getElementById("mySidebar");

sideBar.style.display='block';
    sideBar.style.width='70%';
}


function closeNavigation() {
    document.getElementById("mySidebar").style.width = "0px";

}


function table() {
    var tmenu = document.getElementById("table-content");
    var tbutton = document.getElementById("htbbtn")
    if (tmenu.style.display == "none") {
        tmenu.style.display = "inline-block"
    } else {
        tmenu.style.display = "none"
    }
}
function fixtures() {
    var fmenu = document.getElementById("fixture-content")
    if (fmenu.style.display == "none") {
        fmenu.style.display = "block"
    } else {
        fmenu.style.display = "none"
    }
}
function Prediction(){
    var uf = document.getElementById("understandingfootball")
    if (uf.style.display == "none") {
        uf.style.display = "inline-block"
    } else {
        uf.style.display = "none"
    }
}
