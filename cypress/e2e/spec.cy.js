import AddEmp from '../Page Objects/Page Actions/AddEmployee'
import login from '../Page Objects/Page Actions/login page'
import SearchEmp from '../Page Objects/Page Actions/SearchEmplyee'

// import action2 from '../Page Objects/Page Actions/Action'
before(() => {
  cy.log('this site must have to be visited')
  cy.visit('/')


})

describe('Orange HRM', () => { //use 1 describe
  const rnd=Math.floor(Math.random()*1000)
  it('login page', () => {
    login.credentials()
    AddEmp.addbutton(rnd)
    AddEmp.EmpInfo(rnd)
    AddEmp.savebtn()
    SearchEmp.EmpInfo(rnd)
    
  })

  // it('AddEmployee', () =>{
  //   login.credentials()
  //   AddEmp.EmpInfo()
  // })



  // it('Actions', () => {
  //  action2.testing2()
  // })
})