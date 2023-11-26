# Redstor-challenge

This program simulates a supermarket checkout system that calculates the total price of a list of items. It supports individual pricing and special offers.

# Installation :

Clone the repository: https://github.com/Bahare09/redstor-challenge

## How to Install Dependencies:

1-Navigate to the project directory > cd redstor-challenge/supermarketCheckout

2-npm install

# How to Run :

In terminal

1-Navigate to the project directory > cd redstor-challenge/supermarketCheckout

2-Execute the main script using Node.js > node checkoutOOP.js

# How to Run the test:

1-Navigate to the project directory > cd redstor-challenge/supermarketCheckout

2-npm test

# Challenge Summery:

Supermarket Checkout

Implement the code for a supermarket checkout that calculates the total price of a number of
items. In a normal supermarket, items are identified using Stock Keeping Units (SKUs), but
in our store we’ll be using individual letters of the alphabet (A, B, C etc). Our goods are
priced individually, but some items also have multibuy offers. For example, item A might cost
60 individually, but if you buy three A’s then they’ll cost you 150.

Items can be scanned in any order, so if we scan a B, an A, then another B, we’ll recognise
the offer for two B’s and price them at 45, giving a total price of 105. Because our store
changes its pricing frequently, we need to be able to pass in a set of pricing rules each time
we begin handling a checkout transaction.

You may use any language and technologies to design and implement your solution. The
interface for the checkout should look similar to the following pseudocode:

checkout = new Checkout(pricingRules)

checkout.Scan(item)

checkout.Scan(item)

...

price = checkout.Total
