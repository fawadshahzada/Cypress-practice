///Place Order
const CHECKBOX_Moneyorder='//input[@type="checkbox"]'
const TXT_Proteusjacket='//strong[text()="Proteus Fitness Jackshirt"]'
const DROPDOWN_Detail='//span[@role="tab"]'
const TXT_Medium='//dd[text()="M"]'
const TXT_Blue='//dd[text()="Blue"]'
const BTN_Placeorder='//span[text()="Place Order"]'


class Order{

    Placeorder(){
        cy.wait(10000)
        // cy.xpath(CHECKBOX_Moneyorder).click({ multiple: true })
        cy.xpath(TXT_Proteusjacket).should('have.text','Proteus Fitness Jackshirt')
        // cy.xpath(DROPDOWN_Detail).click()
        cy.xpath(TXT_Medium).should('have.text','M')
        cy.xpath(TXT_Blue).should('have.text','Blue')
        cy.xpath(BTN_Placeorder).click()
    }
}
export default new Order



