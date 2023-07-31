const materiRow = document.querySelector('.materi-row');

const hijaiyahs = [
  'Alif',
  'Ba',
  'Ta',
  'Tsa',
  'Jim',
  'Ha',
  'Kho',
  'Dal',
  'Dzal',
  'Ro',
  'Za',
  'Sin',
  'Syin',
  'Shod',
  'Dlod',
  'Tho',
  'Dzo',
  'Ain',
  'Ghin',
  'Fa',
  'Qof',
  'Kaf',
  'Lam',
  'Mim',
  'Nun',
  'Wawu',
  'Hha',
  'Lam_Alif',
  'Hamzah',
  'Yak',
];

const appendHijaiyah = () => {
  for (const hijaiyah of hijaiyahs) {
    materiRow.innerHTML += `
      <div class="hijaiyah-materi">
        <div class="card">
          <div class="card-body bg-secondary">
            <img class="hijaiyah-materi-img" src="${hijaiyah.toLowerCase()}.png" alt="${hijaiyah.toLowerCase()}" width="50" data-hijaiyah="${hijaiyah.toLowerCase()}" />
          </div>
        </div>
        <h5 class="text-center mt-2">${hijaiyah}</h5>
      </div>
  `;
  }
};

appendHijaiyah();
