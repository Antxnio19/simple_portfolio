window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);

function toggleMenu(){
    var menuToggle = document.querySelector(' .toggle');
    var menu = document.querySelector(' .menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}

});

$("#more").click(function(){
    $('.hidden').removeClass("hidden");
});
$("#less").click(function(){
    $('.showless').addClass("hidden");
});
