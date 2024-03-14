function drawRedLineToLink(link) {
  const canvas = document.getElementById("line");
  const ctx = canvas.getContext("2d");

  // Set canvas size to match window size
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Draw the line from top right to bottom left
  ctx.beginPath();
  ctx.moveTo(canvas.width, 0);
  ctx.lineTo(0, canvas.height);
  ctx.strokeStyle = "black"; // You can change the color here
  ctx.lineWidth = 2; // You can change the line width here
  ctx.stroke();

  document.body.appendChild(canvas);
}

window.onload = function () {
  drawRedLineToLink(document.getElementById("google-link"));
};
