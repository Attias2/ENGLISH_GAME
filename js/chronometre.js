var h1 = document.getElementsByTagName('h1')[0]; 
var start = document.getElementById('strt');
var stop = document.getElementById('stp');
var reset = document.getElementById('rst');
var sec = 0;
var min = 30;
var t;
var isRunning = false;

function tick() {
  sec--;
  if (sec < 0) {
    sec = 59;
    min--;
    if (min < 0) {
      clearTimeout(t);
      isRunning = false;
      Swal.fire({
        title: "Le jeu est terminé"
      });
      sec = 0;
      min = 30;
      updateDisplay();
      return;
    }
  }
}

function updateDisplay() {
  h1.textContent = 
    (min > 9 ? min : '0' + min) + ':' + 
    (sec > 9 ? sec : '0' + sec);
}

function add() {
  tick();
  updateDisplay();
  if (isRunning) {
    timer();
  }
}

function timer() {
  t = setTimeout(add, 1000);
}

// Événements des boutons
start.onclick = function() {
  if (!isRunning) { // N'autorise le redémarrage que si le minuteur est arrêté
    isRunning = true;
    timer();
  }
};

stop.onclick = function() {
  clearTimeout(t);
  isRunning = false;
};

reset.onclick = function() {
  clearTimeout(t);
  sec = 0;
  min = 30;
  isRunning = false;
  updateDisplay();
};

// Initialisation de l'affichage
updateDisplay();
