const entities = [
  {
    city: 'Rostov-on-Don LCD admiral',
    area: '81 m2',
    time: '3.5 months',
    img: 'https://img.rialto.by/upload/720/ambiente-cucina-marble-boutique-noce.jpg'
  },
  {
    city: 'Sochi Thieves',
    area: '105 m2',
    time: '4 months',
    img: 'https://img.tinbatdongsan.com/crop/680x480/2018/05/25/20180525001812-1d7c.jpg'
  },
  {
    city: 'Rostov-on-Don Patriotic',
    area: '93 m2',
    time: '3 months',
    img: 'https://www.ccc1.ru/files/06-2021/ad1958/dizain-intier-iera-v-ekosti-116915471_x2.jpg'
  }
];

const city = document.querySelector('.description-city');
const area = document.querySelector('.description-area');
const time = document.querySelector('.description-time');
const img = document.querySelector('.image');
const indicators = document.querySelectorAll('.itc-slider-indicator');
const links = document.querySelectorAll('.link');

const setEntity = (index) => {
  // Используем оператор остатка, чтобы закольцевать индекс в пределах диапазона
  index = (index + entities.length) % entities.length;

  city.innerText = entities[index].city;
  area.innerText = entities[index].area;
  time.innerText = entities[index].time;
  img.style.backgroundImage = `url(${entities[index].img})`;

  // Установка активного класса для выбранного индикатора
  indicators.forEach((indicator, i) => {
    if (i === index) {
      indicator.classList.add('itc-slider-indicator-active');
    } else {
      indicator.classList.remove('itc-slider-indicator-active');
    }
  });
};

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let currentIndex = 0;

prev.addEventListener('click', () => {
  currentIndex -= 1;
  setEntity(currentIndex);
});

next.addEventListener('click', () => {
  currentIndex += 1;
  setEntity(currentIndex);
});

// Обработчики событий для индикаторов
indicators.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    currentIndex = i;
    setEntity(currentIndex);
  });
});

// Обработчики событий для ссылок
links.forEach((link, i) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    currentIndex = i;
    setEntity(currentIndex);
  });
});
