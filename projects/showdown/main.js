const canvas = document.getElementById("canvas");

let w = window.innerWidth;
let h = window.innerHeight;

const app = new PIXI.Application({
  view: canvas,
  width: w,
  height: h,
  backgroundAlpha: 1,
  resolution: window.devicePixelRatio,
  autoDensity: true,
  resizeTo:window
});
console.log("window",window);
const showDown = new PIXI.Sprite.from('./assets/showdown/showdown-off.png');
showDown.width = w;
showDown.height = h;

app.stage.addChild(showDown);
window.addEventListener('resize',resize);
let positions = [[w/13, h/50], [580, -50], [740, 21], [740, 21]];

function resize(){
  app.resize(w,h);
    w = window.innerWidth;
    h = window.innerHeight;
    showDown.width = w;
    showDown.height = h;
    
    for (var i = 0; i < allSprite.length; i++) {
      sprite.scale.set(1)
    }
}


const textures = [
  PIXI.Texture.from("./assets/showdown/vegas@2x.png"),
//   PIXI.Texture.from("./assets/showdown/bolt@2x.png"),
//   PIXI.Texture.from("./assets/showdown/slots@2x.png"),
//   PIXI.Texture.from("./assets/showdown/s@2x.png"),
//   PIXI.Texture.from("./assets/showdown/h@2x.png"),
//   PIXI.Texture.from("./assets/showdown/o-1@2x.png"),
//   PIXI.Texture.from("./assets/showdown/o-2@2x.png"),
//   PIXI.Texture.from("./assets/showdown/w-1@2x.png"),
//   PIXI.Texture.from("./assets/showdown/w-2@2x.png"),
//   PIXI.Texture.from("./assets/showdown/d@2x.png"),
//   PIXI.Texture.from("./assets/showdown/n@2x.png"),
];

let allSprite = [];
  for (var i = 0; i < 1; i++) {
    var sprite = new PIXI.Sprite(textures[i]);
    let singlePosition = {
      x:positions[i][0],
      y:positions[i][1]
    }
    console.log(singlePosition.x,singlePosition.y)
    sprite.position.x = singlePosition.x;
    sprite.position.y = singlePosition.y;
    sprite.scale.set(1.66)
    app.stage.addChild(sprite);
    allSprite = [...allSprite,sprite];
  }


