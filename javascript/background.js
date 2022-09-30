const images = ["000.jpg", "001.jpg", "002.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `image/${chosenImage}`;

document.body.appendChild(bgImage);
