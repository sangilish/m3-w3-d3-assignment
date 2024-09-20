const pacMen = []; // This array holds all the pacmen

// This function returns an object with random values
function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}

// Factory to make a PacMan at a random position with random velocity
function makePac() {
  // Generate random velocity and position
  let velocity = setToRandom(10); // {x: ?, y: ?}
  let position = setToRandom(200); // {x: ?, y: ?}

  // Add image to div id='game'
  let game = document.getElementById('game');
  let newimg = document.createElement('img');
  newimg.style.position = 'absolute';
  newimg.src = './images/PacMan1.png'; // Set image source
  newimg.width = 100;

  // Set the initial position of the PacMan image
  newimg.style.left = `${position.x}px`;
  newimg.style.top = `${position.y}px`;

  // Add the new PacMan image to the game div
  game.appendChild(newimg);

  // Return an object with the PacMan's details
  return {
    position,
    velocity,
    newimg,
  };
}

function update() {
  // Loop over all pacmen and update their positions
  pacMen.forEach((item) => {
    checkCollisions(item); // Check for collisions with walls
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    // Update the position of the image in the DOM
    item.newimg.style.left = `${item.position.x}px`;
    item.newimg.style.top = `${item.position.y}px`;
  });
  // Call update function every 20ms to animate the PacMen
  setTimeout(update, 20);
}

function checkCollisions(item) {
  // Detect collision with walls and make the PacMan bounce
  if (item.position.x + item.newimg.width > window.innerWidth || item.position.x < 0) {
    item.velocity.x = -item.velocity.x; // Reverse x direction
  }
  if (item.position.y + item.newimg.height > window.innerHeight || item.position.y < 0) {
    item.velocity.y = -item.velocity.y; // Reverse y direction
  }
}

function makeOne() {
  // Add a new PacMan to the array and display it
  pacMen.push(makePac());
}

// Don't change this line
if (typeof module !== 'undefined') {
  module.exports = { checkCollisions, update, pacMen };
}