function exo_2_1() {
    let number_user = prompt("Choisis un nombre");

    function fact(nbr){
        var i, nbr, f = 1;
        for(i = 1; i <= nbr; i++)  
        {
        f = f * i;   // ou f *= i;
        }  
        return f;
    }

    console.log(fact(number_user));
}

exo_2_1();