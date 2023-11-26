const Checkout = require("./checkoutOOP");
const pricingRules1 = {
  A: { unitPrice: 60, specialPrice: 150, specialPriceQty: 3 },
  B: { unitPrice: 30, specialPrice: 45, specialPriceQty: 2 },
  C: { unitPrice: 30 },
  D: { unitPrice: 25 },
};

const pricingRules2 = {
  A: { unitPrice: 70, specialPrice: 120, specialPriceQty: 2 },
  B: { unitPrice: 25, specialPrice: 40, specialPriceQty: 3 },
  C: { unitPrice: 30 },
  D: { unitPrice: 20 },
};

describe("Checkout", () => {
  // Test case 1: calculates total as 0 for items without pricing rules
  test("calculates total 0 for items without pricing rules", () => {
    const checkout = new Checkout(pricingRules1);
    checkout.scan("G");
    const total = checkout.calculateTotal();
    expect(total).toBe(0);
  });
  //Test case 2 :calculates total for items with pricing rules
  const runTest = (pricingRules, basket, expectedTotal) => {
    const checkout = new Checkout(pricingRules);

    for (let i = 0; i < basket.length; i++) {
      checkout.scan(basket[i]);
    }
    const Total = checkout.calculateTotal();

    test(`calculates total for basket ${basket} with ${pricingRules}`, () => {
      expect(Total).toBe(expectedTotal);
    });
  };

  runTest(pricingRules1, "A", 60);
  runTest(pricingRules1, "AB", 90);
  runTest(pricingRules1, "CDBA", 145);
  runTest(pricingRules1, "AA", 120);
  runTest(pricingRules1, "AAA", 150);
  runTest(pricingRules1, "AAAA", 210);
  runTest(pricingRules1, "AAAAA", 270);
  runTest(pricingRules1, "AAAAAA", 300);
  runTest(pricingRules1, "AAAB", 180);
  runTest(pricingRules1, "AAABB", 195);
  runTest(pricingRules1, "AAABBD", 220);
  runTest(pricingRules1, "DABABA", 220);
  runTest(pricingRules2, "DABABAX", 260);
});
