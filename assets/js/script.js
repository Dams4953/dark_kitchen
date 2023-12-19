const collection = [
  //1
  {
    nom: "Cheez Burger",
    prix: "Prix : 4,50€",
    picture: "assets/images/burger1.jpeg",
    genre: ["Burger", "Vegetarien"],
    ingredients:["Neat patty, cheez, ketchup, mustard, pickles, onion"],
    note: [
      "4/5",
    ],
    commander: "#",

},
//2
{
  nom: "Smash Daddy",
  prix: "Prix : 6,99€",
  picture: "assets/images/burger2.jpeg",
  genre: ["Burger", "Vegan"],
  ingredients:["double neat smashed patty, double cheez, grilled onion, mustard, stack sauce"],
  note: [
    "3/5",
  ],
  commander: "#",
},
//3
{
  nom: "NEW! BBQ Brisket Burger",
  prix: "Prix : 8,99€",
  picture: "assets/images/burger3.jpeg",
  genre: ["Burger", "Vegetarien"],
  ingredients:["BBQ pulled mushroom 'brisket', double Neat smash patty, cheez, pickles, jalapenos, lettuce, pickled onion, BBQ sauce, herby aioli, mayo"],
  note: [
    "3,5/5",
  ],
  commander: "#",
},
//4
{
  nom: "Skinny Fries",
  prix: "Prix : 3,99€",
  picture: "assets/images/frites1.jpeg",
  genre: ["Sides"],
  ingredients:["skinny salty skin-on fries"],
  note: [
    "4/5",
  ],
  commander: "#",
},
//5
{
  nom: "Crispy Chick'n Caesar Wrap",
  prix: "Prix : 6,99€",
  picture: "assets/images/wrap1.jpeg",
  genre: ["Wraps", "Vegetarien"],
  ingredients:["fried chick'n, croutons, parmesan, romaine lettuce, caesar dressing, smashed avocado, fresh tortilla wrap"],
  note: [
    "4,5/5",
  ],
  commander: "#",
},
//6
{
  nom: "Falafel Caesar Wrap",
  prix: "Prix : 6,99€",
  picture: "assets/images/wrap2.jpeg",
  genre: ["Wraps", "Vegetarien"],
  ingredients:["falafel, croutons, parmesan, romaine lettuce, caesar dressing, smashed avocado, fresh tortilla wrap"],
  note: [
    "4/5",
  ],
  commander: "#",
},
//7
{
  nom: "Cripsy Chick'n Caesar Salad",
  prix: "Prix : 12,99€",
  picture: "assets/images/salade1.jpeg",
  genre: ["Salad", "Vegetarien"],
  ingredients:["crispy chick'n, croutons, parmesan, romaine lettuce, caesar dressing"],
  note: [
    "2/5",
  ],
  commander: "#",
},
//8
{
  nom: "Organic Orangeade",
  prix: "Prix : 3,99€",
  picture: "assets/images/boisson1.jpeg",
  genre: ["Drinks"],
  ingredients:["Organic orangeade, this drink contains all the vitamins you need!"],
  note: [
    "4/5",
  ],
  commander: "#",
},
//9
{
  nom: "Lemony Lemonade",
  prix: "Prix : 3,99",
  picture: "assets/images/boisson2.jpeg",
  genre: ["Drinks"],
  ingredients:["Organic lemonade, this drink contains all the vitamins you need!"],
  note: [
    "4/5",
  ],
  commander: "#",
},
];

let section = document.getElementById('card-container'); 

for (let elem of collection) {
  let div = document.createElement('div');
  div.className = 'card';

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
  h3.className = 'card__nom';
  h3.textContent = elem.nom;

  let h4 = document.createElement('h4');
  h4.className = 'card__prix';
  h4.textContent = elem.prix;

  let p = document.createElement('p');
  p.className = 'card__ingredients';
  p.textContent = elem.ingredients;

  let divnote = document.createElement('div');
  divnote.className = 'card__note';

  let divnoteFirst = document.createElement('div');
  divnoteFirst.className = 'card__note__first';
  divnoteFirst.textContent = `Note des clients ${elem.note[0]}`;

  divnote.appendChild(divnoteFirst);

  let divlien = document.createElement('div');
  divlien.className = 'card__lien';

  let button = document.createElement('a');
  button.className = 'card__order'

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

const toggleButton = document.getElementById("darkmode-toggle");
const body = document.body;

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  let backgroundSection = document.getElementById("section-home");
  let backgroundCard = document.getElementById("card");

  if (body.classList.contains("dark-mode")) {
    backgroundSection.style.backgroundImage = "url('assets/images/darkmode-image.png')";
    backgroundSection.style.backgroundSize = "cover";
    backgroundCard.style.backgroundColor = "grey";
    console.log("Dark mode activated");
  } else {
    backgroundSection.style.backgroundImage = "url('assets/images/BandeEntete.png')";
    backgroundCard.style.backgroundColor = ""; // Réinitialiser la couleur si nécessaire
  }
});
