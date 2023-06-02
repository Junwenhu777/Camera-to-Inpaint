document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
  
    // Check if the browser supports getUserMedia
    const hasUserMedia = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
  
    // Initialize camera stream
    if (hasUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          video.srcObject = stream;
          video.onloadedmetadata = () => {
            video.play();
            requestAnimationFrame(captureFrame);
          };
        })
        .catch((error) => {
          console.log('Error accessing camera:', error);
        });
    } else {
      console.log('getUserMedia is not supported in this browser.');
    }
  
    // Capture video frame and draw on canvas
    function captureFrame() {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      requestAnimationFrame(captureFrame);
    }
  });
  