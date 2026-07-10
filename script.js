const max = 6;

let step = parseInt(localStorage.getItem("step")) || 1;

const buttons = document.getElementById("buttons");
const home = document.getElementById("home");
const imgView = document.getElementById("imageView");
const title = document.getElementById("title");
const img = document.getElementById("img");
const end = document.getElementById("end");

// Construire les boutons (TOUS visibles, grisés au fur et à mesure)
function render() {
  buttons.innerHTML = "";

  for(let i = 1; i <= max; i++) {
    let b = document.createElement("button");
    b.textContent = "Indice " + i;

    if(i < step) {
      b.disabled = true; // Boutons précédents grisés
    }

    if(i === step) {
      b.onclick = () => show(i); // Seul le bouton actuel est cliquable
    }

    buttons.appendChild(b);
  }

  // Affiche la section "Bravo" APRES le 6ème indice
  if(step > max) {
    end.classList.remove("hidden");
  } else {
    end.classList.add("hidden");
  }
}

function show(i) {
  home.classList.add("hidden");
  imgView.classList.remove("hidden");
  title.textContent = "Indice " + i;
  img.src = "Indice" + i + ".jpg";
}

function back() {
  step++;
  localStorage.setItem("step", step);
  render();
  imgView.classList.add("hidden");
  home.classList.remove("hidden");
}

function openVideo() {
  window.open("https://www.youtube.com/watch?v=y3PD9N3GqLQ", "_blank");
}

function openAR() {
  window.location.href = "mindar.html";
}

function resetGame() {
  localStorage.removeItem("step");
  step = 1;
  render();
}
function openMailWithDate() {
  const today = new Date().toLocaleDateString('fr-FR'); // Format : "10/07/2026"
  window.open(`mailto:?subject=EquiClous - ${today}`);
}
render();
