import geb.*

import java.awt.print.Pageable;

import PDP
import CartSSOandCheckout



this.metaClass.mixin(cucumber.api.groovy.Hooks)
this.metaClass.mixin(cucumber.api.groovy.EN)
this.metaClass.mixin(geb.Browser)

def urlstring = new String()


Given(~'I have navigated to the IMG PDP of the regular product (.*)') { String SKU ->
	
	urlstring='http://stg-en-us-img.nikontest.com/en/Nikon-Products/Product/dslr-cameras/'+SKU+ '/D4S.html'
	PDP.setTesturl(urlstring)
	 to PDP
}
Then(~'I add the product to the cart'){->
	AddToCart('div.flex-item>div.primary-cta>a.cta>span.button_label')
}


Then(~'I navigate to the cart'){ ->
	def cartURLString = new String()
	cartURLString='https://imageshop.nikontest.com/nikonstorefront/cart#'
	CartSSOandCheckout.setTesturl(cartURLString)
 to CartSSOandCheckout
}


Then(~'I proceed to check out'){ ->                     
	ProcedeToCheckout() 

}


Then(~'I log in to SSO as a regular registered user'){ ->
	//LogInRegisteredUser('George.Akritas@arvatosystems.com', 'arvatoQA123', 'form.existing-account-login>fieldset>div.field>input.email', 'form.existing-account-login>fieldset>div.field>input.password', 'form.existing-account-login>div.buttons>button.primary_cta')
	LogInRegisteredUser('George.Akritas@arvatosystems.com', 'arvatoQA123')
	}

Then(~ 'I complete the order using a (.*)'){ String CardType ->

	SelectExistingCard(CardType)
	//a#paymentChangeLink
	SubmitPaymentInfo()

}


