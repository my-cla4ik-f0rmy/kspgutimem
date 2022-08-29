var   img1, img2;
let font,
  fontsize = 80;
  fontsize2 = 48;
  fontsize3 = 180;








function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  font = loadFont('font/OpenSans-Bold.ttf');
  font2 = loadFont('font/OpenSans-SemiBold.ttf');
  img1 = loadImage('images/student.png')
  img2 = loadImage('images/new.png')
  img3 = loadImage('images/parent.png')
}
function setup() {
    var b = document.getElementById('sketch-div');
    var w = b.clientWidth;
    var h = b.clientHeight;
    width = w
    height = h
    let canvas = createCanvas(width, height);
    canvas.parent('sketch-div');
    pg = createGraphics(1080, 1080);}




function draw() {
  type = document.querySelector('input[name="type1"]:checked').value;
  if(type == '1'){
    post_sm();
    image(pg, 0, 0, width, height);

  }else if(type == '2'){
    ava_chat(); 
    image(pg, 0, 0, width, height); 

  }
  

}
function post_sm(){
  const name = document.getElementById("sample5").value;
  const name2 = document.getElementById("sample6").value;
  znach = document.querySelector('input[name="options"]:checked').value
  if(znach==1 ){
    color_rec = "#63B0DE"
  } else if(znach == 2) {
    color_rec = "#27C679"
  } else if(znach == 3) {
    color_rec = "#E87156"
  }
  background('#345534')
  pg.background('#fdssdf')
  pg.noStroke();
  pg.fill(color_rec)
  pg.rect(810, 0, 270, 1080)
  pg.fill('#000000')
  pg.textFont(font);
  pg.textSize(fontsize)
  pg.textWrap(WORD);
  pg.textAlign(LEFT, TOP);
  pg.text(name, 50, 50, 707);
  pg.textFont(font2);
  pg.textSize(fontsize2)
  image(pg, 0, 0, width, height);
}

function ava_chat(){
  const name = document.getElementById("sample5").value;
  znach = document.querySelector('input[name="options"]:checked').value

  if(znach==1){
    pg.image(img1, 0,0,1080,1080)
  } else if(znach==2){
    pg.image(img2, 0,0,1080,1080)
  } else if(znach==3){
    pg.image(img3, 0,0,1080,1080)
  }
  pg.textFont(font);
  pg.textSize(fontsize3)
  pg.textWrap(WORD);
  pg.textLeading(180);
  pg.textAlign(CENTER, CENTER);
  pg.text(name, 540, 500, 0);
  image(pg, 0, 0, width, height);

}
function save(){
  pg.save("йцуйцу"); 
}

