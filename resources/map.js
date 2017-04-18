function getmap(width, height) {
  var out = {
    map: generatemap(width,height),
    tsize: 64,
    tosize: 64,
    height: height,
    pheight: height * 64,
    width: width,
    pwidth: width * 64,
    tileAtlas: new Image(64,128),
    update: function(ctx) {
      var borderwidth = 200;
      if (p.x > p.camera.width - borderwidth && p.camera.x < this.pwidth - p.camera.width) {
        p.camera.x += getMagnitude(p.camera.width - p.x);
      }
      else if (p.x < borderwidth && p.camera.x > 0) {
        p.camera.x -= getMagnitude(p.x);
      }
      if (p.y > p.camera.height - borderwidth && p.camera.y < this.pheight - p.camera.height) {
        p.camera.y += getMagnitude(p.camera.height - p.y);
      }
      else if (p.y < borderwidth && p.camera.y > 0 ) {
        p.camera.y -= getMagnitude(p.y);
      }
      var startCol = Math.floor(p.camera.x/this.tosize);
      var endCol = Math.min(startCol + (p.camera.width/this.tosize)+1,this.width - 1);
      var startRow = Math.floor(p.camera.y/this.tosize);
      var endRow = Math.min(startRow + (p.camera.height/this.tosize)+1,this.height - 1);
      var offsetX = -p.camera.x + startCol * this.tosize;
      var offsetY = -p.camera.y + startRow * this.tosize;

      for (var c = startCol; c <= endCol; c++) {
        for (var r = startRow; r <= endRow; r++) {
          var tile = this.map[r][c];
          var x = (c - startCol) * this.tosize + offsetX;
          var y = (r - startRow) * this.tosize + offsetY;
          if (tile != 0) {
            var tilenumz = this.gettile(tile);
            ctx.drawImage(
              this.tileAtlas,
              tilenumz[0],
              tilenumz[1],
              this.tsize,
              this.tsize,
              Math.round(x),
              Math.round(y),
              this.tosize,
              this.tosize
            );
          }
        }
      }
    },
    gettile: function(num) {
      var out = [0,(num-1)*this.tsize]

      return out;
    }
  }
  out.tileAtlas.src = "resources/terrain.png";
  return out;
}
function generatemap(width,height) {
  var out = [];
  for (var c = 0; c < width; c++) {
    out.push([]);
    for (var r = 0; r < height; r++) {
      out[c].push(randint(1,2));
    }
  }
  return out;
}
function getMagnitude(dist) {
  return 50/Math.pow((dist+1),.5);
}
