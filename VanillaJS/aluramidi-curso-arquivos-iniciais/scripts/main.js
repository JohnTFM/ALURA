   // construido por mim, ou seja, veja a atual aula ainda, ela deve construir um script também
x = document.querySelectorAll('.tecla');
x.forEach(element => {
    let seletor = `#som_tecla_${element.textContent.toLowerCase()}`
    element.onclick = function(){
        document.querySelector(seletor).play();
    }   
});