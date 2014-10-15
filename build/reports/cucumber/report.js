$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FirstPurchaseFlow.feature");
formatter.feature({
  "line": 1,
  "name": "Purchase Flow Nikon",
  "description": "As a developer, I want to know how Purchase\r\nA product on the nikon site",
  "id": "purchase-flow-nikon",
  "keyword": "Feature"
});
formatter.before({
  "duration": 142260,
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
  "duration": 24166425438,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:23"
});
formatter.result({
  "duration": 11109919669,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:28"
});
formatter.result({
  "duration": 8148379928,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:36"
});
formatter.result({
  "duration": 7474254370,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:42"
});
formatter.result({
  "duration": 6776068017,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "visa",
      "offset": 29
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:47"
});
formatter.result({
  "duration": 22896835940,
  "error_message": "geb.waiting.WaitTimeoutException: condition did not pass in 5.0 seconds (failed with exception)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:77)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrapNoCoerce.callConstructor(ConstructorSite.java:102)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:57)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:182)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:198)\r\n\tat geb.waiting.Wait.waitFor(Wait.groovy:126)\r\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:45)\r\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.doWaitFor(WaitingSupport.groovy:109)\r\n\tat geb.waiting.WaitingSupport.this$2$doWaitFor(WaitingSupport.groovy)\r\n\tat geb.waiting.WaitingSupport$this$2$doWaitFor$1.callCurrent(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:49)\r\n\tat geb.waiting.WaitingSupport$this$2$doWaitFor$1.callCurrent(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:67)\r\n\tat geb.waiting.WaitingSupport$waitFor$0.callCurrent(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:49)\r\n\tat geb.waiting.WaitingSupport$waitFor$0.callCurrent(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:63)\r\n\tat geb.waiting.WaitingSupport$waitFor.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:45)\r\n\tat geb.waiting.WaitingSupport$waitFor.call(Unknown Source)\r\n\tat geb.Page.waitFor(Page.groovy)\r\n\tat geb.Page$waitFor$4.callCurrent(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:49)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:133)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:141)\r\n\tat CartSSOandCheckout.SelectExistingCard(CartSSOandCheckout.groovy:335)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1208)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokePogoMethod(InvokerHelper.java:901)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokeMethod(InvokerHelper.java:884)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodN(ScriptBytecodeAdapter.java:164)\r\n\tat geb.Browser.methodMissing(Browser.groovy:203)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat org.codehaus.groovy.runtime.metaclass.MixinInstanceMetaMethod.invoke(MixinInstanceMetaMethod.java:53)\r\n\tat groovy.lang.MetaClassImpl.invokeMissingMethod(MetaClassImpl.java:934)\r\n\tat groovy.lang.MetaClassImpl.invokePropertyOrMissing(MetaClassImpl.java:1257)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1210)\r\n\tat groovy.lang.ExpandoMetaClass.invokeMethod(ExpandoMetaClass.java:1110)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:808)\r\n\tat groovy.lang.GroovyObjectSupport.invokeMethod(GroovyObjectSupport.java:44)\r\n\tat groovy.lang.Script.invokeMethod(Script.java:78)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeOnDelegationObjects(ClosureMetaClass.java:414)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:353)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.callCurrent(PogoMetaClassSite.java:66)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:49)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:133)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:141)\r\n\tat FirstPurchaseFlow_steps$_run_closure6.doCall(FirstPurchaseFlow_steps.groovy:49)\r\n\tat ✽.Then I complete the order using a visa(FirstPurchaseFlow.feature:12)\r\nCaused by: Assertion failed: \n\n$(cardTypeString).parent(\u0027section.payment-info\u0027).parent(\u0027form.create_update_payment_form\u0027).find(\u0027input.cc-pw-input\u0027).displayed\n| |               |                              |                                         |                         |\n[]|               []                             []                                        []                        false\n  form.create_update_payment_form\u003esection.payment-info\u003espan.visa\n\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.assertFailed(InvokerHelper.java:398)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.assertFailed(ScriptBytecodeAdapter.java:646)\r\n\tat CartSSOandCheckout$_SelectExistingCard_closure11.doCall(CartSSOandCheckout.groovy:336)\r\n\tat CartSSOandCheckout$_SelectExistingCard_closure11.doCall(CartSSOandCheckout.groovy)\r\n\tat sun.reflect.GeneratedMethodAccessor45.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:278)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.call(PogoMetaClassSite.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:112)\r\n\tat geb.waiting.Wait.waitFor(Wait.groovy:115)\r\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:45)\r\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.doWaitFor(WaitingSupport.groovy:109)\r\n\tat geb.waiting.WaitingSupport.this$2$doWaitFor(WaitingSupport.groovy)\r\n\tat geb.waiting.WaitingSupport$this$2$doWaitFor$1.callCurrent(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:49)\r\n\tat geb.waiting.WaitingSupport$this$2$doWaitFor$1.callCurrent(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:67)\r\n\tat geb.waiting.WaitingSupport$waitFor$0.callCurrent(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:49)\r\n\tat geb.waiting.WaitingSupport$waitFor$0.callCurrent(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:63)\r\n\tat geb.waiting.WaitingSupport$waitFor.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:45)\r\n\tat geb.waiting.WaitingSupport$waitFor.call(Unknown Source)\r\n\tat geb.Page.waitFor(Page.groovy)\r\n\tat geb.Page$waitFor$4.callCurrent(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:49)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:133)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:141)\r\n\tat CartSSOandCheckout.SelectExistingCard(CartSSOandCheckout.groovy:335)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1208)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokePogoMethod(InvokerHelper.java:901)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokeMethod(InvokerHelper.java:884)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodN(ScriptBytecodeAdapter.java:164)\r\n\tat geb.Browser.methodMissing(Browser.groovy:203)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat org.codehaus.groovy.runtime.metaclass.MixinInstanceMetaMethod.invoke(MixinInstanceMetaMethod.java:53)\r\n\tat groovy.lang.MetaClassImpl.invokeMissingMethod(MetaClassImpl.java:934)\r\n\tat groovy.lang.MetaClassImpl.invokePropertyOrMissing(MetaClassImpl.java:1257)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1210)\r\n\tat groovy.lang.ExpandoMetaClass.invokeMethod(ExpandoMetaClass.java:1110)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:808)\r\n\tat groovy.lang.GroovyObjectSupport.invokeMethod(GroovyObjectSupport.java:44)\r\n\tat groovy.lang.Script.invokeMethod(Script.java:78)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeOnDelegationObjects(ClosureMetaClass.java:414)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:353)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.callCurrent(PogoMetaClassSite.java:66)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:49)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:133)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:141)\r\n\tat FirstPurchaseFlow_steps$_run_closure6.doCall(FirstPurchaseFlow_steps.groovy:49)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:278)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat groovy.lang.Closure.call(Closure.java:423)\r\n\tat cucumber.runtime.groovy.GroovyBackend.invoke(GroovyBackend.java:150)\r\n\tat cucumber.runtime.groovy.GroovyStepDefinition$1.call(GroovyStepDefinition.java:69)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.groovy.GroovyStepDefinition.execute(GroovyStepDefinition.java:66)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:89)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:40)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:94)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:467)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:683)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:390)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:197)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 41758,
  "status": "passed"
});
formatter.uri("US_IMG_Regression.feature");
formatter.feature({
  "line": 1,
  "name": "US IMG Regression Test Cases",
  "description": "These test cases will be deployed against the US IMG Nikon Site",
  "id": "us-img-regression-test-cases",
  "keyword": "Feature"
});
formatter.before({
  "duration": 25833,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "IMG - Fully Shipped Order",
  "description": "",
  "id": "us-img-regression-test-cases;img---fully-shipped-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@US_IMG_Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I have navigated to the IMG PDP of the regular product 1513",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I add the product to the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I have navigated to the IMG PDP of the regular product 2170",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I add the product to the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I navigate to the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I proceed to check out",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I log in to SSO as a regular registered user",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
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
  "duration": 16521338736,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:23"
});
formatter.result({
  "duration": 10271789228,
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
  "duration": 5081325642,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:23"
});
formatter.result({
  "duration": 5879945856,
  "error_message": "geb.waiting.WaitTimeoutException: condition did not pass in 5.0 seconds (failed with exception)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:77)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrapNoCoerce.callConstructor(ConstructorSite.java:102)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:57)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrapNoCoerce.callConstructor(ConstructorSite.java:107)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:198)\r\n\tat geb.waiting.Wait.waitFor(Wait.groovy:126)\r\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.doWaitFor(WaitingSupport.groovy:109)\r\n\tat geb.waiting.WaitingSupport.this$2$doWaitFor(WaitingSupport.groovy)\r\n\tat geb.waiting.WaitingSupport$this$2$doWaitFor$1.callCurrent(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:67)\r\n\tat geb.waiting.WaitingSupport$waitFor$0.callCurrent(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:63)\r\n\tat geb.waiting.WaitingSupport$waitFor.call(Unknown Source)\r\n\tat geb.Page.waitFor(Page.groovy)\r\n\tat geb.Page$waitFor$4.callCurrent(Unknown Source)\r\n\tat PDP.AddToCart(PDP.groovy:43)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1208)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokePogoMethod(InvokerHelper.java:901)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokeMethod(InvokerHelper.java:884)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodN(ScriptBytecodeAdapter.java:164)\r\n\tat geb.Browser.methodMissing(Browser.groovy:203)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat org.codehaus.groovy.runtime.metaclass.MixinInstanceMetaMethod.invoke(MixinInstanceMetaMethod.java:53)\r\n\tat groovy.lang.MetaClassImpl.invokeMissingMethod(MetaClassImpl.java:934)\r\n\tat groovy.lang.MetaClassImpl.invokePropertyOrMissing(MetaClassImpl.java:1257)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1210)\r\n\tat groovy.lang.ExpandoMetaClass.invokeMethod(ExpandoMetaClass.java:1110)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:808)\r\n\tat groovy.lang.GroovyObjectSupport.invokeMethod(GroovyObjectSupport.java:44)\r\n\tat groovy.lang.Script.invokeMethod(Script.java:78)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeOnDelegationObjects(ClosureMetaClass.java:414)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:353)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.callCurrent(PogoMetaClassSite.java:66)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:141)\r\n\tat FirstPurchaseFlow_steps$_run_closure2.doCall(FirstPurchaseFlow_steps.groovy:24)\r\n\tat ✽.Then I add the product to the cart(US_IMG_Regression.feature:9)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"tag name\",\"selector\":\"html\"}\nCommand duration or timeout: 5.88 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.43.0\u0027, revision: \u0027accb3003b9fb8f7cae30f9669b4c594a065396a6\u0027, time: \u00272014-09-09 22:22:51\u0027\nSystem info: host: \u0027LENOVOUSER\u0027, ip: \u002710.10.112.113\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_11\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d12.0, platform\u003dWINDOWS, browserConnectionEnabled\u003dtrue, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: b17309a5-5d15-4f60-a55f-8933c304c852\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByTagName(RemoteWebDriver.java:417)\r\n\tat org.openqa.selenium.By$ByTagName.findElement(By.java:330)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat org.openqa.selenium.WebDriver$findElement$0.call(Unknown Source)\r\n\tat geb.navigator.factory.BrowserBackedNavigatorFactory.createBase(BrowserBackedNavigatorFactory.groovy:33)\r\n\tat geb.navigator.factory.BrowserBackedNavigatorFactory.getBase(BrowserBackedNavigatorFactory.groovy:39)\r\n\tat sun.reflect.GeneratedMethodAccessor35.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat groovy.lang.MetaClassImpl.getProperty(MetaClassImpl.java:1845)\r\n\tat groovy.lang.MetaClassImpl.getProperty(MetaClassImpl.java:3704)\r\n\tat geb.navigator.factory.AbstractNavigatorFactory.getProperty(AbstractNavigatorFactory.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoGetPropertySite.getProperty(PogoGetPropertySite.java:47)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callGetProperty(AbstractCallSite.java:227)\r\n\tat geb.content.NavigableSupport.getBase(NavigableSupport.groovy:31)\r\n\tat geb.content.NavigableSupport.this$2$getBase(NavigableSupport.groovy)\r\n\tat sun.reflect.GeneratedMethodAccessor34.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat org.codehaus.groovy.runtime.metaclass.MethodMetaProperty$GetBeanMethodMetaProperty.getProperty(MethodMetaProperty.java:73)\r\n\tat org.codehaus.groovy.runtime.callsite.GetEffectivePogoPropertySite.callGroovyObjectGetProperty(GetEffectivePogoPropertySite.java:65)\r\n\tat geb.content.NavigableSupport.$(NavigableSupport.groovy:63)\r\n\tat geb.content.Navigable$$.call(Unknown Source)\r\n\tat geb.content.PageContentTemplateFactoryDelegate.$(PageContentTemplateFactoryDelegate.groovy)\r\n\tat sun.reflect.GeneratedMethodAccessor33.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:368)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.callCurrent(PogoMetaClassSite.java:66)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:141)\r\n\tat PDP$__clinit__closure3_closure4.doCall(PDP.groovy:28)\r\n\tat PDP$__clinit__closure3_closure4.doCall(PDP.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:278)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokePogoMethod(InvokerHelper.java:901)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokeMethod(InvokerHelper.java:884)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodN(ScriptBytecodeAdapter.java:164)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeClosure(ScriptBytecodeAdapter.java:570)\r\n\tat geb.content.PageContentTemplate.invokeFactory(PageContentTemplate.groovy:97)\r\n\tat geb.content.PageContentTemplate.this$2$invokeFactory(PageContentTemplate.groovy)\r\n\tat sun.reflect.GeneratedMethodAccessor57.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:368)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.callCurrent(PogoMetaClassSite.java:66)\r\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy:59)\r\n\tat sun.reflect.GeneratedMethodAccessor56.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:278)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.callCurrent(PogoMetaClassSite.java:66)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:141)\r\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy)\r\n\tat sun.reflect.GeneratedMethodAccessor55.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:278)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.call(PogoMetaClassSite.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:112)\r\n\tat geb.content.PageContentTemplate.create(PageContentTemplate.groovy:82)\r\n\tat geb.content.PageContentTemplate.this$2$create(PageContentTemplate.groovy)\r\n\tat sun.reflect.GeneratedMethodAccessor53.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSite.invoke(PogoMetaMethodSite.java:166)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:56)\r\n\tat geb.content.PageContentTemplate.get(PageContentTemplate.groovy:54)\r\n\tat sun.reflect.GeneratedMethodAccessor51.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSite.invoke(PogoMetaMethodSite.java:166)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.call(PogoMetaMethodSite.java:68)\r\n\tat geb.content.PageContentSupport.getContent(PageContentSupport.groovy:43)\r\n\tat sun.reflect.GeneratedMethodAccessor50.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSite.invoke(PogoMetaMethodSite.java:166)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:56)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:141)\r\n\tat geb.content.PageContentSupport.propertyMissing(PageContentSupport.groovy:59)\r\n\tat geb.content.PageContentSupport$propertyMissing.call(Unknown Source)\r\n\tat geb.Page.propertyMissing(Page.groovy)\r\n\tat sun.reflect.GeneratedMethodAccessor49.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaClassImpl.invokeMissingProperty(MetaClassImpl.java:875)\r\n\tat groovy.lang.MetaClassImpl.getProperty(MetaClassImpl.java:1854)\r\n\tat groovy.lang.MetaClassImpl.getProperty(MetaClassImpl.java:3704)\r\n\tat geb.Page.getProperty(Page.groovy)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.getProperty(InvokerHelper.java:168)\r\n\tat groovy.lang.Closure.getPropertyTryThese(Closure.java:321)\r\n\tat groovy.lang.Closure.getPropertyOwnerFirst(Closure.java:315)\r\n\tat groovy.lang.Closure.getProperty(Closure.java:304)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoGetPropertySite.getProperty(PogoGetPropertySite.java:47)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callGroovyObjectGetProperty(AbstractCallSite.java:231)\r\n\tat PDP$_AddToCart_closure1.doCall(PDP.groovy:44)\r\n\tat PDP$_AddToCart_closure1.doCall(PDP.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:278)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.call(PogoMetaClassSite.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:112)\r\n\tat geb.waiting.Wait.waitFor(Wait.groovy:105)\r\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.doWaitFor(WaitingSupport.groovy:109)\r\n\tat geb.waiting.WaitingSupport.this$2$doWaitFor(WaitingSupport.groovy)\r\n\tat geb.waiting.WaitingSupport$this$2$doWaitFor$1.callCurrent(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:67)\r\n\tat geb.waiting.WaitingSupport$waitFor$0.callCurrent(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:63)\r\n\tat geb.waiting.WaitingSupport$waitFor.call(Unknown Source)\r\n\tat geb.Page.waitFor(Page.groovy)\r\n\tat geb.Page$waitFor$4.callCurrent(Unknown Source)\r\n\tat PDP.AddToCart(PDP.groovy:43)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1208)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokePogoMethod(InvokerHelper.java:901)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokeMethod(InvokerHelper.java:884)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodN(ScriptBytecodeAdapter.java:164)\r\n\tat geb.Browser.methodMissing(Browser.groovy:203)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat org.codehaus.groovy.runtime.metaclass.MixinInstanceMetaMethod.invoke(MixinInstanceMetaMethod.java:53)\r\n\tat groovy.lang.MetaClassImpl.invokeMissingMethod(MetaClassImpl.java:934)\r\n\tat groovy.lang.MetaClassImpl.invokePropertyOrMissing(MetaClassImpl.java:1257)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1210)\r\n\tat groovy.lang.ExpandoMetaClass.invokeMethod(ExpandoMetaClass.java:1110)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:808)\r\n\tat groovy.lang.GroovyObjectSupport.invokeMethod(GroovyObjectSupport.java:44)\r\n\tat groovy.lang.Script.invokeMethod(Script.java:78)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeOnDelegationObjects(ClosureMetaClass.java:414)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:353)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.callCurrent(PogoMetaClassSite.java:66)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:141)\r\n\tat FirstPurchaseFlow_steps$_run_closure2.doCall(FirstPurchaseFlow_steps.groovy:24)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:278)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat groovy.lang.Closure.call(Closure.java:423)\r\n\tat cucumber.runtime.groovy.GroovyBackend.invoke(GroovyBackend.java:150)\r\n\tat cucumber.runtime.groovy.GroovyStepDefinition$1.call(GroovyStepDefinition.java:69)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.groovy.GroovyStepDefinition.execute(GroovyStepDefinition.java:66)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:89)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:40)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:94)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:467)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:683)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:390)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:197)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"tag name\",\"selector\":\"html\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.43.0\u0027, revision: \u0027accb3003b9fb8f7cae30f9669b4c594a065396a6\u0027, time: \u00272014-09-09 22:22:51\u0027\nSystem info: host: \u0027LENOVOUSER\u0027, ip: \u002710.10.112.113\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_11\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.\u003canonymous method\u003e(file:///C:/Users/LENOVO~1/AppData/Local/Temp/anonymous6451601849559158149webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:9618)\r\n\tat \u003canonymous class\u003e.\u003canonymous method\u003e(file:///C:/Users/LENOVO~1/AppData/Local/Temp/anonymous6451601849559158149webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:9627)\r\n\tat \u003canonymous class\u003e.\u003canonymous method\u003e(file:///C:/Users/LENOVO~1/AppData/Local/Temp/anonymous6451601849559158149webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:11612)\r\n\tat \u003canonymous class\u003e.\u003canonymous method\u003e(file:///C:/Users/LENOVO~1/AppData/Local/Temp/anonymous6451601849559158149webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:11617)\r\n\tat \u003canonymous class\u003e.\u003canonymous method\u003e(file:///C:/Users/LENOVO~1/AppData/Local/Temp/anonymous6451601849559158149webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:11559)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:28"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:36"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:42"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "visa",
      "offset": 29
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:47"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 34326,
  "status": "passed"
});
formatter.before({
  "duration": 29372,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "IMG - Partially Shipped Order",
  "description": "",
  "id": "us-img-regression-test-cases;img---partially-shipped-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@US_IMG_Regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I have navigated to the IMG PDP of the regular product 1513",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I add the product to the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I have navigated to the IMG PDP of the regular product 2170",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I add the product to the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I navigate to the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I proceed to check out",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
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
  "duration": 6867314388,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:23"
});
formatter.result({
  "duration": 25366797013,
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
  "duration": 21736506122,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:23"
});
formatter.result({
  "duration": 10415420412,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:28"
});
formatter.result({
  "duration": 7799504565,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:36"
});
formatter.result({
  "duration": 9504522259,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "visa",
      "offset": 29
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:47"
});
formatter.result({
  "duration": 6113590842,
  "error_message": "geb.waiting.WaitTimeoutException: condition did not pass in 5.0 seconds (failed with exception)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:77)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrapNoCoerce.callConstructor(ConstructorSite.java:102)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:57)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrapNoCoerce.callConstructor(ConstructorSite.java:107)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:198)\r\n\tat geb.waiting.Wait.waitFor(Wait.groovy:126)\r\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:45)\r\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.doWaitFor(WaitingSupport.groovy:109)\r\n\tat geb.waiting.WaitingSupport.this$2$doWaitFor(WaitingSupport.groovy)\r\n\tat geb.waiting.WaitingSupport$this$2$doWaitFor$1.callCurrent(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:49)\r\n\tat geb.waiting.WaitingSupport$this$2$doWaitFor$1.callCurrent(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:67)\r\n\tat geb.waiting.WaitingSupport$waitFor$0.callCurrent(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:49)\r\n\tat geb.waiting.WaitingSupport$waitFor$0.callCurrent(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:63)\r\n\tat geb.waiting.WaitingSupport$waitFor.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:45)\r\n\tat geb.waiting.WaitingSupport$waitFor.call(Unknown Source)\r\n\tat geb.Page.waitFor(Page.groovy)\r\n\tat geb.Page$waitFor$4.callCurrent(Unknown Source)\r\n\tat CartSSOandCheckout.SelectExistingCard(CartSSOandCheckout.groovy:335)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1208)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokePogoMethod(InvokerHelper.java:901)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokeMethod(InvokerHelper.java:884)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodN(ScriptBytecodeAdapter.java:164)\r\n\tat geb.Browser.methodMissing(Browser.groovy:203)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat org.codehaus.groovy.runtime.metaclass.MixinInstanceMetaMethod.invoke(MixinInstanceMetaMethod.java:53)\r\n\tat groovy.lang.MetaClassImpl.invokeMissingMethod(MetaClassImpl.java:934)\r\n\tat groovy.lang.MetaClassImpl.invokePropertyOrMissing(MetaClassImpl.java:1257)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1210)\r\n\tat groovy.lang.ExpandoMetaClass.invokeMethod(ExpandoMetaClass.java:1110)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:808)\r\n\tat groovy.lang.GroovyObjectSupport.invokeMethod(GroovyObjectSupport.java:44)\r\n\tat groovy.lang.Script.invokeMethod(Script.java:78)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeOnDelegationObjects(ClosureMetaClass.java:414)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:353)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.callCurrent(PogoMetaClassSite.java:66)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:141)\r\n\tat FirstPurchaseFlow_steps$_run_closure6.doCall(FirstPurchaseFlow_steps.groovy:49)\r\n\tat ✽.Then I complete the order using a visa(US_IMG_Regression.feature:23)\r\nCaused by: Assertion failed: \n\n$(cardTypeString).parent(\u0027section.payment-info\u0027).parent(\u0027form.create_update_payment_form\u0027).find(\u0027input.cc-pw-input\u0027).displayed\n| |               |                              |                                         |                         |\n[]|               []                             []                                        []                        false\n  form.create_update_payment_form\u003esection.payment-info\u003espan.visa\n\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.assertFailed(InvokerHelper.java:398)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.assertFailed(ScriptBytecodeAdapter.java:646)\r\n\tat CartSSOandCheckout$_SelectExistingCard_closure11.doCall(CartSSOandCheckout.groovy:336)\r\n\tat CartSSOandCheckout$_SelectExistingCard_closure11.doCall(CartSSOandCheckout.groovy)\r\n\tat sun.reflect.GeneratedMethodAccessor45.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:278)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.call(PogoMetaClassSite.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:112)\r\n\tat geb.waiting.Wait.waitFor(Wait.groovy:115)\r\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:45)\r\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.doWaitFor(WaitingSupport.groovy:109)\r\n\tat geb.waiting.WaitingSupport.this$2$doWaitFor(WaitingSupport.groovy)\r\n\tat geb.waiting.WaitingSupport$this$2$doWaitFor$1.callCurrent(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:49)\r\n\tat geb.waiting.WaitingSupport$this$2$doWaitFor$1.callCurrent(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:67)\r\n\tat geb.waiting.WaitingSupport$waitFor$0.callCurrent(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:49)\r\n\tat geb.waiting.WaitingSupport$waitFor$0.callCurrent(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:63)\r\n\tat geb.waiting.WaitingSupport$waitFor.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:45)\r\n\tat geb.waiting.WaitingSupport$waitFor.call(Unknown Source)\r\n\tat geb.Page.waitFor(Page.groovy)\r\n\tat geb.Page$waitFor$4.callCurrent(Unknown Source)\r\n\tat CartSSOandCheckout.SelectExistingCard(CartSSOandCheckout.groovy:335)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1208)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokePogoMethod(InvokerHelper.java:901)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokeMethod(InvokerHelper.java:884)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodN(ScriptBytecodeAdapter.java:164)\r\n\tat geb.Browser.methodMissing(Browser.groovy:203)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat org.codehaus.groovy.runtime.metaclass.MixinInstanceMetaMethod.invoke(MixinInstanceMetaMethod.java:53)\r\n\tat groovy.lang.MetaClassImpl.invokeMissingMethod(MetaClassImpl.java:934)\r\n\tat groovy.lang.MetaClassImpl.invokePropertyOrMissing(MetaClassImpl.java:1257)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1210)\r\n\tat groovy.lang.ExpandoMetaClass.invokeMethod(ExpandoMetaClass.java:1110)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:808)\r\n\tat groovy.lang.GroovyObjectSupport.invokeMethod(GroovyObjectSupport.java:44)\r\n\tat groovy.lang.Script.invokeMethod(Script.java:78)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeOnDelegationObjects(ClosureMetaClass.java:414)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:353)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.callCurrent(PogoMetaClassSite.java:66)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:141)\r\n\tat FirstPurchaseFlow_steps$_run_closure6.doCall(FirstPurchaseFlow_steps.groovy:49)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:278)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat groovy.lang.Closure.call(Closure.java:423)\r\n\tat cucumber.runtime.groovy.GroovyBackend.invoke(GroovyBackend.java:150)\r\n\tat cucumber.runtime.groovy.GroovyStepDefinition$1.call(GroovyStepDefinition.java:69)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.groovy.GroovyStepDefinition.execute(GroovyStepDefinition.java:66)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:89)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:40)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:94)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:467)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:683)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:390)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:197)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 41050,
  "status": "passed"
});
});