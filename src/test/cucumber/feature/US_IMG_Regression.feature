Feature: US IMG Regression Test Cases 
These test cases will be deployed against the US IMG Nikon Site

@US_IMG_Regression
Scenario: TC-IMG-Check-1 - Fully Shipped Order
Given I have navigated to the IMG PDP of the regular product 1513
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2170
Then I add the product to the cart
Then I navigate to the cart
Then I proceed to check out
Then I complete the order using a visa

@US_IMG_Regression
Scenario: TC-IMG-Check-2 - Partially Shipped Order  
Given I have navigated to the IMG PDP of the regular product 1513
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2170
Then I add the product to the cart
Then I navigate to the cart
Then I proceed to check out
Then I complete the order using a visa

@US_IMG_Regression
Scenario: TC-IMG-Check-6 - Preorder - In Stock - Release Date Reached 
Given I have navigated to the IMG PDP of the regular product 2161
Then I add the product to the cart
Then I navigate to the cart
Then I proceed to check out
Then I complete the order using a discover

@US_IMG_Regression
Scenario: TC-IMG-Check-8 - Backorder - In Stock
Given I have navigated to the IMG PDP of the regular product 4808
Then I add the product to the cart
Then I navigate to the cart
Then I proceed to check out
Then I complete the order using a mastercard

@US_IMG_Regression
Scenario: TC-IMG-Check-12  - Preorder Complete Returns
Given I have navigated to the IMG PDP of the regular product 2161
Then I add the product to the cart
Then I navigate to the cart
Then I proceed to check out
Then I complete the order using a discover

@US_IMG_Regression
Scenario: TC-IMG-Check-13 - Backorder Complete Returns
Given I have navigated to the IMG PDP of the regular product 4808
Then I add the product to the cart
Then I navigate to the cart
Then I proceed to check out
Then I complete the order using a mastercard

@US_IMG_Regression
Scenario: TC-IMG-Check-15 - Backorder Order Canceled in SAP (After Custom time frame)
Given I have navigated to the IMG PDP of the regular product 4808
Then I add the product to the cart
Then I navigate to the cart
Then I proceed to check out
Then I complete the order using a am-ex

@US_IMG_Regression
Scenario: TC-IMG-Check-17  - Preorder Order Canceled in SAP (After Custom time frame)
Given I have navigated to the IMG PDP of the regular product 2161
Then I add the product to the cart
Then I navigate to the cart
Then I proceed to check out
Then I complete the order using a visa

@US_IMG_Regression
Scenario: TC-IMG-Check-18 - Digital Product
Given I have navigated to the IMG PDP of the regular product VSA56406
Then I add the product to the cart
Then I navigate to the cart
Then I proceed to check out
Then I complete the order using a am-ex

@US_IMG_Regression
Scenario: TC-IMG-Check-19 - Digital Product + Regular Item 
Given I have navigated to the IMG PDP of the regular product 1513
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product VSA56406
Then I add the product to the cart
Then I navigate to the cart
Then I proceed to check out
Then I complete the order using a visa

@US_IMG_Regression
Scenario: TC-IMG-Check-21 - IMG - Complete Returns
Given I have navigated to the IMG PDP of the regular product 1513
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2170
Then I add the product to the cart
Then I navigate to the cart
Then I proceed to check out
Then I complete the order using a visa

@US_IMG_Regression
Scenario: TC-IMG-Check-22 - IMG - Partial Returns
Given I have navigated to the IMG PDP of the regular product 1513
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2170
Then I add the product to the cart
Then I navigate to the cart
Then I proceed to check out
Then I complete the order using a visa