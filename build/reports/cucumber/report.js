$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FirstPurchaseFlow.feature");
formatter.feature({
  "line": 1,
  "name": "Purchase Flow Nikon",
  "description": "As a developer, I want to know how Purchase\r\nA product on the nikon site",
  "id": "purchase-flow-nikon",
  "keyword": "Feature"
});
formatter.before({
  "duration": 146866,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Purchase a nikon IMG product",
  "description": "",
  "id": "purchase-flow-nikon;purchase-a-nikon-img-product",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@FirstPurchaseFlow"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I have navigated to the PDP of product 1513",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I add it to the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I navigate to the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I proceed to check out",
  "keyword": "Then "
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:15"
});
formatter.result({
  "duration": 32147971556,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:18"
});
formatter.result({
  "duration": 11900595673,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:25"
});
formatter.result({
  "duration": 6204744503,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:31"
});
formatter.result({
  "duration": 11917219094,
  "status": "passed"
});
formatter.after({
  "duration": 48483,
  "status": "passed"
});
});