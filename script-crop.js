// Create an image element
const img = new Image();

// Set the source of the image (replace 'your-original-image.jpg' with your actual image URL)
img.src = 'background.webp';

// When the image is loaded, crop it and set it as the background of the memory game container
img.onload = function () {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  // Set the canvas size to the desired crop size
  canvas.width = img.width * 0.5; // 90% width
  canvas.height = img.height * 0.5; // 90% height

  // Draw the cropped image on the canvas
  context.drawImage(img, 0, 0, canvas.width, canvas.height);

  // Get the data URL of the cropped image
  const croppedImageUrl = canvas.toDataURL();

  // Set the cropped image as the background of the memory game container
  const backgroundImg = document.getElementById(croppedImageUrl);
  backgroundImg.style.backgroundImage = `url('${croppedImageUrl}')`;
  backgroundImg.style.backgroundSize = 'cover';
};