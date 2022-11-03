// describe('empty spec',() => {
//     it('passes', () => {
//         cy.visit('https://example.cypress.io')
//         cy.xpath('//h1[text()="Ktichen Sink"]').should('ahve.text',"Kitchen Sink")
//     })
//   })

// describe('empty spec', () => {
//     it('passes', () => {
//       cy.visit('https://example.cypress.io')
//       cy.xpath('//h1[text()="Kitchen Sink"]').should('have.text',"Kitchen Sink")
//     })
//   })

// /////////////////////////////////////////////////////////////////////////////////////////
// import action1 from '../Page Objects/Page Actions/Kitchen Sink'
// import action2 from '../Page Objects/Page Actions/Action'
// import action3 from '../Page Objects/Page Actions/Window'
// import action4 from '../Page Objects/Page Actions/Viewport'
// import action5 from '../Page Objects/Page Actions/Traversal'


// beforeEach(() => {
//   cy.log('this site must have to be visited')
//   cy.visit('/')
// })

// describe('Open Kitchen Sink', () => { //use 1 describe
//   it('kitchen', () => {
//     action1.testing()
//   })
//   it('Actions', () => {
//    action2.testing2()
//   })
//   it('Window', () => {
//     action3.testing3()
//   })
//   it('Viewport', () => {
//     action4.testing4()
//   })
//   it('Traversal', () => {
//     action4.testing4()
//   })

// })








// // const LINK_Cypressio= '//a[text()="cypress.io"]'
// // const LINK_Commands= '//a[@class="dropdown-toggle"]'
// // const LINK_Utilities= '//a[text()="Utilities"]'
// // const LINK_CypressAPI= '//a[text()="Cypress API"]'

// // // kitchen Sink 
// // const LBL_KitchenSink= '//h1[text()="Kitchen Sink"]'
// // const LINK_Docscypressio= '//a[text()="docs.cypress.io"]'
// // const LINK_Querying= '//a[text()="get"]//../../../a'
// // const LINK_Get= '//a[text()="get"]'
// // const LINK_Contains='//a[text()="contains"]'
// // const LINK_Within='//a[text()="within"]'
// // const LINK_Root='//a[text()="root"]'

// //traversal//
// // const LINK_Traversal= '//a[text()="children"]/../../../a[text()="Traversal"]'
// // const LINK_Children= '//a[text()="children"]'
// // const LINK_Closest='//a[text()="closest"]'
// // const LINK_Eq='//a[text()="eq"]'
// // const LINK_Filter='//a[text()="filter"]'
// // const LINK_Find='//a[text()="find"]'
// // const LINK_First='//a[text()="first"]'
// // const LINK_Last='//a[text()="last"]'
// // const LINK_Next='//a[text()="next"]'
// // const LINK_Nextall='//a[text()="nextAll"]'
// // const LINK_NExtUntil='//a[text()="nextUntil"]'
// // const LINK_Not='//a[text()="not"]'
// // const LINK_Parent='//a[text()="parent"]'
// // const LINK_Parents='//a[text()="parents"]'
// // const LINK_ParentsUntil='//a[text()="parentsUntil"]'
// // const LINK_Prev='//a[text()="prev"]'
// // const LINK_Prevall='//a[text()="prevAll"]'
// // const LINK_PrevUntil='//a[text()="prevUntil"]'
// // const LINK_Siblings='//a[text()="siblings"]'

// // //Actions//
// // const LINK_Actions='//a[text()="type"]//../../../a[text()="Actions"]'
// // const LINK_Link='//a[text()="type"]'
// // const LINK_Focus='//a[text()="focus"]'
// // const LINK_Blur='//a[text()="blur"]'
// // const LINK_Clear='//a[text()="clear"]'
// // const LINK_Submit='//a[text()="submit"]'
// // const LINK_Click='//a[text()="click"]'
// // const LINK_Dblclick='//a[text()="dblclick"]'
// // const LINK_Rightclick='//a[text()="rightclick"]'
// // const LINK_Check='//a[text()="check"]'
// // const LINK_Uncheck='//a[text()="uncheck"]'
// // const LINK_Select='//a[text()="select"]'
// // const LINK_ScrollIntoView='//a[text()="scrollIntoView"]'
// // const LINK_ScrollTo='//a[text()="scrollTo"]'
// // const LINK_Trigger='//a[text()="trigger"]'

// // //Window
// // const LINK_Window='(//a[text()="Window"])[1]'
// // // const LINK_window='//a[text()="//a[text()="window"]"]'
// // const LINK_Title='//a[text()="title"]'

// // //Viewport
// // const LINK_Viewport='(//a[text()="Viewport"])[1]'
// // // const LINK_viewport='//a[text()="viewport"]'

// // //Location
// // const LINK_Location='//a[text()="hash"]//..//../../a[text()="Location"]'
// // const LINK_Hash='//a[text()="hash"]'
// // const LINK_location='//a[text()="location"]'



// // describe('Open Actions', () => {
// //   it('passes', () => {
// //     cy.visit('https://example.cypress.io')
// //     // cy.xpath(LINK_Commands).click()
// //     // // cy.xpath(LINK_Commands).click()
// //     // cy.xpath(LINK_Actions).click().should('contain',"Actions")
// //     // // cy.xpath(LINK_Actions).should('contain',"Actions")
// //   })
// // })

// // describe ('Open Window', () => {
// //   it('passes',() => {
// //     cy.visit('https://example.cypress.io/')
// //     // cy.xpath(LINK_Commands).click()
// //     cy.xpath(LINK_Window).click().should('contain',"Window")
// //   })
// // })

// // describe ('Open Viewport', () => {
// //   it('passes',() => {
// //     cy.visit('https://example.cypress.io/')
// //     cy.xpath(LINK_Commands).click()
// //     // cy.xpath(LINK_Viewport).click()
// //     cy.xpath(LINK_Viewport).click().should('contain',"Viewport")
// //   })
// // })

// // describe ('Open Querying', () => {
// //   it('passes',() => {
// //     cy.visit('https://example.cypress.io/')
// //     cy.xpath(LINK_Commands).click()
// //     cy.contains('Querying').click()
// //     cy.xpath('//a[text()="Querying"]').should('have.text',"Querying")
// //   })
// // })