document.addEventListener("DOMContentLoaded", function() {
    // Get the video element
    var video = document.getElementById("myVideo");

    // Play the video
    video.play();
  });

  function currentTime(){
    const date= new Date();
    return date.toLocaleDateString();
  }

  const dateDisplay= document.getElementById('date-container');
  dateDisplay.innerHTML=currentTime();



/*https://codepen.io/akhijannat/pen/JjYQgNK*/

const counters = document.querySelectorAll('.value');
const speed = 400;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('datvalue');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
        }else{
          counter.innerText = value;
        }
     
   }
   
   animate();
});