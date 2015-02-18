@ignore
Feature: US IMG Regression Test Cases 
These test cases will be deployed against the US IMG Nikon Site

@US_IMG_Regression
Scenario: TC-IMG-CSR-Check-1 - Fully Shipped Order
Given I have navigated to the IMG PDP of the regular product 1503
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2170
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Second Day Air
Then I complete the order as csr

@US_IMG_Regression
Scenario: TC-IMG-CSR-Check-2 - Partially Shipped Order  
Given I have navigated to the IMG PDP of the regular product 1503
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2170
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Second Day Air
Then I complete the order as csr

@US_IMG_Regression
Scenario: TC-IMG-CSR-Check-6 - Preorder - In Stock - Release Date Reached 
Given I have navigated to the IMG PDP of the regular product 2161
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Second Day Air
Then I complete the order as csr

@US_IMG_Regression
Scenario: TC-IMG-CSR-Check-8 - Backorder - In Stock
Given I have navigated to the IMG PDP of the regular product 4808
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Second Day Air
Then I complete the order as csr

@US_IMG_Regression
Scenario: TC-IMG-CSR-Check-12  - Preorder Complete Returns
Given I have navigated to the IMG PDP of the regular product 2161
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Second Day Air
Then I complete the order as csr

@US_IMG_Regression
Scenario: TC-IMG-CSR-Check-13 - Backorder Complete Returns
Given I have navigated to the IMG PDP of the regular product 4808
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Second Day Air
Then I complete the order as csr

@US_IMG_Regression
Scenario: TC-IMG-CSR-Check-15 - Backorder Order Canceled in SAP (After Custom time frame)
Given I have navigated to the IMG PDP of the regular product 4808
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Second Day Air
Then I complete the order as csr

@US_IMG_Regression
Scenario: TC-IMG-CSR-Check-17  - Preorder Order Canceled in SAP (After Custom time frame)
Given I have navigated to the IMG PDP of the regular product 2161
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Second Day Air
Then I complete the order as csr

@US_IMG_Regression
Scenario: TC-IMG-CSR-Check-18 - Digital Product
Given I have navigated to the IMG PDP of the regular product VSA56406
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Second Day Air
Then I complete the order as csr

@US_IMG_Regression
Scenario: TC-IMG-CSR-Check-19 - Digital Product + Regular Item 
Given I have navigated to the IMG PDP of the regular product 1503
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product VSA56406
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Second Day Air
Then I complete the order as csr

@US_IMG_Regression
Scenario: TC-IMG-CSR-Check-20 - Digital Product + Regular Item 
Given I have navigated to the IMG PDP of the regular product 2197
Then I add the product to the cart
Then I navigate to the IMG cart
Then I enter a promo code 10percentoff2197
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Second Day Air
Then I complete the order as csr

@US_IMG_Regression
Scenario: TC-IMG-CSR-Check-21 - IMG - Complete Returns
Given I have navigated to the IMG PDP of the regular product 1503
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2170
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Second Day Air
Then I complete the order as csr

@US_IMG_Regression
Scenario: TC-IMG-CSR-Check-22 - IMG - Partial Returns
Given I have navigated to the IMG PDP of the regular product 1503
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2170
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Second Day Air
Then I complete the order as csr

@US_IMG_Regression
Scenario: TC-IMG-CSR-Check-23 - IMG - Order Canceled in SAP (After Custom time frame)
Given I have navigated to the IMG PDP of the regular product 1503
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2170
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Second Day Air
Then I complete the order as csr

@US_IMG_Regression
Scenario: TC-IMG-CSR-Check-26 - IMG Order using PayPal fully shipped no discounts
Given I have navigated to the IMG PDP of the regular product 1503
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2170
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Second Day Air
Then I complete the order using paypal as csr

@US_IMG_Regression
Scenario: TC-IMG-CSR-Check-27 - IMG Order using PayPal fully shipped with instant savings
Given I have navigated to the IMG PDP of the regular product 1513
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2170
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Second Day Air
Then I complete the order using paypal as csr

@US_IMG_Regression
Scenario: TC-IMG-CSR-Check-28 - IMG Order using PayPal fully shipped with instant savings
Given I have navigated to the IMG PDP of the regular product 2197
Then I add the product to the cart
Then I navigate to the IMG cart
Then I enter a promo code 10percentoff2197
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Second Day Air
Then I complete the order using paypal as csr

@US_IMG_Regression
Scenario: TC-IMG-CSR-Check-29 - IMG Order using AMEX fully shipped no discounts
Given I have navigated to the IMG PDP of the regular product 1503
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2170
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Second Day Air
Then I complete the order as csr

@US_IMG_Regression
Scenario: TC-IMG-CSR-Check-30 - IMG Order using AMEX fully shipped with instant savings
Given I have navigated to the IMG PDP of the regular product 1513
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2170
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Second Day Air
Then I complete the order as csr

@US_IMG_Regression
Scenario: TC-IMG-CSR-Check-31 - IMG Order using AMEX fully shipped with other discount
Given I have navigated to the IMG PDP of the regular product 2197
Then I add the product to the cart
Then I navigate to the IMG cart
Then I enter a promo code 10percentoff2197
Then I navigate to the IMG cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Second Day Air
Then I complete the order as csr

@US_IMG_Regression
Scenario: TC-IMG-CSR-Check-32 - IMG order using AMEX with cart having instant savings items and also other discount on items that don’t have instant savings making sure instant saving item doesn’t get other discount fully shipped
Given I have navigated to the IMG PDP of the regular product 1513
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2197
Then I add the product to the cart
Then I navigate to the IMG cart
Then I enter a promo code 10percentoff2197
Then I navigate to the IMG cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Second Day Air
Then I complete the order as csr

@US_IMG_Regression
Scenario: TC-IMG-CSR-Check-33 - IMG Order using AMEX fully shipped no discounts
Given I have navigated to the IMG PDP of the regular product 1503
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2170
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Second Day Air
Then I complete the order as csr

@US_IMG_Regression
Scenario: TC-IMG-CSR-Check-34 - IMG Order using other credit card fully shipped with instant savings
Given I have navigated to the IMG PDP of the regular product 1513
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2170
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Second Day Air
Then I complete the order as csr

@US_IMG_Regression
Scenario: TC-IMG-CSR-Check-35 - IMG Order using other credit card fully shipped with other discount
Given I have navigated to the IMG PDP of the regular product 1513
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2197
Then I add the product to the cart
Then I navigate to the IMG cart
Then I enter a promo code 10percentoff2197
Then I navigate to the IMG cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Second Day Air
Then I complete the order as csr

@US_IMG_Regression
Scenario: TC-IMG-CSR-Check-37 - IMG Order using PayPal partial shipped no discounts
Given I have navigated to the IMG PDP of the regular product 1503
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2170
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Second Day Air
Then I complete the order using paypal as csr

@US_IMG_Regression
Scenario: TC-IMG-CSR-Check-38 - IMG Order using PayPal partial shipped no discounts
Given I have navigated to the IMG PDP of the regular product 1513
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2170
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Second Day Air
Then I complete the order using paypal as csr

@US_IMG_Regression
Scenario: TC-IMG-CSR-Check-39 - IMG Order using PayPal partial shipped with other discount
Given I have navigated to the IMG PDP of the regular product 1513
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2197
Then I add the product to the cart
Then I navigate to the IMG cart
Then I enter a promo code 10percentoff2197
Then I navigate to the IMG cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Second Day Air
Then I complete the order using paypal as csr

@US_IMG_Regression
Scenario: TC-IMG-CSR-Check-40 - IMG order using PayPal with cart having instant savings items and also other discount on items that don’t have instant savings making sure instant saving item doesn’t get other discount fully shipped
Given I have navigated to the IMG PDP of the regular product 1513
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2197
Then I add the product to the cart
Then I navigate to the IMG cart
Then I enter a promo code 10percentoff2197
Then I navigate to the IMG cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Second Day Air
Then I complete the order using paypal as csr

@US_IMG_Regression
Scenario: TC-IMG-CSR-Check-41 - IMG Order using AMEX partial shipped no discounts
Given I have navigated to the IMG PDP of the regular product 1503
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2170
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Second Day Air
Then I complete the order as csr

@US_IMG_Regression
Scenario: TC-IMG-CSR-Check-42 - IMG Order using AMEX partial shipped instant savings
Given I have navigated to the IMG PDP of the regular product 1513
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2170
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Second Day Air
Then I complete the order as csr

@US_IMG_Regression
Scenario: TC-IMG-CSR-Check-43 - IMG Order using AMEX partial shipped with other discount
Given I have navigated to the IMG PDP of the regular product 1503
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2197
Then I add the product to the cart
Then I navigate to the IMG cart
Then I enter a promo code 10percentoff2197
Then I navigate to the IMG cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Second Day Air
Then I complete the order as csr

@US_IMG_Regression
Scenario: TC-IMG-CSR-Check-44 - IMG order using AMEX with cart having instant savings items and also other discount on items that don’t have instant savings making sure instant saving item doesn’t get other discount fully shipped
Given I have navigated to the IMG PDP of the regular product 1513
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2197
Then I add the product to the cart
Then I navigate to the IMG cart
Then I enter a promo code 10percentoff2197
Then I navigate to the IMG cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Second Day Air
Then I complete the order as csr

@US_IMG_Regression
Scenario: TC-IMG-CSR-Check-45 - IMG Order using other credit card partial shipped no discounts
Given I have navigated to the IMG PDP of the regular product 1503
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2170
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Second Day Air
Then I complete the order as csr

@US_IMG_Regression
Scenario: TC-IMG-CSR-Check-46 - IMG Order using other credit card partial shipped with instant savings
Given I have navigated to the IMG PDP of the regular product 1513
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2170
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Second Day Air
Then I complete the order as csr

@US_IMG_Regression
Scenario: TC-IMG-CSR-Check-47 - IMG Order using other credit card partial shipped with other discount
Given I have navigated to the IMG PDP of the regular product 1503
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2197
Then I add the product to the cart
Then I navigate to the IMG cart
Then I enter a promo code 10percentoff2197
Then I navigate to the IMG cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Second Day Air
Then I complete the order as csr

@US_IMG_Regression
Scenario: TC-IMG-CSR-Check-48 - IMG order using other credit card with cart having instant savings items and also other discount on items that don’t have instant savings making sure instant saving item doesn’t get other discount fully shipped
Given I have navigated to the IMG PDP of the regular product 1513
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2197
Then I add the product to the cart
Then I navigate to the IMG cart
Then I enter a promo code 10percentoff2197
Then I navigate to the IMG cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Second Day Air
Then I complete the order as csr

@US_IMG_Regression
Scenario: TC-IMG-CSR-Check-49 - All tax types (can be done on one order by testing clothing, product and software keys)
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
Then I add the shipping address
Then I select shipping method Second Day Air
Then I complete the order as csr

@US_IMG_Regression
Scenario: TC-IMG-CSR-Check-50 - ESC accrual by testing a lens order
Given I have navigated to the IMG PDP of the regular product 11855
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Second Day Air
Then I complete the order as csr

@US_IMG_Regression
Scenario: TC-IMG-CSR-Check-51 - Free shipping Imaging 
Given I have navigated to the IMG PDP of the regular product 2166 
Then I add the product to the cart
Then I navigate to the IMG cart
Then I enter a promo code freeshipping2166
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Second Day Air
Then I complete the order as csr

@US_IMG_Regression
Scenario: TC-IMG-CSR-Check-52 - Totally free of charge order IMG
Given I have navigated to the IMG PDP of the regular product 1501 
Then I add the product to the cart
Then I navigate to the IMG cart
Then I enter a promo code freeorder1501
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Second Day Air
Then I complete the order as csr

@US_IMG_Regression
Scenario: TC-IMG-CSR-Check-75 - IMG - Refund
Given I have navigated to the IMG PDP of the regular product 1503
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2170
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I add the shipping address
Then I select shipping method Second Day Air
Then I complete the order as csr