function initgame(connections) {
  players = [];
  for (var i = 0; i < connections.length; i++) {
    players.push(new player(connections[i]))
  }
  setTimeout(updategame,500);
}
function updategame() {
  var action = [];
  for (i in curdata) {
    action.push(curdata[i].action.parse());
  }
  for (i in action) {
    if (action[i][0] == "mine") {
      map.building[action[i][1]][action[i][2]] = action[i][0];
    }
    else if (action[i][0] == "steel mill") {
      map.building[action[i][1]][action[i][2]] = action[i][1];
    }
  }
}

class player {
  constructor(conn) {
    this.id = conn.id;
    this.conn = conn;
    this.username = conn.metadata;
    this.resources = {
      iron: 0,
      credits: 0,
    }
  }
}
class map {
  constructor(w,h) {
    this.width = w;
    this.height = h;
    this.map = [];
    for (var i = 0; i < this.width; i++) {
      this.map.push([])
      for (var j = 0; j < this.height; j++) {
        if (randint(0,3) != 3) {
          this.map.push(0);
        }
        else {
          this.map.push(1);
        }
      }
    }
  }
  JSONize() {
    var out = "";
    for (var i = 0; i < this.w; i++) {
      for (var j = 0; j < this.h; j++) {

      }
    }
  }
}
function randint(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
