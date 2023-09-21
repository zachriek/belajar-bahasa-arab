// Swal
import Swal from 'sweetalert2/dist/sweetalert2.js';

const matchRow = document.querySelector('.match-row');
const soundCard = document.querySelector('.sound-card');
const scoreText = document.getElementById('score');
const xIcon = document.getElementById('x-icon');
const petunjuk = document.getElementById('petunjuk');

const clickSound = document.getElementById('click-sound');
const successSound = document.getElementById('success-sound');
const failSound = document.getElementById('fail-sound');
const doneSound = document.getElementById('done-sound');

let score = 0;
let clicked = 0;
let selected;
const MAX_QUESTIONS = 10;
const CORRECT_BONUS = 10;

let currentQuestionIndex = 0;

const words = [
  {
    arab: 'اَلْأُسْرَةُ',
    latin: 'keluarga',
  },
  {
    arab: 'اَلْأَقْرِبَاءُ',
    latin: 'kerabat',
  },
  {
    arab: 'اَلْأَبَوَيْنِ',
    latin: 'ortu',
  },
  {
    arab: 'أُمٌ',
    latin: 'ibu',
  },
  {
    arab: 'اَبٌ',
    latin: 'bapak',
  },
  {
    arab: 'جَدٌّ',
    latin: 'kakek',
  },
  {
    arab: 'جَدَّةٌ',
    latin: 'nenek',
  },
  {
    arab: 'وَلَدٌ',
    latin: 'anak_laki-laki',
  },
  {
    arab: 'بِنْتٌ',
    latin: 'anak_perempuan',
  },
  {
    arab: 'أَخٌ',
    latin: 'saudara_laki-laki',
  },
];

const shuffled = [...words].sort(() => Math.random() - 0.5);

const appendArab = () => {
  for (const word of shuffled) {
    matchRow.innerHTML += `
      <div class="match-card" data-latin="${word.latin}">
        <div class="card">
          <div class="card-body bg-secondary">
            <p class="font-uthmanic" style="font-size: 2rem;">${word.arab}</p>
          </div>
        </div>
      </div>
    `;
  }

  soundCard.dataset['latin'] = shuffled[currentQuestionIndex].latin;
};

const handleClickSoundCard = () => {
  soundCard.addEventListener('click', () => {
    const audio = new Audio(`keluarga_arab/${soundCard.dataset['latin']}.aac`);
    audio.play();

    soundCard.classList.add('clicked');
  });
};

const handleClickArab = () => {
  const matchCards = document.querySelectorAll('.match-card');

  matchCards.forEach((card) => {
    card.addEventListener('click', (e) => {
      if (!soundCard.classList.contains('clicked')) {
        return Swal.fire({
          title: 'Klik Soal Dulu Sayang <3',
          text: 'Tekan dan dengarkan soal terlebih dahulu!',
          icon: 'error',
          imageUrl: 'false.gif',
          imageWidth: 150,
          imageAlt: 'Custom image',
        });
      }

      clickSound.play();

      clicked++;
      if (clicked === MAX_QUESTIONS) gameOver();

      selected = card.dataset['latin'];

      if (selected === soundCard.dataset['latin']) {
        incrementScore(CORRECT_BONUS);
        setTimeout(() => {
          successSound.play();
          successSound.volume = 0.5;

          Swal.fire({
            title: 'Alhamdulillah Benar!',
            text: 'Horeeee Jawaban kamu benar!',
            icon: 'success',
            imageUrl: 'true.gif',
            imageWidth: 150,
            imageAlt: 'Custom image',
          });
        }, 200);
      } else {
        setTimeout(() => {
          failSound.play();
          failSound.volume = 0.5;

          Swal.fire({
            title: 'Coba Lagi Sayang <3',
            text: 'Jangan Menyerah Ayo Coba Lagi!',
            icon: 'error',
            imageUrl: 'false.gif',
            imageWidth: 150,
            imageAlt: 'Custom image',
          });
        }, 200);
      }

      soundCard.classList.remove('clicked');

      currentQuestionIndex++;
      soundCard.dataset['latin'] = shuffled[currentQuestionIndex].latin;

      selected = undefined;
    });
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
    doneSound.volume = 0.5;

    Swal.fire({
      title: 'Selesai!',
      text: 'Yeayyy Permainan sudah selesai!',
      icon: 'success',
      timer: 5000,
      timerProgressBar: true,
      imageUrl: 'true.gif',
      imageWidth: 150,
      imageAlt: 'Custom image',
    }).then(() => {
      localStorage.setItem('game2Score', score);
      return window.location.assign('score.html');
    });
  }, 1000);
};

const startGame = () => {
  showScore();
  appendArab();
  handleClickSoundCard();
  handleClickArab();
};

startGame();

xIcon.addEventListener('click', () => {
  clickSound.play();
  Swal.fire({
    title: 'Mau Keluar Game?',
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
      return window.location.assign('permainan.html');
    }
  });
});

petunjuk.addEventListener('click', () => clickSound.play());
