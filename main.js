// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// EventListeners
document.addEventListener("DOMContentLoaded", function () {
  console.log("The DOM has loaded");
});

document.body.addEventListener("click", heartClick);

// Function(s)
function heartClick (event) {
  mimicServerCall();
  if (event.target.className === "like-glyph") {
    event.target.className = "like-glyph activated-heart";
    event.target.textContent = FULL_HEART;
    }
    else {
      event.target.className = "like-glyph";
      event.target.textContent = EMPTY_HEART;
  }
};


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
