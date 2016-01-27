
var canvas = document.getElementsByTagName("canvas")[0];
var ctx = canvas.getContext("2d");
var w,h;


document.getElementById("the-image").addEventListener("load", function(e) {
    console.log(e.target);
    var rect = e.target.getBoundingClientRect();
    console.log(rect);
    canvas.style.top = rect.top + "px";
    canvas.style.left = rect.left + "px";
    canvas.style.width = Math.ceil(rect.width) + "px";
    canvas.style.height = Math.ceil(rect.height) + "px";

    w = rect.width * devicePixelRatio;
    h = rect.height * devicePixelRatio;
    canvas.width = w;
    canvas.height = h;

    // ctx.fillStyle = "white";
    // ctx.fillRect(0,0,w,h);
    ctx.drawImage(e.target, 0,0, w,h);
    e.target.style.display = "none";


    // canvas.addEventListener("mousemove", function(e) {
    //   var x = e.layerX*devicePixelRatio, y = e.layerY*devicePixelRatio ;
    //   var pixel = ctx.getImageData(x, y, 1, 1).data
    //
    //   var bg = "rgba(" + pixel.slice(0,3).join(",") + "," + (pixel[3] / 255) + ")";
    //   console.log(x,y, bg);
    //   // document.body.style.background = bg;
    //   drawCircle(x,y,bg);
    // });

    var start = performance.now();
    for (var i=0,ii=w; i<ii; i+=10) {
      for (var j=0,jj=h; j<jj; j+=10) {
        var pixel = [1,2,3,4];//ctx.getImageData(i,j, 1, 1).data;
        var bg = "rgba(" + pixel.slice(0,3).join(",") + "," + (pixel[3] / 255) + ")";
        // drawCircle(i,j,bg);
      }
    }
    console.log(performance.now() - start);
}, true);


function drawCircle(x,y,col) {
  var div = document.createElement("div");
  div.classList.add("circle");
  div.style.top = y/2 + "px";
  div.style.left = x/2 + "px";
  div.style.backgroundColor = col;
  document.body.appendChild(div);
  // $("<div>").css({
  //   position: "absolute",
  //   top: y,
  //   left: x,
  //   width: 20,
  //   height: 20,
  //   borderRadius: 10,
  //   background: col
  // }).appendTo("body");
}
