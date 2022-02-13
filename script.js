/*function showRise() { 
    document.getElementById("rise").style.display = 'block'; 
}
setTimeout("showRise()", 5000); */
let sound = document.getElementById('poem')
let play = document.getElementById('prueba')
function start() {
    console.log('play');
    sound.play();
          return false;
}
function hide() {
    play.style.display = 'none';
}

document.getElementById("prueba").addEventListener('click', function(){
    start();
    hide();
});

let rise = document.getElementById("rise");
function show() {
    rise.classList.toggle('fadein');
}
/*function hide() {
    rise.style.display = 'none';
}*/
//setTimeout("hide()", 13000);
function out() {
    rise.classList.toggle('fadeout');
}

//setTimeout("show()", 10650);
//setTimeout("out()", 13000);
let rise2 = document.getElementById("rise2");
function show2() {
    rise2.classList.toggle('fadein');}
function out2() {
    rise2.classList.toggle('fadeout');
    }



let rise3 = document.getElementById("rise3");
function show3() {
    rise3.classList.toggle('fadein');}
function out3() {
    rise3.classList.toggle('fadeout');
    }



let rise4 = document.getElementById("rise4");
function show4() {
    rise4.classList.toggle('fadein');}
function out4() {
    rise4.classList.toggle('fadeout');
    }


let rise5 = document.getElementById("rise5");
function show5() {
    rise5.classList.toggle('fadein');}
function out5() {
    rise5.classList.toggle('fadeout');
    }


let rise6 = document.getElementById("rise6");
function show6() {
    rise6.classList.toggle('fadein');}
function out6() {
    rise6.classList.toggle('fadeout');
    }



let rise7 = document.getElementById("rise7");
function show7() {
    rise7.classList.toggle('fadein');}
function out7() {
    rise7.classList.toggle('fadeout');
    }



document.getElementById("prueba").addEventListener("click", function(){
    setTimeout("show()", 10650);
    setTimeout("out()", 12000);
    setTimeout("show2()", 33000);
    setTimeout("out2()", 34000);
    setTimeout("show3()", 66700);
    setTimeout("out3()", 68000);
    setTimeout("show4()", 90000);
    setTimeout("out4()", 91000);
    setTimeout("show5()", 93500);
    setTimeout("out5()", 95000);
    setTimeout("show6()", 106500);
    setTimeout("out6()", 108000);
    setTimeout("show7()", 112000);
    setTimeout("out7()", 113000);
    });