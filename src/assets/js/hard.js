// Swal
import Swal from 'sweetalert2/dist/sweetalert2.js';

const memoryRow = document.querySelector('.memory-row');
const scoreText = document.getElementById('score');
const overlay = document.getElementById('overlay');
const overlayText = document.getElementById('overlay-text');
const xIcon = document.getElementById('x-icon');

let score = 0;
let count = 10;
let clicked = 0;
let selected1;
let selected2;
const MAX_QUESTIONS = 10;
const CORRECT_BONUS = 10;

const hijaiyahs = ['lam', 'tsa', 'alif', 'hamzah', 'dzo', 'ta', 'ro', 'tsa', 'qof', 'kho', 'alif', 'ro', 'tho', 'dzo', 'ta', 'qof', 'tho', 'lam', 'hamzah', 'kho'];

const appendHijaiyah = () => {
  const shuffled = [...hijaiyahs].sort(() => Math.random() - 0.5);
  for (const hijaiyah of shuffled) {
    memoryRow.innerHTML += `
      <div class="card">
        <div class="card-body bg-secondary">
          <img class="hijaiyah-memory-img flipped" src="${hijaiyah}.png" alt="${hijaiyah}" width="100" data-hijaiyah="${hijaiyah}" />
        </div>
      </div>
    `;
  }

  const hijaiyahImages = document.querySelectorAll('.hijaiyah-memory-img');
  hijaiyahImages.forEach((hImg) => {
    setTimeout(() => {
      hImg.classList.remove('flipped');
    }, 200);

    setTimeout(() => {
      hImg.classList.add('flipped');
    }, 11200);
  });
};

const handleClickHijaiyah = () => {
  const hijaiyahImages = document.querySelectorAll('.hijaiyah-memory-img');

  hijaiyahImages.forEach((hImg) => {
    if (hImg.classList.contains('flipped')) {
      hImg.addEventListener('click', (e) => {
        e.target.classList.remove('flipped');
        if (!selected1) {
          selected1 = e.target.dataset['hijaiyah'];
        } else {
          clicked++;
          if (clicked === MAX_QUESTIONS) gameOver();

          selected2 = e.target.dataset['hijaiyah'];

          if (selected1 === selected2) {
            incrementScore(CORRECT_BONUS);
            setTimeout(() => {
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

const showTimer = () => {
  const countInterval = setInterval(() => {
    overlayText.innerText = count === 0 ? 'Mulai' : count;
    if (count === 0) {
      setTimeout(() => {
        clearInterval(countInterval);
        overlay.style.display = 'none';
      }, 1000);
    }
    count--;
  }, 1000);
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
  showTimer();
  showScore();
  appendHijaiyah();
  handleClickHijaiyah();
};

startGame();

xIcon.addEventListener('click', () => {
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
