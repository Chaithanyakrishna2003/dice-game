
var x=Math.floor(Math.random()*6)+1;
var d_im= "dice" + x +".png";
var im_source="images/" + d_im;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src", im_source);
var y=Math.floor(Math.random()*6)+1;
var d_im1="images/dice"+ y + ".png";
document.querySelectorAll("img")[1].setAttribute("src",d_im1);
if(x>y){
  document.querySelector("h1").innerHTML="player 1 wins";
}
else if(x<y){
   document.querySelector("h1").innerHTML="player 2 wins";
}
   else{
   document.querySelector("h1").innerHTML="It's a draw";
   }