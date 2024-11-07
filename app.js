const soundMap = {
  kick: "q",
  snare: "w",
  hihat: "e",
  openhat: "r",
  ride: "t",
  tom: "y",
  tink: "u",
  clap: "i",
};

document.querySelectorAll(".drum").forEach((button) => {
  button.addEventListener("click", () => {
    const sound = button.getAttribute("data-sound");
    playSound(sound);
  });
});

document.addEventListener("keydown", (event) => {
  for (let sound in soundMap) {
    if (event.key === soundMap[sound]) {
      playSound(sound);
    }
  }
});

function playSound(sound) {
  const audio = new Audio(`./sounds/${sound}.wav`);
  audio.play();
}
