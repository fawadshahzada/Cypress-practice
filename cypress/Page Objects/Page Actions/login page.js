///////    Login Credentionals Page          /////////

const LINK_Username1='//input[@name="username"]'
const LINK_Password1='//input[@name="password"]'
const BTN_Login='//button[@type="submit"]'
const LINK_Forgotyourpassword='//p[text()="Forgot your password? "]'

class login{

    credentials() {    
        cy.xpath(LINK_Username1).click().type("admin")
        cy.xpath(LINK_Password1).click().type("admin123")
        cy.xpath(BTN_Login).click()
        // const rnd=Math.floor(Math.random()*100)

    // cy.xpath(LINK_Actions).click().should('contain',"Actions")
    }
    }
    export default new login