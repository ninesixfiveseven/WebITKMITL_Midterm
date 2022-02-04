window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "5px";
        document.getElementById("logo").style.width = "15vw";
      } else {
        document.getElementById("navbar").style.padding = "30px";
        document.getElementById("logo").style.width = "20vw";
      }
        let scrollY = window.scrollY;
        document.body.style.setProperty("--h", scrollY / 10);
      
}
let myScene = ['on','off'];
let i = 1;
function swapbg(a){
  if (a == 1){
    change.dataset.scene = myScene[i%(myScene.length)]
    i++;
  }
  console.log(i)
}