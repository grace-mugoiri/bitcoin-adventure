// game.js
const lessons = [
  "Bitcoin is a decentralized digital currency.",
  "It was created in 2009 by a mysterious person or group named Satoshi Nakamoto.",
  "Bitcoin doesn't need banks — it works peer to peer.",
  "There will only ever be 21 million bitcoins.",
  "You store bitcoin in a digital wallet. You control the keys, you control the coins!"
];

let index = 0;

document.getElementById('cat').addEventListener('click', () => {
  const infoBox = document.getElementById('info-box');
  if (index < lessons.length) {
    infoBox.innerText = lessons[index];
    infoBox.style.display = 'block';
    index++;
  } else {
    infoBox.innerText = "Level 1 Complete! 🎉 You're now a Bitcoin beginner!";
  }
});
