// Personal INformation
const LINK_Createaccount='(//a[text()="Create an Account"])[1]'
const LINK_Firstname='//input[@name="firstname"]'
const LINK_Lastname='//input[@name="lastname"]'
const LINK_Checkbox='//input[@type="checkbox"]'

// Sign-in Information
const LINK_Email='//input[@id="email_address"]'
const LINK_Password='//input[@title="Password"]'
const LINK_Confirmpassword='//input[@title="Confirm Password"]'
const BTN_Createaccount='//button[@title="Create an Account"]'

class Account{

    NewAcc(){    
        cy.xpath(LINK_Createaccount).click()
        cy.wait(2000)
     }
        Accinfo(rnd , email){ 
        cy.xpath(LINK_Firstname).click().type(rnd)
        cy.xpath(LINK_Lastname).click().type("Bhai")
        cy.xpath(LINK_Checkbox).click()
        //
        // cy.xpath(SWITCH_Createlogindetail).click()
        cy.xpath(LINK_Email).type(email)
        cy.xpath(LINK_Password).click().type("Admin.123")
        cy.xpath(LINK_Confirmpassword).type("Admin.123")
    }
        CreatAcc(){
        // cy.xpath(RADIOBTN_Status).click()
        cy.xpath(BTN_Createaccount).click()
    
    }
    }
    export default new Account

