var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');
var closeTime = function(){modal.classList.remove('modal_active')}

button.addEventListener('click', function() {
    modal.classList.add('modal_active');
    setTimeout(closeTime, 50000);
});

close.addEventListener('click', function(){
    modal.classList.remove('modal_active');
});

