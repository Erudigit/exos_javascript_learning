const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];


  
//   Est-ce que tous les livres ont été au moins empruntés une fois ?
let i = 0;
books.forEach(element => {
    if (element.rented == 0) {
        console.log("Il y a au moins 1 livre qui n'a pas été emprunté !");
        i++;
    }
});

if (i == 0) {
    console.log("Tous les livres ont été au moins empruntés une fois !")
}


//   Quel est livre le plus emprunté ?

let books_rented = [];
let e = 0;

books.forEach(element => {
    books_rented[e] = parseInt(element.rented, 10);
    e++;
});

let max_value_rented = Math.max(...books_rented);

const found_max = books.find(element => element.rented = max_value_rented);

console.log(found_max);


//   Quel est le livre le moins emprunté ?

let min_value_rented = Math.min(...books_rented);

const found_min = books.find(element => element.rented = min_value_rented);

console.log(found_min);


//   Trouve le livre avec l'ID: 873495 ;

let id_to_find = 873495;

const found_id = books.find(element => element.id = id_to_find);

console.log(found_id);


//   Supprime le livre avec l'ID: 133712 ;

let books_to_delete = books.find(element => element.id = 133712);

books.splice(books_to_delete, 1);

console.log(books);



//   Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).

books.sort(function (x, y) {
    let a = x.title.toUpperCase(),
        b = y.title.toUpperCase();
    return a == b ? 0 : a > b ? 1 : -1;
});

console.table(books);