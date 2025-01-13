let container = document.querySelector(".container");
console.log(container);


// ajouter 16*16 div child au div container

// créer une boucle pour créer ces 16 div tests
function callInnerDiv() {
    for (let i = 0; i < (16 * 16); i++) {

        let innerDiv = document.createElement("div");

        innerDiv.innerText = "";

        innerDiv.classList.add("child");

        container.appendChild(innerDiv);

    };
};
callInnerDiv();

container.addEventListener("mouseover", () => {
    console.log("la souris est visible")
});

// créer une variable qui va récupérer mon élément canvas
const canvas = document.querySelector("canvas");
// créer une variable qui définit le type de canvas (ici 2d)
const ctx = canvas.getContext("2d");

let isDrawing = false; 
let lastX = 0;
let lastY = 0;

canvas.addEventListener("mousedown", (e) => {
    isDrawing = true; 
    [lastX, lastY] = [e.offsetX, e.offsetY]; // capturer la position de départ
});

canvas.addEventListener("mousemove", (e) => {
    if (!isDrawing) return; // ne rien faire si la souris n'est pas enfoncée
    ctx.beginPath();
    ctx.moveTo(lastX, lastY); // départ de la ligne
    ctx.lineTo(e.offsetX, e.offsetY); // destination de la ligne 
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY]; // Mettre à jour la position 
});

canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseleave", () => (isDrawing = false));
