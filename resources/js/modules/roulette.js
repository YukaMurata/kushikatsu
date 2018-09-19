import velocity from 'velocity-animate';

export default class roulette {
  constructor() {
    this.menu = [
      'れんこん',
      'じゃがいも',
      'にんにく',
      'たまねぎ',
      'ぎんなん',
      '白ネギ',
      'ししとう',
      'なすび',
      'あさり',
      'さつまいも',
      '串カツ牛',
      '串カツ豚',
      '紅生姜',
      'ハムカツ',
      'ウィンナー',
      'レバカツ',
      'うずら',
      '鳥手羽',
      'さんま',
      'つくね',
      'しいたけ',
      'とまと',
      '山芋',
      'たらこ',
      'もち',
      '煮卵',
      '豚しそ',
      'はんぺん',
      'くっきー&クリーム',
      'バナナ',
      'チーズ',
      'かき',
      'エビ',
      'ホタテ',
      'キス',
      '生麩田楽',
      'アスパラ'
    ];
    this.myKatsu = [];

    this.$button = document.querySelector('.button');
    this.$reset = document.querySelector('.reset');
    this.$items = document.querySelectorAll('.item');
    this.clickIndex = 0;
    this.menuLength = this.menu.length;
    this.addEvent();
  }

  addEvent() {
    this.$button.addEventListener('click', e => {
      e.preventDefault();

      if (this.clickIndex > 6) {
        this.clickIndex = 0;
        this.clickIndex++;
      } else {
        this.clickIndex++;
      }
      this.start(this.clickIndex - 1);
    });

    this.$reset.addEventListener('click', e => {
      e.preventDefault();
      this.resetData();
    });
  }

  animation(index) {
    velocity(this.$items[index], 'fadeIn', {
      delay: 400
    });
  }

  start(index) {
    this.random(index);
  }

  random(index) {
    const getKatsu = Math.floor(Math.random() * this.menuLength);
    this.$items[index].textContent = this.menu[getKatsu];
    this.animation(index);
  }

  resetData() {
    this.clickIndex = 0;
    [...this.$items].forEach(($item, index) => {
      velocity(this.$items[index], {
        opacity: 0,
        complete: () => {
          this.$items[index].textContent = 'なにかな';
        }
      });
    });
  }
}
