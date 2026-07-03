const max = 6;

let step = parseInt(localStorage.getItem("step")) || 1;

const buttons = document.getElementById("buttons");
const home = document.getElementById("home");
const imgView = document.getElementById("imageView");
const title = document.getElementById("title");
const img = document.getElementById("img");
const end = document.getElementById("end");

// construire boutons
function render(){

  buttons.innerHTML = "";

  for(let i=1;i<=max;i++){

    let b = document.createElement("button");
    b.textContent = "Indice " + i;

    if(i < step){
      b.disabled = true;
    }

    if(i === step){
      b.onclick = ()=>show(i);
    }

    if(i > step){
      b.style.display = "none";
    }

    buttons.appendChild(b);
  }

  if(step > max){
    end.classList.remove("hidden");
  } else {
    end.classList.add("hidden");
  }
}

function show(i){
  home.classList.add("hidden");
  imgView.classList.remove("hidden");

  title.textContent = "Indice " + i;
  img.src = "Indice" + i + ".jpg";
}

function back(){
  step++;
  localStorage.setItem("step", step);
  render();

  imgView.classList.add("hidden");
  home.classList.remove("hidden");
}

function openVideo(){
  window.open("https://www.youtube.com/watch?v=XXXXXXXXXXX","_blank");
}

function openAR(){
  window.location.href = "ar.html";
}

function resetGame(){
  localStorage.removeItem("step");
  step = 1;
  render();
}

render();
