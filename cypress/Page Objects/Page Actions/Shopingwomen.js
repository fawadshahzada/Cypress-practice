//Women Navbar
const DROPDOWN_Women='//a[@id="ui-id-4"]'
const DROPDOWN_Tops1='//a[@id="ui-id-9"]'
const DROPDOWN_Jackets1='//a[@id="ui-id-11"]'
const LINK_Jacket1='(//img[@alt="Olivia 1/4 Zip Light Jacket"])[1]'
const BTN_Large='//div[@id="option-label-size-143-item-169"]'
const BTN_Blue1='//div[@option-label="Blue"]'
const BTN_Addtocart1='//button[@title="Add to Cart"]'
const LINK_Cart1='//a[@class="action showcart"]'
const BTN_Checkout1='//button[@id="top-cart-btn-checkout"]'
const BTN_Listview1='(//a[@data-role="mode-switcher"])[1]'
// Men Navbar
const DROPDOWN_Men='//span[text()="Men"]'
const DROPDOWN_Tops='//a[@id="ui-id-17"]'
const DROPDOWN_Jackets='//a[@id="ui-id-19"]'
const LINK_Jacket='//img[@alt="Proteus Fitness Jackshirt"]'
const BTN_Medium='//div[@option-label="M"]'
const BTN_Blue='//div[@option-label="Blue"]'
const BTN_Addtocart='//button[@title="Add to Cart"]'
const LINK_Cart='//a[@class="action showcart"]'
const BTN_Checkout='//button[@id="top-cart-btn-checkout"]'
//Cart
const TXT_Olivia='(//strong[@class="product-item-name"])[2]'
const TXT_Small='//dl[@class="item-options"]/dd[1]'
const TXT_Blue='//dl[@class="item-options"]/dd[2]'
const BTN_Proceedtocheckout='(//button[@title="Proceed to Checkout"])[2]'
const LINK_Addtowishlist='//div[@class="product-addto-links"]//span[text()="Add to Wish List"]'
const BTN_Addalltocart='//span[text()="Add All to Cart"]'
// 
class Shoping{
    Dropdown(){ 
        cy.wait(5000)  
        cy.xpath(DROPDOWN_Men).contains('Men').invoke('show')
        cy.xpath(DROPDOWN_Tops).invoke('show')
        cy.xpath(DROPDOWN_Jackets).click({force:true})
        // cy.xpath(BTN_Listview).click()
        cy.xpath(LINK_Jacket).click()
        cy.wait(5000)
        cy.xpath(BTN_Medium).click()
        cy.xpath(BTN_Blue).click()
        cy.xpath(LINK_Addtowishlist).click()
        // cy.xpath(BTN_Addtocart).click({force:true})
        // cy.wait(10000)
        // cy.xpath(LINK_Cart).click()
        // cy.wait(5000)
        // cy.xpath(BTN_Checkout).click()
     }
     Cart(){
        cy.wait(5000)
        cy.xpath(BTN_Addalltocart).click()
        cy.xpath(LINK_Cart).click()
        cy.wait(5000)
        cy.xpath(BTN_Checkout).click({force:true})
        cy.wait(5000)

        // cy.xpath(TXT_Small).contains('S')
        // cy.xpath(TXT_Blue).contains('Blue')
        // cy.xpath(BTN_Proceedtocheckout).click()
    }}
    export default new Shoping










