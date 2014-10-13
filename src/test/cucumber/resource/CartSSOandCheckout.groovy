import geb.Page;

import java.awt.print.Pageable;

import org.apache.xalan.xsltc.compiler.Import;

import geb.*

class CartSSOandCheckout extends Page{
	static String PromoCodeButtonXpath;
	static String PromoCodeInputXpath;
	static String ProceedToCheckoutXpath;
	static String RemoveProductXpath;
	static String QTextinputxpath;
	static String QuantityDropdownExpandXpath;
	static String QuantityDropdownSelectXpath;
	//CheckoutDeliveryOptionSelectStrings
	static String SelectDeliveryXpath;
	static String DeliveryDropdownExpandXpath;
	static String DeliveryDropdownSelectXpath;
	//Checkout Payment Detail Strings
	static String SubmitXpath;
	static String UDAXpath; //Use Delivery Address
	static String YearInputXpath;
	static String MonthInputXpath;
	static String CardVerificationInputXpath;
	static String CardInputXpath;
	static String NameInputXpath;
	static String SelectCardXpath;
	static String DropdownExpandXpath;
	static String DropdownSelectXpath;
	//Checkout Address Strings
	static String SubmitAddressXpath;
	static String PhoneXpath;
	static String ZipXpath;
	static String StateXpath;
	static String TownXpath;
	static String BuisnessXpath;
	static String AddressLineTwoXpath;
	static String AddressLineOneXpath;
	static String TitleExpandXpath;
	static String TitleSelectXpath;
	static String LastNameXpath;
	static String FirstNameXpath;
	static String CountryExpandXpath;
	static String CountrySelectXpath;
	static String UseSavedAddresXpath;
	static String CountryXpath;
	//Checkout User selection/SSO strings
	static String UsernameInputXpath;
	static String PwInputXpath;
	static String LoginButtonXpath;
	static String ProceedButtonXpath;
	static String EmailInputXpath;

	
	 public String getTesturl() {
		return this.url;
	}
	public static void setTesturl(String testurl) {
		this.url = testurl;
	}
	
	static at = {
	}

	static content = {
		quantityTextInput{$(QTextinputxpath)}
		quantityDropDownexpand{$(QuantityDropdownExpandXpath)}
		quantityDropDownSelect{$(QuantityDropdownSelectXpath)}
		RemoveProduct{$(RemoveProductXpath)}
		ProceedToCheckout{$(ProceedToCheckoutXpath)}
		PromoCodeButton{$(PromoCodeButtonXpath)}
		PromoCodeInput{$(PromoCodeInputXpath)}
		//CheckoutDeliveryOptionSelectContent
		SelectDelivery{$(SelectDeliveryXpath)}
		DeliveryDropdownExpand{$(DeliveryDropdownExpandXpath)}
		DeliveryDropdownSelect{$(DeliveryDropdownSelectXpath)}
		//Payment Details content
		Submit{$(SubmitXpath)}
		UDA{$(UDAXpath)}
		YearInput{$(YearInputXpath)}
		MonthInput{$(MonthInputXpath)}
		CardVerificationInput{$(CardVerificationInputXpath)}
		CardInput{$(CardInputXpath)}
		NameInput{$(NameInputXpath)}
		SelectCard{$(SelectCardXpath)}
		DropdownExpand{$(DropdownExpandXpath)}
		DropdownSelect{$(DropdownSelectXpath)}
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
	//1
	public void UpdateQuantityTextInput(String qTextinputxpath, int quantity){
		QTextinputxpath=qTextinputxpath
		quantityTextInput.value(quantity)
		}
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
	public void ProcedeToCheckout(String proceedToCheckoutXpath){
		ProceedToCheckoutXpath=proceedToCheckoutXpath
		ProceedToCheckout.click()
	}
	/**This method will find the input for the promo code, add a value to that input, and click the 'Submit' butten 
	 * 
	 * @param promoCode
	 * @param promocodeInputXpath
	 * @param promoCodeButtonXpath
	 */
	public void PromoCode(String promoCode, String promocodeInputXpath, String promoCodeButtonXpath){
		PromoCodeInputXpath=promocodeInputXpath
		PromoCodeButtonXpath=promoCodeButtonXpath
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
	public void SelectDeliveryOption(String selectDeliveryXpath){
		SelectDeliveryXpath=selectDeliveryXpath
		SelectDelivery.click()
	}
	public void SelectDeliveryOptionDropdown(String dropdownExpandXpath, String dropdownSelectXpath ){
		DeliveryDropdownExpandXpath=dropdownExpandXpath
		DeliveryDropdownSelectXpath=dropdownSelectXpath
		DeliveryDropdownExpand.click()
		DeliveryDropdownSelect.click()
		
	}
	
	//Checkout payment info methods
	/**This method clicks on a specified card type
	 * @param selectCardXpath
	 */
	public void SelectCardType(String selectCardXpath){
		SelectCardXpath=selectCardXpath
		SelectCard.click()
		
	}
	/**This method selects a credit card from a credit card drop down
	 * @param dropdownExpandXpath
	 * @param dropdownSelectXpath
	 */
	public void SelectCardTypeDropDown(String dropdownExpandXpath, String dropdownSelectXpath){
		DropdownExpandXpath=dropdownExpandXpath
		DropdownSelectXpath=dropdownSelectXpath
		DropdownExpand.click()
		DropdownSelect.click()
		
	}
	/**This inputs a name in to a text input
	 * @param nameInputXpath
	 * @param name
	 */
	public void NameOnCardInput(String nameInputXpath, String name){
		NameInputXpath=nameInputXpath
		NameInput.value(name)
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
