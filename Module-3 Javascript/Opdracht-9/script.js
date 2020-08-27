const colors = ['yellow', 'blue', 'red', 'orange']
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i])
}

let i = 0
while (i < colors.length) {
  console.log(colors[i])
  i++
}

colors.forEach((color) => console.log(color))

/*
For loop neemt 4 in.

While loop neemt 5 regels in.

forEach is maar een regel en daardoor een stuk schooner in gebruik.

*/

const kleur = {
  kleur1: 'red',
  kleur2: 'blue',
  kleur3: 'green',
  kleur4: 'yellow',
  kleur5: 'orange'
}

const values = Object.values(kleur)
console.log(values)
