import ApexCharts from 'apexcharts';

const quizScoreText = document.getElementById('quiz-score-text');
const matchScoreText = document.getElementById('match-score-text');

const MAX_SCORE_QUIZ = 30;
const QUIZ_SCORE = window.localStorage.getItem('quizScore') ?? 0;
const QUIZ_SCORE_2 = MAX_SCORE_QUIZ - Number(QUIZ_SCORE);

const MAX_SCORE_MATCH = 100;
const MATCH_SCORE = window.localStorage.getItem('matchScore') ?? 0;
const MATCH_SCORE_2 = MAX_SCORE_MATCH - Number(MATCH_SCORE);

console.log(MATCH_SCORE);

quizScoreText.innerText = `Skor: ${QUIZ_SCORE}/${MAX_SCORE_QUIZ}`;
matchScoreText.innerText = `Skor: ${MATCH_SCORE}/${MAX_SCORE_MATCH}`;

let chartOptions = {
  color: '#adb5bd',
  labels: ['Benar', 'Salah'],
  chart: {
    width: '100%',
    type: 'donut',
    fontFamily: "Plus Jakarta Sans', sans-serif",
    foreColor: '#adb0bb',
  },
  plotOptions: {
    pie: {
      startAngle: 0,
      endAngle: 360,
      donut: {
        size: '75%',
      },
    },
  },
  stroke: {
    show: false,
  },

  dataLabels: {
    enabled: false,
  },

  legend: {
    show: false,
  },
  colors: ['#ECB67A', '#fff'],
  tooltip: {
    theme: 'dark',
    fillSeriesColor: false,
  },
};

let quizChartOptions = {
  ...chartOptions,
  series: [Number(QUIZ_SCORE), Number(QUIZ_SCORE_2)],
};

let matchChartOptions = {
  ...chartOptions,
  series: [Number(MATCH_SCORE), Number(MATCH_SCORE_2)],
};

let memoryChartOptions = {
  ...chartOptions,
  series: [50, 50],
};

let quizChart = new ApexCharts(document.querySelector('#quiz-chart'), quizChartOptions);
quizChart.render();

let matchChart = new ApexCharts(document.querySelector('#match-chart'), matchChartOptions);
matchChart.render();

let memoryChart = new ApexCharts(document.querySelector('#memory-chart'), memoryChartOptions);
memoryChart.render();
