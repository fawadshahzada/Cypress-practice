//////   Add a Profile Information for a New Employee   ///////

const LINK_Employeefullname1='//input[@name="firstName"]'
const LINK_Employeefullname2='//input[@name="middleName"]'
const LINK_Employeefullname3='//input[@name="lastName"]'
const LINK_EmployeeID='(//input[@class="oxd-input oxd-input--active"])[2]'
const SWITCH_Createlogindetail='//span[@class="oxd-switch-input oxd-switch-input--active --label-right"]'
const LINK_Username='(//input[@autocomplete="off"])[1]'
const LINK_Password2='(//input[@type="password"])[1]'
const LINK_Password='(//input[@type="password"])[2]'
const RADIOBTN_Status1='(//span[@class="oxd-radio-input oxd-radio-input--active --label-right oxd-radio-input"])[1]'
const RADIOBTN_Status='(//span[@class="oxd-radio-input oxd-radio-input--active --label-right oxd-radio-input"])[2]'
const BTN_Cancel='(//button[@type="button"])[3]'
const BTN_Save='//button[@type="submit"]'
const BTN_Add='(//button[@type="button"])[3]'
const LINK_Employeelist='//a[text()="Employee List"]'
const LINK_Succesfullysaved='//div[@id="oxd-toaster_1"]'


//  const rnd=Math.floor(Math.random()*100)

class AddEmp{

    addbutton() {    
        cy.xpath(BTN_Add).click()
        cy.wait(4000)
     }
        EmpInfo(rnd){ 
        cy.xpath(LINK_Employeefullname1).click().type("Rocky")
        cy.xpath(LINK_Employeefullname2).click().type(rnd)
        cy.xpath(LINK_Employeefullname3).click().type("Bhai")
        cy.xpath(LINK_EmployeeID).click().clear().type(rnd)
        cy.xpath(SWITCH_Createlogindetail).click()
        cy.xpath(LINK_Username).click().type("admin"+rnd)
        cy.xpath(LINK_Password2).click().type("Admin.123")
        cy.xpath(LINK_Password).click().type("Admin.123")
    }
        savebtn(){
        // cy.xpath(RADIOBTN_Status).click()
        cy.xpath(BTN_Save).click()
        cy.wait(4000)
        cy.xpath(LINK_Employeelist).click({force:true})
    }
    }
    export default new AddEmp