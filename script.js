// =========================
// FLYING BATS 🦇
// =========================

const batCount = 6;

for (let i = 0; i < batCount; i++) {
  
  const bat = document.createElement("div");
  
  bat.className = "bat";
  bat.textContent = "🦇";
  
  // Random height
  bat.style.top = `${10 + Math.random() * 70}vh`;
  
  // Different sizes
  bat.style.fontSize = `${20 + Math.random() * 18}px`;
  
  // Different flying speeds
  bat.style.animationDuration = `${12 + Math.random() * 10}s`;
  
  // Makes some bats already be flying when the page opens
  bat.style.animationDelay = `${-Math.random() * 15}s`;
  
  document.body.appendChild(bat);
}


// =========================
// FLOATING STARS ✦
// =========================

const starCount = 18;

for (let i = 0; i < starCount; i++) {
  
  const star = document.createElement("div");
  
  star.className = "floating-star";
  star.textContent = "✦";
  
  star.style.left = `${Math.random() * 100}vw`;
  star.style.top = `${Math.random() * 100}vh`;
  
  star.style.fontSize = `${7 + Math.random() * 8}px`;
  
  star.style.animationDuration =
    `${2 + Math.random() * 3}s`;
  
  star.style.animationDelay =
    `${Math.random() * 4}s`;
  
  document.body.appendChild(star);
}


// =========================
// OPEN THE LETTER 💌
// =========================

function openLetter() {
  
  const openingScreen =
    document.querySelector(".opening-screen");
  
  openingScreen.classList.add("hidden");
  
}