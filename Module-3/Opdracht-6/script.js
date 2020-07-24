/* breadWithCheese
one slice of bread
one slice of cheese
*/
// Deel A
function breadWithCheese() {
  console.log('one slice of bread');
  console.log('one slice of cheese');
}

breadWithCheese()

// Deel B
// function declaration
function makeSandwich(topping) {
  console.log('There you go, a sandwich with' + ' ' + topping);
}
// function call
makeSandwich('cheese')

// function call 2

makeSandwich('ham')

// Deel C
let totalAmount = 3.50;
let discount = 5;

function calculateDiscountedPrice() {
return ((1 - (discount / 100)) * totalAmount) ;
}

let discountC = calculateDiscountedPrice()

console.log(Math.round(discountC));

// Deel D

if (totalAmount > 25) {
  function calculateDiscountedPrice() {
  return ((1 - (discount / 100)) * totalAmount) ;
  }

  let discountD = calculateDiscountedPrice()

  console.log(discountD);
} else {
console.log('Geen Korting');
}
