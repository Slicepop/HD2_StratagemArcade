// https://helldivers.fandom.com/wiki/Stratagem_Codes_(Helldivers_2)
stratagems = [
  [["down", "up", "up", "down", "up"], "LIFT-850 Jump Pack"],
  [["down", "left", "down", "up", "up", "down"], "B-1 Supply Pack"],
  [
    ["down", "up", "left", "up", "right", "right"],
    "AX/LAS-5 'Guard Dog' Rover",
  ],
  [
    ["down", "left", "down", "down", "up", "left"],
    "SH-20 Ballistic Shield Backpack",
  ],
  [["down", "up", "left", "up", "right", "down"], "AX/AR-23 'Guard Dog'"],
  [["down", "left", "down", "up", "right"], "MG-43 Machine Gun"],
  [["down", "left", "right", "up", "down"], "APW-1 Anti-Materiel Rifle"],
  [["down", "left", "down", "up", "up", "left"], "M-105 Stalwart"],
  [["down", "down", "left", "up", "right"], "EAT-17 Expendable Anti-tank"],
  [["down", "left", "right", "right", "left"], "GR-8 Recoilless Rifle"],
  [["down", "left", "up", "down", "up"], "FLAM-40 Flamethrower"],
  [["down", "left", "down", "up", "up", "right"], "AC-8 Autocannon"],
  [["down", "left", "up", "down", "down"], "MG-206 Heavy Machine Gun"],
  [["down", "right", "down", "up", "left", "right"], "RS-422 Railgun"],
  [["down", "down", "up", "down", "down"], "FAF-14 SPEAR Launcher"],
  [["down", "left", "up", "left", "down"], "GL-21 Grenade Launcher"],
  [["down", "left", "down", "up", "left"], "LAS-98 Laser Cannon"],
  [["down", "right", "down", "up", "left", "right"], "ARC-3 Arc Thrower"],
  [["down", "down", "up", "left", "right"], "LAS-99 Quasar Cannon"],
  [
    ["left", "down", "right", "up", "left", "down", "down"],
    "EXO-45 Patriot Exosuit",
  ],
  [["up", "down", "right", "left", "up"], "Reinforce"],
  [["up", "down", "right", "up"], "SOS Beacon"],
  [["down", "down", "up", "right"], "Resupply"],
  [
    ["down", "up", "left", "down", "up", "right", "down", "up"],
    "NUX-223 Hellbomb",
  ],
  [["down", "down", "down", "up", "up"], "SSSD Delivery"],
  [["up", "up", "left", "right", "down", "down"], "Seismic Probe"],
  [["down", "down", "up", "up", "up"], "Upload Data"],
  [["up", "up", "left", "up", "right"], "Eagle Rearm"],
  //[["right", "right", "left", "left"], "Illumination Flare"],
  [["right", "up", "up", "down"], "SEAF Artillery"],
  [["down", "up", "down", "up"], "Super Earth Flag"],
  [
    ["down", "up", "left", "right", "right", "left"],
    "E/MG-101 HMG Emplacement",
  ],
  [
    ["down", "down", "left", "right", "left", "right"],
    "FX-12 Shield Generator Relay",
  ],
  [["down", "up", "right", "up", "left", "right"], "A/ARC-3 Tesla Tower"],
  [["down", "left", "up", "right"], "MD-6 Anti-Personnel Minefield"],
  [["down", "left", "left", "down"], "MD-I4 Incendiary Mines"],
  [["down", "up", "right", "right", "up"], "A/MG-43 Machine Gun Sentry"],
  [["down", "up", "right", "left"], "A/G-16 Gatling Sentry"],
  [["down", "up", "right", "right", "down"], "A/M-12 Mortar Sentry"],
  [["down", "up", "right", "up", "left", "up"], "A/AC-8 Autocannon Sentry"],
  [["down", "up", "right", "left"], "A/MLS-4X Rocket Sentry"],
  [["down", "up", "right", "down", "right"], "A/M-23 EMS Mortar Sentry"],
  [["right", "down", "left", "up", "up"], "Orbital Gatling Barrage"],
  [["right", "right", "right"], "Orbital Airburst  Barrage"],
  [
    ["right", "right", "down", "left", "right", "down"],
    "Orbital 120MM HE Barrage",
  ],
  [
    ["right", "down", "up", "up", "left", "down", "down"],
    "Orbital 380MM HE Barrage",
  ],
  [
    ["right", "down", "right", "down", "right", "down"],
    "Orbital Walking Barrage",
  ],
  [["right", "down", "up", "right", "down"], "Orbital Laser"],
  [["right", "up", "down", "down", "right"], "Orbital Railcannon Strike"],
  [["right", "right", "up"], "Orbital Precision Strike"],
  [["right", "right", "down", "right"], "Orbital Gas Strike"],
  [["right", "right", "left", "right"], "Orbital EMS Strike"],
  [["right", "right", "down", "up"], "Orbital Smoke Strike"],
  [["up", "right", "right"], "Eagle Strafing Run"],
  [["up", "right", "down", "right"], "Eagle Airstrike"],
  [["up", "right", "down", "down", "right"], "Eagle Cluster Bomb"],
  [["up", "right", "down", "up"], "Eagle Napalm Airstrike"],
  [["up", "right", "up", "down"], "Eagle Smoke Strike"],
  [["up", "right", "up", "left"], "Eagle 110MM Rocket Pods"],
  [["up", "right", "down", "down", "down"], "Eagle 500kg Bomb"],
  [["down"], "You reached the end"], // remove this when finished
  //FIXME need to loop/tell me when I have finished
];

textof_titleStratagem = document.getElementById("stratagem");
image = [
  document.querySelector(".image1"),
  document.querySelector(".image2"),
  document.querySelector(".image3"),
  document.querySelector(".image4"),
  document.querySelector(".image5"),
  document.querySelector(".image6"),
  document.querySelector(".image7"),
  document.querySelector(".image8"),
];
stratagem_number = 0;
currentStratagem = stratagems[stratagem_number][0];
current_command = 0;
addEventListener("keyup", () => {});

function checkCommand(key) {
  if (key == currentStratagem[current_command]) {
    if (current_command == currentStratagem.length - 1) {
      stratagem_number++;
      image[current_command].style.filter = "sepia(0%)";
      refreshStratagems();
      image[current_command].style.filter = "sepia(100%)";
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
// go to next element in array if reached end       ✔
// highlight currentStratagem                       ✔
// add in list of stratagems                        ✔
//     with shuffle and loop
// change title of stratagem                        ✔
// add in score
// add in timer with animated rectangle
// add in highest score with cache
// calculate APM

//

function refreshStratagems() {
  currentStratagem = stratagems[stratagem_number][0];
  current_command = 0;
  try {
    textof_titleStratagem.innerHTML = stratagems[stratagem_number][1];

    image[0].src = "../img/" + currentStratagem[0] + ".png";
    image[1].src = "../img/" + currentStratagem[1] + ".png";
    image[2].src = "../img/" + currentStratagem[2] + ".png";
    image[3].src = "../img/" + currentStratagem[3] + ".png";
    image[4].src = "../img/" + currentStratagem[4] + ".png";
    image[5].src = "../img/" + currentStratagem[5] + ".png";
    image[6].src = "../img/" + currentStratagem[6] + ".png";
    image[7].src = "../img/" + currentStratagem[7] + ".png";
  } catch (e) {}
}
window.onload = () => {
  image[current_command].style.filter = "sepia(100%)";
  refreshStratagems();
};
