let typed = new Typed('#typed', {
  // Тут id того блока, в которм будет анимация
  stringsElement: '#typed-strings', // Тут id блока из которого берем строки для анимации
  typeSpeed: 50, // Скорость печати
  startDelay: 500, // Задержка перед стартом анимации
  backSpeed: 20, // Скорость удаления
  loop: true, // Указываем, повторять ли анимацию
});
let images = document.images,
  images_total_count = images.length,
  images_loaded_count = 0,
  perc_display = document.getElementById('load_perc'),
  preloader = document.getElementById('page-preloader');
for (let i = 0; i < images_total_count; i++) {
  image_clone = new Image();
  image_clone.onload = image_loaded;
  image_clone.onerror = image_loaded;
  image_clone.src = images[i].src;
}
function image_loaded() {
  images_loaded_count++;
  perc_display.innerHTML =
    (((100 / images_total_count) * images_loaded_count) << 0) + '%';
  if (images_loaded_count >= images_total_count) {
    setTimeout(function () {
      if (!preloader.classList.contains('done')) {
        preloader.classList.add('done');
      }
    }, 1000);
  }
}
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  if (scrollTop >= document.body.offsetHeight / 2) {
    document
      .getElementById('scroll-to-top')
      .setAttribute('style', 'display:block');
  } else {
    document
      .getElementById('scroll-to-top')
      .setAttribute('style', 'display:none;');
  }
});
window.onload = function () {
  document.getElementById('scroll-to-top').onclick = function () {
    window.scrollTo(0, 0);
  };
};
const hamburger = document.querySelector('.hamburger');
const headerMenu = document.querySelector('.menu__list');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  headerMenu.classList.toggle('active');
});
document.querySelectorAll('.menu__list-link').forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    headerMenu.classList.remove('active');
  })
);

var swiper = new Swiper('.mySwiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      slideToClickedSlide: true,
    },
    // when window width is >= 480px
    500: {
      slidesPerView: 2,
      spaceBetween: 0,
      slideToClickedSlide: true,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 0,
      slideToClickedSlide: true,
    },
    // when window width is >= 640px
    1170: {
      slidesPerView: 5,
      spaceBetween: 0,
      slideToClickedSlide: true,
    },
  },
});
new Accordion('.accordion-container');

function init() {
  // Создание карты.
  let center = [46.348331764347236, 48.07872349999994];
  let placemark = new ymaps.Placemark(
    [46.34851843272755, 48.078716794477394],
    {
      balloonContentHeader: 'Астрахань ул. Нововосточная 19 ',
      balloonContentBody:
        '«Психологическая мастерская Атмосфера»<br>домофон 145, 1 этаж ',
      balloonContentFooter: 'Часы Работы: Пн-Пт: 9:00-18:00',
    },
    {
      iconLayout: 'default#image',
      iconImageHref: 'https://cdn-icons-png.flaticon.com/512/447/447031.png',
      iconImageSize: [40, 40],
      iconImageOffset: [-20, -30],
    }
  );
  let map = new ymaps.Map('map', {
    center: center,
    zoom: 16,
    // controls: ['routePanelControl'],
  });
  // let control = map.controls.get('routePanelControl');
  // let city = 'Астрахань';
  // control.routePanel.state.set({
  //   type: 'masstransit',
  //   fromEnabled: false,
  //   from: `${city}, Лиманская ул 9`,
  // });
  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
  map.geoObjects.add(placemark);
  // placemark.balloon.open()
}
ymaps.ready(init);
const popup = document.getElementById('popup');
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const popupClose = document.querySelectorAll('.popup-close');
let unlock = true;
const timeout = 800;
popupLinks.forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    popup.classList.add('open');
    if (popup.classList.contains('open') === true) {
      header.style.display = 'none';
    }
  });
});

popupClose.forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    popup.classList.remove('open');
    if (!popup.classList.contains('open')) {
      header.style.display = 'block';
    }
  });
});
