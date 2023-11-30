// console.log(window.document);


// récupération de l'élément input par son id firstColor
const firstColorElt = document.getElementById('firstColor');
// console.log(firstColorElt);

// récupération de l'élément input par son id secondColor
const secondColorElt = document.getElementById('secondColor');

// récupération de l'élément body
const bodyElt = document.querySelector('body');
console.log(bodyElt);

//
firstColorElt.addEventListener('input', function() {
    // console.log(firstColorElt.value);
    bodyElt.style = "background: linear-gradient(to right,"+ firstColorElt.value +", "+ secondColorElt.value +")";
});

secondColorElt.addEventListener('input', function() {
    // console.log(secondColorElt.value);
    bodyElt.style = `background: linear-gradient(to right, ${firstColorElt.value}, ${secondColorElt.value});`
});
