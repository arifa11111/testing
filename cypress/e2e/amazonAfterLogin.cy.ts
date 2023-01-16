import { AddressRobotEyes, AddressRobotHands } from "../robots/AddressDeliveryAndPayment/addressandPayment"
import { LoginRobotHands } from "../robots/Login/Login"
import { PrimeRobotHands } from "../robots/Prime/primeDeliveryDate"
import { TodaysDealDependencies } from "../robots/TodaysDeal/TodaysDeal"

context('Amazon Application testing with Cypress',()=>{
    const AmazonDependencies = new TodaysDealDependencies()
    const PrimeHands = new PrimeRobotHands()
    const DeliveryFormHands = new AddressRobotHands()
    const DeliveryFormEyes = new AddressRobotEyes()
    const LoginHands = new LoginRobotHands()
    
    before(() => {
        AmazonDependencies.visitPage()
        LoginHands.clickOnLoginBtn()
        LoginHands.loginUsingCrediantials()
    });

describe('Amazon Application testing After login',()=>{
    it('check for prime checkbox for item', ()=> {
        PrimeHands.clickOnSecondItemGrid()
        PrimeHands.clickOnPrimeCheckBox()
        PrimeHands.getDeliveryDateForItem()
    })

    it('Add payment and address for item', ()=> {
        DeliveryFormHands.openMyOrders()
        DeliveryFormHands.selectPrevYearOrderDetails()
        DeliveryFormHands.selectFirstItemAndOrder()

        DeliveryFormHands.addNewAddressToDelivery()
        DeliveryFormEyes.addressFormPopUp()
        DeliveryFormHands.fillTheAddressFormAndSubmit()
        DeliveryFormEyes.verifyEnteredAddress()

        DeliveryFormHands.selectNetBankingOption()
        DeliveryFormHands.selectBank()
        DeliveryFormEyes.verifyBank()
        })
    })
})