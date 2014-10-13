$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FirstPurchaseFlow.feature");
formatter.feature({
  "line": 1,
  "name": "Purchase Flow Nikon",
  "description": "As a developer, I want to know how Purchase\r\nA product on the nikon site",
  "id": "purchase-flow-nikon",
  "keyword": "Feature"
});
formatter.before({
  "duration": 156418,
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
formatter.step({
  "line": 11,
  "name": "I log in to SSO",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I complete the order",
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
  "duration": 22607157177,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:23"
});
formatter.result({
  "duration": 11621102142,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:30"
});
formatter.result({
  "duration": 8856402776,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:36"
});
formatter.result({
  "duration": 6071568231,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:43"
});
formatter.result({
  "duration": 6304917524,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:49"
});
formatter.result({
  "duration": 15840987758,
  "status": "passed"
});
formatter.after({
  "duration": 67239,
  "status": "passed"
});
});