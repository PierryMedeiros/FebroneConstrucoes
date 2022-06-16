
// Animação do martelo girando
var ang = 0;
var hammer = document.getElementById("martelo");
var anima;

function gira(){
    hammer.style.transform="rotate(" + ang + "deg)";
    anima = requestAnimationFrame(gira)
    if(ang>360){
        ang=0
    }
    ang++
}
gira()
//Fim da animação do martelo


//botão whatsapp
const url = "https://api.whatsapp.com/send?phone=5521996947880&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento.";
const btn = document.querySelector("#whats");
var widthW = 100;
var btnRotate = 0;
var animationStart;
var animationStop;

function openInNewTab(url) {
    const win = window.open(url, "_blank");
    win.focus()
}



setInterval(callAttention, 5000);
function callAttention(){
    animationButton()
    setTimeout(cancelAnimationButton, 1200)  
}

function animationButton(){
    btn.style.width = widthW + "px";
    btn.style.transform="rotate(" + btnRotate + "deg)";

    if(widthW < 130){
        widthW+=4;
    }else if(widthW >= 120 && btnRotate < 360){
        btnRotate+=7;
    }
    animationStart = requestAnimationFrame(animationButton);
}

function cancelAnimationButton(){
    cancelAnimationFrame(animationStart)
    btn.style.width = widthW + "px";
    btn.style.transform="rotate(" + btnRotate + "deg)";
    btnRotate = 0;

    if(widthW > 100){
        widthW-=4;
    }
    animationStop = requestAnimationFrame(cancelAnimationButton);
    if(widthW <= 100){
        cancelAnimationFrame(animationStop);
    }
}


btn.addEventListener("click", function(){
    openInNewTab(url);
})
btn.addEventListener("mouseover", animationButton)
btn.addEventListener("mouseout", cancelAnimationButton)
//Fim do botão

//suavisação do scroll

const menuItems = document.querySelectorAll('.menu a');

console.log(menuItems);

//git remote add origin https://github.com/PierryMedeiros/febroneConstrucoes.git
//git branch -M main
//git push -u origin main