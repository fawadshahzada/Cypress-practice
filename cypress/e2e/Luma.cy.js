// import { endsWith } from 'cypress/types/lodash'
import Account from '../Page Objects/Page Actions/CreatAccount'
import Shoping from '../Page Objects/Page Actions/Shopingwomen'
import Shiping from '../Page Objects/Page Actions/Shipping'
import Order from '../Page Objects/Page Actions/Placeorder'
import ShopingTeess from '../Page Objects/Page Actions/ShopingTees'

before(() => {
    cy.log('this site must have to be visited')
    cy.visit('/')
  })
  
  describe(' LUMA ', () => { //use 1 describe
    const rnd = "Rocky"+ Math.floor(Math.random()*1000)
    const email = Math.floor(Math.random()*1000) + "hemsworth@gmail.com"
    it('login page', () => {
        
        Account.NewAcc()
        Account.Accinfo(rnd , email)
        Account.CreatAcc()
        //
        ShopingTeess.Selection()
        ShopingTeess.Buying()
        // Shoping.Dropdown()
        // Shoping.Cart()
        //
        Shiping.Shippinginfo(rnd , email)  
        //
        // Order.Placeorder() 
    })
})