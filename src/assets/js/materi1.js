const materiRow = document.querySelector('.materi-row');

const words = [
  {
    arab: 'كِـتَابٌ',
    latin: 'Kitaabun',
    arti: 'Buku',
    sound: 'buku',
  },
  {
    arab: 'كُــرَاسَةٌ',
    latin: 'Kuroosatun',
    arti: 'Buku Tulis',
    sound: 'buku_tulis',
  },
  {
    arab: 'كَشْفُ الْغِيَابُ',
    latin: 'Kasyful Ghiyaab',
    arti: 'Buku Absen',
    sound: 'buku_absen',
  },
  {
    arab: 'قِرْطاَسٌ',
    latin: 'Qirthoosun',
    arti: 'Kertas',
    sound: 'kertas',
  },
  {
    arab: 'قَلَـمٌ',
    latin: 'Qolamun',
    arti: 'Pulpen',
    sound: 'pulpen',
  },
  {
    arab: 'مِرْسَمٌ',
    latin: 'Mirsamun',
    arti: 'Pensil',
    sound: 'pensil',
  },
  {
    arab: 'قَلَـمُ الْحِبْرِ',
    latin: 'Qolamul Hibri',
    arti: 'Spidol',
    sound: 'spidol',
  },
  {
    arab: 'مِقْلَمَةٌ',
    latin: 'Miqlamatun',
    arti: 'Wadah Pulpen',
    sound: 'wadah_pulpen',
  },
  {
    arab: 'حِبْرٌ',
    latin: 'Hibrun',
    arti: 'Tinta',
    sound: 'tinta',
  },
  {
    arab: 'مِحْبَرَةٌ',
    latin: 'Mihbarotun',
    arti: 'Tempat Tinta',
    sound: 'tempat_tinta',
  },
  {
    arab: 'طَبَاشِيْرٌ',
    latin: 'Thobaasyiirun',
    arti: 'Kapur',
    sound: 'kapur',
  },
  {
    arab: 'مِمْسَحَةٌ',
    latin: 'Mimsahatun',
    arti: 'Penghapus',
    sound: 'penghapus',
  },
  {
    arab: 'مِسْطَرَةٌ',
    latin: 'Misthorotun',
    arti: 'Penggaris',
    sound: 'penggaris',
  },
  {
    arab: 'كِتَابُ التَّدْرِيْس',
    latin: 'Kitabu Tadris',
    arti: 'Buku Pelajaran',
    sound: 'buku_pelajaran',
  },
  {
    arab: 'مُزِيْلٌ',
    latin: 'Muzilun',
    arti: 'Tipe Ex',
    sound: 'tipe_ex',
  },
  {
    arab: 'مُعْجَمٌ',
    latin: 'Mu’jamun',
    arti: 'Kamus',
    sound: 'kamus',
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
      const audio = new Audio(`benda_arab/${card.dataset['latin']}.aac`);
      audio.play();
    });
  });
};

const playGame = () => {
  appendMateri();
  handleClickMateri();
};

playGame();
