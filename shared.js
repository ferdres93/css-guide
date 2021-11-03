var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal')
var vermasButton = document.querySelectorAll('.plataforma button');

//console.dir(backdrop);

//backdrop.style.display = 'block';
console.dir(vermasButton)
for (var i = 0; i < vermasButton.length; i++) {
    vermasButton[i].addEventListener('click',function(){
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
}

backdrop.addEventListener("click", closeModal);

modalNoButton.addEventListener("click", closeModal);

function closeModal (){
    backdrop.style.display = "none"
    modal.style.display = "none"
}