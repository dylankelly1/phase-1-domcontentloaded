// Your code goes here


document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
  });
  
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );

  function changeText() {
    const paragraph = document.querySelector('p');
    paragraph.textContent = "This is really cool!";
  }

  document.addEventListener('DOMContentLoaded', changeText);
