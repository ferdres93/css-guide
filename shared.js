var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal')
var modalNoButton = document.querySelector('.modal_action-negative')
var vermasButton = document.querySelectorAll('.plataforma button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile_nav');
//console.dir(backdrop);

//console.dir(backdrop.style['backgrund-image']);

for (var i = 0; i < vermasButton.length; i++) {
    vermasButton[i].addEventListener('click',function(){
        //modal.style.display = "block";
        //backdrop.style.display = "block";
        //modal.className = 'open'; //This actually overwrite the complete class list
        modal.classList.add('open')
        backdrop.classList.add('open')
    });
}

backdrop.addEventListener("click", function() {
    //mobileNav.style.display = 'none';
    mobileNav.classList.remove('open')
    closemodal();
});

if(modalNoButton) {
    modalNoButton.addEventListener("click", closemodal);
}

function closemodal (){
    //backdrop.style.display = "none"
    //modal.style.display = "none"
if(modal) {
    modal.classList.remove('open')
    }
    
    backdrop.classList.remove('open')
}

toggleButton.addEventListener("click",function() {
    //mobileNav.style.display = 'block'
    //backdrop.style.display = 'block'
    mobileNav.classList.add('open')
    backdrop.classList.add('open')
});