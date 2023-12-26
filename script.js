import { tileMap01 } from './SokobanBase.js';
import {Tiles} from './SokobanBase.js';
import {Entities} from './SokobanBase.js';

let completGame = false;
let endGame = document.getElementById("endGame");
let playerPosition;
let direction = 'right';

const gameBoard = document.getElementById('game-board');

const tileClass = {
    " ": Tiles.Space,
    W: Tiles.Wall,
    B: Entities.Block,
    G: Tiles.Goal,
    P: Entities.Character,
}


function createTileMap(tileMap) {
  for (let i = 0; i < tileMap.height; i++) {
    for (let j = 0; j < tileMap.width; j++) {
      const tile = document.createElement('div');
      tile.classList.add('tile');
      tile.textContent = tileMap.mapGrid[i][j][0];

      // Use tileClass to determine the class based on the character
      const tileType = tileClass[tileMap.mapGrid[i][j][0]];
      tile.classList.add(tileType);

      if (tileType === Entities.Character) {
        playerPosition = { x: j, y: i };
      }

      gameBoard.appendChild(tile);
          switch (tileMap.mapGrid[i][j][0]) {
            case 'W':
              tile.classList.add('tile-wall');
              break;
             case ' ':
                tile.classList.add('tile-space')
                break;
             case 'G':
                tile.classList.add('tile-goal')
                break;  
            case 'P':
              tile.classList.add('entity-player');
              break;
            case 'B':
                tile.classList.add('entity-block')
                break;
            //  case 'GD':
            //     tile.classList.add('entity-block-goal')
            //     break;
          }
      }
  }
 // updatePlayerPosition();
}

window.onload = function() {
  createTileMap(tileMap01);
};



document.addEventListener('keydown', function (event) {
  switch (event.key) {
    case 'ArrowUp':
      movePlayer(0, -1); // Move up
      break;
    case 'ArrowDown':
      movePlayer(0, 1); // Move down
      break;
    case 'ArrowLeft':
      movePlayer(-1, 0); // Move left
      break;
    case 'ArrowRight':
      movePlayer(1, 0); // Move right
      break;
  }
});





