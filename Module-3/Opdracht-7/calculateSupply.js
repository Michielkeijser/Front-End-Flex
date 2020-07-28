let calculateSupply = function (age, amount) {
  let lifetimeSupply = (amount * 365) * age;
  console.log('You will need ' + lifetimeSupply + ' to last until the ripe old age of ' + age );
}

calculateSupply(18, 2)
calculateSupply(65, 1)
calculateSupply(89, 3)
