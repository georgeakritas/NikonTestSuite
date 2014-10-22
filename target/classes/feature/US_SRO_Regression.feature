
Feature: US SRO Regression Test Cases 
These test cases will be deployed against the US SRO Nikon Site

@US_SRO_Regression
Scenario: TC-SRO-Check-1 - Fully Shipped Order
Given I have navigated to the SRO PDP of the regular product 6117
Then I add the product to the cart
Given I have navigated to the SRO PDP of the regular product 6118
Then I add the product to the cart
Then I navigate to the cart
Then I proceed to check out
Then I complete the order using a visa

@US_SRO_Regression
Scenario: TC-SRO-Check-2 - Partially Shipped Order  
Given I have navigated to the SRO PDP of the regular product 740
Then I add the product to the cart
Given I have navigated to the SRO PDP of the regular product 5450
Then I add the product to the cart
Then I navigate to the cart
Then I proceed to check out
Then I complete the order using a visa

@US_SRO_Regression
Scenario: TC-SRO-Check-6 - Preorder - In Stock - Release Date Reached 
Given I have navigated to the SRO PDP of the regular product 761
Then I add the product to the cart
Then I navigate to the cart
Then I proceed to check out
Then I complete the order using a discover

@US_SRO_Regression
Scenario: TC-SRO-Check-8 - Backorder - In Stock
Given I have navigated to the SRO PDP of the regular product 16303
Then I add the product to the cart
Then I navigate to the cart
Then I proceed to check out
Then I complete the order using a mastercard

@US_SRO_Regression
Scenario: TC-SRO-Check-12  - Preorder Complete Returns
Given I have navigated to the SRO PDP of the regular product 761
Then I add the product to the cart
Then I navigate to the cart
Then I proceed to check out
Then I complete the order using a discover

@US_SRO_Regression
Scenario: TC-SRO-Check-13 - Backorder Complete Returns
Given I have navigated to the SRO PDP of the regular product 16303
Then I add the product to the cart
Then I navigate to the cart
Then I proceed to check out
Then I complete the order using a mastercard

@US_SRO_Regression
Scenario: TC-SRO-Check-15 - Backorder Order Canceled in SAP (After Custom time frame)
Given I have navigated to the SRO PDP of the regular product 16303
Then I add the product to the cart
Then I navigate to the cart
Then I proceed to check out
Then I complete the order using a am-ex

@US_SRO_Regression
Scenario: TC-SRO-Check-17  - Preorder Order Canceled in SAP (After Custom time frame)
Given I have navigated to the SRO PDP of the regular product 761
Then I add the product to the cart
Then I navigate to the cart
Then I proceed to check out
Then I complete the order using a visa

@US_SRO_Regression
Scenario: TC-SRO-Check-19 - SRO - Complete Returns
Given I have navigated to the SRO PDP of the regular product 6117
Then I add the product to the cart
Given I have navigated to the SRO PDP of the regular product 740
Then I add the product to the cart
Then I navigate to the cart
Then I proceed to check out
Then I complete the order using a visa

@US_SRO_Regression
Scenario: TC-SRO-Check-20 - SRO - Partial Returns
Given I have navigated to the SRO PDP of the regular product 6117
Then I add the product to the cart
Given I have navigated to the SRO PDP of the regular product 740
Then I add the product to the cart
Then I navigate to the cart
Then I proceed to check out
Then I complete the order using a visa

@US_SRO_Regression
Scenario: TC-SRO-Check-21 - SRO - Order Canceled in SAP (After Custom time frame)
Given I have navigated to the SRO PDP of the regular product 6117
Then I add the product to the cart
Given I have navigated to the SRO PDP of the regular product 740
Then I add the product to the cart
Then I navigate to the cart
Then I proceed to check out
Then I complete the order using a visa

@US_SRO_Regression
Scenario: TC-SRO-Check-24 - SRO Order using PayPal fully shipped no discounts
Given I have navigated to the SRO PDP of the regular product 7549
Then I add the product to the cart
Given I have navigated to the SRO PDP of the regular product 740
Then I add the product to the cart
Then I navigate to the cart
Then I proceed to check out
Then I use paypal to complete the order

@US_SRO_Regression
Scenario: TC-SRO-Check-25 - SRO Order using PayPal fully shipped with instant savings
Given I have navigated to the SRO PDP of the regular product 6117
Then I add the product to the cart
Given I have navigated to the SRO PDP of the regular product 740
Then I add the product to the cart
Then I navigate to the cart
Then I proceed to check out
Then I use paypal to complete the order


@US_SRO_Regression
Scenario: TC-SRO-Check-28 - SRO Order using AMEX fully shipped no discounts
Given I have navigated to the SRO PDP of the regular product 7549
Then I add the product to the cart
Given I have navigated to the SRO PDP of the regular product 740
Then I add the product to the cart
Then I navigate to the cart
Then I proceed to check out
Then I complete the order using a am-ex

@US_SRO_Regression
Scenario: TC-SRO-Check-29 - SRO Order using AMEX fully shipped with instant savings
Given I have navigated to the SRO PDP of the regular product 6177
Then I add the product to the cart
Given I have navigated to the SRO PDP of the regular product 740
Then I add the product to the cart
Then I navigate to the cart
Then I proceed to check out
Then I complete the order using a am-ex

@US_SRO_Regression
Scenario: TC-SRO-Check-30 - SRO Order using AMEX fully shipped with other discount
Given I have navigated to the SRO PDP of the regular product 6118
Then I add the product to the cart
Then I navigate to the cart
Then I enter a promo code 10percentoff6118
Then I proceed to check out
Then I complete the order using a am-ex


@US_SRO_Regression
Scenario: TC-SRO-Check-32 - SRO Order using other cards fully shipped no discounts
Given I have navigated to the SRO PDP of the regular product 7549
Then I add the product to the cart
Given I have navigated to the SRO PDP of the regular product 740
Then I add the product to the cart
Then I navigate to the cart
Then I proceed to check out
Then I complete the order using a mastercard

@US_SRO_Regression
Scenario: TC-SRO-Check-33 - SRO Order using other credit card fully shipped with instant savings
Given I have navigated to the SRO PDP of the regular product 6117
Then I add the product to the cart
Given I have navigated to the SRO PDP of the regular product 740
Then I add the product to the cart
Then I navigate to the cart
Then I proceed to check out
Then I complete the order using a discover

@US_SRO_Regression
Scenario: TC-SRO-Check-40 - SRO Order using AMEX partial shipped no discounts
Given I have navigated to the SRO PDP of the regular product 7549
Then I add the product to the cart
Given I have navigated to the SRO PDP of the regular product 740
Then I add the product to the cart
Then I navigate to the cart
Then I proceed to check out
Then I complete the order using a am-ex

@US_SRO_Regression
Scenario: TC-SRO-Check-41 - SRO Order using AMEX partial shipped instant savings
Given I have navigated to the SRO PDP of the regular product 6117
Then I add the product to the cart
Given I have navigated to the SRO PDP of the regular product 740
Then I add the product to the cart
Then I navigate to the cart
Then I proceed to check out
Then I complete the order using a am-ex

@US_SRO_Regression
Scenario: TC-SRO-Check-44 - SRO Order using other credit card partial shipped no discounts
Given I have navigated to the SRO PDP of the regular product 7549
Then I add the product to the cart
Given I have navigated to the SRO PDP of the regular product 740
Then I add the product to the cart
Then I navigate to the cart
Then I proceed to check out
Then I complete the order using a visa

@US_SRO_Regression
Scenario: TC-SRO-Check-45 - SRO Order using other credit card partial shipped with instant savings
Given I have navigated to the SRO PDP of the regular product 6117
Then I add the product to the cart
Given I have navigated to the SRO PDP of the regular product 740
Then I add the product to the cart
Then I navigate to the cart
Then I proceed to check out
Then I complete the order using a discover

@US_SRO_Regression
Scenario: TC-SRO-Check-48 - SRO Order using AMEX with Free Shipping
Given I have navigated to the SRO PDP of the regular product 7549
Then I add the product to the cart
Then I navigate to the cart
Then I enter a promo code freeshipping7549
Then I proceed to check out
Then I complete the order using a am-ex