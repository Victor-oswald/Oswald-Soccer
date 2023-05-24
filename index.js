function openNavigation(){
var sideBar=document.getElementById("mySidebar");

sideBar.style.display='block';
    sideBar.style.height='auto';
}


function closeNavigation() {
    document.getElementById("mySidebar").style.display= "none";

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

var display=screen.width;
if(display>='500'){
    var blobIMG =document.getElementsByClassName('blog-img');
    for(i=0; i<blobIMG.length; i++){
        blobIMG[i].style.display="none";
    };

}
else{
    var home=document.getElementById('mySideBar');
        home.style.width='60%';
    
}
