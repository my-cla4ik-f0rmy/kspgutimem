
let font,
  fontsize = 80;
  fontsize2 = 48;







function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  font = loadFont('font/OpenSans-Bold.ttf');
  font2 = loadFont('font/OpenSans-SemiBold.ttf');
  
}






function setup() {
  

 vm =1
  
  if (vm == 1){
    var b = document.getElementById('sketch-div');
    var w = b.clientWidth;
    var h = b.clientHeight;
    width = w
    height = h
    let canvas = createCanvas(width, height);
    canvas.parent('sketch-div');
    pg = createGraphics(1080, 1080);
    pg.textAlign(LEFT, TOP);
  } else{
    var b = document.getElementById('sketch-div');
    var w = b.clientWidth;
    var h = b.clientHeight;
    width = w
    height = h
    let canvas = createCanvas(w, h);
    canvas.parent('sketch-div');
    pg = createGraphics(1080, 1080);
    pg.textAlign(RIGHT, TOP);
  }
  
  
  

  

}

function draw() {
  assa = document.querySelector('input[name="options"]:checked').value;
  
 
  const name = document.getElementById("sample5").value;
  const name2 = document.getElementById("sample6").value;
  const textno = name + name2
  background('#345534')
  pg.background('#fdssdf')
  pg.noStroke();
  pg.fill(assa)
  pg.rect(810, 0, 270, 1080)
  pg.fill('#000000')
  pg.textFont(font);
  pg.textSize(fontsize)
  pg.textWrap(WORD);
  pg.text(name, 50, 50, 707);
  pg.textFont(font2);
  pg.textSize(fontsize2)
  
  if (textWidth(name) > 90){
    var tet = name.length
    pg.text(name2, 50, 300, 707, 664);
  } else{
    pg.text(name2, 50, 200, 707, 664);
  }
  
  //pg.save("pg.png"); 
  //save("MyImage1")

  image(pg, 0, 0, width, height);
  
}



function save(){
  pg.save("йцуйцу"); 
}

