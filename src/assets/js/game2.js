// Swal
import Swal from 'sweetalert2/dist/sweetalert2.js';

const matchRow = document.querySelector('.match-row');
const scoreText = document.getElementById('score');
const overlay = document.getElementById('overlay');
const overlayText = document.getElementById('overlay-text');
const xIcon = document.getElementById('x-icon');
const petunjuk = document.getElementById('petunjuk');

const clickSound = document.getElementById('click-sound');
const successSound = document.getElementById('success-sound');
const failSound = document.getElementById('fail-sound');
const doneSound = document.getElementById('done-sound');

let score = 0;
let count = 10;
let clicked = 0;
let selected1;
let selected2;
const MAX_QUESTIONS = 5;
const CORRECT_BONUS = 20;

const words = [
  {
    arab: 'اَلْأُسْرَةُ',
    latin: 'al-Usrotu',
  },
  {
    arab: 'اَلْأَقْرِبَاءُ',
    latin: 'al-Aqribaa u',
  },
  {
    arab: 'اَلْأَبَوَيْنِ',
    latin: 'al-Abawaini',
  },
  {
    arab: 'أُمٌ',
    latin: 'Ummun',
  },
  {
    arab: 'اَبٌ',
    latin: 'Abun',
  },
];

const appendArab = () => {
  const shuffled = [...words, ...words].sort(() => Math.random() - 0.5);
  for (const word of shuffled) {
    matchRow.innerHTML += `
      <div class="match-card" data-latin="${word.latin}">
        <div class="card">
          <div class="card-body bg-secondary">
            <p class="font-uthmanic mb-1" style="font-size: 2rem;">${word.arab}</p>
          </div>
        </div>
      </div>
    `;
  }
};

const handleClickArab = () => {
  const matchCards = document.querySelectorAll('.match-card');

  matchCards.forEach((card) => {
    if (!card.classList.contains('flipped')) {
      card.addEventListener('click', (e) => {
        clickSound.play();
        card.classList.add('flipped');
        if (!selected1) {
          selected1 = card.dataset['latin'];
        } else {
          clicked++;
          if (clicked === MAX_QUESTIONS) gameOver();

          selected2 = card.dataset['latin'];

          if (selected1 === selected2) {
            incrementScore(CORRECT_BONUS);
            setTimeout(() => {
              successSound.play();
              Swal.fire({
                title: 'Benar!',
                text: 'Jawaban kamu benar!',
                icon: 'success',
                imageUrl: 'true.gif',
                imageWidth: 150,
                imageAlt: 'Custom image',
              });
            }, 200);
          } else {
            setTimeout(() => {
              failSound.play();
              Swal.fire({
                title: 'Kurang Tepat!',
                text: 'Jawaban kamu kurang tepat!',
                icon: 'error',
                imageUrl: 'false.gif',
                imageWidth: 150,
                imageAlt: 'Custom image',
              });
            }, 200);
          }

          selected1 = undefined;
          selected2 = undefined;
        }
      });
    }
  });
};

const showScore = () => {
  scoreText.innerText = `${score}/${MAX_QUESTIONS * CORRECT_BONUS}`;
};

const incrementScore = (num) => {
  score += num;
  showScore();
};

const gameOver = () => {
  setTimeout(() => {
    doneSound.play();
    Swal.fire({
      title: 'Selesai!',
      text: 'Permainan sudah selesai!',
      icon: 'success',
      timer: 5000,
      timerProgressBar: true,
      imageUrl: 'true.gif',
      imageWidth: 150,
      imageAlt: 'Custom image',
    }).then(() => {
      localStorage.setItem('memoryScore', score);
      return window.location.assign('score.html');
    });
  }, 1000);
};

const startGame = () => {
  showScore();
  appendArab();
  handleClickArab();
};

startGame();

xIcon.addEventListener('click', () => {
  clickSound.play();
  Swal.fire({
    title: 'Keluar?',
    text: 'Kamu yakin ingin keluar dari permainan?',
    reverseButtons: true,
    showCancelButton: true,
    cancelButtonText: 'Batal',
    confirmButtonText: 'Keluar',
    imageUrl: 'petunjuk.gif',
    imageWidth: 150,
    imageAlt: 'Custom image',
  }).then((result) => {
    if (result.isConfirmed) {
      return window.location.assign('level.html');
    }
  });
});

petunjuk.addEventListener('click', () => clickSound.play());
