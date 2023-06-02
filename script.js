// Access the canvas element and get its 2D rendering context
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// Set the canvas size to match the window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Track the coordinates of the circle being drawn
var startX, startY;
var isDrawing = false;

// Get the loading element
var loadingElement = document.querySelector('.loading');

// Event listener for touch start event
canvas.addEventListener('touchstart', function(event) {
  startX = event.touches[0].clientX;
  startY = event.touches[0].clientY;
  isDrawing = true;
});

// Event listener for touch move event
canvas.addEventListener('touchmove', function(event) {
  event.preventDefault();
  if (!isDrawing) return;

  var endX = event.touches[0].clientX;
  var endY = event.touches[0].clientY;
  var radius = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));

  // Clear the canvas before drawing the circle
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the circle
  ctx.beginPath();
  ctx.arc(startX, startY, radius, 0, 2 * Math.PI);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
  ctx.lineWidth = 5;
  ctx.stroke();
});

// Event
