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
}];
// STOCKER COPIE DE COLLECTION
const originalCollection = [...collection];
//AFFICHER LES CARTES

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
  button.className = 'card__order';
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
  let allCards = document.querySelectorAll(".card");
  let barNav = document.querySelector(".navbar")
  let categories = document.querySelectorAll(".card__genre")
  let backgroundFooter = document.querySelector('.footer')
  let backgroundConfi = document.querySelector('.footer_politiqueConfi')
  let orders = document.querySelectorAll('.card__order')
  let ordersName = document.querySelectorAll('.card__nom')
  let contact = document.querySelector('.footer_contact')
  let menutitle = document.querySelector('.h2main')
  let active = document.querySelector('.active')

  if (body.classList.contains("dark-mode")) {
    backgroundSection.style.backgroundImage = "url('assets/images/darkmode-image.png')";
    backgroundSection.style.backgroundSize = "cover";
    barNav.style.backgroundColor = "rgb(66, 63, 62)"
    backgroundFooter.style.backgroundColor = "rgb(66, 63, 62)"
    backgroundConfi.style.backgroundColor = "rgb(85, 84, 83)"
    contact.style.backgroundColor="rgb(66, 63, 62)"
    menutitle.style.color="rgb(85, 84, 83)"
    active.style.backgroundColor = "rgb(66, 63, 62)"

    allCards.forEach(card => {
      card.style.backgroundColor = "grey";
    });

    categories.forEach(category => {
      category.style.color = "rgb(85, 84, 83)";
    });

    orders.forEach(order => {
      order.style.backgroundColor = "rgb(85, 84, 83)"
    })

    ordersName.forEach(orderName => {
      orderName.style.color = "rgb(85, 84, 83)"
    })

  } else {
    backgroundSection.style.backgroundImage = "url('assets/images/BandeEntete.png')";
    backgroundFooter.style.backgroundColor = "";
    barNav.style.backgroundColor = "";
    backgroundFooter.style.backgroundColor = "";
    backgroundConfi.style.backgroundColor = "";
    contact.style.backgroundColor="";
    menutitle.style.color="";
    active.style.backgroundColor ="";


    allCards.forEach(card => {
      card.style.backgroundColor ="";
    });

    categories.forEach(category => {
      category.style.color = "";
    });

    orders.forEach(order => {
      order.style.backgroundColor = "";
    })


    ordersName.forEach(orderName => {
      orderName.style.color = ""
    })

  }
}
)

//panier//
// Créer un tableau avec tous les genres uniques de la collection
const allGenres = collection.reduce((acc, card) => {
  card.genre.forEach(genre => {
      if (!acc.includes(genre)) {
          acc.push(genre);
      }
  });
  return acc;
}, []);

const filters = allGenres;  // Utiliser les genres uniques pour les filtres
const filterButtons = document.getElementById('filter-buttons');

for (const filter of filters) {
  const button = document.createElement('button');
  button.textContent = filter;
  button.addEventListener('click', () => filterCollection(filter));
  filterButtons.appendChild(button);
}

//FILTRER CARTES

function filterCollection(genre) {
// Supprimer les cartes actuelles
section.innerHTML = '';

// Filtrer la collection en fonction du genre sélectionné

const filteredCards = originalCollection.filter((card) => card.genre.includes(genre));

// Afficher les cartes filtrées
for (const elem of filteredCards) {
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
    button.className = 'card__order';
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
}

function resetCollection() {
// Supprimer les cartes actuelles
section.innerHTML = '';

// Afficher toutes les cartes à nouveau
for (const elem of originalCollection) {
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
  button.className = 'card__order';
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
}

//panier//
const cartModal = document.getElementById("cartModal");
const cartList = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const closeCartModalHandler = document.getElementById("closeModal");
const shoppingCartButton = document.querySelector(".shoppingcart");
const addButtons = document.querySelectorAll(".cart");
const total_count = document.querySelector(".total_count"); // Sélectionnez la span pour le nombre total d'articles

let cart = [];
let total = 0;

// Open modal
function openCartModal() {
  if (cartModal) {
    cartModal.style.display = "block";
    updateCartModalContent();
  } else {
    console.error("L'élément cartModal n'a pas été trouvé.");
  }
}

// Close modal
function closeCartModal() {
  cartModal.style.display = "none";
}

shoppingCartButton.addEventListener("click", openCartModal);
closeCartModalHandler.addEventListener("click", closeCartModal);

for (let button of addButtons) {
  button.addEventListener(
    "click",
    function () {
      addToCart(button.closest(".card"));
      updateCartModalContent();
    },
    { once: true }
  );
}

// Fonction pour ajouter un produit au panier
function addToCart(productIndex) {
  // Récupérer le produit à partir de la collection
  const product = collection[productIndex];

  // Créer une ligne pour le panier avec les détails du produit
  const cartItem = document.createElement('tr');
  cartItem.innerHTML = `
    <td>${product.nom}</td>
    <td>${product.prix}</td>
    <td>1</td>
    <td>${product.prix}</td>
    <td><button onclick="removeFromCart(${productIndex})">Remove</button></td>
  `;

  // Ajouter la ligne au tableau du panier
  document.getElementById('cartItems').appendChild(cartItem);

  // Mettre à jour le total du panier
  updateCartTotal();

  // Afficher le message de confirmation (vous pouvez personnaliser cela)
  alert(`Le produit "${product.nom}" a été ajouté au panier.`);
}

// Fonction pour mettre à jour le total du panier
function updateCartTotal() {
  const cartItems = document.getElementById('cartItems').getElementsByTagName('tr');
  let total = 0;

  for (let i = 0; i < cartItems.length; i++) {
    const price = parseFloat(cartItems[i].getElementsByTagName('td')[1].innerText.replace('Prix : ', '').replace('€', ''));
    total += price;
  }

  // Mettre à jour le total dans le panier
  document.getElementById('cartTotal').innerText = `€${total.toFixed(2)}`;
}

// Fonction pour vider le panier
function clearCart() {
  document.getElementById('cartItems').innerHTML = '';
  updateCartTotal();
}

// Fonction pour retirer un produit du panier
function removeFromCart(productIndex) {
  const cartItems = document.getElementById('cartItems');
  const removedItem = cartItems.getElementsByTagName('tr')[productIndex];
  cartItems.removeChild(removedItem);
  updateCartTotal();
}

// Fonction appelée lorsqu'une commande est complétée
function orderComplete() {
  // Ajoutez ici la logique pour finaliser la commande
  // Par exemple, vous pouvez envoyer une requête au serveur
  // pour enregistrer la commande et vider le panier.
  alert('Commande complétée avec succès ! Merci de votre achat.');
}

// Boucle sur la collection pour afficher les produits avec le bouton "Commander"
for (let i = 0; i < collection.length; i++) {
  const product = collection[i];
  const iconDiv = document.createElement('div');
  iconDiv.innerHTML = `
    <img src="${product.picture}" alt="${product.nom}" width="100" height="100">
    <p>${product.nom}</p>
    <p>${product.prix}</p>
    <button onclick="addToCart(${i})">Commander</button>
  `;
  document.getElementById('icons').appendChild(iconDiv);
}

