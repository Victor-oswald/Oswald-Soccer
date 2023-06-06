function openNavigation(){
var sideBar=document.getElementById("mySidebar");

sideBar.style.display='block';
    sideBar.style.height='auto';
}


function closeNavigation() {
    document.getElementById("mySidebar").style.display= "none";

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
