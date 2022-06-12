import anime from 'animejs/lib/anime.es.js';
function myFunction() {
    for (var i = 100; i > 30;i=i-10) {
        document.getElementById("luz").style.transform = "scale("+i+"%)";
        document.getElementById("temperatura").style.transform = "scale("+i+"%)";
        
    }
  }

  anime({
    targets: '.css-selector-demo luz',
    translateX: 250,
    delay: 1000
  });