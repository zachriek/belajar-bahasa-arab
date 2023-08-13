const materiRow = document.querySelector('.materi-row');

const words = [
  {
    angka: '١',
    arab: 'وَاحِدٌ',
    latin: 'Waahidun',
    arti: 'Satu',
    sound: 'satu',
  },
  {
    angka: '٢',
    arab: 'اِثْنَانِ',
    latin: 'Itsnaani',
    arti: 'Dua',
    sound: 'dua',
  },
  {
    angka: '٣',
    arab: 'ثَلَاثَةٌ',
    latin: 'Tsalaatsatun',
    arti: 'Tiga',
    sound: 'tiga',
  },
  {
    angka: '٤',
    arab: 'أَرْبَعَةٌ',
    latin: 'Arba’atun',
    arti: 'Empat',
    sound: 'empat',
  },
  {
    angka: '٥',
    arab: 'خَمْسَةٌ',
    latin: 'Khamsatun',
    arti: 'Lima',
    sound: 'lima',
  },
  {
    angka: '٦',
    arab: 'سِتَّةٌ',
    latin: 'Sittatun',
    arti: 'Enam',
    sound: 'enam',
  },
  {
    angka: '٧',
    arab: 'سَبْعَةٌ',
    latin: 'Sab’atun',
    arti: 'Tujuh',
    sound: 'tujuh',
  },
  {
    angka: '٨',
    arab: 'ثَمَانِيَةٌ',
    latin: 'Tsamaaniyatun',
    arti: 'Delapan',
    sound: 'delapan',
  },
  {
    angka: '٩',
    arab: 'تِسْعَةٌ',
    latin: 'Tis’atun',
    arti: 'Sembilan',
    sound: 'sembilan',
  },
  {
    angka: '١٠',
    arab: 'عَشْرَةٌ',
    latin: '‘Asyratun',
    arti: 'Sepuluh',
    sound: 'sepuluh',
  },
];

const appendMateri = () => {
  for (const word of words) {
    materiRow.innerHTML += `
      <div class="materi text-center" data-latin="${word.sound}">
        <div class="card">
          <div class="card-body bg-secondary">
            <p class="font-uthmanic mb-1" style="font-size: 4rem;">${word.angka}</p>
            <p class="font-uthmanic mb-1" style="font-size: 2rem;">${word.arab}</p>
            <p class="card-text" style="font-size: 1rem;">${word.latin}</p>
          </div>
        </div>
        <i class="bi bi-volume-up" style="font-size: 1.2rem;"></i>
        <h5 class="mt-2">${word.arti}</h5>
      </div>
  `;
  }
};

const handleClickMateri = () => {
  const materiCards = document.querySelectorAll('.materi');

  materiCards.forEach((card) => {
    card.addEventListener('click', () => {
      const audio = new Audio(`angka_arab/${card.dataset['latin']}.aac`);
      audio.play();
    });
  });
};

const playGame = () => {
  appendMateri();
  handleClickMateri();
};

playGame();
