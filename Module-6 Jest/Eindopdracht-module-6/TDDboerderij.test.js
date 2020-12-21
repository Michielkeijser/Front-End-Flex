const {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit,
} = require("./TDDboerderij");

const corn = {
  name: "corn",
  yield: 30,
  costs: 1,
  revenue: 3,

  factors: {
    sun: {
      low: 0.5,
      medium: 1,
      high: 1.5,
    },
    wind: {
      low: 1,
      medium: 0.4,
      high: 0.7,
    },
  },
};

const pumpkin = {
  name: "pumpkin",
  yield: 4,
  costs: 2,
  revenue: 5,

  factors: {
     sun: {
      low: 0.5,
      medium: 1,
      high: 1.5,
    },
    wind: {
      low: 1,
      medium: 0.4,
      high: 0.7,
    },
  },
};

describe("Yield for plant", () => {
  test("Get yield for plant with no environment factors", () => {
    expect(getYieldForPlant(corn)).toBe(30);
  });
});

describe("Yield for plant with environment factors", () => {
  test("corn, sun:low", () => {
    const environmentFactors = {
      sun: "low",
    };

    expect(getYieldForPlant(corn, environmentFactors)).toBe(15);
  });

  test("corn, sun:high", () => {
    const environmentFactors = {
      sun: "high",
    };

    expect(getYieldForPlant(corn, environmentFactors)).toBe(45);
  });

  test("pumpkin, sun:medium, wind: low", () => {
    const environmentFactors = {
      sun: "medium",
      wind: "low",
    };

    expect(getYieldForPlant(pumpkin, environmentFactors)).toBe(4);
  });

  test("pumpkin, sun:high, wind: low", () => {
    const environmentFactors = {
      sun: "high",
      wind: "low",
    };

    expect(getYieldForPlant(pumpkin, environmentFactors)).toBe(6);
  });

  test("pumpkin, sun:low, wind: high", () => {
    const environmentFactors = {
      sun: "low",
      wind: "high",
    };

    expect(getYieldForPlant(pumpkin, environmentFactors)).toBe(1.4);
  });
});

describe("Yield for crop", () => {
  test("Get yield for crop, simple", () => {
    const input = {
      crop: corn,
      num_crops: 10,
    };
    expect(getYieldForCrop(input)).toBe(300);
  });
});

describe("Yield for crop with environment factors", () => {
  test("corn, sun:low, wind: high", () => {
    const input = {
      crop: corn,
      num_crops: 10,
    };
    const environmentFactors = {
      sun: "low",
      wind: "high",
    };
    expect(getYieldForCrop(input, environmentFactors)).toBe(105);
  });

  test("pumpkin, sun:high", () => {
    const input = {
      crop: pumpkin,
      num_crops: 30,
    };
    const environmentFactors = {
      sun: "high",
    };
    expect(getYieldForCrop(input, environmentFactors)).toBe(180);
  });
});

describe("getTotalYield", () => {
  test("Total yield with multiple crops", () => {
    const crops = [
      { crop: corn, num_crops: 5 },
      { crop: pumpkin, num_crops: 2 },
    ];
    expect(getTotalYield({ crops })).toBe(158);
  });
});

describe("Costs for crop", () => {
  test("Get costs for crop corn", () => {
    const input = {
      crop: corn,
      num_crops: 20,
    };
    expect(getCostsForCrop(input)).toBe(20);
  });

  test("Get costs for crop pumpkin", () => {
    const input = {
      crop: pumpkin,
      num_crops: 40,
    };
    expect(getCostsForCrop(input)).toBe(80);
  });
});

describe("Revenue for crop", () => {
  test("Get revenue for crop: Corn", () => {
    const input = {
      crop: corn,
      num_crops: 15,
    };
    expect(getRevenueForCrop(input)).toBe(1350);
  });

  test("Get revenue for crop: Pumpkin", () => {
    const input = {
      crop: pumpkin,
      num_crops: 35,
    };
    expect(getRevenueForCrop(input)).toBe(700);
  });
});

describe("Profit for crop", () => {
  test("Get profit for crop Corn", () => {
    const input = {
      crop: corn,
      num_crops: 100,
    };
    expect(getProfitForCrop(input)).toBe(8900);
  });

  test("Get profit for crop: Pumpkin", () => {
    const input = {
      crop: pumpkin,
      num_crops: 75,
    };
    expect(getProfitForCrop(input)).toBe(1350);
  });
});

describe("Profit for plant with environment factors", () => {
  test("Corn, sun:med, wind: med", () => {
    const input = {
      crop: corn,
      num_crops: 100,
    };

    const environmentFactors = {
      sun: "medium",
      wind: "medium",
    };

    expect(getProfitForCrop(input, environmentFactors)).toBe(3500);
  });

  test("Get profit for crop: Pumpkin", () => {
    const input = {
      crop: pumpkin,
      num_crops: 75,
    };
    expect(getProfitForCrop(input)).toBe(1350); // REMEMBER: COST IS PER PLANT, REVENUE IS PER KG
  });
});

describe("Total profit", () => {
  test("Get total profit", () => {
    const crops = [
      { crop: corn, num_crops: 500 },
      { crop: pumpkin, num_crops: 250 },
    ];

    expect(getTotalProfit({ crops })).toBe(49000);
  });
});

describe("Total profit with environment factors", () => {
  test("sun: high, wind: high", () => {
    const crops = [
      { crop: corn, num_crops: 500 },
      { crop: pumpkin, num_crops: 250 },
    ];

    const environmentFactors = {
      sun: "high",
      wind: "high",
    };

    expect(getTotalProfit({ crops }, environmentFactors)).toBe(51500);
  });

  test("sun: high, wind: med", () => {
    const crops = [
      { crop: corn, num_crops: 100 },
      { crop: pumpkin, num_crops: 50 },
    ];

    const environmentFactors = {
      sun: "high",
      wind: "low",
    };

    expect(getTotalProfit({ crops }, environmentFactors)).toBe(14800);
  });
});
