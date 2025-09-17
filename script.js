// Part 2: JavaScript Functions with Scope, Parameters & Return Values

// Example of global variable
let isAnimating = false;

// Function with parameter & return value
function calculateDouble(number) {
  return number * 2;
}

// Function that toggles animation on the box
function toggleAnimation() {
  const box = document.getElementById("animateBox");
  isAnimating = !isAnimating; // flip the state

  if (isAnimating) {
    box.classList.add("animate");
    console.log("Box animation started. Double of 5 is:", calculateDouble(5));
  } else {
    box.classList.remove("animate");
    console.log("Box animation stopped.");
  }
}

// Modal control functions
function openModal() {
  document.getElementById("myModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
