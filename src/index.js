stratagems = [
  ["right", "right", "up"],
  ["right", "right", "up", "down"],
  ["down", "up", "up", "down", "left"],
  ["right", "left", "left", "right"],
  ["right", "right", "up"],
  ["up", "left", "left", "down"],
  ["right", "right", "up", "down"],
  ["right", "left", "left", "right"],
  ["right", "right", "up"],
  ["down", "left", "up", "down", "left"],
  ["down", "up", "up", "down"],
  ["right", "left", "left", "right", "right", "right"],
  ["right", "right", "up", "down"],
  ["up", "left", "up", "down"],
  ["down", "up", "up", "down", "up", "down"],
  ["right", "left", "right", "right", "right", "up"],
  ["left", "left", "up", "down"],
  ["down", "up", "up"],
  ["right", "left", "left", "right"],
  ["right", "right", "up"],
  ["up", "left", "right", "down"],
  ["right", "right", "up", "down"],
  ["up", "left", "left", "down"],
  [],
];
image = [
  document.querySelector(".image1"),
  document.querySelector(".image2"),
  document.querySelector(".image3"),
  document.querySelector(".image4"),
  document.querySelector(".image5"),
  document.querySelector(".image6"),
];
stratagem_number = 0;
currentStratagem = stratagems[stratagem_number];
current_command = 0;
addEventListener("keyup", () => {});

function checkCommand(key) {
  if (key == currentStratagem[current_command]) {
    console.log("Yo he actually did it");
    if (current_command == currentStratagem.length - 1) {
      stratagem_number++;
      image[current_command].style.filter = "sepia(0%)";
      refreshStratagems();
      image[current_command].style.filter = "sepia(100%)";
      console.log(currentStratagem);
    } else {
      image[current_command].style.filter = "sepia(0%)";

      currentStratagem[++current_command];
      image[current_command].style.filter = "sepia(100%)";
    }
    if (current_command != 0) {
    }
  } else {
    image[current_command].style.filter = "sepia(0%)";
    current_command = 0;
    image[current_command].style.filter = "sepia(100%)";
  }
}

onkeyup = (event) => {
  if (event.code === "ArrowUp" || event.code === "KeyW") {
    checkCommand("up");
  } else if (event.code === "ArrowRight" || event.code === "KeyD") {
    checkCommand("right");
  } else if (event.code === "ArrowDown" || event.code === "KeyS") {
    checkCommand("down");
  } else if (event.code === "ArrowLeft" || event.code === "KeyA") {
    checkCommand("left");
  }
};
// TODO
// go to next element in array if reached end ✔

// highlight currentStratagem

function refreshStratagems() {
  currentStratagem = stratagems[stratagem_number];
  current_command = 0;
  try {
    image[0].src = "../img/" + currentStratagem[0] + ".png";
    image[1].src = "../img/" + currentStratagem[1] + ".png";
    image[2].src = "../img/" + currentStratagem[2] + ".png";
    image[3].src = "../img/" + currentStratagem[3] + ".png";
    image[4].src = "../img/" + currentStratagem[4] + ".png";
    image[5].src = "../img/" + currentStratagem[5] + ".png";
  } catch (e) {}
}
window.onload = () => {
  image[current_command].style.filter = "sepia(100%)";

  refreshStratagems();

  console.log(currentStratagem);
};
