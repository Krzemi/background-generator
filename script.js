var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var random = document.querySelector('.random');

function setGradient() {
    body.style.background = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';
    css.textContent = body.style.background + ';';
}

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}


function setRandomGradient() {
    body.style.background = 'linear-gradient(to right, ' + random_rgba() + ', ' + random_rgba() + ')';
    css.textContent = body.style.background + ';';
}

random.addEventListener('click', setRandomGradient);

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);
