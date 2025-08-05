// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// ('./shoppingCart.js');

// addToCart('Toyota Sequoia', 2);
// console.log(price, tq);

console.log('Importing module');

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('Toyota Sequoia', 2);
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price);

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);
