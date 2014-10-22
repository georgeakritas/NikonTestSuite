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

Given(~'I have navigated to the SRO PDP of the regular product (.*)') { String SKU ->
	
	urlstring='http://stg-en-us-sro.nikontest.com/en/Nikon-Products/Product/dslr-cameras/'+SKU+ '/D4S.html'
	PDP.setTesturl(urlstring)
	 to PDP
}
Then(~'I add the product to the cart'){->
	//lets check the price first
//	checkPrice('$1,099.95') // you can also check price using this method
	addToCart()
	
}


Then(~'I navigate to the cart'){ ->
	def cartURLString = new String()
	cartURLString='https://imageshop.nikontest.com/nikonstorefront/cart#'
	CartSSOandCheckout.setTesturl(cartURLString)
 to CartSSOandCheckout
}

Then(~'I select the quantity from the dropdown'){ ->
	
	changeQuantityDropDown()
	
}

Then(~'I proceed to check out'){ ->                     
	ProcedeToCheckout() 
}


Then(~'I log in to SSO as a regular registered user'){ ->
	//LogInRegisteredUser('George.Akritas@arvatosystems.com', 'arvatoQA123', 'form.existing-account-login>fieldset>div.field>input.email', 'form.existing-account-login>fieldset>div.field>input.password', 'form.existing-account-login>div.buttons>button.primary_cta')
	LogInRegisteredUser('George.Akritas@arvatosystems.com', 'arvatoQA123')
//	LogInRegisteredUser('arvato.csr@outlook.com', 'Wordbond1')
	}

Then(~'I change the shipping address'){ ->
	
	addNewAddress()
//	selectShippingMethod('Next Day Air')
}

Then(~'I complete the order using a (.*)'){ String CardType ->

	SelectExistingCard(CardType)
//	addPaymentMethodAndCheckOut('Pankaj','Ghimire','4111111111111111','123','5','2015') //if csr this should be true
	//a#paymentChangeLink
	SubmitPaymentInfo()

}
Then(~ 'I enter a promo code (.*)'){ String promoCode ->
	PromoCode(promoCode)
	}
	
Then(~ 'I use paypal to complete the order'){->
PaypalCheckout()
}

Then(~ 'I complete a free order'){->
SubmitPaymentInfo()

}


