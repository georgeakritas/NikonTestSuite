import java.awt.print.Pageable;

import org.apache.xalan.xsltc.compiler.Import;
import geb.*
import geb.Page;



public class PDP extends Page{
	static String PriceXpath
	static String CrossSellXpath
	
	 public String getTesturl() {
		return this.url;
	}
	public static void setTesturl(String testurl) {
		this.url = testurl;
	}
	
	static at = {
	}

	static content = {
		priceElement{$(PriceXpath)}
		CrossSellElement{$(CrossSellXpath)}
	}
	

	/**
	 * This method is used to add to cart
	 */
	public void addToCart(){
		
		def cartClass = ".cta"
		def cartButtonLabel = "span.button_label"
		waitFor(10000) {
			$(cartClass).children(cartButtonLabel).displayed
		}
		$(cartClass).children(cartButtonLabel).click()
		sleep(10000)
		}
	
	
	/**
	 * Check price method
	 * @param assumedPrice
	 */
	
	 public void checkPrice(String assumedPrice){
		
		String actualPrice=$('div.primary-notifications>span.product-price>span.price>div.curr-price>span.price-value').text()
		println actualPrice
		assert actualPrice == assumedPrice
		
		println 'price mathces!! :D'
		}
	
	/**
	 * This method will add a cross sell item to the cart
	 * @param xsellxpath
	 */
    public void AddCrossSellProduct(String xsellxpath){
		
		CrossSellXpath =xsellxpath
		CrossSellElement.click()
		}

	
	}