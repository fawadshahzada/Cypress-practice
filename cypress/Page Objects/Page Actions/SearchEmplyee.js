///////    Landing Page of the Website      /////////

const LINK_Inputusername='(//input[@placeholder="Type for hints..."])[1]'
const DRP_Menu='//i[@class="oxd-icon bi-x oxd-sidepanel-header-close"]'
const LINK_Name='(//input[@placeholder="Type for hints..."])[1]'
const LINK_EmployeeID1='(//input[@class="oxd-input oxd-input--active"])[2]'
const DRP_EmploymentStatus='(//div[text()="-- Select --"])[1]'
const DRP_Include='//div[text()="Current Employees Only"]'
const LINK_Supervisorname='(//input[@placeholder="Type for hints..."])[2]'
const LINK_Jobtitle='(//div[text()="-- Select --"])[2]'
const SUB_Unit='(//div[text()="-- Select --"])[3]'
const BTN_Reset='//button[@type="reset"]'
const BTN_Search='//button[@type="submit"]'
const TBL_Cell1='(//div[@class="oxd-table-cell oxd-padding-cell"])[2]'
const TBL_Cell2='(//div[@class="oxd-table-cell oxd-padding-cell"])[3]'



class SearchEmp{

    EmpInfo(rnd) {    
        // cy.xpath(DRP_Menu).click()
        cy.xpath(LINK_Name).type("Rocky"+rnd)
        cy.xpath(LINK_EmployeeID1).click().type(rnd)
        cy.xpath(BTN_Search).click({force:true})
        // cy.xpath(SWITCH_Createlogindetail).click()
        cy.xpath(TBL_Cell1).should('have.text',rnd)
        cy.xpath(TBL_Cell2).should('have.text','Rocky '+rnd)
    }
    }
    export default new SearchEmp






