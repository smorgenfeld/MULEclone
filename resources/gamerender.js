function startrender() {
  console.log("starting game render")
  win = document.getElementById("game");
  win.width = document.body.clientWidth;
  win.height = document.body.clientHeight;
  ctx = win.getContext('2d');
  window.requestAnimationFrame(renderupdate);
}
function renderupdate() {
  window.requestAnimationFrame(renderupdate);
}
