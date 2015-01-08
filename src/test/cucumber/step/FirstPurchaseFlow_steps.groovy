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

Given(~'I have navigated to the PARTS PDP of the parts product (.*)') { String SKU ->

	urlstring='http://stg-en-us-parts.nikontest.com/en/Nikon-Products/Product/DSLR-Parts/'+SKU+ '/D300S-Grip-Rubber-Unit.html'
	PDP.setTesturl(urlstring)
	to PDP
}

Then(~'I check the product price (.*)'){String price->
	//lets check the price first
	checkPrice(price) // you can also check price using this method

}
Then(~'I add the product to the cart'){->
	addToCart()
}


Then(~'I navigate to the (.*) cart'){String productType ->
	def cartURLString = new String()
	if(productType.equals("IMG")){
		cartURLString='https://imageshop.nikontest.com/nikonstorefront/cart#'
	} else if(productType.equals("SRO")) {
		cartURLString='https://sroshop.nikontest.com/nikonstorefront/cart#'
	} else if(productType.equals("PARTS")) {

		cartURLString='https://partsshop.nikontest.com/nikonstorefront/cart#'
	} 
	else if(productType.equals("BR")) {
		
			cartURLString='https://imageshopbr.nikontest.com/nikonstorefront/cart#'
		}
	else {
		// check back the steps and send correct argument (IMG,SRO or PARTS)
	}

	CartSSOandCheckout.setTesturl(cartURLString)
	to CartSSOandCheckout
}

Then(~'I select the (.*) from the quantity dropdown'){int quantity ->

	changeQuantityDropDown(quantity)

}

Then(~'I proceed to check out'){ ->
	ProcedeToCheckout()
}


Then(~'I log in to SSO as a regular registered user'){ ->
	LogInRegisteredUser('George.Akritas@arvatosystems.com', 'arvatoQA123')
}
Then(~'I log in to SSO as a Brazil registered user'){ ->
	LogInRegisteredUser('george.m.akritas@gmail.com', 'arvatoQA123')
}

Then(~'I log in to SSO as a csr user'){ ->
	LogInRegisteredUser('arvato.csr@outlook.com', 'Wordbond1') //function name looks confusing but it can accept  both regular/csr user credentials
}

Then(~'I add the shipping address'){ ->

	addNewAddress('Rajesh','Hamal','Nepal Film Industry','214H Foster Drive','Willimantic','Connecticut','06226','3128413991','pankaj.ghimire@arvatosystems.com')

}

Then(~'I add the Brazilian shipping address'){ ->
	addNewAddressBrazil('Jose', 'Barco', 'Av. Henrique Valadares', '107', 'Rio de Janeiro','Rio de Janeiro', '20231-030','(55) 55555-5555', 'arvatoqanyc@gmail.com', '838.041.005-03', 'Centro' )
	
}

Then(~'I add the select shipping method (.*)'){String shippingMethod ->
	selectShippingMethod(shippingMethod) //'Next Day Air'

}


Then(~'I complete the order using a (.*)'){ String CardType ->

	SelectExistingCard(CardType)
	//a#paymentChangeLink
	SubmitPaymentInfo()
	
	getOrderConfirmationPage()

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

Then(~'I complete the order as csr'){  ->

	addPaymentMethodAndCheckOut('Pankaj','Ghimire','4111111111111111','123','5','2015')

}
Then(~'I complete the order as Brazil csr'){  ->
	
		addBrazilPaymentMethodAndCheckOut('Jorge','Rameriez','4012001037141112','123','5','2018')
	
	}

Given(~'I have navigated to the Brazil IMG PDP of the product (.*)') { String SKU ->
	//Given I have navigated to the Brazil IMG PDP of the product
	urlstring='http://stg-pt-br-img.nikontest.com/Nikon-Products/Product/dslr-cameras/'+SKU+ '/D4S.html'
	PDP.setTesturl(urlstring)
	to PDP
}

Then(~'I log out'){->
	logOut()
}
