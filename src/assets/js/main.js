// import Bootstrap
import 'bootstrap';

// import SweetAlert2
import 'sweetalert2/src/sweetalert2.scss';

// import AOS
import AOS from 'aos';

AOS.init({
  duration: 1000,
  once: true,
});

const music = document.getElementById('music');
music.volume = 0.2;
