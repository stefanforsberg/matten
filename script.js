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


ready(() => {

    const assignments = [
        `${randomNumber(10000, 19999)} + ${randomNumber(1000, 9999)}`,
        `${ (randomNumber(100, 200) - Math.random()).toFixed(2) } + ${ (randomNumber(10, 99) - Math.random()).toFixed(1) }`,
        `${randomNumber(10000, 19999)} - ${randomNumber(1000, 9999)}`,
        `${ (randomNumber(100, 200) - Math.random()).toFixed(2) } - ${ (randomNumber(10, 99) - Math.random()).toFixed(1) }`,
        `${randomNumber(1000, 9999)} * ${randomNumber(10, 99)}`,
        `${randomNumber(100, 999)} * ${(randomNumber(1, 9) - Math.random()).toFixed(1)}`,
        `${randomNumber(1000, 9999)} / ${randomNumber(10, 19)}`,
        `${randomFraction()} + ${randomFraction()}`,
        `${randomFraction()} - ${randomFraction()}`,
        `${randomFraction()} * ${randomFraction()}`,
    ]





    document.getElementById("assignments").innerHTML = "<ul>" + assignments.reduce((p,c,i) => `${p}<li><strong>${i+1}:</strong> ${c.replace(".",",")}</li>`, "") + "</ul>"
});