// Swal
import Swal from 'sweetalert2/dist/sweetalert2.js';

const matchRow = document.querySelector('.match-row');
const scoreText = document.getElementById('score');

const hijaiyahs = [
  {
    arab: 'alif',
    latin: 'tsa',
  },
  {
    arab: 'ta',
    latin: 'tho',
  },
  {
    arab: 'tsa',
    latin: 'dzo',
  },
  {
    arab: 'kho',
    latin: 'ro',
  },
  {
    arab: 'ro',
    latin: 'kho',
  },
  {
    arab: 'tho',
    latin: 'hamzah',
  },
  {
    arab: 'dzo',
    latin: 'qof',
  },
  {
    arab: 'qof',
    latin: 'ta',
  },
  {
    arab: 'lam',
    latin: 'alif',
  },
  {
    arab: 'hamzah',
    latin: 'lam',
  },
];

let score = 0;
let clicked = 0;
let selectedHijaiyahArab;
let selectedHijaiyahLatin;
const MAX_QUESTIONS = 10;
const CORRECT_BONUS = 10;

const appendHijaiyah = () => {
  for (const hijaiyah of hijaiyahs) {
    matchRow.innerHTML += `
    <div class="col-12 d-flex justify-content-between mb-5">
      <div class="card bg-secondary">
        <div class="card-body">
          <img class="hijaiyah-img" src="${hijaiyah.arab}.png" alt="${hijaiyah.arab}" width="100" data-hijaiyah="${hijaiyah.arab}" />
        </div>
      </div>
      <div class="card bg-secondary">
        <div class="card-body">
          <img class="hijaiyah-latin-img" src="${hijaiyah.latin}_t.png" alt="${hijaiyah.latin}" width="100" data-hijaiyah="${hijaiyah.latin}" />
        </div>
      </div>
    </div>
    `;
  }
};

const gameOver = () => {
  setTimeout(() => {
    Swal.fire({
      title: 'Selesai!',
      text: 'Permainan sudah selesai!',
      icon: 'success',
      timer: 5000,
      timerProgressBar: true,
    }).then(() => {
      localStorage.setItem('matchScore', score);
      return window.location.assign('score.html');
    });
  }, 1000);
};

const handleClickImage = () => {
  const hijaiyahImages = document.querySelectorAll('.hijaiyah-img');
  const hijaiyahLatinImages = document.querySelectorAll('.hijaiyah-latin-img');

  hijaiyahImages.forEach((hImg) => {
    hImg.addEventListener('click', (e) => {
      selectedHijaiyahArab = e.target.dataset['hijaiyah'];

      hijaiyahImages.forEach((hImg2) => hImg2.classList.remove('hijaiyah-active'));

      e.target.classList.add('hijaiyah-active');
    });
  });

  hijaiyahLatinImages.forEach((hlImg) => {
    hlImg.addEventListener('click', (e) => {
      if (selectedHijaiyahArab) {
        if (clicked === MAX_QUESTIONS - 1) {
          gameOver();
        }

        clicked++;

        selectedHijaiyahLatin = e.target.dataset['hijaiyah'];

        if (selectedHijaiyahArab === selectedHijaiyahLatin) {
          Swal.fire({
            title: 'Benar!',
            text: 'Jawaban kamu benar!',
            icon: 'success',
          });
          incrementScore(CORRECT_BONUS);
        } else {
          Swal.fire({
            title: 'Kurang Tepat!',
            text: 'Jawaban kamu kurang tepat!',
            icon: 'error',
          });
        }

        const elArab = document.querySelector(`.hijaiyah-img[data-hijaiyah="${selectedHijaiyahArab}"]`);
        const elLatin = e.target;

        elArab.style.display = 'none';
        elArab.classList.remove('hijaiyah-active');

        elLatin.style.display = 'none';
        elLatin.classList.remove('hijaiyah-active');

        selectedHijaiyahArab = undefined;
        selectedHijaiyahLatin = undefined;

        hijaiyahLatinImages.forEach((hlImg2) => {
          hlImg2.classList.remove('hijaiyah-active');
        });
      }
    });
  });
};

showScore = () => {
  scoreText.innerText = `${score}/${MAX_QUESTIONS * CORRECT_BONUS}`;
};

incrementScore = (num) => {
  score += num;
  showScore();
};

const startGame = () => {
  showScore();
  appendHijaiyah();
  handleClickImage();
};

startGame();
