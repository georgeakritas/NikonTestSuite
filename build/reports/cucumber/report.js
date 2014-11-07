$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BR_IMG_CSR_Regression.feature");
formatter.feature({
  "line": 1,
  "name": "BR IMG CSR Regression Test Cases",
  "description": "These test cases will be deployed against the US IMG Nikon Site",
  "id": "br-img-csr-regression-test-cases",
  "keyword": "Feature"
});
formatter.before({
  "duration": 231452,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "TC-IMG-CSR-Check-1 - Fully Shipped Order",
  "description": "",
  "id": "br-img-csr-regression-test-cases;tc-img-csr-check-1---fully-shipped-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@BrazilCSR"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I have navigated to the Brazil IMG PDP of the product 1515",
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
  "name": "I log in to SSO as a csr user",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I add the Brazillian shipping address",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I add the select shipping method Ground",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I complete the order as Brazil csr",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1515",
      "offset": 54
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:140"
});
formatter.result({
  "duration": 158373014435,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:43"
});
formatter.result({
  "duration": 10416157874,
  "error_message": "geb.waiting.WaitTimeoutException: condition did not pass in 10.0 seconds (failed with exception)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:77)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrapNoCoerce.callConstructor(ConstructorSite.java:102)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:57)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:182)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:198)\r\n\tat geb.waiting.Wait.waitFor(Wait.groovy:126)\r\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:108)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:116)\r\n\tat geb.waiting.WaitingSupport.doWaitFor(WaitingSupport.groovy:109)\r\n\tat geb.waiting.WaitingSupport.this$2$doWaitFor(WaitingSupport.groovy)\r\n\tat geb.waiting.WaitingSupport$this$2$doWaitFor$1.callCurrent(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:49)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:133)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:149)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:104)\r\n\tat geb.waiting.WaitingSupport$waitFor$0.callCurrent(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:49)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:133)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:153)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:100)\r\n\tat geb.waiting.WaitingSupport$waitFor.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:108)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:124)\r\n\tat geb.Page.waitFor(Page.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrap.invoke(PogoMetaMethodSite.java:187)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:56)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:49)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:133)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:149)\r\n\tat PDP.addToCart(PDP.groovy:36)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1208)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokePogoMethod(InvokerHelper.java:901)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokeMethod(InvokerHelper.java:884)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodN(ScriptBytecodeAdapter.java:164)\r\n\tat geb.Browser.methodMissing(Browser.groovy:203)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat org.codehaus.groovy.runtime.metaclass.MixinInstanceMetaMethod.invoke(MixinInstanceMetaMethod.java:53)\r\n\tat groovy.lang.MetaClassImpl.invokeMissingMethod(MetaClassImpl.java:934)\r\n\tat groovy.lang.MetaClassImpl.invokePropertyOrMissing(MetaClassImpl.java:1257)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1210)\r\n\tat groovy.lang.ExpandoMetaClass.invokeMethod(ExpandoMetaClass.java:1110)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:808)\r\n\tat groovy.lang.GroovyObjectSupport.invokeMethod(GroovyObjectSupport.java:44)\r\n\tat groovy.lang.Script.invokeMethod(Script.java:78)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeOnDelegationObjects(ClosureMetaClass.java:414)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:353)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.callCurrent(PogoMetaClassSite.java:66)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:49)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:133)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:137)\r\n\tat FirstPurchaseFlow_steps$_run_closure5.doCall(FirstPurchaseFlow_steps.groovy:44)\r\n\tat ✽.Then I add the product to the cart(BR_IMG_CSR_Regression.feature:7)\r\nCaused by: Assertion failed: \n\n$(cartClass).children(cartButtonLabel).displayed\n| |          |        |                |\n| .cta       []       |                false\n[]                    span.button_label\n\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.assertFailed(InvokerHelper.java:398)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.assertFailed(ScriptBytecodeAdapter.java:646)\r\n\tat PDP$_addToCart_closure1.doCall(PDP.groovy:37)\r\n\tat PDP$_addToCart_closure1.doCall(PDP.groovy)\r\n\tat sun.reflect.GeneratedMethodAccessor30.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:278)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.call(PogoMetaClassSite.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:112)\r\n\tat geb.waiting.Wait.waitFor(Wait.groovy:115)\r\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:108)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:116)\r\n\tat geb.waiting.WaitingSupport.doWaitFor(WaitingSupport.groovy:109)\r\n\tat geb.waiting.WaitingSupport.this$2$doWaitFor(WaitingSupport.groovy)\r\n\tat geb.waiting.WaitingSupport$this$2$doWaitFor$1.callCurrent(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:49)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:133)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:149)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:104)\r\n\tat geb.waiting.WaitingSupport$waitFor$0.callCurrent(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:49)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:133)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:153)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:100)\r\n\tat geb.waiting.WaitingSupport$waitFor.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:108)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:124)\r\n\tat geb.Page.waitFor(Page.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrap.invoke(PogoMetaMethodSite.java:187)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:56)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:49)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:133)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:149)\r\n\tat PDP.addToCart(PDP.groovy:36)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1208)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokePogoMethod(InvokerHelper.java:901)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokeMethod(InvokerHelper.java:884)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodN(ScriptBytecodeAdapter.java:164)\r\n\tat geb.Browser.methodMissing(Browser.groovy:203)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat org.codehaus.groovy.runtime.metaclass.MixinInstanceMetaMethod.invoke(MixinInstanceMetaMethod.java:53)\r\n\tat groovy.lang.MetaClassImpl.invokeMissingMethod(MetaClassImpl.java:934)\r\n\tat groovy.lang.MetaClassImpl.invokePropertyOrMissing(MetaClassImpl.java:1257)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1210)\r\n\tat groovy.lang.ExpandoMetaClass.invokeMethod(ExpandoMetaClass.java:1110)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:808)\r\n\tat groovy.lang.GroovyObjectSupport.invokeMethod(GroovyObjectSupport.java:44)\r\n\tat groovy.lang.Script.invokeMethod(Script.java:78)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeOnDelegationObjects(ClosureMetaClass.java:414)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:353)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.callCurrent(PogoMetaClassSite.java:66)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:49)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:133)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:137)\r\n\tat FirstPurchaseFlow_steps$_run_closure5.doCall(FirstPurchaseFlow_steps.groovy:44)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:278)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat groovy.lang.Closure.call(Closure.java:423)\r\n\tat cucumber.runtime.groovy.GroovyBackend.invoke(GroovyBackend.java:150)\r\n\tat cucumber.runtime.groovy.GroovyStepDefinition$1.call(GroovyStepDefinition.java:69)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.groovy.GroovyStepDefinition.execute(GroovyStepDefinition.java:66)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:89)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:40)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:94)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:467)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:683)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:390)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:197)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "2170",
      "offset": 54
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:140"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:43"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "BR",
      "offset": 18
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:48"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:76"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:88"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:98"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Ground",
      "offset": 33
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:103"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:134"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 43176,
  "status": "passed"
});
formatter.before({
  "duration": 13449,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "TC-IMG-CSR-Check-2 - Partially Shipped Order",
  "description": "",
  "id": "br-img-csr-regression-test-cases;tc-img-csr-check-2---partially-shipped-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@BrazilCSR"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I have navigated to the Brazil IMG PDP of the product 1515",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I add the product to the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I have navigated to the Brazil IMG PDP of the product 2170",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I add the product to the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I navigate to the BR cart",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I proceed to check out",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I add the Brazillian shipping address",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I add the select shipping method Ground",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I complete the order as Brazil csr",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1515",
      "offset": 54
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:140"
});
formatter.result({
  "duration": 151696826281,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:43"
});
formatter.result({
  "duration": 10067105410,
  "error_message": "geb.waiting.WaitTimeoutException: condition did not pass in 10.0 seconds (failed with exception)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:77)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrapNoCoerce.callConstructor(ConstructorSite.java:102)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:198)\r\n\tat geb.waiting.Wait.waitFor(Wait.groovy:126)\r\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.doWaitFor(WaitingSupport.groovy:109)\r\n\tat geb.waiting.WaitingSupport.this$2$doWaitFor(WaitingSupport.groovy)\r\n\tat geb.waiting.WaitingSupport$this$2$doWaitFor$1.callCurrent(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:104)\r\n\tat geb.waiting.WaitingSupport$waitFor$0.callCurrent(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:100)\r\n\tat geb.waiting.WaitingSupport$waitFor.call(Unknown Source)\r\n\tat geb.Page.waitFor(Page.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrap.invoke(PogoMetaMethodSite.java:187)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:56)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:149)\r\n\tat PDP.addToCart(PDP.groovy:36)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1208)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokePogoMethod(InvokerHelper.java:901)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokeMethod(InvokerHelper.java:884)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodN(ScriptBytecodeAdapter.java:164)\r\n\tat geb.Browser.methodMissing(Browser.groovy:203)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat org.codehaus.groovy.runtime.metaclass.MixinInstanceMetaMethod.invoke(MixinInstanceMetaMethod.java:53)\r\n\tat groovy.lang.MetaClassImpl.invokeMissingMethod(MetaClassImpl.java:934)\r\n\tat groovy.lang.MetaClassImpl.invokePropertyOrMissing(MetaClassImpl.java:1257)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1210)\r\n\tat groovy.lang.ExpandoMetaClass.invokeMethod(ExpandoMetaClass.java:1110)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:808)\r\n\tat groovy.lang.GroovyObjectSupport.invokeMethod(GroovyObjectSupport.java:44)\r\n\tat groovy.lang.Script.invokeMethod(Script.java:78)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeOnDelegationObjects(ClosureMetaClass.java:414)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:353)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.callCurrent(PogoMetaClassSite.java:66)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:137)\r\n\tat FirstPurchaseFlow_steps$_run_closure5.doCall(FirstPurchaseFlow_steps.groovy:44)\r\n\tat ✽.Then I add the product to the cart(BR_IMG_CSR_Regression.feature:20)\r\nCaused by: Assertion failed: \n\n$(cartClass).children(cartButtonLabel).displayed\n| |          |        |                |\n| .cta       []       |                false\n[]                    span.button_label\n\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.assertFailed(InvokerHelper.java:398)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.assertFailed(ScriptBytecodeAdapter.java:646)\r\n\tat PDP$_addToCart_closure1.doCall(PDP.groovy:37)\r\n\tat PDP$_addToCart_closure1.doCall(PDP.groovy)\r\n\tat sun.reflect.GeneratedMethodAccessor30.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:278)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.call(PogoMetaClassSite.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:112)\r\n\tat geb.waiting.Wait.waitFor(Wait.groovy:115)\r\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.doWaitFor(WaitingSupport.groovy:109)\r\n\tat geb.waiting.WaitingSupport.this$2$doWaitFor(WaitingSupport.groovy)\r\n\tat geb.waiting.WaitingSupport$this$2$doWaitFor$1.callCurrent(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:104)\r\n\tat geb.waiting.WaitingSupport$waitFor$0.callCurrent(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:100)\r\n\tat geb.waiting.WaitingSupport$waitFor.call(Unknown Source)\r\n\tat geb.Page.waitFor(Page.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrap.invoke(PogoMetaMethodSite.java:187)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:56)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:149)\r\n\tat PDP.addToCart(PDP.groovy:36)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1208)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokePogoMethod(InvokerHelper.java:901)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokeMethod(InvokerHelper.java:884)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodN(ScriptBytecodeAdapter.java:164)\r\n\tat geb.Browser.methodMissing(Browser.groovy:203)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat org.codehaus.groovy.runtime.metaclass.MixinInstanceMetaMethod.invoke(MixinInstanceMetaMethod.java:53)\r\n\tat groovy.lang.MetaClassImpl.invokeMissingMethod(MetaClassImpl.java:934)\r\n\tat groovy.lang.MetaClassImpl.invokePropertyOrMissing(MetaClassImpl.java:1257)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1210)\r\n\tat groovy.lang.ExpandoMetaClass.invokeMethod(ExpandoMetaClass.java:1110)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:808)\r\n\tat groovy.lang.GroovyObjectSupport.invokeMethod(GroovyObjectSupport.java:44)\r\n\tat groovy.lang.Script.invokeMethod(Script.java:78)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeOnDelegationObjects(ClosureMetaClass.java:414)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:353)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.callCurrent(PogoMetaClassSite.java:66)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:137)\r\n\tat FirstPurchaseFlow_steps$_run_closure5.doCall(FirstPurchaseFlow_steps.groovy:44)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:278)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat groovy.lang.Closure.call(Closure.java:423)\r\n\tat cucumber.runtime.groovy.GroovyBackend.invoke(GroovyBackend.java:150)\r\n\tat cucumber.runtime.groovy.GroovyStepDefinition$1.call(GroovyStepDefinition.java:69)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.groovy.GroovyStepDefinition.execute(GroovyStepDefinition.java:66)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:89)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:40)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:94)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:467)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:683)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:390)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:197)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "2170",
      "offset": 54
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:140"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:43"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "BR",
      "offset": 18
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:48"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:76"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:98"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Ground",
      "offset": 33
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:103"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:134"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 27604,
  "status": "passed"
});
formatter.before({
  "duration": 24419,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "TC-IMG-CSR-Check-8 - Backorder - In Stock",
  "description": "",
  "id": "br-img-csr-regression-test-cases;tc-img-csr-check-8---backorder---in-stock",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@BrazilCSR"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "I have navigated to the Brazil IMG PDP of the product 2137",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I add the product to the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I navigate to the BR cart",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I proceed to check out",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I add the Brazillian shipping address",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "I add the select shipping method Ground",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "I complete the order as Brazil csr",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2137",
      "offset": 54
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:140"
});
formatter.result({
  "duration": 151627358578,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:43"
});
formatter.result({
  "duration": 10146357079,
  "error_message": "geb.waiting.WaitTimeoutException: condition did not pass in 10.0 seconds (failed with exception)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:77)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrapNoCoerce.callConstructor(ConstructorSite.java:102)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:198)\r\n\tat geb.waiting.Wait.waitFor(Wait.groovy:126)\r\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.doWaitFor(WaitingSupport.groovy:109)\r\n\tat geb.waiting.WaitingSupport.this$2$doWaitFor(WaitingSupport.groovy)\r\n\tat geb.waiting.WaitingSupport$this$2$doWaitFor$1.callCurrent(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:104)\r\n\tat geb.waiting.WaitingSupport$waitFor$0.callCurrent(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:100)\r\n\tat geb.waiting.WaitingSupport$waitFor.call(Unknown Source)\r\n\tat geb.Page.waitFor(Page.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrap.invoke(PogoMetaMethodSite.java:187)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:56)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:149)\r\n\tat PDP.addToCart(PDP.groovy:36)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1208)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokePogoMethod(InvokerHelper.java:901)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokeMethod(InvokerHelper.java:884)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodN(ScriptBytecodeAdapter.java:164)\r\n\tat geb.Browser.methodMissing(Browser.groovy:203)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat org.codehaus.groovy.runtime.metaclass.MixinInstanceMetaMethod.invoke(MixinInstanceMetaMethod.java:53)\r\n\tat groovy.lang.MetaClassImpl.invokeMissingMethod(MetaClassImpl.java:934)\r\n\tat groovy.lang.MetaClassImpl.invokePropertyOrMissing(MetaClassImpl.java:1257)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1210)\r\n\tat groovy.lang.ExpandoMetaClass.invokeMethod(ExpandoMetaClass.java:1110)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:808)\r\n\tat groovy.lang.GroovyObjectSupport.invokeMethod(GroovyObjectSupport.java:44)\r\n\tat groovy.lang.Script.invokeMethod(Script.java:78)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeOnDelegationObjects(ClosureMetaClass.java:414)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:353)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.callCurrent(PogoMetaClassSite.java:66)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:137)\r\n\tat FirstPurchaseFlow_steps$_run_closure5.doCall(FirstPurchaseFlow_steps.groovy:44)\r\n\tat ✽.Then I add the product to the cart(BR_IMG_CSR_Regression.feature:32)\r\nCaused by: Assertion failed: \n\n$(cartClass).children(cartButtonLabel).displayed\n| |          |        |                |\n| .cta       []       |                false\n[]                    span.button_label\n\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.assertFailed(InvokerHelper.java:398)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.assertFailed(ScriptBytecodeAdapter.java:646)\r\n\tat PDP$_addToCart_closure1.doCall(PDP.groovy:37)\r\n\tat PDP$_addToCart_closure1.doCall(PDP.groovy)\r\n\tat sun.reflect.GeneratedMethodAccessor30.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:278)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.call(PogoMetaClassSite.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:112)\r\n\tat geb.waiting.Wait.waitFor(Wait.groovy:115)\r\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.doWaitFor(WaitingSupport.groovy:109)\r\n\tat geb.waiting.WaitingSupport.this$2$doWaitFor(WaitingSupport.groovy)\r\n\tat geb.waiting.WaitingSupport$this$2$doWaitFor$1.callCurrent(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:104)\r\n\tat geb.waiting.WaitingSupport$waitFor$0.callCurrent(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:100)\r\n\tat geb.waiting.WaitingSupport$waitFor.call(Unknown Source)\r\n\tat geb.Page.waitFor(Page.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrap.invoke(PogoMetaMethodSite.java:187)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:56)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:149)\r\n\tat PDP.addToCart(PDP.groovy:36)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1208)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokePogoMethod(InvokerHelper.java:901)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokeMethod(InvokerHelper.java:884)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodN(ScriptBytecodeAdapter.java:164)\r\n\tat geb.Browser.methodMissing(Browser.groovy:203)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat org.codehaus.groovy.runtime.metaclass.MixinInstanceMetaMethod.invoke(MixinInstanceMetaMethod.java:53)\r\n\tat groovy.lang.MetaClassImpl.invokeMissingMethod(MetaClassImpl.java:934)\r\n\tat groovy.lang.MetaClassImpl.invokePropertyOrMissing(MetaClassImpl.java:1257)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1210)\r\n\tat groovy.lang.ExpandoMetaClass.invokeMethod(ExpandoMetaClass.java:1110)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:808)\r\n\tat groovy.lang.GroovyObjectSupport.invokeMethod(GroovyObjectSupport.java:44)\r\n\tat groovy.lang.Script.invokeMethod(Script.java:78)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeOnDelegationObjects(ClosureMetaClass.java:414)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:353)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.callCurrent(PogoMetaClassSite.java:66)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:137)\r\n\tat FirstPurchaseFlow_steps$_run_closure5.doCall(FirstPurchaseFlow_steps.groovy:44)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:278)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat groovy.lang.Closure.call(Closure.java:423)\r\n\tat cucumber.runtime.groovy.GroovyBackend.invoke(GroovyBackend.java:150)\r\n\tat cucumber.runtime.groovy.GroovyStepDefinition$1.call(GroovyStepDefinition.java:69)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.groovy.GroovyStepDefinition.execute(GroovyStepDefinition.java:66)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:89)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:40)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:94)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:467)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:683)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:390)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:197)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "BR",
      "offset": 18
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:48"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:76"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:98"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Ground",
      "offset": 33
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:103"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:134"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 27604,
  "status": "passed"
});
formatter.before({
  "duration": 9909,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "TC-IMG-CSR-Check-13 - Backorder Complete Returns",
  "description": "",
  "id": "br-img-csr-regression-test-cases;tc-img-csr-check-13---backorder-complete-returns",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 39,
      "name": "@BrazilCSR"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "I have navigated to the Brazil IMG PDP of the product 2137",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "I add the product to the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "I navigate to the BR cart",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "I proceed to check out",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "I add the Brazillian shipping address",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "I add the select shipping method Ground",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "I complete the order as Brazil csr",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2137",
      "offset": 54
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:140"
});
formatter.result({
  "duration": 151628857705,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:43"
});
formatter.result({
  "duration": 10066617026,
  "error_message": "geb.waiting.WaitTimeoutException: condition did not pass in 10.0 seconds (failed with exception)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:77)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrapNoCoerce.callConstructor(ConstructorSite.java:102)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:198)\r\n\tat geb.waiting.Wait.waitFor(Wait.groovy:126)\r\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.doWaitFor(WaitingSupport.groovy:109)\r\n\tat geb.waiting.WaitingSupport.this$2$doWaitFor(WaitingSupport.groovy)\r\n\tat geb.waiting.WaitingSupport$this$2$doWaitFor$1.callCurrent(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:104)\r\n\tat geb.waiting.WaitingSupport$waitFor$0.callCurrent(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:100)\r\n\tat geb.waiting.WaitingSupport$waitFor.call(Unknown Source)\r\n\tat geb.Page.waitFor(Page.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrap.invoke(PogoMetaMethodSite.java:187)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:56)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:149)\r\n\tat PDP.addToCart(PDP.groovy:36)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1208)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokePogoMethod(InvokerHelper.java:901)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokeMethod(InvokerHelper.java:884)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodN(ScriptBytecodeAdapter.java:164)\r\n\tat geb.Browser.methodMissing(Browser.groovy:203)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat org.codehaus.groovy.runtime.metaclass.MixinInstanceMetaMethod.invoke(MixinInstanceMetaMethod.java:53)\r\n\tat groovy.lang.MetaClassImpl.invokeMissingMethod(MetaClassImpl.java:934)\r\n\tat groovy.lang.MetaClassImpl.invokePropertyOrMissing(MetaClassImpl.java:1257)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1210)\r\n\tat groovy.lang.ExpandoMetaClass.invokeMethod(ExpandoMetaClass.java:1110)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:808)\r\n\tat groovy.lang.GroovyObjectSupport.invokeMethod(GroovyObjectSupport.java:44)\r\n\tat groovy.lang.Script.invokeMethod(Script.java:78)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeOnDelegationObjects(ClosureMetaClass.java:414)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:353)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.callCurrent(PogoMetaClassSite.java:66)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:137)\r\n\tat FirstPurchaseFlow_steps$_run_closure5.doCall(FirstPurchaseFlow_steps.groovy:44)\r\n\tat ✽.Then I add the product to the cart(BR_IMG_CSR_Regression.feature:42)\r\nCaused by: Assertion failed: \n\n$(cartClass).children(cartButtonLabel).displayed\n| |          |        |                |\n| .cta       []       |                false\n[]                    span.button_label\n\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.assertFailed(InvokerHelper.java:398)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.assertFailed(ScriptBytecodeAdapter.java:646)\r\n\tat PDP$_addToCart_closure1.doCall(PDP.groovy:37)\r\n\tat PDP$_addToCart_closure1.doCall(PDP.groovy)\r\n\tat sun.reflect.GeneratedMethodAccessor30.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:278)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.call(PogoMetaClassSite.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:112)\r\n\tat geb.waiting.Wait.waitFor(Wait.groovy:115)\r\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.doWaitFor(WaitingSupport.groovy:109)\r\n\tat geb.waiting.WaitingSupport.this$2$doWaitFor(WaitingSupport.groovy)\r\n\tat geb.waiting.WaitingSupport$this$2$doWaitFor$1.callCurrent(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:104)\r\n\tat geb.waiting.WaitingSupport$waitFor$0.callCurrent(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:100)\r\n\tat geb.waiting.WaitingSupport$waitFor.call(Unknown Source)\r\n\tat geb.Page.waitFor(Page.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrap.invoke(PogoMetaMethodSite.java:187)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:56)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:149)\r\n\tat PDP.addToCart(PDP.groovy:36)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1208)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokePogoMethod(InvokerHelper.java:901)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokeMethod(InvokerHelper.java:884)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodN(ScriptBytecodeAdapter.java:164)\r\n\tat geb.Browser.methodMissing(Browser.groovy:203)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat org.codehaus.groovy.runtime.metaclass.MixinInstanceMetaMethod.invoke(MixinInstanceMetaMethod.java:53)\r\n\tat groovy.lang.MetaClassImpl.invokeMissingMethod(MetaClassImpl.java:934)\r\n\tat groovy.lang.MetaClassImpl.invokePropertyOrMissing(MetaClassImpl.java:1257)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1210)\r\n\tat groovy.lang.ExpandoMetaClass.invokeMethod(ExpandoMetaClass.java:1110)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:808)\r\n\tat groovy.lang.GroovyObjectSupport.invokeMethod(GroovyObjectSupport.java:44)\r\n\tat groovy.lang.Script.invokeMethod(Script.java:78)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeOnDelegationObjects(ClosureMetaClass.java:414)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:353)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.callCurrent(PogoMetaClassSite.java:66)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:137)\r\n\tat FirstPurchaseFlow_steps$_run_closure5.doCall(FirstPurchaseFlow_steps.groovy:44)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:278)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat groovy.lang.Closure.call(Closure.java:423)\r\n\tat cucumber.runtime.groovy.GroovyBackend.invoke(GroovyBackend.java:150)\r\n\tat cucumber.runtime.groovy.GroovyStepDefinition$1.call(GroovyStepDefinition.java:69)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.groovy.GroovyStepDefinition.execute(GroovyStepDefinition.java:66)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:89)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:40)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:94)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:467)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:683)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:390)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:197)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "BR",
      "offset": 18
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:48"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:76"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:98"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Ground",
      "offset": 33
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:103"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:134"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 31851,
  "status": "passed"
});
formatter.before({
  "duration": 36806,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "TC-IMG-CSR-Check-15 - Backorder Order Canceled in SAP",
  "description": "",
  "id": "br-img-csr-regression-test-cases;tc-img-csr-check-15---backorder-order-canceled-in-sap",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 49,
      "name": "@BrazilCSR"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "I have navigated to the Brazil IMG PDP of the product 2137",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "I add the product to the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "I navigate to the BR cart",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "I proceed to check out",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "I add the Brazillian shipping address",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "I add the select shipping method Ground",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "I complete the order as Brazil csr",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2137",
      "offset": 54
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:140"
});
formatter.result({
  "duration": 151634216129,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:43"
});
formatter.result({
  "duration": 10000468212,
  "error_message": "geb.waiting.WaitTimeoutException: condition did not pass in 10.0 seconds (failed with exception)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:77)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrapNoCoerce.callConstructor(ConstructorSite.java:102)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:198)\r\n\tat geb.waiting.Wait.waitFor(Wait.groovy:126)\r\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.doWaitFor(WaitingSupport.groovy:109)\r\n\tat geb.waiting.WaitingSupport.this$2$doWaitFor(WaitingSupport.groovy)\r\n\tat geb.waiting.WaitingSupport$this$2$doWaitFor$1.callCurrent(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:104)\r\n\tat geb.waiting.WaitingSupport$waitFor$0.callCurrent(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:100)\r\n\tat geb.waiting.WaitingSupport$waitFor.call(Unknown Source)\r\n\tat geb.Page.waitFor(Page.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrap.invoke(PogoMetaMethodSite.java:187)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:56)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:149)\r\n\tat PDP.addToCart(PDP.groovy:36)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1208)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokePogoMethod(InvokerHelper.java:901)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokeMethod(InvokerHelper.java:884)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodN(ScriptBytecodeAdapter.java:164)\r\n\tat geb.Browser.methodMissing(Browser.groovy:203)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat org.codehaus.groovy.runtime.metaclass.MixinInstanceMetaMethod.invoke(MixinInstanceMetaMethod.java:53)\r\n\tat groovy.lang.MetaClassImpl.invokeMissingMethod(MetaClassImpl.java:934)\r\n\tat groovy.lang.MetaClassImpl.invokePropertyOrMissing(MetaClassImpl.java:1257)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1210)\r\n\tat groovy.lang.ExpandoMetaClass.invokeMethod(ExpandoMetaClass.java:1110)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:808)\r\n\tat groovy.lang.GroovyObjectSupport.invokeMethod(GroovyObjectSupport.java:44)\r\n\tat groovy.lang.Script.invokeMethod(Script.java:78)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeOnDelegationObjects(ClosureMetaClass.java:414)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:353)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.callCurrent(PogoMetaClassSite.java:66)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:137)\r\n\tat FirstPurchaseFlow_steps$_run_closure5.doCall(FirstPurchaseFlow_steps.groovy:44)\r\n\tat ✽.Then I add the product to the cart(BR_IMG_CSR_Regression.feature:52)\r\nCaused by: Assertion failed: \n\n$(cartClass).children(cartButtonLabel).displayed\n| |          |        |                |\n| .cta       []       |                false\n[]                    span.button_label\n\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.assertFailed(InvokerHelper.java:398)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.assertFailed(ScriptBytecodeAdapter.java:646)\r\n\tat PDP$_addToCart_closure1.doCall(PDP.groovy:37)\r\n\tat PDP$_addToCart_closure1.doCall(PDP.groovy)\r\n\tat sun.reflect.GeneratedMethodAccessor30.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:278)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.call(PogoMetaClassSite.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:112)\r\n\tat geb.waiting.Wait.waitFor(Wait.groovy:115)\r\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.doWaitFor(WaitingSupport.groovy:109)\r\n\tat geb.waiting.WaitingSupport.this$2$doWaitFor(WaitingSupport.groovy)\r\n\tat geb.waiting.WaitingSupport$this$2$doWaitFor$1.callCurrent(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:104)\r\n\tat geb.waiting.WaitingSupport$waitFor$0.callCurrent(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:100)\r\n\tat geb.waiting.WaitingSupport$waitFor.call(Unknown Source)\r\n\tat geb.Page.waitFor(Page.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrap.invoke(PogoMetaMethodSite.java:187)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:56)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:149)\r\n\tat PDP.addToCart(PDP.groovy:36)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1208)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokePogoMethod(InvokerHelper.java:901)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokeMethod(InvokerHelper.java:884)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodN(ScriptBytecodeAdapter.java:164)\r\n\tat geb.Browser.methodMissing(Browser.groovy:203)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat org.codehaus.groovy.runtime.metaclass.MixinInstanceMetaMethod.invoke(MixinInstanceMetaMethod.java:53)\r\n\tat groovy.lang.MetaClassImpl.invokeMissingMethod(MetaClassImpl.java:934)\r\n\tat groovy.lang.MetaClassImpl.invokePropertyOrMissing(MetaClassImpl.java:1257)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1210)\r\n\tat groovy.lang.ExpandoMetaClass.invokeMethod(ExpandoMetaClass.java:1110)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:808)\r\n\tat groovy.lang.GroovyObjectSupport.invokeMethod(GroovyObjectSupport.java:44)\r\n\tat groovy.lang.Script.invokeMethod(Script.java:78)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeOnDelegationObjects(ClosureMetaClass.java:414)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:353)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.callCurrent(PogoMetaClassSite.java:66)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:137)\r\n\tat FirstPurchaseFlow_steps$_run_closure5.doCall(FirstPurchaseFlow_steps.groovy:44)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:278)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat groovy.lang.Closure.call(Closure.java:423)\r\n\tat cucumber.runtime.groovy.GroovyBackend.invoke(GroovyBackend.java:150)\r\n\tat cucumber.runtime.groovy.GroovyStepDefinition$1.call(GroovyStepDefinition.java:69)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.groovy.GroovyStepDefinition.execute(GroovyStepDefinition.java:66)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:89)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:40)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:94)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:467)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:683)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:390)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:197)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "BR",
      "offset": 18
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:48"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:76"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:98"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Ground",
      "offset": 33
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:103"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:134"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 24065,
  "status": "passed"
});
formatter.before({
  "duration": 9556,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "TC-IMG-CSR-Check-21 - IMG - Complete Returns",
  "description": "",
  "id": "br-img-csr-regression-test-cases;tc-img-csr-check-21---img---complete-returns",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 59,
      "name": "@BrazilCSR"
    }
  ]
});
formatter.step({
  "line": 61,
  "name": "I have navigated to the Brazil IMG PDP of the product 1513",
  "keyword": "Given "
});
formatter.step({
  "line": 62,
  "name": "I add the product to the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "I have navigated to the Brazil IMG PDP of the product 2170",
  "keyword": "Given "
});
formatter.step({
  "line": 64,
  "name": "I add the product to the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "I navigate to the BR cart",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "I proceed to check out",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "I add the Brazillian shipping address",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "I add the select shipping method Ground",
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "I complete the order as Brazil csr",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1513",
      "offset": 54
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:140"
});
formatter.result({
  "duration": 150889400080,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:43"
});
formatter.result({
  "duration": 10180247760,
  "error_message": "geb.waiting.WaitTimeoutException: condition did not pass in 10.0 seconds (failed with exception)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:77)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrapNoCoerce.callConstructor(ConstructorSite.java:102)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:198)\r\n\tat geb.waiting.Wait.waitFor(Wait.groovy:126)\r\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.doWaitFor(WaitingSupport.groovy:109)\r\n\tat geb.waiting.WaitingSupport.this$2$doWaitFor(WaitingSupport.groovy)\r\n\tat geb.waiting.WaitingSupport$this$2$doWaitFor$1.callCurrent(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:104)\r\n\tat geb.waiting.WaitingSupport$waitFor$0.callCurrent(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:100)\r\n\tat geb.waiting.WaitingSupport$waitFor.call(Unknown Source)\r\n\tat geb.Page.waitFor(Page.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrap.invoke(PogoMetaMethodSite.java:187)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:56)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:149)\r\n\tat PDP.addToCart(PDP.groovy:36)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1208)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokePogoMethod(InvokerHelper.java:901)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokeMethod(InvokerHelper.java:884)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodN(ScriptBytecodeAdapter.java:164)\r\n\tat geb.Browser.methodMissing(Browser.groovy:203)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat org.codehaus.groovy.runtime.metaclass.MixinInstanceMetaMethod.invoke(MixinInstanceMetaMethod.java:53)\r\n\tat groovy.lang.MetaClassImpl.invokeMissingMethod(MetaClassImpl.java:934)\r\n\tat groovy.lang.MetaClassImpl.invokePropertyOrMissing(MetaClassImpl.java:1257)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1210)\r\n\tat groovy.lang.ExpandoMetaClass.invokeMethod(ExpandoMetaClass.java:1110)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:808)\r\n\tat groovy.lang.GroovyObjectSupport.invokeMethod(GroovyObjectSupport.java:44)\r\n\tat groovy.lang.Script.invokeMethod(Script.java:78)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeOnDelegationObjects(ClosureMetaClass.java:414)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:353)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.callCurrent(PogoMetaClassSite.java:66)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:137)\r\n\tat FirstPurchaseFlow_steps$_run_closure5.doCall(FirstPurchaseFlow_steps.groovy:44)\r\n\tat ✽.Then I add the product to the cart(BR_IMG_CSR_Regression.feature:62)\r\nCaused by: Assertion failed: \n\n$(cartClass).children(cartButtonLabel).displayed\n| |          |        |                |\n| .cta       []       |                false\n[]                    span.button_label\n\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.assertFailed(InvokerHelper.java:398)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.assertFailed(ScriptBytecodeAdapter.java:646)\r\n\tat PDP$_addToCart_closure1.doCall(PDP.groovy:37)\r\n\tat PDP$_addToCart_closure1.doCall(PDP.groovy)\r\n\tat sun.reflect.GeneratedMethodAccessor30.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:278)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.call(PogoMetaClassSite.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:112)\r\n\tat geb.waiting.Wait.waitFor(Wait.groovy:115)\r\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.doWaitFor(WaitingSupport.groovy:109)\r\n\tat geb.waiting.WaitingSupport.this$2$doWaitFor(WaitingSupport.groovy)\r\n\tat geb.waiting.WaitingSupport$this$2$doWaitFor$1.callCurrent(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:104)\r\n\tat geb.waiting.WaitingSupport$waitFor$0.callCurrent(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:100)\r\n\tat geb.waiting.WaitingSupport$waitFor.call(Unknown Source)\r\n\tat geb.Page.waitFor(Page.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrap.invoke(PogoMetaMethodSite.java:187)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:56)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:149)\r\n\tat PDP.addToCart(PDP.groovy:36)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1208)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokePogoMethod(InvokerHelper.java:901)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokeMethod(InvokerHelper.java:884)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodN(ScriptBytecodeAdapter.java:164)\r\n\tat geb.Browser.methodMissing(Browser.groovy:203)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat org.codehaus.groovy.runtime.metaclass.MixinInstanceMetaMethod.invoke(MixinInstanceMetaMethod.java:53)\r\n\tat groovy.lang.MetaClassImpl.invokeMissingMethod(MetaClassImpl.java:934)\r\n\tat groovy.lang.MetaClassImpl.invokePropertyOrMissing(MetaClassImpl.java:1257)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1210)\r\n\tat groovy.lang.ExpandoMetaClass.invokeMethod(ExpandoMetaClass.java:1110)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:808)\r\n\tat groovy.lang.GroovyObjectSupport.invokeMethod(GroovyObjectSupport.java:44)\r\n\tat groovy.lang.Script.invokeMethod(Script.java:78)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeOnDelegationObjects(ClosureMetaClass.java:414)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:353)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.callCurrent(PogoMetaClassSite.java:66)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:137)\r\n\tat FirstPurchaseFlow_steps$_run_closure5.doCall(FirstPurchaseFlow_steps.groovy:44)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:278)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat groovy.lang.Closure.call(Closure.java:423)\r\n\tat cucumber.runtime.groovy.GroovyBackend.invoke(GroovyBackend.java:150)\r\n\tat cucumber.runtime.groovy.GroovyStepDefinition$1.call(GroovyStepDefinition.java:69)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.groovy.GroovyStepDefinition.execute(GroovyStepDefinition.java:66)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:89)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:40)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:94)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:467)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:683)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:390)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:197)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "2170",
      "offset": 54
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:140"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:43"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "BR",
      "offset": 18
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:48"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:76"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:98"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Ground",
      "offset": 33
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:103"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:134"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 49193,
  "status": "passed"
});
formatter.before({
  "duration": 15925,
  "status": "passed"
});
formatter.scenario({
  "line": 72,
  "name": "TC-IMG-CSR-Check-22 - IMG - Partial Returns",
  "description": "",
  "id": "br-img-csr-regression-test-cases;tc-img-csr-check-22---img---partial-returns",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 71,
      "name": "@BrazilCSR"
    }
  ]
});
formatter.step({
  "line": 73,
  "name": "I have navigated to the Brazil IMG PDP of the product 1513",
  "keyword": "Given "
});
formatter.step({
  "line": 74,
  "name": "I add the product to the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "I have navigated to the Brazil IMG PDP of the product 2170",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "I add the product to the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "I navigate to the BR cart",
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "I proceed to check out",
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "I add the Brazillian shipping address",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "I add the select shipping method Ground",
  "keyword": "Then "
});
formatter.step({
  "line": 81,
  "name": "I complete the order as Brazil csr",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1513",
      "offset": 54
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:140"
});
formatter.result({
  "duration": 36362922222,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:43"
});
formatter.result({
  "duration": 10294457829,
  "error_message": "geb.waiting.WaitTimeoutException: condition did not pass in 10.0 seconds (failed with exception)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:77)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrapNoCoerce.callConstructor(ConstructorSite.java:102)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:198)\r\n\tat geb.waiting.Wait.waitFor(Wait.groovy:126)\r\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.doWaitFor(WaitingSupport.groovy:109)\r\n\tat geb.waiting.WaitingSupport.this$2$doWaitFor(WaitingSupport.groovy)\r\n\tat geb.waiting.WaitingSupport$this$2$doWaitFor$1.callCurrent(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:104)\r\n\tat geb.waiting.WaitingSupport$waitFor$0.callCurrent(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:100)\r\n\tat geb.waiting.WaitingSupport$waitFor.call(Unknown Source)\r\n\tat geb.Page.waitFor(Page.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrap.invoke(PogoMetaMethodSite.java:187)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:56)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:149)\r\n\tat PDP.addToCart(PDP.groovy:36)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1208)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokePogoMethod(InvokerHelper.java:901)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokeMethod(InvokerHelper.java:884)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodN(ScriptBytecodeAdapter.java:164)\r\n\tat geb.Browser.methodMissing(Browser.groovy:203)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat org.codehaus.groovy.runtime.metaclass.MixinInstanceMetaMethod.invoke(MixinInstanceMetaMethod.java:53)\r\n\tat groovy.lang.MetaClassImpl.invokeMissingMethod(MetaClassImpl.java:934)\r\n\tat groovy.lang.MetaClassImpl.invokePropertyOrMissing(MetaClassImpl.java:1257)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1210)\r\n\tat groovy.lang.ExpandoMetaClass.invokeMethod(ExpandoMetaClass.java:1110)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:808)\r\n\tat groovy.lang.GroovyObjectSupport.invokeMethod(GroovyObjectSupport.java:44)\r\n\tat groovy.lang.Script.invokeMethod(Script.java:78)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeOnDelegationObjects(ClosureMetaClass.java:414)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:353)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.callCurrent(PogoMetaClassSite.java:66)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:137)\r\n\tat FirstPurchaseFlow_steps$_run_closure5.doCall(FirstPurchaseFlow_steps.groovy:44)\r\n\tat ✽.Then I add the product to the cart(BR_IMG_CSR_Regression.feature:74)\r\nCaused by: Assertion failed: \n\n$(cartClass).children(cartButtonLabel).displayed\n| |          |        |                |\n| .cta       []       |                false\n[]                    span.button_label\n\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.assertFailed(InvokerHelper.java:398)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.assertFailed(ScriptBytecodeAdapter.java:646)\r\n\tat PDP$_addToCart_closure1.doCall(PDP.groovy:37)\r\n\tat PDP$_addToCart_closure1.doCall(PDP.groovy)\r\n\tat sun.reflect.GeneratedMethodAccessor30.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:278)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.call(PogoMetaClassSite.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:112)\r\n\tat geb.waiting.Wait.waitFor(Wait.groovy:115)\r\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.doWaitFor(WaitingSupport.groovy:109)\r\n\tat geb.waiting.WaitingSupport.this$2$doWaitFor(WaitingSupport.groovy)\r\n\tat geb.waiting.WaitingSupport$this$2$doWaitFor$1.callCurrent(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:104)\r\n\tat geb.waiting.WaitingSupport$waitFor$0.callCurrent(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:100)\r\n\tat geb.waiting.WaitingSupport$waitFor.call(Unknown Source)\r\n\tat geb.Page.waitFor(Page.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrap.invoke(PogoMetaMethodSite.java:187)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:56)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:149)\r\n\tat PDP.addToCart(PDP.groovy:36)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1208)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokePogoMethod(InvokerHelper.java:901)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokeMethod(InvokerHelper.java:884)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodN(ScriptBytecodeAdapter.java:164)\r\n\tat geb.Browser.methodMissing(Browser.groovy:203)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat org.codehaus.groovy.runtime.metaclass.MixinInstanceMetaMethod.invoke(MixinInstanceMetaMethod.java:53)\r\n\tat groovy.lang.MetaClassImpl.invokeMissingMethod(MetaClassImpl.java:934)\r\n\tat groovy.lang.MetaClassImpl.invokePropertyOrMissing(MetaClassImpl.java:1257)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1210)\r\n\tat groovy.lang.ExpandoMetaClass.invokeMethod(ExpandoMetaClass.java:1110)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:808)\r\n\tat groovy.lang.GroovyObjectSupport.invokeMethod(GroovyObjectSupport.java:44)\r\n\tat groovy.lang.Script.invokeMethod(Script.java:78)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeOnDelegationObjects(ClosureMetaClass.java:414)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:353)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.callCurrent(PogoMetaClassSite.java:66)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:137)\r\n\tat FirstPurchaseFlow_steps$_run_closure5.doCall(FirstPurchaseFlow_steps.groovy:44)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:278)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat groovy.lang.Closure.call(Closure.java:423)\r\n\tat cucumber.runtime.groovy.GroovyBackend.invoke(GroovyBackend.java:150)\r\n\tat cucumber.runtime.groovy.GroovyStepDefinition$1.call(GroovyStepDefinition.java:69)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.groovy.GroovyStepDefinition.execute(GroovyStepDefinition.java:66)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:89)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:40)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:94)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:467)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:683)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:390)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:197)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "2170",
      "offset": 54
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:140"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:43"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "BR",
      "offset": 18
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:48"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:76"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:98"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Ground",
      "offset": 33
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:103"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:134"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 26188,
  "status": "passed"
});
formatter.before({
  "duration": 14156,
  "status": "passed"
});
formatter.scenario({
  "line": 84,
  "name": "TC-IMG-CSR-Check-23 - IMG - Order Canceled in SAP",
  "description": "",
  "id": "br-img-csr-regression-test-cases;tc-img-csr-check-23---img---order-canceled-in-sap",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 83,
      "name": "@BrazilCSR"
    }
  ]
});
formatter.step({
  "line": 85,
  "name": "I have navigated to the Brazil IMG PDP of the product 1513",
  "keyword": "Given "
});
formatter.step({
  "line": 86,
  "name": "I add the product to the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 87,
  "name": "I have navigated to the Brazil IMG PDP of the product 2170",
  "keyword": "Given "
});
formatter.step({
  "line": 88,
  "name": "I add the product to the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 89,
  "name": "I navigate to the BR cart",
  "keyword": "Then "
});
formatter.step({
  "line": 90,
  "name": "I proceed to check out",
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "I add the Brazillian shipping address",
  "keyword": "Then "
});
formatter.step({
  "line": 92,
  "name": "I add the select shipping method Ground",
  "keyword": "Then "
});
formatter.step({
  "line": 93,
  "name": "I complete the order as Brazil csr",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1513",
      "offset": 54
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:140"
});
formatter.result({
  "duration": 151630781514,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:43"
});
formatter.result({
  "duration": 10225529472,
  "error_message": "geb.waiting.WaitTimeoutException: condition did not pass in 10.0 seconds (failed with exception)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:77)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrapNoCoerce.callConstructor(ConstructorSite.java:102)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:198)\r\n\tat geb.waiting.Wait.waitFor(Wait.groovy:126)\r\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.doWaitFor(WaitingSupport.groovy:109)\r\n\tat geb.waiting.WaitingSupport.this$2$doWaitFor(WaitingSupport.groovy)\r\n\tat geb.waiting.WaitingSupport$this$2$doWaitFor$1.callCurrent(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:104)\r\n\tat geb.waiting.WaitingSupport$waitFor$0.callCurrent(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:100)\r\n\tat geb.waiting.WaitingSupport$waitFor.call(Unknown Source)\r\n\tat geb.Page.waitFor(Page.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrap.invoke(PogoMetaMethodSite.java:187)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:56)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:149)\r\n\tat PDP.addToCart(PDP.groovy:36)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1208)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokePogoMethod(InvokerHelper.java:901)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokeMethod(InvokerHelper.java:884)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodN(ScriptBytecodeAdapter.java:164)\r\n\tat geb.Browser.methodMissing(Browser.groovy:203)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat org.codehaus.groovy.runtime.metaclass.MixinInstanceMetaMethod.invoke(MixinInstanceMetaMethod.java:53)\r\n\tat groovy.lang.MetaClassImpl.invokeMissingMethod(MetaClassImpl.java:934)\r\n\tat groovy.lang.MetaClassImpl.invokePropertyOrMissing(MetaClassImpl.java:1257)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1210)\r\n\tat groovy.lang.ExpandoMetaClass.invokeMethod(ExpandoMetaClass.java:1110)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:808)\r\n\tat groovy.lang.GroovyObjectSupport.invokeMethod(GroovyObjectSupport.java:44)\r\n\tat groovy.lang.Script.invokeMethod(Script.java:78)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeOnDelegationObjects(ClosureMetaClass.java:414)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:353)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.callCurrent(PogoMetaClassSite.java:66)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:137)\r\n\tat FirstPurchaseFlow_steps$_run_closure5.doCall(FirstPurchaseFlow_steps.groovy:44)\r\n\tat ✽.Then I add the product to the cart(BR_IMG_CSR_Regression.feature:86)\r\nCaused by: Assertion failed: \n\n$(cartClass).children(cartButtonLabel).displayed\n| |          |        |                |\n| .cta       []       |                false\n[]                    span.button_label\n\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.assertFailed(InvokerHelper.java:398)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.assertFailed(ScriptBytecodeAdapter.java:646)\r\n\tat PDP$_addToCart_closure1.doCall(PDP.groovy:37)\r\n\tat PDP$_addToCart_closure1.doCall(PDP.groovy)\r\n\tat sun.reflect.GeneratedMethodAccessor30.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:278)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.call(PogoMetaClassSite.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:112)\r\n\tat geb.waiting.Wait.waitFor(Wait.groovy:115)\r\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.doWaitFor(WaitingSupport.groovy:109)\r\n\tat geb.waiting.WaitingSupport.this$2$doWaitFor(WaitingSupport.groovy)\r\n\tat geb.waiting.WaitingSupport$this$2$doWaitFor$1.callCurrent(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:104)\r\n\tat geb.waiting.WaitingSupport$waitFor$0.callCurrent(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:100)\r\n\tat geb.waiting.WaitingSupport$waitFor.call(Unknown Source)\r\n\tat geb.Page.waitFor(Page.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrap.invoke(PogoMetaMethodSite.java:187)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:56)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:149)\r\n\tat PDP.addToCart(PDP.groovy:36)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1208)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokePogoMethod(InvokerHelper.java:901)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokeMethod(InvokerHelper.java:884)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodN(ScriptBytecodeAdapter.java:164)\r\n\tat geb.Browser.methodMissing(Browser.groovy:203)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat org.codehaus.groovy.runtime.metaclass.MixinInstanceMetaMethod.invoke(MixinInstanceMetaMethod.java:53)\r\n\tat groovy.lang.MetaClassImpl.invokeMissingMethod(MetaClassImpl.java:934)\r\n\tat groovy.lang.MetaClassImpl.invokePropertyOrMissing(MetaClassImpl.java:1257)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1210)\r\n\tat groovy.lang.ExpandoMetaClass.invokeMethod(ExpandoMetaClass.java:1110)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:808)\r\n\tat groovy.lang.GroovyObjectSupport.invokeMethod(GroovyObjectSupport.java:44)\r\n\tat groovy.lang.Script.invokeMethod(Script.java:78)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeOnDelegationObjects(ClosureMetaClass.java:414)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:353)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.callCurrent(PogoMetaClassSite.java:66)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:137)\r\n\tat FirstPurchaseFlow_steps$_run_closure5.doCall(FirstPurchaseFlow_steps.groovy:44)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:278)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat groovy.lang.Closure.call(Closure.java:423)\r\n\tat cucumber.runtime.groovy.GroovyBackend.invoke(GroovyBackend.java:150)\r\n\tat cucumber.runtime.groovy.GroovyStepDefinition$1.call(GroovyStepDefinition.java:69)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.groovy.GroovyStepDefinition.execute(GroovyStepDefinition.java:66)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:89)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:40)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:94)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:467)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:683)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:390)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:197)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "2170",
      "offset": 54
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:140"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:43"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "BR",
      "offset": 18
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:48"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:76"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:98"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Ground",
      "offset": 33
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:103"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:134"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 26543,
  "status": "passed"
});
formatter.before({
  "duration": 15217,
  "status": "passed"
});
formatter.scenario({
  "line": 96,
  "name": "TC-IMG-CSR-Check-26 - IMG Order using Mastercard fully shipped no discounts",
  "description": "",
  "id": "br-img-csr-regression-test-cases;tc-img-csr-check-26---img-order-using-mastercard-fully-shipped-no-discounts",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 95,
      "name": "@BrazilCSR"
    }
  ]
});
formatter.step({
  "line": 97,
  "name": "I have navigated to the Brazil IMG PDP of the product 1513",
  "keyword": "Given "
});
formatter.step({
  "line": 98,
  "name": "I add the product to the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 99,
  "name": "I have navigated to the Brazil IMG PDP of the product 2170",
  "keyword": "Given "
});
formatter.step({
  "line": 100,
  "name": "I add the product to the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 101,
  "name": "I navigate to the BR cart",
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "I proceed to check out",
  "keyword": "Then "
});
formatter.step({
  "line": 103,
  "name": "I add the Brazillian shipping address",
  "keyword": "Then "
});
formatter.step({
  "line": 104,
  "name": "I add the select shipping method Ground",
  "keyword": "Then "
});
formatter.step({
  "line": 105,
  "name": "I complete the order as Brazil csr",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1513",
      "offset": 54
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:140"
});
formatter.result({
  "duration": 151675990323,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:43"
});
