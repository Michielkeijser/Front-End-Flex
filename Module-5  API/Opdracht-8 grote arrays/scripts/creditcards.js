const thisYear = new Date().getFullYear();
const thisMonth = new Date().getMonth() + 1;
const adultsFiltered = randomPersonData.filter(person => person.age >= 18);

console.log(adultsFiltered);

const creditcardExpirationNextYear = () => {
  const expiredCreditcards = adultsFiltered.filter(
    array => parseInt(array.credit_card.expiration.split("/")[1]) + 2000 - thisYear === 1
  );
  return expiredCreditcards;
};

const creditcardExpirationThisYear = () => {
  const expiredCreditcards = adultsFiltered.filter(
    array =>
      parseInt(array.credit_card.expiration.split("/")[1]) + 2000 - thisYear === 0 &&
      parseInt(array.credit_card.expiration.split("/")[0]) >= thisMonth
  );
  return expiredCreditcards;
};

const cardsAlmostExpired = creditcardExpirationNextYear().concat(creditcardExpirationThisYear());

const cardsOrdered = () =>
  cardsAlmostExpired.sort(
    (a, b) =>
      parseInt(a.credit_card.expiration.split("/")[0]) -
      parseInt(b.credit_card.expiration.split("/")[0])
  );

console.log(cardsOrdered());

const creditcardExpiration = document.querySelector("#creditcard-button");

creditcardExpiration.addEventListener("click", () => {
  let list = ``;
  cardsOrdered().forEach(person => {
    list += `<li class="creditcard-item">${person.name} ${person.surname} 
    <br> ${person.credit_card.number} 
    <br>Expires: ${person.credit_card.expiration}
    <br>Phone: ${person.phone}
    </li><br>`;
    displayResults.innerHTML = list;
  });
});
