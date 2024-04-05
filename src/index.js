stratagems = [
  ["right", "right", "up"],
  ["right", "left", "up", "down"],
  ["down", "up", "up", "down"],
  ["right", "left", "left", "right"],
];

addEventListener("keyup", (event) => {});
onkeyup = (event) => {
  if (event.code === "ArrowUp" || event.code === "KeyW") {
    console.log(event.code);
  } else if (event.code === "ArrowRight" || event.code === "KeyD") {
    console.log(event.code);
  } else if (event.code === "ArrowDown" || event.code === "KeyS") {
    console.log(event.code);
  } else if (event.code === "ArrowLeft" || event.code === "KeyA") {
    console.log(event.code);
  }
};
