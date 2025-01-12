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






// créer une fonction createDot qu'on va call dans nos events ci-dessus

// function createDot(targetDiv, x, y) {
//     const dot = document.createElement("div");
//     dot.classList.add("dot");
//     dot.style.position = "absolute";
//     dot.style.left = `${x}`;
//     dot.style.top = `${y}`;
//     dot.style.left = `${x - targetDiv.getBoudingClientRect().left}px`;
//     dot.style.top = `${y - targetDiv.getBoudingClientRect().top}px`;
//     targetDiv.appendChild(dot);
// };