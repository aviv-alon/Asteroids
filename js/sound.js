const audioList = new Map([
    ['bangLarge', 'assets/sounds/bangLarge.wav'],
    ['bangMedium', 'assets/sounds/bangMedium.wav'],
    ['bangSmall', 'assets/sounds/bangSmall.wav'],
    ['beat1', 'assets/sounds/beat1.wav'],
    ['beat2', 'assets/sounds/beat2.wav'],
    ['extraShip', 'assets/sounds/extraShip.wav'],
    ['fire',      'assets/sounds/fire.wav'],
    ['saucerBig',      'assets/sounds/saucerBig.wav'],
    ['saucerSmall',      'assets/sounds/saucerSmall.wav'],
    ['thrust',      'assets/sounds/thrust.wav']
  ]), // Audio to loaded
  soundList = new Map();

class Sound {
  constructor(src) {
    this.Sound = document.createElement('audio');
    this.Sound.src = src;
    this.Sound.setAttribute('preload', 'auto');
    this.Sound.setAttribute('controls', 'none');
    this.Sound.style.display = 'none';
    document.body.appendChild(this.Sound);
  }

  static creatSoundList () {
    audioList.forEach( (value, key) => {
      soundList.set(key, new Sound(value));
    });
  }

  play () {
    if (Sound.isActive && Game.isStepOn())
      this.Sound.play();
  }

  stop () {
    this.Sound.pause();
  }
}

// Static property
Sound.isActive = true;
