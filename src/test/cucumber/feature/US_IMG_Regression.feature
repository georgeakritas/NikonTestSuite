@ignore
Feature: US IMG Regression Test Cases 
These test cases will be deployed against the US IMG Nikon Site

@US_IMG_Regression
Scenario: TC-IMG-Check-1 - Fully Shipped Order
Given I have navigated to the IMG PDP of the regular product 1503
Given I have navigated to the IMG PDP of the regular product 1503
Then I log out
Given I have navigated to the IMG PDP of the regular product 1503
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2170
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I log in to SSO as a regular registered user
Then I complete the order using a visa

@US_IMG_Regression
Scenario: TC-IMG-Check-2 - Partially Shipped Order  
Given I have navigated to the IMG PDP of the regular product 1503
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2170
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I complete the order using a visa

@US_IMG_Regression
Scenario: TC-IMG-Check-6 - Preorder - In Stock - Release Date Reached 
Given I have navigated to the IMG PDP of the regular product 2161
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I complete the order using a discover

@US_IMG_Regression
Scenario: TC-IMG-Check-8 - Backorder - In Stock
Given I have navigated to the IMG PDP of the regular product 4808
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I complete the order using a mastercard

@US_IMG_Regression
Scenario: TC-IMG-Check-12  - Preorder Complete Returns
Given I have navigated to the IMG PDP of the regular product 2161
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I complete the order using a discover

@US_IMG_Regression
Scenario: TC-IMG-Check-13 - Backorder Complete Returns
Given I have navigated to the IMG PDP of the regular product 4808
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I complete the order using a mastercard

@US_IMG_Regression
Scenario: TC-IMG-Check-15 - Backorder Order Canceled in SAP (After Custom time frame)
Given I have navigated to the IMG PDP of the regular product 4808
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I complete the order using a am-ex

@US_IMG_Regression
Scenario: TC-IMG-Check-17  - Preorder Order Canceled in SAP (After Custom time frame)
Given I have navigated to the IMG PDP of the regular product 2161
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I complete the order using a visa

@US_IMG_Regression
Scenario: TC-IMG-Check-18 - Digital Product
Given I have navigated to the IMG PDP of the regular product VSA56406
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I complete the order using a am-ex

@US_IMG_Regression
Scenario: TC-IMG-Check-19 - Digital Product + Regular Item 
Given I have navigated to the IMG PDP of the regular product 1503
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product VSA56406
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I complete the order using a visa

@US_IMG_Regression
Scenario: TC-IMG-Check-20 - Digital Product + Regular Item 
Given I have navigated to the IMG PDP of the regular product 13059
Then I add the product to the cart
Then I navigate to the IMG cart
Then I enter a promo code 10percentoff13059
Then I proceed to check out
Then I complete the order using a visa

@US_IMG_Regression
Scenario: TC-IMG-Check-21 - IMG - Complete Returns
Given I have navigated to the IMG PDP of the regular product 1503
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2170
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I complete the order using a visa

@US_IMG_Regression
Scenario: TC-IMG-Check-22 - IMG - Partial Returns
Given I have navigated to the IMG PDP of the regular product 1503
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2170
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I complete the order using a visa

@US_IMG_Regression
Scenario: TC-IMG-Check-23 - IMG - Order Canceled in SAP (After Custom time frame)
Given I have navigated to the IMG PDP of the regular product 1503
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2170
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I complete the order using a visa

@US_IMG_Regression
Scenario: TC-IMG-Check-26 - IMG Order using PayPal fully shipped no discounts
Given I have navigated to the IMG PDP of the regular product 1503
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2170
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I use paypal to complete the order

@US_IMG_Regression
Scenario: TC-IMG-Check-27 - IMG Order using PayPal fully shipped with instant savings
Given I have navigated to the IMG PDP of the regular product 1513
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2170
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I use paypal to complete the order

@US_IMG_Regression
Scenario: TC-IMG-Check-28 - IMG Order using PayPal fully shipped with instant savings
Given I have navigated to the IMG PDP of the regular product 13059
Then I add the product to the cart
Then I navigate to the IMG cart
Then I enter a promo code 10percentoff13059
Then I proceed to check out
Then I use paypal to complete the order

@US_IMG_Regression
Scenario: TC-IMG-Check-29 - IMG Order using AMEX fully shipped no discounts
Given I have navigated to the IMG PDP of the regular product 1503
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2170
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I complete the order using a am-ex

@US_IMG_Regression
Scenario: TC-IMG-Check-30 - IMG Order using AMEX fully shipped with instant savings
Given I have navigated to the IMG PDP of the regular product 1513
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2170
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I complete the order using a am-ex

@US_IMG_Regression
Scenario: TC-IMG-Check-31 - IMG Order using AMEX fully shipped with other discount
Given I have navigated to the IMG PDP of the regular product 13059
Then I add the product to the cart
Then I navigate to the IMG cart
Then I enter a promo code 10percentoff13059
Then I navigate to the IMG cart
Then I proceed to check out
Then I complete the order using a am-ex

@US_IMG_Regression
Scenario: TC-IMG-Check-32 - IMG order using AMEX with cart having instant savings items and also other discount on items that don’t have instant savings making sure instant saving item doesn’t get other discount fully shipped
Given I have navigated to the IMG PDP of the regular product 1513
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 13059
Then I add the product to the cart
Then I navigate to the IMG cart
Then I enter a promo code 10percentoff13059
Then I navigate to the IMG cart
Then I proceed to check out
Then I complete the order using a am-ex

@US_IMG_Regression
Scenario: TC-IMG-Check-33 - IMG Order using AMEX fully shipped no discounts
Given I have navigated to the IMG PDP of the regular product 1503
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2170
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I complete the order using a mastercard

@US_IMG_Regression
Scenario: TC-IMG-Check-34 - IMG Order using other credit card fully shipped with instant savings
Given I have navigated to the IMG PDP of the regular product 1513
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2170
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I complete the order using a discover

@US_IMG_Regression
Scenario: TC-IMG-Check-35 - IMG Order using other credit card fully shipped with other discount
Given I have navigated to the IMG PDP of the regular product 1513
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 13059
Then I add the product to the cart
Then I navigate to the IMG cart
Then I enter a promo code 10percentoff13059
Then I navigate to the IMG cart
Then I proceed to check out
Then I complete the order using a visa

@US_IMG_Regression
Scenario: TC-IMG-Check-37 - IMG Order using PayPal partial shipped no discounts
Given I have navigated to the IMG PDP of the regular product 1503
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2170
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I use paypal to complete the order

@US_IMG_Regression
Scenario: TC-IMG-Check-38 - IMG Order using PayPal partial shipped no discounts
Given I have navigated to the IMG PDP of the regular product 1513
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2170
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I use paypal to complete the order

@US_IMG_Regression
Scenario: TC-IMG-Check-39 - IMG Order using PayPal partial shipped with other discount
Given I have navigated to the IMG PDP of the regular product 1513
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 13059
Then I add the product to the cart
Then I navigate to the IMG cart
Then I enter a promo code 10percentoff13059
Then I navigate to the IMG cart
Then I proceed to check out
Then I use paypal to complete the order

@US_IMG_Regression
Scenario: TC-IMG-Check-40 - IMG order using PayPal with cart having instant savings items and also other discount on items that don’t have instant savings making sure instant saving item doesn’t get other discount fully shipped
Given I have navigated to the IMG PDP of the regular product 1513
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 13059
Then I add the product to the cart
Then I navigate to the IMG cart
Then I enter a promo code 10percentoff13059
Then I navigate to the IMG cart
Then I proceed to check out
Then I use paypal to complete the order

@US_IMG_Regression
Scenario: TC-IMG-Check-41 - IMG Order using AMEX partial shipped no discounts
Given I have navigated to the IMG PDP of the regular product 1503
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2170
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I complete the order using a am-ex

@US_IMG_Regression
Scenario: TC-IMG-Check-42 - IMG Order using AMEX partial shipped instant savings
Given I have navigated to the IMG PDP of the regular product 1513
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2170
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I complete the order using a am-ex

@US_IMG_Regression
Scenario: TC-IMG-Check-43 - IMG Order using AMEX partial shipped with other discount
Given I have navigated to the IMG PDP of the regular product 1503
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 13059
Then I add the product to the cart
Then I navigate to the IMG cart
Then I enter a promo code 10percentoff13059
Then I navigate to the IMG cart
Then I proceed to check out
Then I use paypal to complete the order

@US_IMG_Regression
Scenario: TC-IMG-Check-44 - IMG order using AMEX with cart having instant savings items and also other discount on items that don’t have instant savings making sure instant saving item doesn’t get other discount fully shipped
Given I have navigated to the IMG PDP of the regular product 1513
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 13059
Then I add the product to the cart
Then I navigate to the IMG cart
Then I enter a promo code 10percentoff13059
Then I navigate to the IMG cart
Then I proceed to check out
Then I complete the order using a am-ex

@US_IMG_Regression
Scenario: TC-IMG-Check-45 - IMG Order using other credit card partial shipped no discounts
Given I have navigated to the IMG PDP of the regular product 1503
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2170
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I complete the order using a am-ex

@US_IMG_Regression
Scenario: TC-IMG-Check-46 - IMG Order using other credit card partial shipped with instant savings
Given I have navigated to the IMG PDP of the regular product 1513
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2170
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I complete the order using a am-ex

@US_IMG_Regression
Scenario: TC-IMG-Check-47 - IMG Order using other credit card partial shipped with other discount
Given I have navigated to the IMG PDP of the regular product 1503
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 13059
Then I add the product to the cart
Then I navigate to the IMG cart
Then I enter a promo code 10percentoff13059
Then I navigate to the IMG cart
Then I proceed to check out
Then I complete the order using a am-ex

@US_IMG_Regression
Scenario: TC-IMG-Check-48 - IMG order using other credit card with cart having instant savings items and also other discount on items that don’t have instant savings making sure instant saving item doesn’t get other discount fully shipped
Given I have navigated to the IMG PDP of the regular product 1513
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 13059
Then I add the product to the cart
Then I navigate to the IMG cart
Then I enter a promo code 10percentoff13059
Then I navigate to the IMG cart
Then I proceed to check out
Then I complete the order using a visa

@US_IMG_Regression
Scenario: TC-IMG-Check-49 - All tax types (can be done on one order by testing clothing, product and software keys)
Given I have navigated to the IMG PDP of the regular product 1513
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 11855
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product VSA56406
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2161
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 4808
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I complete the order using a am-ex

@US_IMG_Regression
Scenario: TC-IMG-Check-50 - ESC accrual by testing a lens order
Given I have navigated to the IMG PDP of the regular product 11855
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I complete the order using a am-ex

@US_IMG_Regression
Scenario: TC-IMG-Check-51 - Free shipping Imaging 
Given I have navigated to the IMG PDP of the regular product 2166 
Then I add the product to the cart
Then I navigate to the IMG cart
Then I enter a promo code freeshipping2166
Then I proceed to check out
Then I complete the order using a am-ex

@US_IMG_Regression
Scenario: TC-IMG-Check-52 - Totally free of charge order IMG
Given I have navigated to the IMG PDP of the regular product 1501 
Then I add the product to the cart
Then I navigate to the IMG cart
Then I enter a promo code freeorder1501
Then I proceed to check out
Then I complete the order using a am-ex

@US_IMG_Regression
Scenario: TC-IMG-Check-75 - IMG - Refund
Given I have navigated to the IMG PDP of the regular product 1503
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2170
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I complete the order using a visa