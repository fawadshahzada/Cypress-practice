//Shoping Tees

//selection
const DROPDOWN_Men='//span[text()="Men"]'
const DROPDOWN_Tops='//a[@id="ui-id-17"]'
const DROPDOWN_Tees='//a[@id="ui-id-21"]'
const BTN_Grid='//*[@id="maincontent"]/div[3]/div[1]/div[2]/div[1]/strong[2]'
const DRP_Size='//div[@data-role="collapsible"]//div[text()="Size"]'
const BTN_Medium='//*[@id="narrow-by-list"]/div[2]/div[2]/div/div/a[3]/div'
// const DRP_Price='//div[@data-role="collapsible"]//div[text()="Price"]'
const DRP_Price='//*[@id="narrow-by-list"]/div[2]/div[2]/ol/li[1]/a'
const LINK_Pricerange='//div[@id="narrow-by-list"]/div[2]/div[2]/ol/li[1]/a'
const DRP_Color='//div[@data-role="collapsible"]//div[text()="Color"]'
const BTN_Blue='//a[@aria-label="Blue"]//div[@option-label="Blue"]'
const DRP_Material='//div[@data-role="collapsible"]//div[text()="Material"]'
const LINK_Polyester='//*[@id="narrow-by-list"]/div[5]/div[2]/ol/li[5]/a'
const DRP_Ecocollection='//div[@data-role="collapsible"]//div[text()="Eco Collection"]'
const LINK_No='///*[@id="narrow-by-list"]/div[2]/div[2]/ol/li/a'
const DRP_Performancefabric='//div[@data-role="collapsible"]//div[text()="Performance Fabric"]'
const LINK_No1='//*[@id="narrow-by-list"]/div[7]/div[2]/ol/li[2]/a'
const DRP_Erinrecommends='//div[@data-role="collapsible"]//div[text()="Erin Recommends"]'
const LINK_No2='//*[@id="narrow-by-list"]//div[3]//div[2]'
const DRP_New='//div[@data-role="collapsible"]//div[text()="New"]'
const LINK_Yes='//*[@id="narrow-by-list"]/div[9]/div[2]/ol/li[1]/a'
const DRP_Sale='//div[@data-role="collapsible"]//div[text()="Sale"]'
const LINK_No3='//*[@id="narrow-by-list"]/div[10]/div[2]/ol/li[2]/a/span'
const DRP_Pattern='//div[@data-role="collapsible"]//div[text()="Pattern"]'
const LINK_Solid='//div[text()="Pattern"]/following-sibling::div//a'
const DRP_Climate='//div[@data-role="collapsible"]//div[text()="Climate"]'
const LINK_Indoor='//*[@id="narrow-by-list"]/div[12]/div[2]/ol/li[3]/a'
//buying 
const LINK_Tee='//*[@id="maincontent"]/div[3]/div[1]/div[3]/ol/li[1]/div/a/span/span/img'
const BTN_Mediumsize='//*[@id="option-label-size-143-item-168"]'
const BTN_Bluecolor='//*[@id="option-label-color-93-item-50"]'
const BTN_Addtocart='//*[@id="product-addtocart-button"]/span'
const LINK_Cart='/html/body/div[2]/header/div[2]/div[1]/a'
const BTN_Checkout='//*[@id="top-cart-btn-checkout"]'

class ShopingTeess{
    Selection(){ 
        cy.wait(5000)  
        cy.xpath(DROPDOWN_Men).contains('Men').invoke('show')
        cy.xpath(DROPDOWN_Tops).invoke('show')
        cy.xpath(DROPDOWN_Tees).click({force:true})
        cy.xpath(BTN_Grid).click()

        cy.xpath(DRP_Size).click()
        cy.wait(2000) 
        cy.xpath(BTN_Medium).click({force:true})

        // cy.xpath(DRP_Price).click()
        // cy.wait(2000) 
        // cy.xpath(LINK_Pricerange).click({force:true})

        cy.xpath(DRP_Color).click()
        cy.wait(2000) 
        cy.xpath(BTN_Blue).click({force:true})

        // cy.xpath(DRP_Material).click()
        // cy.wait(2000) 
        // cy.xpath(LINK_Polyester).contains('Polyester').click()

        // cy.xpath(DRP_Ecocollection).click()
        // // cy.wait(2000) 
        // cy.xpath(LINK_No).click({force:true})

        // cy.xpath(DRP_Performancefabric).click()
        // cy.xpath(LINK_No1).click()

        // cy.xpath(DRP_Erinrecommends).click()
        // cy.xpath(LINK_No2).click()

        // cy.xpath(DRP_New).click()
        // cy.xpath(LINK_Yes).click()

        // cy.xpath(DRP_Sale).click()
        // cy.xpath(LINK_No3).click()

        cy.xpath(DRP_Pattern).click()
        cy.wait(2000) 
        cy.xpath(LINK_Solid).click({force:true})
        // cy.xpath(DRP_Climate).click()
        // cy.wait(2000) 
        // cy.xpath(LINK_Indoor).click({force:true})

        // cy.wait(5000)
        // cy.xpath(BTN_Medium).click()
        // cy.xpath(BTN_Blue).click()
        // cy.xpath(LINK_Addtowishlist).click()
        // cy.xpath(BTN_Addtocart).click({force:true})
        // cy.wait(10000)
        // cy.xpath(LINK_Cart).click()
        // cy.wait(5000)
        // cy.xpath(BTN_Checkout).click()
     }
     Buying(){
        cy.wait(5000)
        cy.xpath(LINK_Tee).click()
        cy.wait(5000)
        cy.xpath(BTN_Mediumsize).click()
        cy.wait(2000)
        cy.xpath(BTN_Bluecolor).click()
        cy.wait(2000)
        cy.xpath(BTN_Addtocart).click()
        cy.wait(5000)
        cy.xpath(LINK_Cart).click()
        cy.wait(2000)
        cy.xpath(BTN_Checkout).click()
    }
}
    export default new ShopingTeess