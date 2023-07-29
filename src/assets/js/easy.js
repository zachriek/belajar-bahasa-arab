// Swal
import Swal from 'sweetalert2/dist/sweetalert2.js';

const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('answer-card'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
const xIcon = document.getElementById('x-icon');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
  {
    question: 'hamzah.png',
    choice1: 'alif_t.png',
    choice2: 'hamzah_t.png',
    choice3: 'lam_t.png',
    choice4: 'tho_t.png',
    answer: 2,
  },
  {
    question: 'qof.png',
    choice1: 'kaf_t.png',
    choice2: 'wawu_t.png',
    choice3: 'qof_t.png',
    choice4: 'za_t.png',
    answer: 3,
  },
  {
    question: 'syin.png',
    choice1: 'sin_t.png',
    choice2: 'yak_t.png',
    choice3: 'shod_t.png',
    choice4: 'syin_t.png',
    answer: 4,
  },
  {
    question: 'ha.png',
    choice1: 'ha_t.png',
    choice2: 'kho_t.png',
    choice3: 'hha_t.png',
    choice4: 'tho_t.png',
    answer: 1,
  },
  {
    question: 'ain.png',
    choice1: 'alif_t.png',
    choice2: 'ain_t.png',
    choice3: 'hamzah_t.png',
    choice4: 'ta_t.png',
    answer: 2,
  },
  {
    question: 'jim.png',
    choice1: 'dal_t.png',
    choice2: 'dzal_t.png',
    choice3: 'dzo_t.png',
    choice4: 'jim_t.png',
    answer: 4,
  },
  {
    question: 'ba.png',
    choice1: 'ta_t.png',
    choice2: 'tsa_t.png',
    choice3: 'ba_t.png',
    choice4: 'yak_t.png',
    answer: 3,
  },
  {
    question: 'dlod.png',
    choice1: 'dal_t.png',
    choice2: 'shod_t.png',
    choice3: 'syin_t.png',
    choice4: 'dlod_t.png',
    answer: 4,
  },
  {
    question: 'mim.png',
    choice1: 'nun_t.png',
    choice2: 'mim_t.png',
    choice3: 'lam_t.png',
    choice4: 'ha_t.png',
    answer: 2,
  },
  {
    question: 'ro.png',
    choice1: 'alif_t.png',
    choice2: 'wawu_t.png',
    choice3: 'lam_t.png',
    choice4: 'ro_t.png',
    answer: 4,
  },
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = questions.length;

const startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
  showScore();
};

const getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem('quizScore', score);
    //go to the end page
    return window.location.assign('score.html');
  }
  questionCounter++;
  progressText.innerText = `Soal ${questionCounter}/${MAX_QUESTIONS}`;
  //Update the progress bar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.src = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset['number'];
    choice.src = currentQuestion['choice' + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener('click', (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset['number'];

    const isCorrect = selectedAnswer == currentQuestion.answer;

    if (isCorrect) {
      incrementScore(CORRECT_BONUS);
      Swal.fire({
        title: 'Benar!',
        text: 'Jawaban kamu benar!',
        icon: 'success',
        imageUrl: 'true.gif',
        imageWidth: 150,
        imageAlt: 'Custom image',
      });
    } else {
      Swal.fire({
        title: 'Kurang Tepat!',
        text: 'Jawaban kamu kurang tepat!',
        icon: 'error',
        imageUrl: 'false.gif',
        imageWidth: 150,
        imageAlt: 'Custom image',
      });
    }

    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
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
        }).then(() => getNewQuestion());
      }, 1000);
    } else {
      getNewQuestion();
    }
  });
});

const showScore = () => {
  scoreText.innerText = `${score}/${MAX_QUESTIONS * CORRECT_BONUS}`;
};

const incrementScore = (num) => {
  score += num;
  showScore();
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
