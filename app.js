window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

function toggleMenu() {
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu')
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active')
};

const body = document.querySelector('body');
const dot = document.querySelector('.dot');
document.addEventListener('mousemove', (e) => {
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';

});

function clock() {
    var hours = document.getElementById('hour');
    var minutes = document.getElementById('minutes');
    var seconds = document.getElementById('seconds');

    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
}
var interval = setInterval(clock, 1000);

$(document).ready(function(){
    $('.banner div').mouseover(function(){
        $(this).addClass('flip')
    })
})