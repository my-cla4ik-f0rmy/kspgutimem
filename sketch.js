var Test = {
  data: {
      color1: "#4D86A9",
      color2: "#5392B8",
      color3: "#5BA3CE",
      color4: "#63B0DE",
      color11: "#1F975D",
      color12: "#22A867",
      color13: "#24B770",
      color14: "#27C679",
      color21:"#B75842",
      color22: "#C75F48",
      color23: "#DB6B51",
      color24: "#E87156",
      fontsize: 80,
      fontsize2: 48,
      fontsize3: 180,
  },
  methods:{
    greet(event) {
      // `this` inside methods points to the current active instance
      alert(`Hello ${this.name}!`)
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
}
const myapp = Vue.createApp(Test).mount('#sketch-div')


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
    pg = createGraphics(1080, 1080);
  }




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
  if(znach == 1){
    color_rec1 = Test.data.color1;
    color_rec2 = Test.data.color2;
    color_rec3 = Test.data.color3;
    color_rec4 = Test.data.color4;
  } else if(znach == 2) {
    color_rec1 = Test.data.color11;
    color_rec2 = Test.data.color12;
    color_rec3 = Test.data.color13;
    color_rec4 = Test.data.color14;
  } else if(znach == 3) {
    color_rec1 = Test.data.color21;
    color_rec2 = Test.data.color22;
    color_rec3 = Test.data.color23;
    color_rec4 = Test.data.color24;
  }
  background('#345534')
  pg.background('#fdssdf')
  pg.noStroke();
  pg.fill(color_rec1)
  pg.rect(810, 0, 270, 270)
  pg.noStroke();
  pg.fill(color_rec2)
  pg.rect(810, 270, 270, 270)
  pg.noStroke();
  pg.fill(color_rec3)
  pg.rect(810, 540, 270, 270)
  pg.noStroke();
  pg.fill(color_rec4)
  pg.rect(810, 810, 270, 270)
  pg.fill('#000000')
  pg.textFont(font);
  pg.textSize(Test.data.fontsize)
  pg.textWrap(WORD);
  pg.textAlign(LEFT, TOP);
  pg.text(name, 50, 50, 707);
  pg.textFont(font2);
  pg.textSize(Test.data.fontsize2)
  pg.text(name2, 50, 190, 707);
  pg.textLeading(70);
  pg.textFont(font2);
  pg.textSize(Test.fontsize3)
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
  pg.textSize(Test.data.fontsize3)
  pg.textWrap(WORD);
  pg.textLeading(180);
  pg.textAlign(CENTER, CENTER);
  pg.text(name, 540, 500, 0);
  image(pg, 0, 0, width, height);

}
function save(){
  pg.save('blshv'+document.getElementById('sample5').value); 
}




