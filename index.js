import { createPolyanet, deletePolyanet } from './polyanets.js';
import { createSoloon, deleteSoloon } from './soloons.js';
import { createCometh, deleteCometh } from './comeths.js';

const createMegaverseButton = document.getElementById('createMegaverseButton');
const restartMegaverseButton = document.getElementById('restartMegaverseButton');

// Definition of the array where the goal array will be stored
var array_goal = [];

/* 
  Obtains the goal map of the current challenge phase
*/
const obtainGoalMap = () => {
  fetch('https://challenge.crossmint.io/api/map/b2e9d766-1b97-460e-ad3c-b9855be2e64c/goal', {
    method: 'GET'
  }).then(res => res.json())
    .then(data => processInfo(data))
    .catch(error => console.error('Error:', error))
}

/* 
  Saves the goal map of the challenge as an array in the "array_goal" variable
*/
function processInfo(response_goal) {
  array_goal = response_goal.goal;
}

/*
  Iterates through the array of the goal map and draws the Megaverse, creating the different astral objects
*/
async function drawMegaverse() {
  for (var i = 0; i < array_goal.length; i++) {
    for (var j = 0; j < array_goal.length; j++) {
      let k = array_goal[i][j];
      switch (k) {
        case "POLYANET":
          await createPolyanet(i, j);
          break;
        case "BLUE_SOLOON":
          await createSoloon(i, j, "blue");
          break;
        case "RED_SOLOON":
          await createSoloon(i, j, "red");
          break;
        case "PURPLE_SOLOON":
          await createSoloon(i, j, "purple");
          break;
        case "WHITE_SOLOON":
          await createSoloon(i, j, "white");
          break;
        case "UP_COMETH":
          await createCometh(i, j, "up");
          break;
        case "DOWN_COMETH":
          await createCometh(i, j, "down");
          break;
        case "RIGHT_COMETH":
          await createCometh(i, j, "right");
          break;
        case "LEFT_COMETH":
          await createCometh(i, j, "left");
          break;
        default:
          break;
      }

    }
  }
  window.alert("The Megaverse is ready");
}

/*
  Deletes the Megaverse drawn. Our Megaverse is set to its original value.
*/
async function restartMegaverse() {
  for (var i = 0; i < array_goal.length; i++) {
    for (var j = 0; j < array_goal.length; j++) {
      let k = array_goal[i][j];
      switch (k) {
        case "POLYANET":
          await (deletePolyanet(i, j));
          break;
        case "BLUE_SOLOON":
        case "RED_SOLOON":
        case "PURPLE_SOLOON":
        case "WHITE_SOLOON":
          await deleteSoloon(i, j);
          break;
        case "UP_COMETH":
        case "DOWN_COMETH":
        case "RIGHT_COMETH":
        case "LEFT_COMETH":
          await deleteCometh(i, j);
          break;
        default:
          break;
      }

    }
  }
  window.alert("The Megaverse has been restarted");
}

// We call the function to save the goal map as an array
obtainGoalMap();
// If we want to totally automatize the program, uncomment the following line
//drawMegaverse();

createMegaverseButton.addEventListener('click', drawMegaverse);
restartMegaverseButton.addEventListener('click', restartMegaverse);
