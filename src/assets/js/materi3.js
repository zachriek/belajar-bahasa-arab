const materiRow = document.querySelector('.materi-row');

const words = [
  {
    arab: 'رَأْسٌ',
    latin: 'Ro’sun',
    arti: 'Kepala',
    sound: 'kepala',
  },
  {
    arab: 'أَنْفٌ',
    latin: 'Anfun',
    arti: 'Hidung',
    sound: 'hidung',
  },
  {
    arab: 'أُذُنٌ',
    latin: 'Udzunun',
    arti: 'Telinga',
    sound: 'telinga',
  },
  {
    arab: 'عَيْنٌ',
    latin: '‘Ainun',
    arti: 'Mata',
    sound: 'mata',
  },
  {
    arab: 'فَمٌّ',
    latin: 'Fammun',
    arti: 'Mulut',
    sound: 'mulut',
  },
  {
    arab: 'سِنٌّ',
    latin: 'Sinnun',
    arti: 'Gigi',
    sound: 'gigi',
  },
  {
    arab: 'لِسَانٌ',
    latin: 'Lisaanun',
    arti: 'Lidah',
    sound: 'lidah',
  },
  {
    arab: 'شَفَةٌ',
    latin: 'Syafatun',
    arti: 'Bibir',
    sound: 'bibir',
  },
  {
    arab: 'شَعْرٌ',
    latin: 'Sya’run',
    arti: 'Rambut',
    sound: 'rambut',
  },
  {
    arab: 'شَارِبٌ',
    latin: 'Syaaribun',
    arti: 'Kumis',
    sound: 'kumis',
  },
  {
    arab: 'لِحْيَةٌ',
    latin: 'Lihyatun',
    arti: 'Janggut',
    sound: 'janggut',
  },
  {
    arab: 'هُدَّبٌ',
    latin: 'Huddabun',
    arti: 'Bulu Mata',
    sound: 'bulu_mata',
  },
  {
    arab: 'حَاجِبُ العَيْن',
    latin: 'Haajibul ‘ain',
    arti: 'Alis',
    sound: 'alis',
  },
  {
    arab: 'خَدٌّ',
    latin: 'Khoddun',
    arti: 'Pipi',
    sound: 'pipi',
  },
  {
    arab: 'جَبْهَةٌ',
    latin: 'Jabhatun',
    arti: 'Kening',
    sound: 'kening',
  },
  {
    arab: 'جَفْنٌ',
    latin: 'Jafnun',
    arti: 'Kelopak Mata',
    sound: 'kelopak_mata',
  },
  {
    arab: 'ذَقَنٌ',
    latin: 'Dzaqonun',
    arti: 'Dagu',
    sound: 'dagu',
  },
  {
    arab: 'عُنُقٌ',
    latin: '‘Unuqun',
    arti: 'Leher',
    sound: 'leher',
  },
  {
    arab: 'دِمَاغٌ',
    latin: 'Dimaghun',
    arti: 'Otak',
    sound: 'otak',
  },
  {
    arab: 'جَبِيْنٌ',
    latin: 'Jabinun',
    arti: 'Dahi',
    sound: 'dahi',
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
      const audio = new Audio(`tubuh_arab/${card.dataset['latin']}.aac`);
      audio.play();
    });
  });
};

const playGame = () => {
  appendMateri();
  handleClickMateri();
};

playGame();
