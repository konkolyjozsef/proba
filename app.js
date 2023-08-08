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