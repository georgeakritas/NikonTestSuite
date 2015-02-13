Feature: US SRO Regression Test Cases As CSR
These test cases will be deployed against the US SRO Nikon Site

@US_SRO_Regression_CSR
Scenario: TC-SRO-Check-CSR-1 - Fully Shipped Order
Given I have navigated to the SRO PDP of the regular product 6117
Then I add the product to the cart
Given I have navigated to the SRO PDP of the regular product 6118
Then I add the product to the cart
Then I navigate to the SRO cart
Then I proceed to check out
Then I log in to SSO as a csr user
Then I add the shipping address
Then I select shipping method Next Day Air
Then I complete the order as csr

@US_SRO_Regression_CSR
Scenario: TC-SRO-Check-CSR-2 - Partially Shipped Order  
Given I have navigated to the SRO PDP of the regular product 740
Then I add the product to the cart
Given I have navigated to the SRO PDP of the regular product 5450
Then I add the product to the cart
Then I navigate to the SRO cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Second Day Air
Then I complete the order as csr

@US_SRO_Regression_CSR
Scenario: TC-SRO-Check-CSR-6 - Preorder - In Stock - Release Date Reached 
Given I have navigated to the SRO PDP of the regular product 761
Then I add the product to the cart
Then I navigate to the SRO cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Ground
Then I complete the order as csr

@US_SRO_Regression_CSR
Scenario: TC-SRO-Check-CSR-8 - Backorder - In Stock
Given I have navigated to the SRO PDP of the regular product 16303
Then I add the product to the cart
Then I navigate to the SRO cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Ground
Then I complete the order as csr

@US_SRO_Regression_CSR
Scenario: TC-SRO-Check-CSR-12  - Preorder Complete Returns
Given I have navigated to the SRO PDP of the regular product 761
Then I add the product to the cart
Then I navigate to the SRO cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Second Day Air
Then I complete the order as csr

@US_SRO_Regression_CSR
Scenario: TC-SRO-Check-CSR-13 - Backorder Complete Returns
Given I have navigated to the SRO PDP of the regular product 16303
Then I add the product to the cart
Then I navigate to the SRO cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Ground
Then I complete the order as csr

@US_SRO_Regression_CSR
Scenario: TC-SRO-Check-CSR-15 - Backorder Order Canceled in SAP (After Custom time frame)
Given I have navigated to the SRO PDP of the regular product 16303
Then I add the product to the cart
Then I navigate to the SRO cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Ground
Then I complete the order as csr

@US_SRO_Regression_CSR
Scenario: TC-SRO-Check-CSR-17  - Preorder Order Canceled in SAP (After Custom time frame)
Given I have navigated to the SRO PDP of the regular product 761
Then I add the product to the cart
Then I navigate to the SRO cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Ground
Then I complete the order as csr

@US_SRO_Regression_CSR
Scenario: TC-SRO-Check-CSR-19 - SRO - Complete Returns
Given I have navigated to the SRO PDP of the regular product 6117
Then I add the product to the cart
Given I have navigated to the SRO PDP of the regular product 740
Then I add the product to the cart
Then I navigate to the SRO cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Second Day Air
Then I complete the order as csr

@US_SRO_Regression_CSR
Scenario: TC-SRO-Check-CSR-20 - SRO - Partial Returns
Given I have navigated to the SRO PDP of the regular product 6117
Then I add the product to the cart
Given I have navigated to the SRO PDP of the regular product 740
Then I add the product to the cart
Then I navigate to the SRO cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Next Day Air
Then I complete the order as csr

@US_SRO_Regression_CSR
Scenario: TC-SRO-Check-CSR-21 - SRO - Order Canceled in SAP (After Custom time frame)
Given I have navigated to the SRO PDP of the regular product 6117
Then I add the product to the cart
Given I have navigated to the SRO PDP of the regular product 740
Then I add the product to the cart
Then I navigate to the SRO cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Next Day Air
Then I complete the order as csr

@US_SRO_Regression_CSR
Scenario: TC-SRO-Check-CSR-24 - SRO Order using PayPal fully shipped no discounts
Given I have navigated to the SRO PDP of the regular product 7549
Then I add the product to the cart
Given I have navigated to the SRO PDP of the regular product 740
Then I add the product to the cart
Then I navigate to the SRO cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Ground
Then I complete the order using paypal as csr

@US_SRO_Regression_CSR
Scenario: TC-SRO-Check-CSR-25 - SRO Order using PayPal fully shipped with instant savings
Given I have navigated to the SRO PDP of the regular product 6117
Then I add the product to the cart
Given I have navigated to the SRO PDP of the regular product 740
Then I add the product to the cart
Then I navigate to the SRO cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Ground
Then I complete the order using paypal as csr


@US_SRO_Regression_CSR
Scenario: TC-SRO-Check-CSR-28 - SRO Order using AMEX fully shipped no discounts
Given I have navigated to the SRO PDP of the regular product 7549
Then I add the product to the cart
Given I have navigated to the SRO PDP of the regular product 740
Then I add the product to the cart
Then I navigate to the SRO cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Second Day Air
Then I complete the order as csr

@US_SRO_Regression_CSR
Scenario: TC-SRO-Check-CSR-29 - SRO Order using AMEX fully shipped with instant savings
Given I have navigated to the SRO PDP of the regular product 6177
Then I add the product to the cart
Given I have navigated to the SRO PDP of the regular product 740
Then I add the product to the cart
Then I navigate to the SRO cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Second Day Air
Then I complete the order as csr

@US_SRO_Regression_CSR
Scenario: TC-SRO-Check-CSR-30 - SRO Order using AMEX fully shipped with other discount
Given I have navigated to the SRO PDP of the regular product 6118
Then I add the product to the cart
Then I navigate to the SRO cart
Then I enter a promo code 10percentoff6118
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Ground
Then I complete the order as csr


@US_SRO_Regression_CSR
Scenario: TC-SRO-Check-CSR-32 - SRO Order using other cards fully shipped no discounts
Given I have navigated to the SRO PDP of the regular product 7549
Then I add the product to the cart
Given I have navigated to the SRO PDP of the regular product 740
Then I add the product to the cart
Then I navigate to the SRO cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Next Day Air
Then I complete the order as csr

@US_SRO_Regression_CSR
Scenario: TC-SRO-Check-CSR-33 - SRO Order using other credit card fully shipped with instant savings
Given I have navigated to the SRO PDP of the regular product 6117
Then I add the product to the cart
Given I have navigated to the SRO PDP of the regular product 740
Then I add the product to the cart
Then I navigate to the SRO cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Ground
Then I complete the order as csr

@US_SRO_Regression_CSR
Scenario: TC-SRO-Check-CSR-40 - SRO Order using AMEX partial shipped no discounts
Given I have navigated to the SRO PDP of the regular product 7549
Then I add the product to the cart
Given I have navigated to the SRO PDP of the regular product 740
Then I add the product to the cart
Then I navigate to the SRO cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Ground
Then I complete the order as csr

@US_SRO_Regression_CSR
Scenario: TC-SRO-Check-CSR-41 - SRO Order using VISA partial shipped instant savings
Given I have navigated to the SRO PDP of the regular product 6117
Then I add the product to the cart
Given I have navigated to the SRO PDP of the regular product 740
Then I add the product to the cart
Then I navigate to the SRO cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Ground
Then I complete the order as csr

@US_SRO_Regression_CSR
Scenario: TC-SRO-Check-CSR-44 - SRO Order using VISA card partial shipped no discounts
Given I have navigated to the SRO PDP of the regular product 7549
Then I add the product to the cart
Given I have navigated to the SRO PDP of the regular product 740
Then I add the product to the cart
Then I navigate to the SRO cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Ground
Then I complete the order as csr

@US_SRO_Regression_CSR
Scenario: TC-SRO-Check-CSR-45 - SRO Order using VISA partial shipped with instant savings
Given I have navigated to the SRO PDP of the regular product 6117
Then I add the product to the cart
Given I have navigated to the SRO PDP of the regular product 740
Then I add the product to the cart
Then I navigate to the SRO cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Ground
Then I complete the order as csr

@US_SRO_Regression_CSR
Scenario: TC-SRO-Check-CSR-48 - SRO Order using VISA with Free Shipping
Given I have navigated to the SRO PDP of the regular product 7549
Then I add the product to the cart
Then I navigate to the SRO cart
Then I enter a promo code freeshipping7549
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Ground
Then I complete the order as csr