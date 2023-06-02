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
} else if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
  // Request permission to access the camera using enumerateDevices
  navigator.mediaDevices.enumerateDevices()
    .then(function(devices) {
      // Find the video input device
      var videoDevices = devices.filter(function(device) {
        return device.kind === 'videoinput';
      });

      if (videoDevices.length > 0) {
        // Use the first video input device found
        var constraints = { video: { deviceId: videoDevices[0].deviceId } };

        // Request permission to access the camera with constraints
        return navigator.mediaDevices.getUserMedia(constraints);
      } else {
        throw new Error('No video input devices found.');
      }
    })
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
