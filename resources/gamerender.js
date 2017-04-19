function startrender() {
  console.log("starting game render")
  document.getElementById("container").style.display = "none";
  document.getElementById("uiwrapper").style.display = "block";
  win = document.getElementById("game");
  win.width = p.camera.width = document.body.clientWidth-20;
  win.height = p.camera.height = document.body.clientHeight-20;
  ctx = win.getContext('2d');
  window.requestAnimationFrame(renderupdate);
}
function renderupdate() {
  p.map.update(ctx);
  window.requestAnimationFrame(renderupdate);
}
class client {
  constructor() {
    this.camera = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    };
    this.x = 0;
    this.y = 0;
    this.map = getmap(100,100);
  }
}
