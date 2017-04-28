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
function baction(building,x,y) {
  var rc = {
    x: Math.floor(p.x/64),
    y: Math.floor(p.y/64)
  }
  if (p.map.map[rc.x][rc.y] == "1" && building == "mine") {
    alert("no");
  }
  else {
    var out = new dataupdate();
    out.action = [building,rc.x,rc.y];
    out.action = out.action.stringify();
    conn.send(out.sendJSON());
  }
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
    this.map = null;
  }
}
