let phrases = [
  { text: 'Понос' },
  { text: 'Хороший день' },
  { text: 'Завал на работе' },
  { text: 'Бардак дома' },
  { text: 'Выпивку' },
  { text: 'Вкусную еду' },
  { text: 'Приятный вечер' },
  { text: 'Энергетик' },
  { text: 'Кучу денег' },
  { text: 'Навоз' }

];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  smoothly(phrase, 'textContent', randomElement.text);
});