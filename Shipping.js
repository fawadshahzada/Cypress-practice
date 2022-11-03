//Shipping 
const LINK_Email='(//input[@id="customer-email"])[1]'
const LINK_Firstname='//input[@name="firstname"]'
const LINK_Lastname='//input[@name="lastname"]'
const LINK_Company='//input[@name="company"]'
const LINK_Street='//input[@name="street[0]"]'
const LINK_City='//input[@name="city"]'
const LINK_State='//input[@name="region"]'
const LINK_Zipcode='//input[@name="postcode"]'
const DROPDOWN_Country='//select[@name="country_id"]'
const LINK_Phonenumber='//input[@name="telephone"]'
const BTN_Radio='//input[@name="ko_unique_6"]'
const BTN_Next='//button[@data-role="opc-continue"]'

class Shiping{
    Shippinginfo(rnd , email){
        cy.wait(35000)
        // cy.xpath(LINK_Email).click({force:true}).type(email)
        cy.xpath(LINK_Firstname).clear().type(rnd)
        cy.xpath(LINK_Lastname).clear().type('bhai')
        cy.xpath(LINK_Company).type('testsolz')
        cy.xpath(LINK_Street).type('street 2')
        cy.xpath(LINK_Zipcode).type(25000)
        cy.xpath(DROPDOWN_Country).select('Pakistan')
        cy.xpath(LINK_City).type('peshawar')
        cy.xpath(LINK_State).type('kpk')
        cy.xpath(LINK_Zipcode).clear().type('25000')
        cy.xpath(LINK_Phonenumber).type('090078601')
        cy.wait(5000)
        // cy.xpath(BTN_Radio).click({force:true})

        cy.xpath(BTN_Next).click({force:true})
     }
    }
    export default new Shiping





// cy.get("select").select(["option 1", "option 2"])





