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
	static String DeliveryDropdownExpandXpath;
	static String DeliveryDropdownSelectXpath;
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
		RemoveProduct{$(RemoveProductXpath)} //#RemoveProduct_0 or 1 etc
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
		CardInput{$(CardInputXpath)}
		FirstNameInput{$('#first-name-new-1New')}
		//TODO paypall stuff
		//Address content
		AddressSubmit{$(SubmitAddressXpath)}
		Phone{$(PhoneXpath)}
		Zip{$(ZipXpath)}
		State{$(StateXpath)}
		Town{$(TownXpath)}
		Buisness{$(BuisnessXpath)}
		AddressLineTwo{$(AddressLineTwoXpath)}
		AddressLineOne{$(AddressLineOneXpath)}
		TitleExpand{$(TitleExpandXpath)}
		TitleSelect{$(TitleSelectXpath)}
		LastName{$(LastNameXpath)}
		FirstName{$(FirstNameXpath)}
		CountryExpand{$(CountryExpandXpath)}
		CountrySelect{$(CountrySelectXpath)}
		UseSavedAddres{$(UseSavedAddresXpath)}
		Country{$(CountryXpath)}
		//Checkout SSO content
		UsernameInput{$(UsernameInputXpath)}
		PwInput{$(PwInputXpath)}
		LoginButton{$(LoginButtonXpath)}
		ProceedButton{$(ProceedButtonXpath)}
		EmailInput{$(EmailInputXpath)}

		
		}
	//Cart methods
	/**
	 * Not sure how to check the value of an element
	 * Can't implement yet
	 */
	public void CheckPrice(){
		
	}
	/**
	 * Not sure how to check the value of an element
	 * Can't implement yet
	 */
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
	 * @param removeProductXpath
	 */
	public void RemoveProduct(String removeProductXpath){
		RemoveProductXpath=removeProductXpath
		RemoveProduct.click()
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
		PromoCodeInput.value(promoCode)
		PromoCodeButton.click()
		
	}
	/**
	 * Not sure how to check the value of an element
	 * Can't implement yet
	 */
	public void CheckQuantity(){
		
	}
	
	//CheckoutDeliveryOption Methods
	public void SelectDeliveryOption(String deliveryMethod){
		waitFor(10000){	$('section.card.shipping-method').find('a.text-link').displayed
		
		}
		$('section.card.shipping-method').find('a.text-link').click()
		SelectDeliveryXpath = 'shippingMethod'+deliveryMethod //either 0, 1 or 2 // 0 ground, 1 two day air, 2 next day
		waitFor(10000){
			SelectDelivery.displayed
		}
		SelectDelivery.click()
		$('section.card.shipping-method').find('span.button_label').click
	}
	
	//Checkout payment info methods

	public void SelectExistingCard(String CartTypeSelector){
		waitFor(10000){
			ChangeCC.displayed
		}
		
		ChangeCC.click()
		waitFor(10000){
		$(CartTypeSelector).parent('section.payment-info').parent('form.create_update_payment_form').find('input.cc-pw-input').displayed
		
		}
		$(CartTypeSelector).parent('section.payment-info').parent('form.create_update_payment_form').find('input.cc-pw-input').value('123')
		println "found parent of card type"
		}

	/**This inputs a name in to a text input
	 * @param nameInputXpath
	 * @param name
	 */
	public void NameOnCardInput(String firstName, String lastName){
		
		FirstNameInput.value(firstName)
		LastNameInput.value(lastName)
	}
	
	/**This inputs a card number in to a text input
	 * @param cardInputXpath
	 * @param cardNumber
	 */
	public void CardNumberInput(String cardInputXpath, String cardNumber){
		CardInputXpath=cardInputXpath
		CardInput.value(cardNumber)
		
	}
	/**This inputs a card verification number in to a text input
	 * @param cardVerificationInputXpath
	 * @param cardVerificationNumber
	 */
	public void CardVerification(String cardVerificationInputXpath, String cardVerificationNumber){
		println 'submitting CC info'
		CardVerificationInputXpath=cardVerificationInputXpath
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
	public void ExpirationDateInput(String monthInputXpath, String yearInputXpath, String month, String year){
		MonthInputXpath=monthInputXpath
		YearInputXpath=yearInputXpath
		MonthInput.value(month)
		YearInput.value(year)
	}
	/**This method selects the delivery address as the billing address
	 * @param uDAXpath
	 */
	public void UseDeliveryAddress(String uDAXpath){
		UDAXpath=uDAXpath
		UDA.click()
	}
	/**This method s
	 * @param submitXpath
	 */
	public void SubmitPaymentInfo(String submitXpath){
		println 'submitting payment info'
		SubmitXpath=submitXpath
		Submit.click()
	}
//Checkout address
	
	/**This method selects the option to use a saved address
	 *
	 * @param useSavedAddresXpath
	 */
	public void UseSavedAddress(String useSavedAddresXpath){
		UseSavedAddresXpath=useSavedAddresXpath
		UseSavedAddres.click()
	}
	
	/**This method inputs a country into a country text input
	 *
	 * @param countryXpath
	 * @param country
	 */
	public void CountryInput(String countryXpath, String country){
		countryXpath=countryXpath
		Country.value(country)
	}
	
	/**This method selects a country from a drop down menu
	 *
	 * @param countryExpandXpath
	 * @param countrySelectXpath
	 */
	public void CountryDropDown(String countryExpandXpath, String countrySelectXpath){
		CountryExpandXpath=countryExpandXpath
		CountrySelectXpath=countrySelectXpath
		CountryExpand.click()
		CountrySelect.click()
	}
	
	/**This method inputs a First name into a name text input
	 *
	 * @param firstNameXpath
	 * @param firstName
	 */
	public void FirstNameInput(String firstNameXpath, String firstName){
		FirstNameXpath=firstNameXpath
		FirstName.value(firstName)
	}
	
	/** This method inputs a Last name into a name text input
	 * @param lastNameXpath
	 * @param lastName
	 */
	public void LastNameInput(String lastNameXpath, String lastName){
		LastNameXpath=lastNameXpath
		LastName.value(lastName)
	}
	
	/**This method Selects a title (ie Mr. Mrs.) from a dropdown menu
	 * @param titleExpandXpath
	 * @param titleSelectXpath
	 */
	public void TitleSelectionDropdown(String titleExpandXpath, String titleSelectXpath){
		TitleExpandXpath=titleExpandXpath
		TitleSelectXpath=titleSelectXpath
		TitleExpand.click()
		TitleSelect.click()
	}
	
	/**This inputs an address in to an address text input
	 * @param addressLineOneXpath
	 * @param address
	 */
	public void AdressLine1(String addressLineOneXpath, String address){
		AddressLineOneXpath=addressLineOneXpath
		AddressLineOne.value(address)
	}
	
	/**This inputs an address in to an address text input
	 * @param addressLineTwoXpath
	 * @param address
	 */
	public void AdressLine2(String addressLineTwoXpath, String address){
		AddressLineTwoXpath=addressLineTwoXpath
		AddressLineTwo.value(address)
	}
	
	/**This inputs a business in to a text input
	 * @param buisnessXpath
	 * @param buisness
	 */
	public void Buisness(String buisnessXpath, String buisness){
		BuisnessXpath=buisnessXpath
		Buisness.value(buisness)
	}
	
	/**This inputs a Town in to a text input
	 * @param townXpath
	 * @param town
	 */
	public void TownCity(String townXpath, String town){
		TownXpath=townXpath
		Town.value(town)
	}
	
	/**This inputs a state/province in to a text input
	 *
	 * @param stateXpath
	 * @param state
	 */
	public void StateProvince(String stateXpath, String state){
		StateXpath=stateXpath
		State.value(state)
	}
	
	/**This inputs a Zip code in to a text input
	 *
	 * @param zipXpath
	 * @param zip
	 */
	public void ZipPostalCode(String zipXpath, String zip){
		ZipXpath=zipXpath
		Zip.value(zip)
	}
	
	/** This inputs a Phone number in to a text input
	 * @param phoneXpath
	 * @param phoneNumber
	 */
	
	public void PhoneNumber(String phoneXpath, String phoneNumber){
		PhoneXpath=phoneXpath
		Phone.value(phoneNumber)
	}
	
	/**This method clicks a submit button if there is one
	 * @param submitXpath
	 */
	public void SubmitAdressInfo(String submitXpath){
		SubmitAddressXpath=submitXpath
		AddressSubmit.click()
	}
	//Checkout SSO methods
	
	public void LogInRegisteredUser(String userName, String password, String usernameInputXpath, String pwInputXpath, String loginButtonXpath){
		println usernameInputXpath
		UsernameInputXpath=usernameInputXpath
		println pwInputXpath
		PwInputXpath=pwInputXpath
		println loginButtonXpath
		LoginButtonXpath=loginButtonXpath
		waitFor{
			UsernameInput.displayed
		}
		UsernameInput.value(userName)
		PwInput.value(password)
		LoginButton.click()
	}
	
	
	public void CheckOutAsGuest(String emailAddress, String emailInputXpath, String proceedButtonXpath){
		ProceedButtonXpath=proceedButtonXpath
		EmailInputXpath=emailInputXpath
		EmailInput.value(emailAddress)
		ProceedButton.click()
		
	}
	
	
}
