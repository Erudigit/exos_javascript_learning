function exo_2_2() {    
    let n = prompt("Choisis un nombre");
    let integer = parseInt(n, 10);

    let filledArray = new Array(integer).fill(' ');    
    while (filledArray.indexOf(' ') !== -1) {
        filledArray.shift();
        filledArray.push('#');
        console.log(filledArray.join(""));
        n--;
    }
}

exo_2_2();