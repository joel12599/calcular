
const btn = document.getElementById("calcular");

btn.addEventListener('click',function(){
const hr = document.getElementById("horas").value;
const vlr = document.getElementById("valor").value;
const total = hr * vlr;
document.getElementById("pp").textContent = total;
if(total>150){
    document.body.style.backgroundImage ='url("https://www.gifsanimados.org/data/media/1512/tio-gilito-mcpato-y-tio-rico-mcpato-imagen-animada-0054.gif")';
}
else{
    document.body.style.backgroundImage ='url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjDuavz2gcd8ZyytxW3YnmfHe9X_wgIZm9HgPxcqc2GX38u4pQdUIX5eEyQ5dov1okRfGNNhsE5qUAuvHWrjqy5bwSC43FDo2bO-u1S4qThlmlJlNEYoStzq3vO8jsTlC7_A1qJEkUGKso/s1600/COMOE-PLATOS-DONALD.gif")';
}
    
})