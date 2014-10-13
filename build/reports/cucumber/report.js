$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FirstPurchaseFlow.feature");
formatter.feature({
  "line": 1,
  "name": "Purchase Flow Nikon",
  "description": "As a developer, I want to know how Purchase\r\nA product on the nikon site",
  "id": "purchase-flow-nikon",
  "keyword": "Feature"
});
formatter.before({
  "duration": 131647,
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
  "name": "I have navigated to the IMG PDP of the regular product 1513",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I add the product to the cart",
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
formatter.step({
  "line": 11,
  "name": "I log in to SSO as a regular registered user",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I complete the order using a visa",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1513",
      "offset": 55
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:17"
});
formatter.result({
  "duration": 22178595708,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:23"
});
formatter.result({
  "duration": 11729829344,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:28"
});
formatter.result({
  "duration": 7086733403,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:36"
});
formatter.result({
  "duration": 7898651368,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:42"
});
formatter.result({
  "duration": 7203623390,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "visa",
      "offset": 29
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:46"
});
formatter.result({
  "duration": 16672395763,
  "status": "passed"
});
formatter.after({
  "duration": 35035,
  "status": "passed"
});
});