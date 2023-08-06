const materiRow = document.querySelector('.materi-row');

const words = [
  {
    arab: 'اَلْأُسْرَةُ',
    latin: 'al-Usrotu',
    arti: 'Keluarga',
    sound: 'keluarga',
  },
  {
    arab: 'اَلْأَقْرِبَاءُ',
    latin: 'al-Aqribaa u',
    arti: 'Kerabat',
    sound: 'kerabat',
  },
  {
    arab: 'اَلْأَبَوَيْنِ',
    latin: 'al-Abawaini',
    arti: 'Kedua Orang Tua',
    sound: 'ortu',
  },
  {
    arab: 'أُمٌ',
    latin: 'Ummun',
    arti: 'Ibu',
    sound: 'ibu',
  },
  {
    arab: 'اَبٌ',
    latin: 'Abun',
    arti: 'Bapak',
    sound: 'bapak',
  },
  {
    arab: 'جَدٌّ',
    latin: 'Jaddun',
    arti: 'Kakek',
    sound: 'kakek',
  },
  {
    arab: 'جَدَّةٌ',
    latin: 'Jaddatun',
    arti: 'Nenek',
    sound: 'nenek',
  },
  {
    arab: 'وَلَدٌ',
    latin: 'Waladun',
    arti: 'Anak Laki-laki',
    sound: 'anak_laki-laki',
  },
  {
    arab: 'بِنْتٌ',
    latin: 'Bintun',
    arti: 'Anak Perempuan',
    sound: 'anak_perempuan',
  },
  {
    arab: 'أَخٌ',
    latin: 'Akhun',
    arti: 'Saudara Laki-laki',
    sound: 'saudara_laki-laki',
  },
  {
    arab: 'أُخْتٌ',
    latin: 'Ukhtun',
    arti: 'Saudara Perempuan',
    sound: 'saudara_perempuan',
  },
  {
    arab: 'أَخٌ شَقِيْقٌ',
    latin: 'Akhun syaqiiqun',
    arti: 'Saudara Kandung (LK)',
    sound: 'sk_lk',
  },
  {
    arab: 'أُخْتٌ شَقِيْقَةٌ',
    latin: 'Ukhtun syaqiiqotun',
    arti: 'Saudara Kandung (PR)',
    sound: 'sk_pr',
  },
  {
    arab: 'أَخُ صَغِيْرٌ',
    latin: 'Akhun Shogiirun',
    arti: 'Adik Laki-laki',
    sound: 'adik_laki-laki',
  },
  {
    arab: 'أُخْتُ صَغِيْرَةٌ',
    latin: 'Ukhtun Shogiirotun',
    arti: 'Adik Perempuan',
    sound: 'adik_perempuan',
  },
  {
    arab: 'أَخٌ كَبِيْرٌ',
    latin: 'Akhun Kabiirun',
    arti: 'Kakak Laki-laki',
    sound: 'kakak_laki-laki',
  },
  {
    arab: 'أُخْتُ كَبِيْرَةٌ',
    latin: 'Ukhtun Kabiirotun',
    arti: 'Kakak Perempuan',
    sound: 'kakak_perempuan',
  },
];

const appendMateri = () => {
  for (const word of words) {
    materiRow.innerHTML += `
      <div class="materi text-center" data-latin="${word.sound}">
        <div class="card">
          <div class="card-body bg-secondary">
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
      const audio = new Audio(`keluarga_arab/${card.dataset['latin']}.aac`);
      audio.pause();
      audio.currentTime = 0;
      audio.play();
    });
  });
};

const playGame = () => {
  appendMateri();
  handleClickMateri();
};

playGame();
