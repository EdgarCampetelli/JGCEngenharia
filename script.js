function descer(){
    var box = document.querySelector("#blackBoxDisplay");
    var img = document.getElementById("img");
    if(box.style.display === "block"){
        box.style.display = "none"
        img.src = "imgs/next.png"
    }else{
        box.style.display = "block"
        img.src = "imgs/down.png"
    }
}

function descer2(){
    var box = document.querySelector("#blackBoxDisplay2");
    var img = document.getElementById("img2");
    if(box.style.display === "block"){
        box.style.display = "none"
        img.src = "imgs/next.png"
    }else{
        box.style.display = "block"
        img.src = "imgs/down.png"
    }
}

function descer3(){
    var box = document.querySelector("#blackBoxDisplay3");
    var img = document.getElementById("img3");
    if(box.style.display === "block"){
        box.style.display = "none"
        img.src = "imgs/next.png"
    }else{
        box.style.display = "block"
        img.src = "imgs/down.png"
    }
}

function descer4(){
    var box = document.querySelector("#blackBoxDisplay4");
    var img = document.getElementById("img4");
    if(box.style.display === "block"){
        box.style.display = "none"
        img.src = "imgs/next.png"
    }else{
        box.style.display = "block"
        img.src = "imgs/down.png"
    }
}

function descer5(){
    var box = document.querySelector("#blackBoxDisplay5");
    var img = document.getElementById("img5");
    if(box.style.display === "block"){
        box.style.display = "none"
        img.src = "imgs/next.png"
    }else{
        box.style.display = "block"
        img.src = "imgs/down.png"
    }
}

function descer6(){
    var box = document.querySelector("#blackBoxDisplay6");
    var img = document.getElementById("img6");
    if(box.style.display === "block"){
        box.style.display = "none"
        img.src = "imgs/next.png"
    }else{
        box.style.display = "block"
        img.src = "imgs/down.png"
    }
}

function descer7(){
    var box = document.querySelector("#blackBoxDisplay7");
    var img = document.getElementById("img7");
    if(box.style.display === "block"){
        box.style.display = "none"
        img.src = "imgs/next.png"
    }else{
        box.style.display = "block"
        img.src = "imgs/down.png"
    }
}

function descer8(){
    var box = document.querySelector("#blackBoxDisplay8");
    var img = document.getElementById("img8");
    if(box.style.display === "block"){
        box.style.display = "none"
        img.src = "imgs/next.png"
    }else{
        box.style.display = "block"
        img.src = "imgs/down.png"
    }
}

function descer9(){
    var box = document.querySelector("#blackBoxDisplay9");
    var img = document.getElementById("img9");
    if(box.style.display === "block"){
        box.style.display = "none"
        img.src = "imgs/next.png"
    }else{
        box.style.display = "block"
        img.src = "imgs/down.png"
    }
}

const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
  }
  
const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
}


function actionMenu(){
    var box = document.querySelector("#boxMenuNone");
    var img = document.getElementById("menuIcon");
    if( box.style.display === "block" ){
        box.style.display = "none";
        img.src = "imgs/menu.png" 
    }else{
        box.style.display = "block";
        img.src = "imgs/menu-y.png" 
    }
        
}