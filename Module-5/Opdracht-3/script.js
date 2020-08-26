const huiswerkMaken = (vak, callback) => {
  console.log(`Ik ga nu mijn ${vak} maken`);
  setTimeout(() => {
    callback();
  }, 2000);
};

const klaarMetHuiswerk = () => {
  console.log("Kijk Paps/Mams, ik ben klaar met mijn huiswerk!");
};

huiswerkMaken("engels", klaarMetHuiswerk);
