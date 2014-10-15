$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FirstPurchaseFlow.feature");
formatter.feature({
  "line": 1,
  "name": "Purchase Flow Nikon",
  "description": "As a developer, I want to know how Purchase\r\nA product on the nikon site",
  "id": "purchase-flow-nikon",
  "keyword": "Feature"
});
formatter.before({
  "duration": 110057,
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
  "duration": 22072522825,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:23"
});
formatter.result({
  "duration": 11228112039,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:28"
});
formatter.result({
  "duration": 8636124637,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:36"
});
formatter.result({
  "duration": 11941356430,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:42"
});
formatter.result({
  "duration": 802019959,
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
  "duration": 22511570529,
  "error_message": "geb.waiting.WaitTimeoutException: condition did not pass in 5.0 seconds (failed with exception)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:77)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrapNoCoerce.callConstructor(ConstructorSite.java:102)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:57)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:182)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:198)\r\n\tat geb.waiting.Wait.waitFor(Wait.groovy:126)\r\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:45)\r\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.doWaitFor(WaitingSupport.groovy:109)\r\n\tat geb.waiting.WaitingSupport.this$2$doWaitFor(WaitingSupport.groovy)\r\n\tat geb.waiting.WaitingSupport$this$2$doWaitFor$1.callCurrent(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:49)\r\n\tat geb.waiting.WaitingSupport$this$2$doWaitFor$1.callCurrent(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:67)\r\n\tat geb.waiting.WaitingSupport$waitFor$0.callCurrent(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:49)\r\n\tat geb.waiting.WaitingSupport$waitFor$0.callCurrent(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:63)\r\n\tat geb.waiting.WaitingSupport$waitFor.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:45)\r\n\tat geb.waiting.WaitingSupport$waitFor.call(Unknown Source)\r\n\tat geb.Page.waitFor(Page.groovy)\r\n\tat geb.Page$waitFor$4.callCurrent(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:49)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:133)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:141)\r\n\tat CartSSOandCheckout.SelectExistingCard(CartSSOandCheckout.groovy:335)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1208)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokePogoMethod(InvokerHelper.java:901)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokeMethod(InvokerHelper.java:884)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodN(ScriptBytecodeAdapter.java:164)\r\n\tat geb.Browser.methodMissing(Browser.groovy:203)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat org.codehaus.groovy.runtime.metaclass.MixinInstanceMetaMethod.invoke(MixinInstanceMetaMethod.java:53)\r\n\tat groovy.lang.MetaClassImpl.invokeMissingMethod(MetaClassImpl.java:934)\r\n\tat groovy.lang.MetaClassImpl.invokePropertyOrMissing(MetaClassImpl.java:1257)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1210)\r\n\tat groovy.lang.ExpandoMetaClass.invokeMethod(ExpandoMetaClass.java:1110)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:808)\r\n\tat groovy.lang.GroovyObjectSupport.invokeMethod(GroovyObjectSupport.java:44)\r\n\tat groovy.lang.Script.invokeMethod(Script.java:78)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeOnDelegationObjects(ClosureMetaClass.java:414)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:353)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.callCurrent(PogoMetaClassSite.java:66)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:49)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:133)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:141)\r\n\tat FirstPurchaseFlow_steps$_run_closure6.doCall(FirstPurchaseFlow_steps.groovy:49)\r\n\tat ✽.Then I complete the order using a visa(FirstPurchaseFlow.feature:12)\r\nCaused by: Assertion failed: \n\n$(cardTypeString).parent(\u0027section.payment-info\u0027).parent(\u0027form.create_update_payment_form\u0027).find(\u0027input.cc-pw-input\u0027).displayed\n| |               |                              |                                         |                         |\n[]|               []                             []                                        []                        false\n  form.create_update_payment_form\u003esection.payment-info\u003espan.visa\n\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.assertFailed(InvokerHelper.java:398)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.assertFailed(ScriptBytecodeAdapter.java:646)\r\n\tat CartSSOandCheckout$_SelectExistingCard_closure11.doCall(CartSSOandCheckout.groovy:336)\r\n\tat CartSSOandCheckout$_SelectExistingCard_closure11.doCall(CartSSOandCheckout.groovy)\r\n\tat sun.reflect.GeneratedMethodAccessor45.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:278)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.call(PogoMetaClassSite.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:112)\r\n\tat geb.waiting.Wait.waitFor(Wait.groovy:115)\r\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:45)\r\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.doWaitFor(WaitingSupport.groovy:109)\r\n\tat geb.waiting.WaitingSupport.this$2$doWaitFor(WaitingSupport.groovy)\r\n\tat geb.waiting.WaitingSupport$this$2$doWaitFor$1.callCurrent(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:49)\r\n\tat geb.waiting.WaitingSupport$this$2$doWaitFor$1.callCurrent(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:67)\r\n\tat geb.waiting.WaitingSupport$waitFor$0.callCurrent(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:49)\r\n\tat geb.waiting.WaitingSupport$waitFor$0.callCurrent(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:63)\r\n\tat geb.waiting.WaitingSupport$waitFor.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:45)\r\n\tat geb.waiting.WaitingSupport$waitFor.call(Unknown Source)\r\n\tat geb.Page.waitFor(Page.groovy)\r\n\tat geb.Page$waitFor$4.callCurrent(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:49)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:133)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:141)\r\n\tat CartSSOandCheckout.SelectExistingCard(CartSSOandCheckout.groovy:335)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1208)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokePogoMethod(InvokerHelper.java:901)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokeMethod(InvokerHelper.java:884)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodN(ScriptBytecodeAdapter.java:164)\r\n\tat geb.Browser.methodMissing(Browser.groovy:203)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat org.codehaus.groovy.runtime.metaclass.MixinInstanceMetaMethod.invoke(MixinInstanceMetaMethod.java:53)\r\n\tat groovy.lang.MetaClassImpl.invokeMissingMethod(MetaClassImpl.java:934)\r\n\tat groovy.lang.MetaClassImpl.invokePropertyOrMissing(MetaClassImpl.java:1257)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1210)\r\n\tat groovy.lang.ExpandoMetaClass.invokeMethod(ExpandoMetaClass.java:1110)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:808)\r\n\tat groovy.lang.GroovyObjectSupport.invokeMethod(GroovyObjectSupport.java:44)\r\n\tat groovy.lang.Script.invokeMethod(Script.java:78)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeOnDelegationObjects(ClosureMetaClass.java:414)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:353)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.callCurrent(PogoMetaClassSite.java:66)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:49)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:133)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:141)\r\n\tat FirstPurchaseFlow_steps$_run_closure6.doCall(FirstPurchaseFlow_steps.groovy:49)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:278)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat groovy.lang.Closure.call(Closure.java:423)\r\n\tat cucumber.runtime.groovy.GroovyBackend.invoke(GroovyBackend.java:150)\r\n\tat cucumber.runtime.groovy.GroovyStepDefinition$1.call(GroovyStepDefinition.java:69)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.groovy.GroovyStepDefinition.execute(GroovyStepDefinition.java:66)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:89)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:40)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:94)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:467)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:683)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:390)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:197)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 33618,
  "status": "passed"
});
});