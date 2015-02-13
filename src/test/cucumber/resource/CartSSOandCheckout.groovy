import geb.Page;

import org.apache.xalan.xsltc.compiler.Import;

import geb.*

import org.openqa.selenium.support.ui.*


class CartSSOandCheckout extends Page{
	static String RemoveProductXpath;
	
	//CheckoutDeliveryOptionSelectStrings
	static String SelectDeliveryXpath;
	//Checkout Address Strings
	static String TitleExpandXpath;
	static String TitleSelectXpath;
	static String CountryExpandXpath;
	static String CountrySelectXpath;
	static String UseSavedAddresXpath;
	static String CountryXpath;
	public String cardType;

	 public String getTesturl() {
		return this.url;
	}
	public static void setTesturl(String testurl) {
		this.url = testurl;
	}
	static at = {
	}

	static content = {
		RemoveProductElement{$(RemoveProductXpath)} 
		ProceedToCheckout{$('aside.order-summary>section.summary-section>p>a.primary_cta>span.button_label')}
		PromoCodeButton{$('span.action-input-btn')}
		PromoCodeInput{$('#promotionCode')}
		//CheckoutDeliveryOptionSelectContent   
		ChangeDeliveryMethod{$('section.card.shipping-method')}
		SelectDelivery{$(SelectDeliveryXpath)}
		//credit card payment Details content
		Submit{$('section.place-order-cc>a.primary_cta>span.button_label')}
		TermsAndConditions{$('body>article>section>section>section>section.card.payment-section>section.place-order-cc>fieldset>div>label>span')}
		TermsAndConditions_CSR{$('section.card.payment-section>div.sg-form>section.place-order-cc>fieldset>div.field.tax-exemption>label')}
		ChangeCC{$('#paymentChangeLink')}
		AddANewPaymentMethod{$('span.payment-info')}
		UDA{$('#option-shipping-add-new-labelNew')}
		YearInput{$(YearInputXpath)}//TODO Pankaj 
		MonthInput{$(MonthInputXpath)}//TODO Pankaj 
		CardVerificationInput{$('#ccv-code3New')}//for new cards only
		CardInput{$('#cc-num3New')}
		CardFirstNameInput{$('#first-name-new-1New')}
		CardLastNameInput{$('#last-name-new-2New')}
		PayPalCheckoutFormHeader{$('body > article > section > section > section > section.card.payment-section > section.place-order-pp')}
		
		// address change $("[href='/nikonstorefront/checkout/steps/edit-delivery-address']").click()
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
		
		//shippingmethod change link
		
		shippingOptionChangeLink{shippingOptionChangeLink}
		
		//shipping method submit button
		
		shippingMethodSubmitButton{$('form#selectShippingForm').find('span.button_label')}
	
		
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
	
	
	/**
	 * @param quantity
	 * This method sets the quntity of product to desired quantity
	 */
	public void changeQuantityDropDown(int quantity){
		def cartForm = "#updateCartForm0"
		def quantitySelect = "select.quantity-select"
		waitFor(10, 0.25) {
			$(cartForm).children(quantitySelect).displayed
		}
		$(cartForm).children(quantitySelect).value(quantity) //'2'
		
		//need to sleep until the qunatity and corresponding price gets updated
		sleep(5000)
		
	}
	/**This method will click the 'Remove product' link in the cart
	 * 
	 * @param removeProductNumber
	 */
	public void RemoveProduct(String removeProductNumber){
		RemoveProductXpath='#RemoveProduct_'+ removeProductNumber 
		waitFor(10, 0.25){
			RemoveProductElement.displayed
		}
		RemoveProductElement.click()
	}
	/**
	 * This method will click the 'proceed to checkout' button
	 **/
	public void ProcedeToCheckout(){
		waitFor(20, 0.25){
			ProceedToCheckout.displayed
		}
		ProceedToCheckout.click()
	}
	/**This method will find the input for the promo code, add a value to that input, and click the 'Submit' butten 
	 * 
	 * @param promoCode
	 */
	public void PromoCode(String promoCode){
		waitFor(10, 0.25){
		PromoCodeInput.displayed
		}
		PromoCodeInput.value(promoCode)
		PromoCodeButton.click()
		
	}
	
	//CheckoutDeliveryOption Methods
	/**
	 * either 0, 1 or 2  
	 * 0 ground, 1 two day air, 2 next day
	 * @param deliveryMethod
	 */
	public void SelectDeliveryOption(String deliveryMethod){
		waitFor(10, 0.25){	$('section.card.shipping-method').find('a.text-link').displayed
		
		}
		$('section.card.shipping-method').find('a.text-link').click()
		SelectDeliveryXpath = 'shippingMethod'+deliveryMethod
		waitFor(10, 0.25){
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
		waitFor(10, 0.25){
			UsernameInput.displayed
		}
		UsernameInput.value(userName)
		PwInput.value(password)
		LoginButton.click()
		sleep(5000)
	}
	//logging in as guest user
	public void LogInGuestUser(String userName){
		waitFor(10, 0.25){
			ProceedButton.displayed
		}
		ProceedButton.click()
		EmailInput.value(userName)
		GuestSubmitButton.click()
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
			waitFor(10, 0.25){
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
		
		/**
		 * This method is used to input expiration month and year
		 * @param month
		 * @param year
		 */
		public void expirationDateInput(String month, String year){
			waitFor {
				$("div").children("exp-date-inputs").children("card_expirationMonth").displayed
			}
			    $("#cc-exp-month-newNew").value(month)
				$("#cc-exp-year-newNew").value(year)
		}
		/**This method selects the delivery address as the billing address
		 * arvato.csr@outlook.com
		 */
		public void UseDeliveryAddress(){
			UDA.click()
		}
		
		public void SubmitPaymentInfo(){
			println 'submitting T&C'
			waitFor(20, 0.25){
				
				TermsAndConditions.displayed
			}
			TermsAndConditions.click()
			waitFor(20,0.25){
				
				$("section.place-order-cc>a.primary_cta>span.button_label").displayed
				
				
			}
			println 'submitting payment info'
			Submit.click()
			//write code here to check if info "Order Total has changed Please Review"
			Thread.sleep(10000)
			String info = 'body > article > section > section > section > section.card.payment-section > section.all-payments > div > section>p#globalMessage'
						
			if($(info).displayed) {
				//call the submitpaymentinfo function, click terms and conditions and submit again  here
				SelectExistingCard(cardType)
				TermsAndConditions.click()
				Submit.click()
			}
		}
		

			public void paypalCheckout(String user){
			//arvatosystems.test@gmail.com
			//5xEroLcP21
				if(user.equals("regular")){
			waitFor(10, 0.25){
				ChangeCC.displayed
			}
			ChangeCC.click()
			println 'waiting for payment select'
				
			waitFor(10, 0.25){
			$('p.action-select-label>span.payment-info').displayed
			}
				
			$('p.action-select-label>span.payment-info').click()
			
				
			println 'waiting for paypal select'
			waitFor(10, 0.25){
			$('#newPayment > div > div:nth-child(2) > label > span').displayed
			}
			
			$('#newPayment > div > div:nth-child(2) > label > span').click()
				
				
				
			println 'waiting for terms and conditions'
			
				
			//println $('#place_order_bttn > span').text()
			
			waitFor(20, 0.25){
			PayPalCheckoutFormHeader.displayed	
					
			}
			$('body > article > section > section > section > section.card.payment-section > section.place-order-pp > fieldset > div > label > span').click()
			$('body > article > section > section > section > section.card.payment-section > section.place-order-pp > #place_order_bttn > span').click()
			//$('#conditions-req-checkbox').click()
				}
				else {  //this else part handle the csr logic for paypal payment.
					$('body > article > section > section > section > section.card.payment-section > div > div > section > section > div > div:nth-child(2) > label>span.paypal').click()
//					
						waitFor(20,0.25) {
							$('body > article > section > section > section > section.card.payment-section > div > section.place-order-pp > fieldset > div > label > span').displayed
						}
					$('body > article > section > section > section > section.card.payment-section > div > section.place-order-pp > fieldset > div > label > span').click()
					
					$('body > article > section > section > section > section > div > section.place-order-pp > #place_order_bttn > span').click()
					}
					
			println 'waiting for PP sandbox'
			waitFor(20, 0.25){
				$('#login_email').displayed
				}
			$('#login_email').value('arvatosystems.test@gmail.com')
			$('#login_password').value('5xEroLcP21')
			$('#submitLogin').click()
			waitFor(10, 0.25){
				$('#continue_abovefold').displayed
				}
			$('#continue_abovefold').click()
			/*  #login_password  5xEroLcP21
			 *  login button
			 *  #submitLogin  click
			 *  then submit the order
			 *  #continue_abovefold
			 */
			
	}		
		

			/**
			 * This method is used to add payment method for csr user/guest user
			 * @param firstName
			 * @param lastName
			 * @param cardNumber
			 * @param securityCode
			 * @param expirationMonth
			 * @param expirationYear
			 */
			public void addPaymentMethodAndCheckOut(String firstName, String lastName, String cardNumber, String securityCode, String expirationMonth, String expirationYear){
								
//				waitFor(10, 0.25){
//					
//					$("#first-name-new-1New").displayed
//				}
				
				$("#first-name-new-1New").value(firstName) //'Pankaj'
				$("#last-name-new-2New").value(lastName)//'Ghimire'
				$("#cc-num3New").value(cardNumber)//'6111111111111111'
				$("#cc-exp-month-newNew").value(expirationMonth)//'5'
				$("#cc-exp-year-newNew").value(expirationYear)//'2016'
				$("#ccv-code3New").value(securityCode)//'123'
				
				waitFor(30, 0.25){
					TermsAndConditions_CSR.displayed
				}
				TermsAndConditions_CSR.click()
				
				println 'submitting payment info'
				
				Submit.click()
				
			}
			public void addBrazilPaymentMethodAndCheckOut(String firstName, String lastName, String cardNumber, String securityCode, String expirationMonth, String expirationYear){
				println 'Finding namo'
				/*waitFor(10, 0.25){
					
					$('#first-name-new-1New').displayed
					
				}*/

				$("#first-name-new-1New").value(firstName) //'Pankaj'
				$("#last-name-new-2New").value(lastName)//'Ghimire'
				$("#cc-num3New").value(cardNumber)//'6111111111111111'
				$("#cc-exp-month-newNew").value(expirationMonth)//'5'
				$("#cc-exp-year-newNew").value(expirationYear)//'2016'
				$('#newSilentOrderPostFormNew>a.primary_cta>span.button_label').click()
				waitFor(10, 0.25){
					$('#conditions-req-checkbox').displayed
				}
				$("section.cc-pw>input.cc-pw-input").value(securityCode)//'123'
				$('#conditions-req-checkbox').click()
				
				println 'submitting payment info'
				
				$('section.place-order-cc>a#place_order_bttn>span').click()
				
			}
			
			/**
			 * This method will be used by csr/guest/new user to enter shipping info
			 * @param firstName
			 * @param lastName
			 * @param company
			 * @param street1
			 * @param city
			 * @param state
			 * @param zipCode
			 * @param phoneNumber
			 * @param emailAddress
			 */
			public void addNewAddress(String firstName, String lastName, String company, String street1, String city,String state, String zipCode,String phoneNumber, String emailAddress){
				// as per correct csr flow , input field should be reset once successful checkout is done
				def input_firstName = "div.field.fname>input#firstName"
//				waitFor(10, 0.25) {
//					
//					$(input_firstName).displayed
//				}
				$(input_firstName).value(firstName)//'Pankaj'
				$("div.field.lname>input#lastName").value(lastName)//'Ghimire'
				$("div.field.company>input#company").value(company)//'Arvato Systems'
				$("div.field.address1>input#line1").value(street1)//'8 Foster Drive'
				$("div.field.city>input#townCity").value(city) //'Willimantic'
				$("div.field.state>select#regionIso").value(state)//'Connecticut'
				$("div.field.postal>input#postcode").value(zipCode) //'06226'
				$("div.field.contact-phone>input#phone").value(phoneNumber)//'8607263846'
				$("div.field.contact-email>input#email").value(emailAddress)//'pankaj.ghimire@arvatosystems.com'
				
				$("section.card.shipping-address>p>a.primary_cta>span.button_label").click()
			}
			/**
			 * 
			 * @param firstName
			 * @param lastName
			 * @param company
			 * @param street1
			 * @param city
			 * @param state
			 * @param zipCode
			 * @param phoneNumber
			 * @param emailAddress
			 */
			public void addNewAddressBrazil(String firstName, String lastName, String street1, String numero, String city,String state, String zipCode,String phoneNumber, String emailAddress, String taxID, String barrio ){
				// as per correct csr flow , input field should be reset once successful checkout is done
				def input_firstName = "div.field.fname>input#firstName"
				def urlstring= driver.currentUrl
				if (urlstring.equals('https://imageshopbr.nikontest.com/nikonstorefront/checkout/steps/add-delivery-address')) {
					
					waitFor(11, 0.25) {
						$(input_firstName).displayed
					}
					$(input_firstName).value(firstName)
					$("div.field.lname>input#lastName").value(lastName)
					$("div.field.address1>input#line1").value(street1)
					$("div.field.city>input#townCity").value(city)
					$("div.field.state>select#regionIso").value(state)
					$("div.field.postal>input#postcode").value(zipCode)
					$("div.field.contact-phone>input#phone").value(phoneNumber)
					$("div.field.contact-email>input#email").value(emailAddress)
					println 'Submitting Brazil specific info'
					$('#streetNumber').value(numero)
					$('div.field.taxId>input#taxId').value(taxID)
					$('#district').value(barrio)
					
					
					$("section.card.shipping-address>p>a.primary_cta>span.button_label").click()
					println 'Submitting Brazil specific info'
				};
			else{
				//do nothing
				println 'Address was prepopulated'
				}
				}
			
			/**
			 * This method is used to select the shipping method by CSR/Guest/New user
			 * @param shippingMethod
			 */
			public void selectShippingMethod(String shippingMethod){
				def urlstring= driver.currentUrl
				if (urlstring.equals('https://imageshopbr.nikontest.com/nikonstorefront/checkout/steps/choose-delivery-method')) {
					println 'Selecting shipping info'
					waitFor(20, 0.25){
						
						shippingMethodSubmitButton.displayed
					}
						def shippingOptionLabel = 'label.action-select-label'
						if (shippingMethod.contains('Ground')){
							// the section with class name "shipping-estimate" will be searched and returned
							// we have 3 sections with same class name so selecting 0 for ground and have to find the corresponding label to click
							$('section',0,class:"shipping-estimate").find(shippingOptionLabel).click() // for ground shipping
							
						} else if(shippingMethod.contains('Second Day Air')){
						$('section',1,class:"shipping-estimate").find(shippingOptionLabel).click()
						} else if (shippingMethod.contains('Next Day Air')){
						
						$('section',2,class:"shipping-estimate").find(shippingOptionLabel).click()
					} else {
							//do nothing
					}
					
					shippingMethodSubmitButton.click()
					
			};
		else if(urlstring.equals('https://imageshop.nikontest.com/nikonstorefront/checkout/steps/choose-delivery-method')){
			
			println 'Selecting shipping info'
			waitFor(10, 0.25){
				
				shippingMethodSubmitButton.displayed
			}
				def shippingOptionLabel = 'label.action-select-label'
				if (shippingMethod.contains('Ground')){
					// the section with class name "shipping-estimate" will be searched and returned
					// we have 3 sections with same class name so selecting 0 for ground and have to find the corresponding label to click
					$('section',0,class:"shipping-estimate").find(shippingOptionLabel).click() // for ground shipping
					
				} else if(shippingMethod.contains('Second Day Air')){
				$('section',1,class:"shipping-estimate").find(shippingOptionLabel).click()
				} else if (shippingMethod.contains('Next Day Air')){
				
				$('section',2,class:"shipping-estimate").find(shippingOptionLabel).click()
			} else {
					//do nothing
			}
			
			shippingMethodSubmitButton.click()
		};
	else if(urlstring.equals('https://sroshop.nikontest.com/nikonstorefront/checkout/steps/choose-delivery-method')){
		
		println 'Selecting shipping info'
		waitFor(10, 0.25){
			
			shippingMethodSubmitButton.displayed
		}
			def shippingOptionLabel = 'label.action-select-label'
			if (shippingMethod.contains('Ground')){
				// the section with class name "shipping-estimate" will be searched and returned
				// we have 3 sections with same class name so selecting 0 for ground and have to find the corresponding label to click
				$('section',0,class:"shipping-estimate").find(shippingOptionLabel).click() // for ground shipping
				
			} else if(shippingMethod.contains('Second Day Air')){
			$('section',1,class:"shipping-estimate").find(shippingOptionLabel).click()
			} else if (shippingMethod.contains('Next Day Air')){
			
			$('section',2,class:"shipping-estimate").find(shippingOptionLabel).click()
		} else {
				//do nothing
		}
		
		shippingMethodSubmitButton.click()
	};
		else{
			//do nothing
			}
			}
			
			
	/**
	 * This method will be used to change the default shipping method
	 * @return
	 * 
	 */
	private void changeShippingMethod() {
		waitFor(10, 0.25){
			shippingOptionChangeLink.displayed
		}
		shippingOptionChangeLink.click()
	}
	
	public void logOut(){
		waitFor{
			$('#MyNikon').find('li.action>a.tool-btn').displayed
		}
		$('#MyNikon').find('li.action>a.tool-btn').click()
		$('#MyNikon>ul.sso-tool.actions.active.user-known>li.action>ul.tray>li.row-container.known-user>ul>li.row>a.text-link.evt-sso-logout').click()
		
	}
	
	/**
	 * visa , am-ex , discover , mastercard
	 * @param CartTypeSelector
	 */
		public void SelectExistingCard(String CartTypeSelector){
			cardType=CartTypeSelector
			waitFor(10, 0.25){
				ChangeCC.displayed
			}
			ChangeCC.click()
			String cardTypeString ='form.create_update_payment_form>section.payment-info>span.' +CartTypeSelector
			waitFor(10, 0.25){
//				$(cardTypeString).parent('section.payment-info').parent('form.create_update_payment_form').find('input.cc-pw-input').displayed
				$(cardTypeString).parent('section.payment-info').parent('form.create_update_payment_form').displayed
			}
			$(cardTypeString).parent('section.payment-info').parent('form.create_update_payment_form').click()
			waitFor(10, 0.25){
								$(cardTypeString).parent('section.payment-info').parent('form.create_update_payment_form').find('input.cc-pw-input').displayed
							}
			$(cardTypeString).parent('section.payment-info').parent('form.create_update_payment_form').find('input.cc-pw-input').value('123')
			
			}
		
	public void getOrderConfirmationPage(){
		String orderNumberSelector = 'body > article > section > section > section > section.order-credentials-container > section > header > h2 > span'
		waitFor(30, 0.25){
			$(orderNumberSelector).displayed
		}
		String orderNumber = $(orderNumberSelector).text()
		println 'Order Number is '+orderNumber
	}		
}
