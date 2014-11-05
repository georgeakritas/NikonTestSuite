$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BR_IMG_CSR_Regression.feature");
formatter.feature({
  "line": 1,
  "name": "US IMG Regression Test Cases",
  "description": "These test cases will be deployed against the US IMG Nikon Site",
  "id": "us-img-regression-test-cases",
  "keyword": "Feature"
});
formatter.before({
  "duration": 158543,
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
  "name": "I select shipping method Ground",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I complete the order as csr",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1515",
      "offset": 54
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:135"
});
formatter.result({
  "duration": 18791678404,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:43"
});
formatter.result({
  "duration": 19127982060,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2170",
      "offset": 54
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:135"
});
formatter.result({
  "duration": 8490613406,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:43"
});
formatter.result({
  "duration": 11131173090,
  "status": "passed"
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
  "duration": 1306661070,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:76"
});
formatter.result({
  "duration": 12290109961,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:88"
});
formatter.result({
  "duration": 2692445709,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:98"
});
formatter.result({
  "duration": 15030522710,
  "error_message": "geb.waiting.WaitTimeoutException: condition did not pass in 11.0 seconds (failed with exception)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:77)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrapNoCoerce.callConstructor(ConstructorSite.java:102)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:57)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:182)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:198)\r\n\tat geb.waiting.Wait.waitFor(Wait.groovy:126)\r\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:45)\r\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.doWaitFor(WaitingSupport.groovy:109)\r\n\tat geb.waiting.WaitingSupport.this$2$doWaitFor(WaitingSupport.groovy)\r\n\tat geb.waiting.WaitingSupport$this$2$doWaitFor$1.callCurrent(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:49)\r\n\tat geb.waiting.WaitingSupport$this$2$doWaitFor$1.callCurrent(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:104)\r\n\tat geb.waiting.WaitingSupport$waitFor$0.callCurrent(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:49)\r\n\tat geb.waiting.WaitingSupport$waitFor$0.callCurrent(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:100)\r\n\tat geb.waiting.WaitingSupport$waitFor.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:45)\r\n\tat geb.waiting.WaitingSupport$waitFor.call(Unknown Source)\r\n\tat geb.Page.waitFor(Page.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrap.invoke(PogoMetaMethodSite.java:187)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:56)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:49)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:133)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:149)\r\n\tat CartSSOandCheckout.addNewAddressBrazil(CartSSOandCheckout.groovy:446)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1208)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokePogoMethod(InvokerHelper.java:901)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokeMethod(InvokerHelper.java:884)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodN(ScriptBytecodeAdapter.java:164)\r\n\tat geb.Browser.methodMissing(Browser.groovy:203)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat org.codehaus.groovy.runtime.metaclass.MixinInstanceMetaMethod.invoke(MixinInstanceMetaMethod.java:53)\r\n\tat groovy.lang.MetaClassImpl.invokeMissingMethod(MetaClassImpl.java:934)\r\n\tat groovy.lang.MetaClassImpl.invokePropertyOrMissing(MetaClassImpl.java:1257)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1210)\r\n\tat groovy.lang.ExpandoMetaClass.invokeMethod(ExpandoMetaClass.java:1110)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:808)\r\n\tat groovy.lang.GroovyObjectSupport.invokeMethod(GroovyObjectSupport.java:44)\r\n\tat groovy.lang.Script.invokeMethod(Script.java:78)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeOnDelegationObjects(ClosureMetaClass.java:414)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:353)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.callCurrent(PogoMetaClassSite.java:66)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:49)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:133)\r\n\tat FirstPurchaseFlow_steps$_run_closure13.doCall(FirstPurchaseFlow_steps.groovy:99)\r\n\tat ✽.Then I add the Brazillian shipping address(BR_IMG_CSR_Regression.feature:13)\r\nCaused by: org.openqa.selenium.StaleElementReferenceException: Element not found in the cache - perhaps the page has changed since it was looked up\nCommand duration or timeout: 13.16 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00272.43.0\u0027, revision: \u0027accb3003b9fb8f7cae30f9669b4c594a065396a6\u0027, time: \u00272014-09-09 22:22:51\u0027\nSystem info: host: \u0027LENOVOUSER\u0027, ip: \u002710.10.112.113\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_11\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d33.0.2, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 5f7e69ce-b516-4a43-99bb-c00fb1df5af6\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:268)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.findElements(RemoteWebElement.java:187)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.findElementsByCssSelector(RemoteWebElement.java:240)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElements(By.java:436)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.findElements(RemoteWebElement.java:163)\r\n\tat org.openqa.selenium.WebElement$findElements.call(Unknown Source)\r\n\tat geb.navigator.NonEmptyNavigator.find(NonEmptyNavigator.groovy:58)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1208)\r\n\tat groovy.lang.ExpandoMetaClass.invokeMethod(ExpandoMetaClass.java:1110)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat groovy.lang.DelegatingMetaClass.invokeMethod(DelegatingMetaClass.java:149)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.call(PogoMetaClassSite.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:116)\r\n\tat geb.content.NavigableSupport.$(NavigableSupport.groovy:63)\r\n\tat geb.content.Navigable$$.call(Unknown Source)\r\n\tat geb.Page.$(Page.groovy:298)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:368)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.callCurrent(PogoMetaClassSite.java:66)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:141)\r\n\tat CartSSOandCheckout$_addNewAddressBrazil_closure21.doCall(CartSSOandCheckout.groovy:448)\r\n\tat CartSSOandCheckout$_addNewAddressBrazil_closure21.doCall(CartSSOandCheckout.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:278)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.call(PogoMetaClassSite.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:108)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:112)\r\n\tat geb.waiting.Wait.waitFor(Wait.groovy:115)\r\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:45)\r\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.doWaitFor(WaitingSupport.groovy:109)\r\n\tat geb.waiting.WaitingSupport.this$2$doWaitFor(WaitingSupport.groovy)\r\n\tat geb.waiting.WaitingSupport$this$2$doWaitFor$1.callCurrent(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:49)\r\n\tat geb.waiting.WaitingSupport$this$2$doWaitFor$1.callCurrent(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:104)\r\n\tat geb.waiting.WaitingSupport$waitFor$0.callCurrent(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:49)\r\n\tat geb.waiting.WaitingSupport$waitFor$0.callCurrent(Unknown Source)\r\n\tat geb.waiting.WaitingSupport.waitFor(WaitingSupport.groovy:100)\r\n\tat geb.waiting.WaitingSupport$waitFor.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:45)\r\n\tat geb.waiting.WaitingSupport$waitFor.call(Unknown Source)\r\n\tat geb.Page.waitFor(Page.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrap.invoke(PogoMetaMethodSite.java:187)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:56)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:49)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:133)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:149)\r\n\tat CartSSOandCheckout.addNewAddressBrazil(CartSSOandCheckout.groovy:446)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1208)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokePogoMethod(InvokerHelper.java:901)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.invokeMethod(InvokerHelper.java:884)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodN(ScriptBytecodeAdapter.java:164)\r\n\tat geb.Browser.methodMissing(Browser.groovy:203)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat org.codehaus.groovy.runtime.metaclass.MixinInstanceMetaMethod.invoke(MixinInstanceMetaMethod.java:53)\r\n\tat groovy.lang.MetaClassImpl.invokeMissingMethod(MetaClassImpl.java:934)\r\n\tat groovy.lang.MetaClassImpl.invokePropertyOrMissing(MetaClassImpl.java:1257)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1210)\r\n\tat groovy.lang.ExpandoMetaClass.invokeMethod(ExpandoMetaClass.java:1110)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:808)\r\n\tat groovy.lang.GroovyObjectSupport.invokeMethod(GroovyObjectSupport.java:44)\r\n\tat groovy.lang.Script.invokeMethod(Script.java:78)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeOnDelegationObjects(ClosureMetaClass.java:414)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:353)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.callCurrent(PogoMetaClassSite.java:66)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:49)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:133)\r\n\tat FirstPurchaseFlow_steps$_run_closure13.doCall(FirstPurchaseFlow_steps.groovy:99)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:90)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:324)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:278)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1017)\r\n\tat groovy.lang.Closure.call(Closure.java:423)\r\n\tat cucumber.runtime.groovy.GroovyBackend.invoke(GroovyBackend.java:150)\r\n\tat cucumber.runtime.groovy.GroovyStepDefinition$1.call(GroovyStepDefinition.java:69)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.groovy.GroovyStepDefinition.execute(GroovyStepDefinition.java:66)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:89)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:40)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:94)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:467)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:683)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:390)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:197)\r\nCaused by: org.openqa.selenium.StaleElementReferenceException: Element not found in the cache - perhaps the page has changed since it was looked up\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00272.43.0\u0027, revision: \u0027accb3003b9fb8f7cae30f9669b4c594a065396a6\u0027, time: \u00272014-09-09 22:22:51\u0027\nSystem info: host: \u0027LENOVOUSER\u0027, ip: \u002710.10.112.113\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_11\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.fxdriver.cache.getElementAt(resource://fxdriver/modules/web-element-cache.js:8322:1)\r\n\tat \u003canonymous class\u003e.Utils.getElementAt(file:///C:/Users/LENOVO~1/AppData/Local/Temp/anonymous6119347036748993209webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:7922:10)\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementsInternal_(file:///C:/Users/LENOVO~1/AppData/Local/Temp/anonymous6119347036748993209webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:9636:32)\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findChildElements(file:///C:/Users/LENOVO~1/AppData/Local/Temp/anonymous6119347036748993209webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:9657:3)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///C:/Users/LENOVO~1/AppData/Local/Temp/anonymous6119347036748993209webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:11612:16)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///C:/Users/LENOVO~1/AppData/Local/Temp/anonymous6119347036748993209webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:11617:7)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///C:/Users/LENOVO~1/AppData/Local/Temp/anonymous6119347036748993209webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:11559:5)\r\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:129"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 49191,
  "status": "passed"
});
formatter.before({
  "duration": 24418,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "TC-IMG-CSR-Check-2 - Partially Shipped Order",
  "description": "",
  "id": "us-img-regression-test-cases;tc-img-csr-check-2---partially-shipped-order",
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
  "name": "I select shipping method Ground",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I complete the order as csr",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1515",
      "offset": 54
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:135"
});
formatter.result({
  "duration": 9703168595,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:43"
});
formatter.result({
  "duration": 11144883520,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2170",
      "offset": 54
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:135"
});
formatter.result({
  "duration": 6245498158,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:43"
});
formatter.result({
  "duration": 13647406053,
  "status": "passed"
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
  "duration": 3159499202,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:76"
});
formatter.result({
  "duration": 6527703264,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:98"
});
formatter.result({
  "duration": 7502058582,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:129"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 25834,
  "status": "passed"
});
formatter.before({
  "duration": 9201,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "TC-IMG-CSR-Check-8 - Backorder - In Stock",
  "description": "",
  "id": "us-img-regression-test-cases;tc-img-csr-check-8---backorder---in-stock",
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
  "name": "I select shipping method Ground",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "I complete the order as csr",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2137",
      "offset": 54
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:135"
});
formatter.result({
  "duration": 11284821774,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:43"
});
formatter.result({
  "duration": 10634857091,
  "status": "passed"
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
  "duration": 3095931957,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:76"
});
formatter.result({
  "duration": 7379413901,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:98"
});
formatter.result({
  "duration": 7797327913,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:129"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 28665,
  "status": "passed"
});
formatter.before({
  "duration": 14156,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "TC-IMG-CSR-Check-13 - Backorder Complete Returns",
  "description": "",
  "id": "us-img-regression-test-cases;tc-img-csr-check-13---backorder-complete-returns",
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
  "name": "I select shipping method Ground",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "I complete the order as csr",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2137",
      "offset": 54
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:135"
});
formatter.result({
  "duration": 512030511,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:43"
});
formatter.result({
  "duration": 20386045457,
  "status": "passed"
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
  "duration": 2888267890,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:76"
});
formatter.result({
  "duration": 7639152262,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:98"
});
formatter.result({
  "duration": 7926774018,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:129"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 38928,
  "status": "passed"
});
formatter.before({
  "duration": 12386,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "TC-IMG-CSR-Check-15 - Backorder Order Canceled in SAP (After Custom time frame)",
  "description": "",
  "id": "us-img-regression-test-cases;tc-img-csr-check-15---backorder-order-canceled-in-sap-(after-custom-time-frame)",
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
  "name": "I select shipping method Ground",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "I complete the order as csr",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2137",
      "offset": 54
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:135"
});
formatter.result({
  "duration": 226614555,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:43"
});
formatter.result({
  "duration": 20258929368,
  "status": "passed"
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
  "duration": 3111247635,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:76"
});
formatter.result({
  "duration": 7404800243,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:98"
});
formatter.result({
  "duration": 7886894086,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:129"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 28312,
  "status": "passed"
});
formatter.before({
  "duration": 11679,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "TC-IMG-CSR-Check-21 - IMG - Complete Returns",
  "description": "",
  "id": "us-img-regression-test-cases;tc-img-csr-check-21---img---complete-returns",
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
  "name": "I select shipping method Ground",
  "keyword": "Then "
});
formatter.step({
  "line": 69,
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
  "location": "FirstPurchaseFlow_steps.groovy:135"
});
formatter.result({
  "duration": 245560442,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:43"
});
formatter.result({
  "duration": 20750398127,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2170",
      "offset": 54
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:135"
});
formatter.result({
  "duration": 6151325391,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:43"
});
formatter.result({
  "duration": 13553785710,
  "status": "passed"
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
  "duration": 2876110685,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:76"
});
formatter.result({
  "duration": 7326930155,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:98"
});
