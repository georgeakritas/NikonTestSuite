$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("US_IMG_Regression.feature");
formatter.feature({
  "id": "us-img-regression-test-cases",
  "description": "These test cases will be deployed against the US IMG Nikon Site",
  "name": "US IMG Regression Test Cases",
  "keyword": "Feature",
  "line": 2
});
formatter.before({
  "duration": 682667,
  "status": "passed"
});
formatter.scenario({
  "id": "us-img-regression-test-cases;tc-img-check-1---fully-shipped-order",
  "tags": [
    {
      "name": "@US_IMG_Regression",
      "line": 5
    }
  ],
  "description": "",
  "name": "TC-IMG-Check-1 - Fully Shipped Order",
  "keyword": "Scenario",
  "line": 6,
  "type": "scenario"
});
formatter.step({
  "name": "I have navigated to the IMG PDP of the regular product 1503",
  "keyword": "Given ",
  "line": 7
});
formatter.step({
  "name": "I add the product to the cart",
  "keyword": "Then ",
  "line": 8
});
formatter.step({
  "name": "I have navigated to the IMG PDP of the regular product 2170",
  "keyword": "Given ",
  "line": 9
});
formatter.step({
  "name": "I add the product to the cart",
  "keyword": "Then ",
  "line": 10
});
formatter.step({
  "name": "I navigate to the IMG cart",
  "keyword": "Then ",
  "line": 11
});
formatter.step({
  "name": "I proceed to check out",
  "keyword": "Then ",
  "line": 12
});
formatter.step({
  "name": "I log in to SSO as a regular registered user",
  "keyword": "Then ",
  "line": 13
});
formatter.step({
  "name": "I use paypal to complete the order",
  "keyword": "Then ",
  "line": 14
});
formatter.match({
  "arguments": [
    {
      "val": "1503",
      "offset": 55
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:17"
});
formatter.result({
  "duration": 28638070867,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:43"
});
formatter.result({
  "duration": 12123836609,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2170",
      "offset": 55
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:17"
});
formatter.result({
  "duration": 6687848566,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:43"
});
formatter.result({
  "duration": 24251565728,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IMG",
      "offset": 18
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:48"
});
formatter.result({
  "duration": 7251486809,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:76"
});
formatter.result({
  "duration": 13220921101,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:81"
});
formatter.result({
  "duration": 5959319924,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:122"
});
formatter.result({
  "duration": 100342590093,
  "status": "passed"
});
formatter.after({
  "duration": 57685,
  "status": "passed"
});
formatter.before({
  "duration": 14510,
  "status": "passed"
});
formatter.scenario({
  "id": "us-img-regression-test-cases;tc-img-check-2---partially-shipped-order",
  "tags": [
    {
      "name": "@US_IMG_Regression",
      "line": 16
    }
  ],
  "description": "",
  "name": "TC-IMG-Check-2 - Partially Shipped Order",
  "keyword": "Scenario",
  "line": 17,
  "type": "scenario"
});
formatter.step({
  "name": "I have navigated to the IMG PDP of the regular product 1503",
  "keyword": "Given ",
  "line": 18
});
formatter.step({
  "name": "I add the product to the cart",
  "keyword": "Then ",
  "line": 19
});
formatter.step({
  "name": "I have navigated to the IMG PDP of the regular product 2170",
  "keyword": "Given ",
  "line": 20
});
formatter.step({
  "name": "I add the product to the cart",
  "keyword": "Then ",
  "line": 21
});
formatter.step({
  "name": "I navigate to the IMG cart",
  "keyword": "Then ",
  "line": 22
});
formatter.step({
  "name": "I proceed to check out",
  "keyword": "Then ",
  "line": 23
});
formatter.step({
  "name": "I complete the order using a visa",
  "keyword": "Then ",
  "line": 24
});
formatter.match({
  "arguments": [
    {
      "val": "1503",
      "offset": 55
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:17"
});
formatter.result({
  "duration": 17037293638,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:43"
});
