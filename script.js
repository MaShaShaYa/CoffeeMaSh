"use strict"

alert("скрип script подключен");

let progressBar=document.querySelector(".progress-bar");
let bigCup=document.querySelector(".cup");
let state="idle"; // статус текущ. состояния из 3х: "idle", "cooking", "ready"

console.log(progressBar);
console.log(bigCup);

function makeCoffee(name, price, element) {
    if (state!="idle") return;
    console.log(name,price,element);
    let balance=document.querySelector(".form-control");
    console.log(balance.value);
    if (+balance.value>=price) {
        
        state="cooking";
        balance.value-=price; // === balance.value = balance.value - price
        balance.style.backgroundColor="";
        changeDisplayText(`Ваш ${name} готовится`);
        // progressBar.style.width="0%";
        

/*        let coffeeCup=element.querySelector("img");
        let cupSrc=coffeeCup.getAttribute("src");
        bigCup.setAttribute("src", cupSrc);
        console.log(coffeeCup, cupSrc, bigCup);
        
        bigCup.style.display="inline";*/
        
        
        bigCup.style.display="inline";
        bigCup.innerHTML=`sdfwef${element}dfghdf`;
        console.log(bigCup);
        
      
        let readyPercent=0;
        let cookingInterval=setInterval(function() {
            readyPercent+=1;
            progressBar.style.width=readyPercent+"%";
            bigCup.style.opacity = readyPercent+"%";
            changeDisplayText(`Ваш ${name} готов на ${progressBar.style.width}`);
                if(readyPercent >= 100) {
                state="ready";
                clearInterval(cookingInterval);
                changeDisplayText(`Ваш ${name} готов - заберите чашку`);
                bigCup.style.cursor="pointer";
                bigCup.onclick=function() {
                    takeCoffee();
                }
            }
        }, 30);
        
        
   }
    else {
        balance.style.backgroundColor="red";
        changeDisplayText("Недостаточно средств");
    }
}

function takeCoffee() {
    bigCup.style.display="";
    bigCup.style.opacity=0;
    progressBar.style.width=0;
    bigCup.onclick=null;
    changeDisplayText("Выберите кофе");
    state="idle";
}

function changeDisplayText(message) {
    let displayText=document.querySelector(".display-text");
    displayText.innerHTML=message;
    
}

// ------------Drag'n'Drop-------------

let money=document.querySelectorAll(".money img")

// Если элменты массива требуется менять - то классически - если же нет - то ниже
/*for (let i=0; i<money.length; i++) {
    let bill=money[i];
}
*/
for (let bill of money) {
    bill.onmousedown=function(event) {
        console.log(event);
        takeMoney(event, bill);
        
    }
}


function takeMoney(event, bill) {
    event.preventDefault(); // Метод объекта event Предотвращает обработку "по умолчанию" -в данном случае "призрак"
    
    let mouseX=event.clientX;
    let mouseY=event.clientY;
    bill.style.transform="rotate(90deg)";
    
    let billCoords=bill.getBoundingClientRect();
    console.log(billCoords);
    
    bill.style.position="absolute";
    bill.style.top=mouseY-billCoords.width/2+"px"; // 
    bill.style.left=mouseX-billCoords.height/2+"px"; // 
    
    window.onmousemove=function(event) {
        let mouseX=event.clientX;
        let mouseY=event.clientY;
        bill.style.top=mouseY-billCoords.width/2+"px"; // 
        bill.style.left=mouseX-billCoords.height/2+"px"; // 
        
    }
    bill.onmouseup=function(event) {
        window.onmousemove=null;
        if (inAtm(bill)) {
            let balance=document.querySelector(".form-control");
            balance.value=+balance.value + +bill.dataset.cost;
        }
    }
}

function inAtm(bill) {
    let atm=document.querySelector(".atm");
    let billCoords=bill.getBoundingClientRect();
    let atmCoords=atm.getBoundingClientRect();
    
    if ((billCoords.left>atmCoords.left)&&(billCoords.right<atmCoords.right)
        &&(billCoords.top>atmCoords.top)&&(billCoords.top<atmCoords.top+(atmCoords.bottom-atmCoords.top)/3)) {
        
        return true;
    } else return false;
    
}

// -------------Создание элементов------------------


let changeButton=document.querySelector(".change-button");
changeButton.onclick=function() {
    takeChange();
}

function takeChange() {
    let balance=document.querySelector(".form-control");
    if (balance.value>=10) {
        balance.value-=10;
        createCoin("10");
        return setTimeout(function() {
            takeChange();
        },300);
    } else if (balance.value>=5) {
        balance.value-=5;
        createCoin("5");
        return setTimeout(function() {
            takeChange();
        },300);
    } else if (balance.value>=2) {
        balance.value-=2;
        createCoin("2");
        return setTimeout(function() {
            takeChange();
        },300);
    } else if (balance.value>=1) {
        balance.value-=1;
        createCoin("1");
        return takeChange();
        return setTimeout(function() {
            takeChange();
        },300);
    }


    
}
    
function createCoin(nominal) {
    let coinSrc="";
    switch (nominal) {
        case "10": coinSrc="img/10rub.png"; break;
        case "5": coinSrc="img/5rub.png"; break;
        case "2": coinSrc="img/2rub.png"; break;
        case "1": coinSrc="img/1rub.png"; break;
        default: return(console.error("неправильный номинал"));

    }
    
    let coin=document.createElement("img");
    coin.setAttribute("src", coinSrc);
    coin.style.width="50px";
    // coin.style.height="50px";
    coin.style.position="absolute";
    let changeContainer=document.querySelector(".change-container");
    let containerCoords=changeContainer.getBoundingClientRect();
    coin.style.top=Math.floor(Math.random()*(containerCoords.height-50))+"px";
    coin.style.left=Math.floor(Math.random()*(containerCoords.width-50))+"px";
    
    coin.style.transition="transform 500ms ease-in";
    coin.style.transform="translateY(-40%)";
    
    setTimeout(function() {
    coin.style.transform="translateY(0%)";
    },30)
    
    changeContainer.append(coin);
/*    внутрь в начало - HTMLelement.prepend(HTMLelement)
    рядом перед - before
    рядом после - after
    вместо - replaсeWith
    */
    
    
    
    
}




