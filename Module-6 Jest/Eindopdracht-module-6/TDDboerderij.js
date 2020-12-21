// Get yield for plant
const getYieldForPlant = (plant, environmentFactors) => {

  if (!environmentFactors) {
    return plant.yield;
  }
  else if (!environmentFactors.wind) {
    const plantFactorSun = plant.factors.sun[environmentFactors.sun];
    return plant.yield * plantFactorSun;
  }
  else if (!environmentFactors.sun) {
    const plantFactorWind = plant.factors.wind[environmentFactors.wind];
    return plant.yield * plantFactorWind ;
  }
  else if (environmentFactors.wind && environmentFactors.sun) {
    const plantFactorSun = plant.factors.sun[environmentFactors.sun];
    const plantFactorWind = plant.factors.wind[environmentFactors.wind];

    return plant.yield * plantFactorWind * plantFactorSun ;
  }
};

const getYieldForCrop = (input, environmentFactors) => {
  return Math.round(getYieldForPlant(input.crop, environmentFactors) * input.num_crops);
};

const getTotalYield = ({ crops }, environmentFactors) => {
  let totalYield = 0;
  crops.forEach((crop) => {
    totalYield += getYieldForCrop(crop, environmentFactors);
  });
  return totalYield;
};

const getCostsForCrop = (input) => {
  return input.crop.costs * input.num_crops; 
};

const getRevenueForCrop = (input, environmentFactors) => {
  return input.crop.revenue * getYieldForCrop(input, environmentFactors);
};

const getProfitForCrop = (input, environmentFactors) => {
  return getRevenueForCrop(input, environmentFactors) - getCostsForCrop(input, environmentFactors);
};

const getTotalProfit = ({ crops }, environmentFactors) => {
  let totalProfit = 0;
  crops.forEach((crop) => {
    totalProfit += getProfitForCrop(crop, environmentFactors);
  });
  return totalProfit;
};

module.exports = {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit,
};
