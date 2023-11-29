const cards = document.querySelectorAll('.memory-card');
let numberOfGuesses = 0;

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

// JavaScript Functions
function openModal() {
  var modal = document.getElementById("myModal");
  document.querySelector('#guess-counter').innerText = numberOfGuesses;
  modal.style.display = "block";
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
  document.getElementById('play-again-btn').classList.remove('no-display');
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  if (isMatch) {
    disableCards();
    updateGameStatus();

  } else {
    unflipCards();
  }
}

function markAsPaired() {
  firstCard.classList.add('paired');
  secondCard.classList.add('paired');
}


function updateGuessesDisplay() {
  document.getElementById('guesses-display').innerText = `猜測次數: ${numberOfGuesses}`;
}

function updateGameStatus() {
  const remainingBackCards = document.querySelectorAll('.memory-card:not(.flip)');

  if (remainingBackCards.length === 0) {
    openModal();


    // Game completed, show modal or perform other actions
    console.log('Game completed!');
    // You can trigger your modal or any other actions here
  }
}

function flipCard() {
  if (lockBoard || this.classList.contains('paired')) return;
  if (this === firstCard) return;


  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    numberOfGuesses++;
    updateGuessesDisplay();
    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  if (isMatch) {
    disableCards();
    updateGameStatus();

  } else {
    unflipCards();
  }
}

function disableCards() {
  // Remove click and touch event listeners for both cards
  firstCard.removeEventListener('click', flipCard);
  firstCard.removeEventListener('touchstart', flipCard);
  secondCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('touchstart', flipCard);

  markAsPaired();

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1000);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

// JavaScript Function
function playAgain() {
  // Add logic to reset the game state, shuffle cards, etc.
  closeModal();
  resetGame(); // You need to implement this function to reset the game state
  window.location.reload(); // Reload the page
}

// Call the resetBoard function wherever you want to reset the game state
function resetGame() {
  resetBoard(); // Assuming you have a resetBoard function to reset the game state
  guessCounter = 0; // Reset the guess counter
  // updateGuessCounter(); // Update the guess counter display
}


(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();


// When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target.id == 'myModal') {
//     closeModal()
//   }
// }

const myModal = document.getElementById('myModal');
const modalContent = document.querySelector('.modal-content');

myModal.addEventListener('click', function (event) {
  if (event.target === myModal || event.target === modalContent) {
    closeModal()
  }
});

// Simplified event listeners
cards.forEach(card => {
  card.addEventListener('click', flipCard);
  card.addEventListener('touchstart', flipCard);
});
