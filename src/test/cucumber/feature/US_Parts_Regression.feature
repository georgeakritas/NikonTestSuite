@ignore
Feature: US Parts Regression Test Cases 
These test cases will be deployed against the US Parts Nikon Site

@US_Parts_Regression
Scenario: TC-Parts-Check-1 - Fully Shipped Order
Given I have navigated to the PARTS PDP of the parts product 1F998-697
Then I add the product to the cart
Given I have navigated to the PARTS PDP of the parts product 1F998-074
Then I add the product to the cart
Then I navigate to the Parts cart
Then I proceed to check out
Then I complete the order using a visa

@US_Parts_Regression
Scenario: TC-Parts-Check-2 - Partially Shipped Order  
Given I have navigated to the PARTS PDP of the parts product 1F998-697
Then I add the product to the cart
Given I have navigated to the PARTS PDP of the parts product 1F998-074
Then I add the product to the cart
Then I navigate to the PARTS cart
Then I proceed to check out
Then I complete the order using a visa

@US_Parts_Regression
Scenario: TC-Parts-Check-4 - Order Canceled in SAP (After Custom time frame)
Given I have navigated to the PARTS PDP of the parts product 1F998-074
Then I add the product to the cart
Then I navigate to the PARTS cart
Then I proceed to check out
Then I complete the order using a am-ex

@US_Parts_Regression
Scenario: TC-Parts-Check-7- PARTS Order using PayPal fully shipped 
Given I have navigated to the PARTS PDP of the parts product 1F998-697
Then I add the product to the cart
Given I have navigated to the PARTS PDP of the parts product 1F998-074
Then I add the product to the cart
Then I navigate to the PARTS cart
Then I proceed to check out
Then I use paypal to complete the order

@US_Parts_Regression
Scenario: TC-Parts-Check-8 - PARTS Order using am-ex fully shipped Second Day Air
Given I have navigated to the PARTS PDP of the parts product 1F998-697
Then I add the product to the cart
Given I have navigated to the PARTS PDP of the parts product 1F998-074
Then I add the product to the cart
Then I navigate to the PARTS cart
Then I proceed to check out
Then I add the select shipping method Second Day Air
Then I complete the order using a am-ex

@US_Parts_Regression
Scenario: TC-Parts-Check-9 - PARTS Order using visa fully shipped Next Day Air
Given I have navigated to the PARTS PDP of the parts product 1F998-074
Then I add the product to the cart
Then I navigate to the PARTS cart
Then I proceed to check out
Then I add the select shipping method Second Day Air
Then I complete the order using a visa

@US_Parts_Regression
Scenario: TC-Parts-Check-10 - PARTS Order using paypal fully shipped Second day Air
Given I have navigated to the PARTS PDP of the parts product 1F998-697
Then I add the product to the cart
Given I have navigated to the PARTS PDP of the parts product 1F998-074
Then I add the product to the cart
Then I navigate to the PARTS cart
Then I proceed to check out
Then I add the select shipping method Second Day Air
Then I use paypal to complete the order

@US_Parts_Regression
Scenario: TC-Parts-Check-13 - PARTS Free shipping Parts Order
Given I have navigated to the PARTS PDP of the parts 1F998-697
Then I add the product to the cart
Then I navigate to the PARTS cart
Then I enter a promo code freeshipping1F998-697
Then I proceed to check out
Then I complete the order using a visa