const collection = [
    //1
    {
      nom: "Cheez Burger",
      prix: "4,50€",
      picture: "/images/burger1.jpeg",
      genre: ["Burger", "Vegetarien"],
      ingrédients:["Neat patty, cheez, ketchup, mustard, pickles, onion"],
      note: [
        "4/5",
      ],
      commander: "https://www.youtube.com/watch?v=DzfpyUB60YY",

},
//2
{
    nom: "Smash Daddy",
    prix: "6,99€",
    picture: "/images/burger2.jpeg",
    genre: ["Burger", "Vegan"],
    ingrédients:["double neat smashed patty, double cheez, grilled onion, mustard, stack sauce"],
    note: [
      "3/5",
    ],
    commander: "https://www.youtube.com/watch?v=iQXmlf3Sefg",
  },
  //3
  {
    nom: "NEW! BBQ Brisket Burger",
    prix: "8,99€",
    picture: "/images/burger3.jpeg",
    genre: ["Burger", "Vegetarien"],
    ingrédients:["BBQ pulled mushroom 'brisket', double Neat smash patty, cheez, pickles, jalapenos, lettuce, pickled onion, BBQ sauce, herby aioli, mayo"],
    note: [
      "3,5/5",
    ],
    commander: "https://www.youtube.com/watch?v=V6wWKNij_1M",
  },
//4
{
    nom: "Skinny Fries",
    prix: "3,99€",
    picture: "/images/frites1.jpeg",
    genre: ["Sides"],
    ingrédients:["skinny salty skin-on fries"],
    note: [
      "4/5",
    ],
    commander: "https://www.youtube.com/watch?v=AsoUG9ScJnc",
  },
  //5
  {
    nom: "Crispy Chick'n Caesar Wrap",
    prix: "6,99€",
    picture: "/Users/alexisdelfosse/Dark_Kitchen/assets/images/wrap1.jpeg",
    genre: ["Wraps", "Vegetarien"],
    ingrédients:["fried chick'n, croutons, parmesan, romaine lettuce, caesar dressing, smashed avocado, fresh tortilla wrap"],
    note: [
      "4,5/5",
    ],
    commander: "https://www.youtube.com/watch?v=WR7cc5t7tv8",
  },
  //6
  {
    nom: "Falafel Caesar Wrap",
    prix: "6,99€",
    picture: "/images/wrap2.jpeg",
    genre: ["Wraps", "Vegetarien"],
    ingrédients:["falafel, croutons, parmesan, romaine lettuce, caesar dressing, smashed avocado, fresh tortilla wrap"],
    note: [
      "4/5",
    ],
    commander: "https://www.youtube.com/watch?v=k5WQZzDRVtw",
  },
  //7
  {
    nom: "Cripsy Chick'n Caesar Salad",
    prix: "12,99€",
    picture: "images/conjuring.jpeg",
    genre: ["Salad", "Vegetarien"],
    ingrédients:["crispy chick'n, croutons, parmesan, romaine lettuce, caesar dressing"],
    note: [
      "2/5",
    ],
    commander: "https://www.youtube.com/watch?v=k10ETZ41q5o",
  },
  //8
  {
    nom: "Organic Orangeade",
    prix: "3,99€",
    picture: "/images/boisson1.jpeg",
    genre: ["Drinks"],
    ingrédients:["Organic orangeade, this drink contains all the vitamins you need!"],
    note: [
      "4/5",
    ],
    commander: "https://www.youtube.com/watch?v=1Vnghdsjmd0",
  },
  //9
  {
    nom: "Lemony Lemonade",
    prix: "3,99",
    picture: "/images/boisson2.jpeg",
    genre: ["Drinks"],
    ingrédients:["Organic lemonade, this drink contains all the vitamins you need!"],
    note: [
      "4/5",
    ],
    commander: "https://www.youtube.com/watch?v=S014oGZiSdI",
  },
];

let section = document.getElementById('card-container'); 

for (let elem of collection) {
    let div = document.createElement('div');
    div.className = 'card';

    let croix = document.createElement('button');
    croix.className ='card__croix';
    croix.textContent = 'X';

    div.appendChild(croix);
  
    let divimg = document.createElement('div');
    divimg.className = 'card__image';
  
    let img = document.createElement('img');
    img.src = elem.picture;
    img.className = 'desktop-image';
  
    divimg.appendChild(img);
  
    let h2 = document.createElement('h2');
    h2.className = 'card__genre';
    h2.textContent = elem.genre.join(', ');
  
    let h3 = document.createElement('h3');
    h3.className = 'card__title';
    h3.textContent = elem.nom;
  
    let h4 = document.createElement('h4');
    h4.className = 'card__author';
    h4.textContent = elem.prix;
  
    let p = document.createElement('p');
    p.className = 'card__synopsis';
    p.textContent = elem.ingrédients;
  
    let divnote = document.createElement('div');
    divnote.className = 'card__note';
  
    let divnoteFirst = document.createElement('div');
    divnoteFirst.className = 'card__note__first';
    divnoteFirst.textContent = `Note des clients ${elem.note[0]}`;
  
    divnote.appendChild(divnoteFirst);
    divnote.appendChild(divnoteSecond);
  
    let divlien = document.createElement('div');
    divlien.className = 'card__lien';
  
    let button = document.createElement('a');

    button.href = elem.commander;
    button.textContent = 'Commander le produit';
  
    divlien.appendChild(button);
  
    div.appendChild(divimg);
    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(p);
    div.appendChild(divnote);
    div.appendChild(divlien);
  
    section.appendChild(div);
   
}