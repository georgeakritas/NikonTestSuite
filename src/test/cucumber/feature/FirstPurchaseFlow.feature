Feature: Purchase Flow Nikon 
As a developer, I want to know how Purchase
A product on the nikon site

@FirstPurchaseFlow
Scenario: Purchase a nikon IMG product
Given I have navigated to the IMG PDP of the regular product 1513
Then I add the product to the cart
Then I navigate to the IMG cart
Then I select the 2 from the quantity dropdown
Then I proceed to check out
Then I log in to SSO as a regular registered user
Then I complete the order using a am-ex
 