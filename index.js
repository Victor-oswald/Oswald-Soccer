function openNavigation(){
var sideBar=document.getElementById("mySidebar");

sideBar.style.width='100%';

}


function closeNavigation() {
    document.getElementById("mySidebar").style.width= "0";

}

var display=screen.width;
if(display>='500'){
    var blobIMG =document.getElementsByClassName('blog-img');
    for(i=0; i<blobIMG.length; i++){
        blobIMG[i].style.display="none";
    };

}
