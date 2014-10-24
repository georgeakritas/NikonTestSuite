Feature: US IMG Regression Test Cases 
These test cases will be deployed against the US IMG Nikon Site

@ignore
Scenario: TC-IMG-Check-1 - Fully Shipped Order
Given I have navigated to the Brazil IMG PDP of the product 1513
Then I add the product to the cart
Given I have navigated to the Brazil IMG PDP of the product 2170
Then I add the product to the cart
Then I navigate to the BR cart
Then I proceed to check out
Then I complete the order using a visa

@ignore
Scenario: TC-IMG-Check-2 - Partially Shipped Order  
Given I have navigated to the Brazil IMG PDP of the product 1513
Then I add the product to the cart
Given I have navigated to the Brazil IMG PDP of the product 2170
Then I add the product to the cart
Then I navigate to the BR cart
Then I proceed to check out
Then I complete the order using a visa

@ignore
Scenario: TC-IMG-Check-8 - Backorder - In Stock
Given I have navigated to the Brazil IMG PDP of the product 2137
Then I add the product to the cart
Then I navigate to the BR cart
Then I proceed to check out
Then I complete the order using a mastercard

@ignore
Scenario: TC-IMG-Check-13 - Backorder Complete Returns
Given I have navigated to the Brazil IMG PDP of the product 2137
Then I add the product to the cart
Then I navigate to the BR cart
Then I proceed to check out
Then I complete the order using a mastercard

@ignore
Scenario: TC-IMG-Check-15 - Backorder Order Canceled in SAP (After Custom time frame)
Given I have navigated to the Brazil IMG PDP of the product 2137
Then I add the product to the cart
Then I navigate to the BR cart
Then I proceed to check out
Then I complete the order using a am-ex

@ignore
Scenario: TC-IMG-Check-21 - IMG - Complete Returns
Given I have navigated to the Brazil IMG PDP of the product 1513
Then I add the product to the cart
Given I have navigated to the Brazil IMG PDP of the product 2170
Then I add the product to the cart
Then I navigate to the BR cart
Then I proceed to check out
Then I complete the order using a visa

@ignore
Scenario: TC-IMG-Check-22 - IMG - Partial Returns
Given I have navigated to the Brazil IMG PDP of the product 1513
Then I add the product to the cart
Given I have navigated to the Brazil IMG PDP of the product 2170
Then I add the product to the cart
Then I navigate to the BR cart
Then I proceed to check out
Then I complete the order using a visa

@ignore
Scenario: TC-IMG-Check-23 - IMG - Order Canceled in SAP (After Custom time frame)
Given I have navigated to the Brazil IMG PDP of the product 1513
Then I add the product to the cart
Given I have navigated to the Brazil IMG PDP of the product 2170
Then I add the product to the cart
Then I navigate to the BR cart
Then I proceed to check out
Then I complete the order using a visa

@ignore
Scenario: TC-IMG-Check-26 - IMG Order using Mastercard fully shipped no discounts
Given I have navigated to the Brazil IMG PDP of the product 1513
Then I add the product to the cart
Given I have navigated to the Brazil IMG PDP of the product 2170
Then I add the product to the cart
Then I navigate to the BR cart
Then I proceed to check out
Then I complete the order using a mastercard

@ignore
Scenario: TC-IMG-Check-27 - IMG Order using mastercard fully shipped with instant savings
Given I have navigated to the Brazil IMG PDP of the product 2213
Then I add the product to the cart
Given I have navigated to the Brazil IMG PDP of the product 2170
Then I add the product to the cart
Then I navigate to the BR cart
Then I proceed to check out
Then I complete the order using a mastercard

@ignore
Scenario: TC-IMG-Check-28 - IMG Order using mastercard fully shipped with other discount
Given I have navigated to the Brazil IMG PDP of the product 1935
Then I add the product to the cart
Then I navigate to the BR cart
Then I enter a promo code 10percentoff1935
Then I proceed to check out
Then I complete the order using a mastercard

@ignore
Scenario: TC-IMG-Check-29 - IMG Order using AMEX fully shipped no discounts
Given I have navigated to the Brazil IMG PDP of the product 1513
Then I add the product to the cart
Given I have navigated to the Brazil IMG PDP of the product 2170
Then I add the product to the cart
Then I navigate to the BR cart
Then I proceed to check out
Then I complete the order using a am-ex

@ignore
Scenario: TC-IMG-Check-30 - IMG Order using AMEX fully shipped with instant savings
Given I have navigated to the Brazil IMG PDP of the product 2213
Then I add the product to the cart
Given I have navigated to the Brazil IMG PDP of the product 2170
Then I add the product to the cart
Then I navigate to the BR cart
Then I proceed to check out
Then I complete the order using a am-ex

@ignore
Scenario: TC-IMG-Check-31 - IMG Order using AMEX fully shipped with other discount
Given I have navigated to the Brazil IMG PDP of the product 1935
Then I add the product to the cart
Then I navigate to the BR cart
Then I enter a promo code 10percentoff1935
Then I navigate to the BR cart
Then I proceed to check out
Then I complete the order using a am-ex

@ignore
Scenario: TC-IMG-Check-32 - IMG order using AMEX with cart having instant savings items and also other discount on items that don’t have instant savings making sure instant saving item doesn’t get other discount fully shipped
Given I have navigated to the Brazil IMG PDP of the product 2213
Then I add the product to the cart
Given I have navigated to the Brazil IMG PDP of the product 1935
Then I add the product to the cart
Then I navigate to the BR cart
Then I enter a promo code 10percentoff1935
Then I navigate to the BR cart
Then I proceed to check out
Then I complete the order using a am-ex

@ignore
Scenario: TC-IMG-Check-33 - IMG Order using AMEX fully shipped no discounts
Given I have navigated to the Brazil IMG PDP of the product 1513
Then I add the product to the cart
Given I have navigated to the Brazil IMG PDP of the product 2170
Then I add the product to the cart
Then I navigate to the BR cart
Then I proceed to check out
Then I complete the order using a mastercard

@ignore
Scenario: TC-IMG-Check-34 - IMG Order using other credit card fully shipped with instant savings
Given I have navigated to the Brazil IMG PDP of the product 2213
Then I add the product to the cart
Given I have navigated to the Brazil IMG PDP of the product 2170
Then I add the product to the cart
Then I navigate to the BR cart
Then I proceed to check out
Then I complete the order using a mastercard

@ignore
Scenario: TC-IMG-Check-35 - IMG Order using other credit card fully shipped with other discount
Given I have navigated to the Brazil IMG PDP of the product 1513
Then I add the product to the cart
Given I have navigated to the Brazil IMG PDP of the product 1935
Then I add the product to the cart
Then I navigate to the BR cart
Then I enter a promo code 10percentoff1935
Then I navigate to the BR cart
Then I proceed to check out
Then I complete the order using a visa

@ignore
Scenario: TC-IMG-Check-37 - IMG Order using mastercard partial shipped no discounts
Given I have navigated to the Brazil IMG PDP of the product 1513
Then I add the product to the cart
Given I have navigated to the Brazil IMG PDP of the product 2170
Then I add the product to the cart
Then I navigate to the BR cart
Then I proceed to check out
Then I complete the order using a mastercard

@ignore
Scenario: TC-IMG-Check-38 - IMG Order using Mastercard partial shipped no discounts
Given I have navigated to the Brazil IMG PDP of the product 1513
Then I add the product to the cart
Given I have navigated to the Brazil IMG PDP of the product 2170
Then I add the product to the cart
Then I navigate to the BR cart
Then I proceed to check out
Then I complete the order using a mastercard

@ignore
Scenario: TC-IMG-Check-39 - IMG Order using Visa partial shipped with other discount
Given I have navigated to the Brazil IMG PDP of the product 1513
Then I add the product to the cart
Given I have navigated to the Brazil IMG PDP of the product 1935
Then I add the product to the cart
Then I navigate to the BR cart
Then I enter a promo code 10percentoff1935
Then I navigate to the BR cart
Then I proceed to check out
Then I complete the order using a visa

@ignore
Scenario: TC-IMG-Check-40 - IMG order using Visa with cart having instant savings items and also other discount on items that don’t have instant savings making sure instant saving item doesn’t get other discount fully shipped
Given I have navigated to the Brazil IMG PDP of the product 2213
Then I add the product to the cart
Given I have navigated to the Brazil IMG PDP of the product 1935
Then I add the product to the cart
Then I navigate to the BR cart
Then I enter a promo code 10percentoff1935
Then I navigate to the BR cart
Then I proceed to check out
Then I complete the order using a visa

@ignore
Scenario: TC-IMG-Check-41 - IMG Order using AMEX partial shipped no discounts
Given I have navigated to the Brazil IMG PDP of the product 1513
Then I add the product to the cart
Given I have navigated to the Brazil IMG PDP of the product 2170
Then I add the product to the cart
Then I navigate to the BR cart
Then I proceed to check out
Then I complete the order using a am-ex

@ignore
Scenario: TC-IMG-Check-42 - IMG Order using AMEX partial shipped instant savings
Given I have navigated to the Brazil IMG PDP of the product 2213
Then I add the product to the cart
Given I have navigated to the Brazil IMG PDP of the product 2170
Then I add the product to the cart
Then I navigate to the BR cart
Then I proceed to check out
Then I complete the order using a am-ex

@ignore
Scenario: TC-IMG-Check-43 - IMG Order using AMEX partial shipped with other discount
Given I have navigated to the Brazil IMG PDP of the product 1513
Then I add the product to the cart
Given I have navigated to the Brazil IMG PDP of the product 1935
Then I add the product to the cart
Then I navigate to the BR cart
Then I enter a promo code 10percentoff1935
Then I navigate to the BR cart
Then I proceed to check out
Then I complete the order using a am-ex

@ignore
Scenario: TC-IMG-Check-44 - IMG order using AMEX with cart having instant savings items and also other discount on items that don’t have instant savings making sure instant saving item doesn’t get other discount fully shipped
Given I have navigated to the Brazil IMG PDP of the product 2213
Then I add the product to the cart
Given I have navigated to the Brazil IMG PDP of the product 1935
Then I add the product to the cart
Then I navigate to the BR cart
Then I enter a promo code 10percentoff1935
Then I navigate to the BR cart
Then I proceed to check out
Then I complete the order using a am-ex

@ignore
Scenario: TC-IMG-Check-45 - IMG Order using other credit card partial shipped no discounts
Given I have navigated to the Brazil IMG PDP of the product 1513
Then I add the product to the cart
Given I have navigated to the Brazil IMG PDP of the product 2170
Then I add the product to the cart
Then I navigate to the BR cart
Then I proceed to check out
Then I complete the order using a am-ex

@ignore
Scenario: TC-IMG-Check-46 - IMG Order using other credit card partial shipped with instant savings
Given I have navigated to the Brazil IMG PDP of the product 2213
Then I add the product to the cart
Given I have navigated to the Brazil IMG PDP of the product 2170
Then I add the product to the cart
Then I navigate to the BR cart
Then I proceed to check out
Then I complete the order using a am-ex

@ignore
Scenario: TC-IMG-Check-47 - IMG Order using other credit card partial shipped with other discount
Given I have navigated to the Brazil IMG PDP of the product 1513
Then I add the product to the cart
Given I have navigated to the Brazil IMG PDP of the product 1935
Then I add the product to the cart
Then I navigate to the BR cart
Then I enter a promo code 10percentoff1935
Then I navigate to the BR cart
Then I proceed to check out
Then I complete the order using a am-ex

@ignore
Scenario: TC-IMG-Check-48 - IMG order using other credit card with cart having instant savings items and also other discount on items that don’t have instant savings making sure instant saving item doesn’t get other discount fully shipped
Given I have navigated to the Brazil IMG PDP of the product 2213
Then I add the product to the cart
Given I have navigated to the Brazil IMG PDP of the product 1935
Then I add the product to the cart
Then I navigate to the BR cart
Then I enter a promo code 10percentoff1935
Then I navigate to the BR cart
Then I proceed to check out
Then I complete the order using a visa

@ignore
Scenario: TC-IMG-Check-75 - IMG - Refund
Given I have navigated to the Brazil IMG PDP of the product 1513
Then I add the product to the cart
Given I have navigated to the Brazil IMG PDP of the product 2170
Then I add the product to the cart
Then I navigate to the BR cart
Then I proceed to check out
Then I complete the order using a visa