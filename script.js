function ready(fn) {
    if (document.readyState != 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

function randomNumber(start, end) {
    return Math.floor(Math.random()*(end-start+1)+start);
}

function randomFraction() {
    return `${randomNumber(1,19)}&frasl;${randomNumber(1,9)}`;
}

function getAssignment(a, b, calculate, toString) {
    
    return {
        result: calculate(a, b),
        toString: toString(a, b).replace(".",",")
    }
};


ready(() => {

    document.getElementById("showAnswer").addEventListener("click", () => {
        [...document.getElementsByClassName("answer")].forEach(a => a.classList.remove("hide"));

    })

    const assignments = [];
    
    let a = randomNumber(10000, 19999)
    let b = randomNumber(1000, 9999)
    assignments.push({ result: a+b, toString: `${a} + ${b}`});

    a = (randomNumber(100, 200) - Math.random()).toFixed(2)
    b = (randomNumber(10, 99) - Math.random()).toFixed(1)
    assignments.push(getAssignment(a, b, (a,b) => (a-b).toFixed(2), (a,b) => `${a} - ${b}`));

    a = randomNumber(10000, 19999)
    b = randomNumber(1000, 9999)
    assignments.push(getAssignment(a, b, (a,b) => (a-b), (a,b) => `${a} - ${b}`));

    a = (randomNumber(100, 200) - Math.random()).toFixed(2)
    b = (randomNumber(10, 99) - Math.random()).toFixed(1)
    assignments.push(getAssignment(a, b, (a,b) => (a-b).toFixed(2), (a,b) => `${a} - ${b}`));

    a = randomNumber(1000, 9999)
    b = randomNumber(10, 99)
    assignments.push(getAssignment(a, b, (a,b) => (a*b), (a,b) => `${a} * ${b}`));

    a = randomNumber(100, 999)
    b = (randomNumber(1, 9) - Math.random()).toFixed(1)
    assignments.push(getAssignment(a, b, (a,b) => (a*b).toFixed(1), (a,b) => `${a} * ${b}`));

    b = randomNumber(10, 19)
    a = randomNumber(100, 999) * b
    assignments.push(getAssignment(a, b, (a,b) => (a/b), (a,b) => `${a} / ${b}`));

    a = randomFraction()
    b = randomFraction()
    assignments.push(getAssignment(a, b, (a,b) => "", (a,b) => `${a} + ${b}`));

    a = randomFraction()
    b = randomFraction()
    assignments.push(getAssignment(a, b, (a,b) => "", (a,b) => `${a} - ${b}`));

    a = randomFraction()
    b = randomFraction()
    assignments.push(getAssignment(a, b, (a,b) => "", (a,b) => `${a} * ${b}`));

    document.getElementById("assignments").innerHTML = "<ul>" + assignments.reduce((p,c,i) => `${p}<li><strong>${i+1}:</strong> ${c.toString} <span class='answer hide'>= ${c.result}</span></li>`, "") + "</ul>"


    // // // const assignments = [
    // // //     `${randomNumber(10000, 19999)} + ${randomNumber(1000, 9999)}`,
    // // //     `${ (randomNumber(100, 200) - Math.random()).toFixed(2) } + ${ (randomNumber(10, 99) - Math.random()).toFixed(1) }`,
    // // //     `${randomNumber(10000, 19999)} - ${randomNumber(1000, 9999)}`,
    // // //     `${ (randomNumber(100, 200) - Math.random()).toFixed(2) } - ${ (randomNumber(10, 99) - Math.random()).toFixed(1) }`,
    // // //     `${randomNumber(1000, 9999)} * ${randomNumber(10, 99)}`,
    // //     `${randomNumber(100, 999)} * ${(randomNumber(1, 9) - Math.random()).toFixed(1)}`,
    // //     `${randomNumber(1000, 9999)} / ${randomNumber(10, 19)}`,
    //     `${randomFraction()} + ${randomFraction()}`,
    //     `${randomFraction()} - ${randomFraction()}`,
    //     `${randomFraction()} * ${randomFraction()}`,
    // ]
    
    // document.getElementById("assignments").innerHTML = "<ul>" + assignments.reduce((p,c,i) => `${p}<li><strong>${i+1}:</strong> ${c.replace(".",",")}</li>`, "") + "</ul>"
});