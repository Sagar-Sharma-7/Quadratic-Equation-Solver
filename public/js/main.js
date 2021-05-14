// declaring constant variables
const h1 = document.querySelector("h1");
const formula = document.querySelector(".formula");
const aUser = document.querySelector("#a");
const bUser = document.querySelector("#b");
const cUser = document.querySelector("#c");
const calculateBtn = document.querySelector("#calculateBtn");
const realUneq = document.querySelector("#realUneq");
const realEq = document.querySelector("#realEq");
const unreal = document.querySelector("#unreal");
const resultBox = document.querySelector(".resultBox");
let root1, root2;

// text content
h1.textContent = "Quadratic Equation Solver";
formula.innerHTML = "ax<sup>2</sup> + bx + c = 0, where a, b and c are real numbers and a ≠ 0";
realUneq.innerHTML = "Real and Different Roots";
realEq.innerHTML = "Real and Equal Roots";
unreal.innerHTML = "Roots are not Real";

const getRoots = (e) => {
    realUneq.style.opacity = 0.5;
    realEq.style.opacity = 0.5;
    unreal.style.opacity = 0.5;
    e.preventDefault();
    const a = aUser.value;
    const b = bUser.value;
    const c = cUser.value;
    
    // calculate discriminant
    const discriminant = (b*b) - (4*a*c);
    console.log(a, b, c);
    console.log(discriminant);

    // for real and different roots
    if(discriminant > 0){
        root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        realUneq.style.opacity = 1;
        resultBox.innerHTML = `The roots of quadratic equation are ${root1} and ${root2}.`;
    }

    // for real and equal roots
    else if(discriminant == 0){
        root1 = root2 = -b / (2 * a); // no discriminant because discriminant is zero...
        realEq.style.opacity = 1;
        resultBox.innerHTML = `The roots of quadratic equation are ${root1} and ${root2}.`;
    }

    // for unreal roots
    else{
        unreal.style.opacity = 1;
        resultBox.innerHTML = `The roots of quadratic equation are not real.`;
    }
}

calculateBtn.addEventListener("click", getRoots)