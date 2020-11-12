// NOS POSSIBILITEES DE DISCUSSION DU BOT 
// Si on lui pose une question (= la phrase finie par "?"), le bot répond "Ouais Ouais..." ;
// Si on lui hurle trop dessus (= la phrase est 100% en majuscules), le bot répond "Pwa, calme-toi..." ;
// Si la phrase que tu prononces contient le mot "Fortnite", le bot répond "on s' fait une partie soum-soum ?" ;
// Si on lui envoie un message vide, le bot répond "t'es en PLS ?" ;
// Pour tout autre phrase que tu lui envoies, le bot répond "balek." ;

let user_sentance = prompt("qu'as tu à me dire ?");

let answer;


if (user_sentance.includes("?")) {
    answer = "Ouais Ouais...";
} else if (user_sentance === user_sentance.toUpperCase()) {
    answer = "Pwa, calme-toi...";
} else if (user_sentance.includes("Fortnite") || user_sentance.includes("fortnite") || user_sentance.includes("FORTNITE")) {
    answer = "on s' fait une partie soum-soum ?";
} else if (user_sentance === "") {
    answer = "t'es en PLS ?";
} else {
    answer = "balek.";
}

console.log(answer);