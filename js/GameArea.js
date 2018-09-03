
const _canvas = document.createElement('canvas');
const _ctx = _canvas.getContext('2d');
const _FPS = 30; //frames per second


class GameArea {

  static get canvas () {
    return _canvas;
  }
  static get ctx () {
    return _ctx;
  }
  static get FPS () {
    return _FPS;
  }


  static start () {


    this.canvas.width = 1280;
    this.canvas.height = 820;
    this.context = this.ctx;
    this.frameNo = 0;
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 1000 / this.FPS);

    // Checks if a key is pressed, and set the key property of the GameArea object to the key code. When the key is released, set the key property to false
    window.addEventListener('keydown', (e) => {
      this.keys = (this.keys || []);
      this.keys[e.keyCode] = true;
    });
    window.addEventListener('keyup', (e) => {
      this.keys[e.keyCode] = false;
    });
  }

  static stop () {
    clearInterval(this.interval);
  }

  static clear () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }



}