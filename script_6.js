// NOS 8 PROTEINES 
// UCU ou UCC ou UCA ou UCG ou AGU ou AGC => Sérine
// CCU ou CCC ou CCA ou CCG => Proline
// UUA ou UUG => Leucine
// UUU ou UUC => Phénylalanine
// CGU ou CGC ou CGA ou CGG ou AGA ou AGG => Arginine
// UAU ou UAC => Tyrosine

let combine_user = prompt("Quelle est ton ARN ?");

let array_of_char_combine = [...combine_user];

let result = [];

let array_of_3_joined = [];

let f = 0;

for(i = 0; i <= ((array_of_char_combine.length)/3 - 1); i++)  
{
    let array_of_3 = [];
    for (var e = 0; e < 3; e++) {
        array_of_3.push(array_of_char_combine[e + f]);
    }
    array_of_3_joined = array_of_3.join('');
    result.push(array_of_3_joined);
    f = f + 3;
}  

let result_converted = [];

result.forEach(element => {
    if (element == "UCU" || element == "UCC" || element == "UCA" || element == "UCG" || element == "AGU" || element == "AGC") {
        result_converted.push("Sérine");
    } else if (element == "CCU" || element == "CCC" || element == "CCA" || element == "CCG") {
        result_converted.push("Proline");
    } else if (element == "UUA" || element == "UUG") {
        result_converted.push("Leucine");
    } else if (element == "UUU" || element == "UUC") {
        result_converted.push("Phénylalanine");
    } else if (element == "CGU" || element == "CGC" || element == "CGA" || element == "CGG" || element == "AGA" || element == "AGG") {
        result_converted.push("Arginine");
    } else if (element == "UAU" || element == "UAC") {
        result_converted.push("Tyrosine");
    } 
});

console.log(result_converted);