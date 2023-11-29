async function createImagePathArray() {
  try {
    const response = await fetch('assets-user/pictures.json');
    const files = await response.json(); // Assuming the server returns a JSON array of file names

    if (files.length > 0) {
      // Create an array of paths using the file names
      const paths = files.map(file => file.url);
      return paths;
    } else {
      console.error('No files found in the "assets-user" folder.');
      return [];
    }
  } catch (error) {
    console.error('Error fetching image files:', error);
    return [];
  }
}

document.addEventListener('DOMContentLoaded', async function () {
  // Generate the array of image paths
  const imagePaths = await createImagePathArray();

  const memoryCards = document.querySelectorAll('.memory-card');

  memoryCards.forEach(async card => {
    const frameworkNumber = card.getAttribute('data-framework');
    const frontFace = card.querySelector('.front-face');

    // Check if the framework number is a valid index
    if (frameworkNumber > 0 && frameworkNumber <= imagePaths.length) {
      // Set the src attribute using the indexed path
      frontFace.src = imagePaths[frameworkNumber - 1];
    } else {
      console.error('Invalid framework number or no image paths available.');
    }
  });

  const galleryCards = document.querySelectorAll('.gallery-content img');

  galleryCards.forEach(async card => {
    const frameworkNumber = card.getAttribute('data-framework');

    // Check if the framework number is a valid index
    if (frameworkNumber > 0 && frameworkNumber <= imagePaths.length) {
      // Set the src attribute using the indexed path
      card.src = imagePaths[frameworkNumber - 1];
    } else {
      console.error('Invalid framework number or no image paths available.');
    }
  });
});
