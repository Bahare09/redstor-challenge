class Checkout {
  constructor(pricingRules) {
    this.pricingRules = pricingRules;
    this.scannedItems = [];
  }

  scan(item) {
    if (this.pricingRules[item]) {
      this.scannedItems.push(item);
    } else {
      console.log(
        "The item '" + item + "' does not have pricing rules defined."
      );
    }
  }

  calculateTotal() {
    const itemCounts = this.getCounts(this.scannedItems);
    let total = 0;

    for (const item in itemCounts) {
      const count = itemCounts[item];
      if (this.pricingRules[item].specialPrice) {
        const { unitPrice, specialPrice, specialPriceQty } =
          this.pricingRules[item];
        const specialPriceSets = Math.floor(count / specialPriceQty);
        const remainingItems = count % specialPriceQty;
        total += specialPriceSets * specialPrice + remainingItems * unitPrice;
      } else {
        total += count * this.pricingRules[item].unitPrice;
      }
    }

    return total;
  }
  getCounts(items) {
    return items.reduce((acc, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    }, {});
  }
}

// Example :
const pricingRules1 = {
  A: { unitPrice: 60, specialPrice: 150, specialPriceQty: 3 },
  B: { unitPrice: 30, specialPrice: 45, specialPriceQty: 2 },
  C: { unitPrice: 30 },
  D: { unitPrice: 25 },
};

// Create a new instance of the Checkout class with specific pricing rules (pricingRules1)
const checkout1 = new Checkout(pricingRules1);

// Scanning items
checkout1.scan("G");
checkout1.scan("C");
checkout1.scan("B");
checkout1.scan("B");

// Calculating total
const totalPrice1 = checkout1.calculateTotal();
console.log("Total Price:", totalPrice1);
module.exports = Checkout;
