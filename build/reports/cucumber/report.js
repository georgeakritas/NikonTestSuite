$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BR_IMG_CSR_Regression.feature");
formatter.feature({
  "line": 1,
  "name": "US IMG Regression Test Cases",
  "description": "These test cases will be deployed against the US IMG Nikon Site",
  "id": "us-img-regression-test-cases",
  "keyword": "Feature"
});
formatter.before({
  "duration": 126697,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "TC-IMG-CSR-Check-1 - Fully Shipped Order",
  "description": "",
  "id": "us-img-regression-test-cases;tc-img-csr-check-1---fully-shipped-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@ignore"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I have navigated to the Brazil IMG PDP of the product 1513",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I add the product to the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I have navigated to the Brazil IMG PDP of the product 2170",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I add the product to the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I navigate to the BR cart",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I proceed to check out",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I complete the order as csr",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1513",
      "offset": 54
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:114"
});
formatter.result({
  "duration": 18322141352,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:30"
});
formatter.result({
  "duration": 16767392257,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2170",
      "offset": 54
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:114"
});
formatter.result({
  "duration": 5571619880,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:30"
});
