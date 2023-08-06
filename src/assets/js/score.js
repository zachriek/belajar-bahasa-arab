import ApexCharts from 'apexcharts';

const game1ScoreText = document.getElementById('game1-score-text');
const game2ScoreText = document.getElementById('game2-score-text');
const memoryScoreText = document.getElementById('memory-score-text');

const MAX_SCORE_GAME1 = 100;
const GAME1_SCORE = window.localStorage.getItem('game1Score') ?? 0;
const GAME1_SCORE_2 = MAX_SCORE_GAME1 - Number(GAME1_SCORE);

const MAX_SCORE_GAME2 = 100;
const GAME2_SCORE = window.localStorage.getItem('game2Score') ?? 0;
const GAME2_SCORE_2 = MAX_SCORE_GAME2 - Number(GAME2_SCORE);

const MAX_SCORE_MEMORY = 100;
// const MEMORY_SCORE = window.localStorage.getItem('memoryScore') ?? 0;
const MEMORY_SCORE = 0;
const MEMORY_SCORE_2 = MAX_SCORE_MEMORY - Number(MEMORY_SCORE);

game1ScoreText.innerText = `Skor: ${GAME1_SCORE}/${MAX_SCORE_GAME1}`;
game2ScoreText.innerText = `Skor: ${GAME2_SCORE}/${MAX_SCORE_GAME2}`;
memoryScoreText.innerText = `Skor: ${MEMORY_SCORE}/${MAX_SCORE_MEMORY}`;

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

let game1ChartOptions = {
  ...chartOptions,
  series: [Number(GAME1_SCORE), Number(GAME1_SCORE_2)],
};

let game2ChartOptions = {
  ...chartOptions,
  series: [Number(GAME2_SCORE), Number(GAME2_SCORE_2)],
};

let memoryChartOptions = {
  ...chartOptions,
  series: [Number(MEMORY_SCORE), Number(MEMORY_SCORE_2)],
};

let game1Chart = new ApexCharts(document.querySelector('#game1-chart'), game1ChartOptions);
game1Chart.render();

let game2Chart = new ApexCharts(document.querySelector('#game2-chart'), game2ChartOptions);
game2Chart.render();

let memoryChart = new ApexCharts(document.querySelector('#memory-chart'), memoryChartOptions);
memoryChart.render();
