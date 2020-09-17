"use strict"

alert("cghgbn gjlrk.xty")
let imgLampVykl=document.querySelector("img.vykl").getAttribute("src");
let imgLampVkl=document.querySelector("img.vkl").getAttribute("src");
let currBtn=document.querySelector("input.vykl");


function switchLamp(element) {
    currBtn=element.title;
    
    switch (currBtn) {
    case "ВЫКЛ":
        // document.querySelector("img.vykl").setAttribute("src",imgLampVykl);
        document.querySelector("img.vykl").style.display="block";
        document.querySelector("img.vkl").style.display="none";
        break;
        
    case "ВКЛ":
        // document.querySelector("img.vykl").setAttribute("src",imgLampVkl);
        document.querySelector("img.vykl").style.display="none";
        document.querySelector("img.vkl").style.display="block";
        break;
        
    case "reserve": return;
    }
    
}

    let modWin=document.querySelector(".modal");


function modWinOpen(element) {
    let inputHeader=document.querySelector(".header-input").value;
    let inputText=document.querySelector(".text-input").value;
    
    modWin.querySelector("h1").innerHTML=inputHeader;
    modWin.querySelector("span").innerHTML=inputText;

    modWin.style.display="block";
    modWin.style.position="fixed";
    modWin.style.width="50%";

}
function modWinClose(element) {
    let modWin=document.querySelector(".modal");
    modWin.style.display="none";
    
    
}
