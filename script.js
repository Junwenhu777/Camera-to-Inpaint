// Get video and canvas elements
const video = document.getElementById('camera');
const canvas = document.getElementById('canvas');
const captureBtn = document.getElementById('captureBtn');

// Get user media
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
  })
  .catch(error => {
    console.error('Error accessing camera:', error);
  });

// Capture button click event
captureBtn.addEventListener('click', () => {
  // Draw the video frame on the canvas
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
});

