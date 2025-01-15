let container = document.querySelector(".container");
// On créer notre variable qui se base sur square par côté et square en hauteur
let x = 16;
let y = x;
let humanAnswer = x * y;

console.log(container);


// ajouter 16*16 div child au div container

// créer une boucle pour créer ces 16 div tests
function callInnerDiv() {
    for (let i = 0; i < (humanAnswer); i++) {

        let innerDiv = document.createElement("div");

        innerDiv.classList.add("child");
        innerDiv.style.width = `${100 / x}%`;
        innerDiv.style.height = `${100 / y}%`;

        innerDiv.addEventListener("mouseenter", () => {
            innerDiv.style.backgroundColor = "rgba(0, 0, 235, 0.5)"
        });

        container.appendChild(innerDiv);


    };
};
callInnerDiv();

let buttonReset = document.querySelector("#buttonReset");
buttonReset.addEventListener("click", () => {
    container.innerHTML = "";
    x = prompt("combien voulez vous choisir de grille");
    y = x;
    humanAnswer = x*y
    callInnerDiv();
});