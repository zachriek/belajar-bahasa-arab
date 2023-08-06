const materiRow = document.querySelector('.materi-row');

const words = [
  {
    arab: 'كِـتَابٌ',
    latin: 'Kitaabun',
    arti: 'Buku',
  },
  {
    arab: 'كُــرَاسَةٌ',
    latin: 'Kuroosatun',
    arti: 'Buku Tulis',
  },
  {
    arab: 'كَشْفُ الْغِيَابُ',
    latin: 'Kasyful Ghiyaab',
    arti: 'Buku Absen',
  },
  {
    arab: 'قِرْطاَسٌ',
    latin: 'Qirthoosun',
    arti: 'Kertas',
  },
  {
    arab: 'قَلَـمٌ',
    latin: 'Qolamun',
    arti: 'Pulpen',
  },
  {
    arab: 'مِرْسَمٌ',
    latin: 'Mirsamun',
    arti: 'Pensil',
  },
  {
    arab: 'قَلَـمُ الْحِبْرِ',
    latin: 'Qolamul Hibri',
    arti: 'Spidol',
  },
  {
    arab: 'مِقْلَمَةٌ',
    latin: 'Miqlamatun',
    arti: 'Wadah Pulpen',
  },
  {
    arab: 'حِبْرٌ',
    latin: 'Hibrun',
    arti: 'Tinta',
  },
  {
    arab: 'مِحْبَرَةٌ',
    latin: 'Mihbarotun',
    arti: 'Tempat Tinta',
  },
  {
    arab: 'طَبَاشِيْرٌ',
    latin: 'Thobaasyiirun',
    arti: 'Kapur',
  },
  {
    arab: 'مِمْسَحَةٌ',
    latin: 'Mimsahatun',
    arti: 'Penghapus',
  },
  {
    arab: 'مِسْطَرَةٌ',
    latin: 'Misthorotun',
    arti: 'Penggaris',
  },
  {
    arab: 'كِتَابُ التَّدْرِيْس',
    latin: 'Kitabu Tadris',
    arti: 'Buku Pelajaran',
  },
  {
    arab: 'مُزِيْلٌ',
    latin: 'Muzilun',
    arti: 'Tipe Ex',
  },
  {
    arab: 'مُعْجَمٌ',
    latin: 'Mu’jamun',
    arti: 'Kamus',
  },
];

const appendMateri = () => {
  for (const word of words) {
    materiRow.innerHTML += `
      <div class="materi text-center" data-latin="${word.latin}">
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

appendMateri();
