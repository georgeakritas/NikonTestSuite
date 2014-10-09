import geb.*
import PDP


this.metaClass.mixin(cucumber.api.groovy.Hooks)
this.metaClass.mixin(cucumber.api.groovy.EN)
this.metaClass.mixin(geb.Browser)

//def poc= new POC()
//poc
def urlstring = new String()

urlstring='http://stg-en-us-img.nikontest.com/en/Nikon-Products/Product/dslr-cameras/1513/D4S.html'
PDP.setTesturl(urlstring)
Given(~'I have navigated to the PDP of product 1513') { ->
	 to PDP
}
Then(~'I add it to the cart'){->
	//AddToCart('span.button_label')
	//AddToCart('"span", text: "Add to Cart"')	
	AddToCart('div.flex-item>div.primary-cta>a.cta>span.button_label')
}


Then(~'I navigate to the cart'){ ->
	def cartURLString = new String()
	cartURLString='https://imageshop.nikontest.com/nikonstorefront/cart'
	Cart.setTesturl(cartURLString)
 to Cart
}
Then(~'I proceed to check out'){ ->
	ProcedeToCheckout('aside.order-summary>section.summary-section>p')
}
 ///p/a[contains(@class, 'primary_cta')]/span[contains(@class, 'button_label')] p>a.primary_cta>span.button_label


//aside[contains(@class, 'order-summary')]/section[contains(@class, 'summary-section')]/p
//(String userName, String password, String usernameInputXpath, String pwInputXpath, String loginButtonXpath)
//input.email.no-keyup-validate 
// input.password
//span.button_label
