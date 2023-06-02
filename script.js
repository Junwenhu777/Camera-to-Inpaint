// Access the video element
var video = document.getElementById('video');

// Check if the browser supports media devices and getUserMedia
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  // Request permission to access the camera
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function(stream) {
      // Set the video source to the user's camera stream
      video.srcObject = stream;
    })
    .catch(function(error) {
      console.error('Error accessing camera:', error);
    });
} else {
  console.error('getUserMedia is not supported by this browser.');
}
