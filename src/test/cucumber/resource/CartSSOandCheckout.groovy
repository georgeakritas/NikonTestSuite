import geb.Page;

import java.awt.print.Pageable;

import org.apache.xalan.xsltc.compiler.Import;

import geb.*

class CartSSOandCheckout extends Page{
	static String RemoveProductXpath;
	static String QuantityDropdownExpandXpath;
	static String QuantityDropdownSelectXpath;
	//CheckoutDeliveryOptionSelectStrings
	static String SelectDeliveryXpath;
	//Checkout Payment Detail Strings
	static String YearInputXpath; // probably standardize a date 12/18 or something
	static String MonthInputXpath;
	//Checkout Address Strings
	static String TitleExpandXpath;
	static String TitleSelectXpath;
	static String CountryExpandXpath;
	static String CountrySelectXpath;
	static String UseSavedAddresXpath;
	static String CountryXpath;

	 public String getTesturl() {
		return this.url;
	}
	public static void setTesturl(String testurl) {
		this.url = testurl;
	}
	
	static at = {
	}

	static content = {
		quantityDropDownexpand{$(QuantityDropdownExpandXpath)} //#QuantityProduct_0 or 1 etc
		quantityDropDownSelect{$(QuantityDropdownSelectXpath)} //TODO Pankaj 
		RemoveProductElement{$(RemoveProductXpath)} 
		ProceedToCheckout{$('aside.order-summary>section.summary-section>p>a.primary_cta>span.button_label')}
		PromoCodeButton{$('span.action-input-btn')}
		PromoCodeInput{$('#promotionCode')}
		//CheckoutDeliveryOptionSelectContent   
		ChangeDeliveryMethod{$('section.card.shipping-method')}
		SelectDelivery{$(SelectDeliveryXpath)}
		//credit card payment Details content
		Submit{$('section.place-order-cc>a.primary_cta>span.button_label')}
		TermsAndConditions{$('div.field>input')}//TODO make T&C method George
		ChangeCC{$('#paymentChangeLink')}
		AddANewPaymentMethod{$('span.payment-info')}
		UDA{$('#option-shipping-add-new-labelNew')}
		YearInput{$(YearInputXpath)}//TODO Pankaj 
		MonthInput{$(MonthInputXpath)}//TODO Pankaj 
		CardVerificationInput{$('#ccv-code3New')}//for new cards only
		CardInput{$('#cc-num3New')}
		CardFirstNameInput{$('#first-name-new-1New')}
		CardLastNameInput{$('#last-name-new-2New')}
		//TODO paypall stuff
		//Address content
		AddressSubmit{$('a.primary_cta>span.button_label')}
		Phone{$(PhoneXpath)}
		Zip{$('form#newAddress').find('#postcode')}
		StateDropdown{$(StateXpath)}//TODO Pankaj
		StateSelect{$('')}
		Town{$('form#newAddress').find('#townCity')}
		AddressLineTwo{$('form#newAddress').find('#line2')}
		AddressLineOne{$('form#newAddress').find('#line1')}
		LastName{$('form#newAddress').find('input#lastName')}
		FirstName{$('form#newAddress').find('input#firstName')}
		ShippingEmailAddress{$()}
		//Checkout SSO content
		UsernameInput{$('form.existing-account-login>fieldset>div>input.email')}
		PwInput{$('form.existing-account-login>fieldset>div>input.password')}
		LoginButton{$('form.existing-account-login').find('button.primary_cta')}
		ProceedButton{$('#create-account-guest')}//radio button to bring up guest checkout
		EmailInput{$('section.new-cust-form.account-guest-form.active').find('input.email')}
		GuestSubmitButton{$('p.cta.primary_cta.guest-login-cta')}
		}
	//Cart methods
	/**
	 * Not sure how to check the value of an element
	 * Can't implement yet
	 */
	//TODO
	public void CheckPrice(){
		
	}
	/**
	 * Not sure how to check the value of an element
	 * Can't implement yet
	 */
	//TODO
	public void CheckProductIsPresent(){
		
	}
	/** Update quantity method
	 * Change quantity could be a dropdown, could be a text input
	 * thus two methods
	 * @param QTextinputxpath
	 * @param quantity
	 */
	//2
	public void UpdateQuantityDropDown(String dropdownxpath, String selectxpath){
		QuantityDropdownExpandXpath=dropdownxpath
		QuantityDropdownSelectXpath=selectxpath
		quantityDropDownexpand.click()
		quantityDropDownSelect.click()
		
	}
	/**This method will click the 'Remove product' link in the cart
	 * 
	 * @param removeProductNumber
	 */
	public void RemoveProduct(String removeProductNumber){
		RemoveProductXpath='#RemoveProduct_'+ removeProductNumber 
		waitFor(10000){
			RemoveProductElement.displayed
		}
		RemoveProductElement.click()
	}
	/**This method will click the 'proceed to checkout' button
	 * 
	 * @param ProceedToCheckoutXpath
	 */
	public void ProcedeToCheckout(){
		waitFor(10000){
			ProceedToCheckout.displayed
		}
		ProceedToCheckout.click()
	}
	/**This method will find the input for the promo code, add a value to that input, and click the 'Submit' butten 
	 * 
	 * @param promoCode
	 */
	public void PromoCode(String promoCode){
		waitFor(10000){
		PromoCodeInput.displayed
		}
		PromoCodeInput.value(promoCode)
		PromoCodeButton.click()
		
	}
	/**
	 * Not sure how to check the value of an element
	 * Can't implement yet
	 */
	//TODO Pankaj
	public void CheckQuantity(){
		
	}
	
	//CheckoutDeliveryOption Methods
	/**
	 * either 0, 1 or 2  
	 * 0 ground, 1 two day air, 2 next day
	 * @param deliveryMethod
	 */
	public void SelectDeliveryOption(String deliveryMethod){
		waitFor(10000){	$('section.card.shipping-method').find('a.text-link').displayed
		
		}
		$('section.card.shipping-method').find('a.text-link').click()
		SelectDeliveryXpath = 'shippingMethod'+deliveryMethod
		waitFor(10000){
			SelectDelivery.displayed
		}
		SelectDelivery.click()
		$('section.card.shipping-method').find('span.button_label').click
	}
    
	//Checkout address
	
	/**This method inputs a First name into a name text input
	 * @param firstName
	 */
	public void FirstNameInput(String firstName){
		FirstName.value(firstName)
	}
	
	/** This method inputs a Last name into a name text input
	 * @param lastName
	 */
	public void LastNameInput(String lastName){
		LastName.value(lastName)
	}

	/**This inputs an address in to an address text input
	 * @param address
	 */
	public void AdressLine1( String address){
		AddressLineOne.value(address)
	}
	
	/**This inputs an address in to an address text input
	 * @param address
	 */
	public void AdressLine2(String address){
		AddressLineTwo.value(address)
	}
	
	/**This inputs a Town in to a text input
	 * @param town
	 */
	public void TownCity(String town){
		Town.value(town)
	}
	
	/**This inputs a state/province in to a text input
	 *
	 * @param stateXpath
	 * @param state
	 */
	//TODO Dropdown
	public void StateProvince(String stateXpath, String state){
		StateXpath=stateXpath
		State.value(state)
	}
	
	/**This inputs a Zip code in to a text input
	 * @param zip
	 */
	public void ZipPostalCode(String zip){
		Zip.value(zip)
	}
	
	/** This inputs a Phone number in to a text input
	 * @param phoneNumber
	 */
	
	public void PhoneNumber(String phoneNumber){
		Phone.value(phoneNumber)
	}
	
	/**This method clicks a submit button if there is one
	 */
	public void SubmitAdressInfo(){
		AddressSubmit.click()
	}
	//Checkout SSO methods
	
	public void LogInRegisteredUser(String userName, String password){
		waitFor(10000){
			UsernameInput.displayed
		}
		UsernameInput.value(userName)
		PwInput.value(password)
		LoginButton.click()
	}
	
	
	public void CheckOutAsGuest(String emailAddress){
		ProceedButton.click()
		EmailInput.value(emailAddress)
		GuestSubmitButton.click()
	}
	
	//TODO
	public void GetOrderConffirmationNumber(){
		
	}
	
	//Checkout payment info methods
	
		/**This inputs a name in to a text input
		 * @param firstName
		 * @param lastName
		 */
		public void NameOnCardInput(String firstName, String lastName){
			waitFor(10000){
			CardFirstNameInput.value(firstName)
			}
			CardLastNameInput.value(lastName)
		}
		
		/**This inputs a card number in to a text input
		 * @param cardNumber
		 */
		public void CardNumberInput(String cardNumber){
			
			CardInput.value(cardNumber)
			
		}
		/**This inputs a card verification number in to a text input
		 * @param cardVerificationInputXpath
		 * @param cardVerificationNumber
		 */
		public void CardVerification(String cardVerificationNumber){
			println 'submitting CC info'
			waitFor {
				CardVerificationInput.displayed
			}
			CardVerificationInput.value(cardVerificationNumber)
		}
		/**This inputs a card expiration date in to a text input
		 * @param monthInputXpath
		 * @param yearInputXpath
		 * @param month
		 * @param year
		 */
		//TODO
		public void ExpirationDateInput(String monthInputXpath, String yearInputXpath, String month, String year){
			MonthInputXpath=monthInputXpath
			YearInputXpath=yearInputXpath
			MonthInput.value(month)
			YearInput.value(year)
		}
		/**This method selects the delivery address as the billing address
		 */
		public void UseDeliveryAddress(){
			UDA.click()
		}
		
		public void SubmitPaymentInfo(){
			println 'submitting payment info'
			Submit.click()
		}
		
		/**
		 * visa , am-ex , discover , mastercard
		 * @param CartTypeSelector
		 */
			public void SelectExistingCard(String CartTypeSelector){
				waitFor(10000){
					ChangeCC.displayed
				}
				ChangeCC.click()
				String cardTypeString ='form.create_update_payment_form>section.payment-info>span.' +CartTypeSelector
				waitFor(10000){
				$(cardTypeString).parent('section.payment-info').parent('form.create_update_payment_form').find('input.cc-pw-input').displayed
				println "found parent of card type"
				}
				$(cardTypeString).parent('section.payment-info').parent('form.create_update_payment_form').find('input.cc-pw-input').value('123')
				println "used that card"
				}
}
