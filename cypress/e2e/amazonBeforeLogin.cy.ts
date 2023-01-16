import { MobilesRobotEyes, MobilesRobotHands } from "../robots/Mobiles/mobile"
import { TodaysDealDependencies,TodaysDealRobotEyes,TodaysDealRobotHands } from "../robots/TodaysDeal/TodaysDeal"

context('Amazon Application testing with Cypress',()=>{
    const AmazonDependencies = new TodaysDealDependencies()
    const HomePageEyes = new TodaysDealRobotEyes()
    const HomePageHands = new TodaysDealRobotHands()
    const MobileEyes = new MobilesRobotEyes()
    const MobileHands = new MobilesRobotHands()
    
    before(() => {
        AmazonDependencies.visitPage()
    });

    Cypress.on("uncaught:exception", () => {
        return false;
    });

    describe('Amazon Application testing before login',()=>{
        it('visit Amazon Application and add item to cart', ()=>{
            HomePageHands.clickOnTodaysDealButton()
            HomePageEyes.seesItemsOnTodaysDealPage()
            HomePageHands.clickOnThirdItem()
            HomePageHands.clickOnAnyItem()
            HomePageHands.clickToSelectMinQuantityOfItem()
            HomePageHands.clickOnAddToCartBtn()
            HomePageHands.GoTocart()
            HomePageEyes.ItemQtyShouldBeMininumValue()
        })
        it('Search for Mobiles and get last mobile details',()=>{
            MobileHands.searchMobiles()
            MobileHands.clickSearchIcon()
            MobileEyes.scrollBottom()
            MobileHands.clickOnLastMobile()
            MobileHands.clickSideNavBar()
            MobileHands.clickOnMobilePhones()
        })
    })
})