// script.js (or your front-end script)
const germanPictures = [
  'german1.png',
  'german2.png',
  'german3.png',
  'german4.png',
  'german5.png',
  'german6.png',
  'german7.png',
  'german8.png',
  'german9.png',
  'german10.png',
  'german11.png',
  'german12.png',
  // ... add more picture names as needed
];

function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function chooseRandomPicture() {
  const randomPicture = getRandomElement(germanPictures);
  console.log(`Randomly chosen picture at startup: ${randomPicture}`);
  return randomPicture;
}

// Assuming you have a function to get the random picture (e.g., chooseRandomPicture)
function setRandomBackground() {
  const randomPicture = 'assets-user/' + chooseRandomPicture();
  if (randomPicture) {
    document.body.style.backgroundImage = `url(${randomPicture})`;
  }
}

// Call the function to set the random background when the page loads
// setRandomBackground();

