import { BaseEyes, BaseHands } from "../BaseRobot";

export class AddressRobotEyes extends BaseEyes{
    addressFormPopUp(){
        this.seesClassElementVisible('a-popover-wrapper')
    }
    verifyEnteredAddress(){
        this.seesDomContainMultipleText('.displayAddressDiv','Arifa Shaik','26-1-11','samatha nagar')
    }
    verifyBank(){
        this.seesDomContainText('#payment-information','ICICI Bank')
    }
}

export class AddressRobotHands extends BaseHands{
    openMyOrders(){
        this.clickOnDomElement('#nav-orders')
    }
    selectPrevYearOrderDetails(){
        this.clickOnDomElement('.a-dropdown-prompt')
        this.clickOnDomElementsWithIndex('.a-popover-wrapper','li',4)
    }
    selectFirstItemAndOrder(){
        this.newTabOpening('.order',0,'a',5)
        this.clickOnDomElement('#buyNow input')
    }
    addNewAddressToDelivery(){
        this.clickChildDomWithParentDom('a','#add-new-address-popover-link')
        cy.wait(3000)
    }
    fillTheAddressFormAndSubmit(){
        cy.get('.a-input-text-group input').each(($elem,index)=>{
            if(index===6)
                cy.get('.a-input-text-group input').last().clear()
            cy.get('.a-input-text-group input').eq(index).type(Address[index],{force: true})
        })
        this.clickOnDomElement('[data-action="form-submit-button-click"]')
        cy.wait(7000)
    }
    selectNetBankingOption(){
        this.checkRadioWithParentAndChildDom('[type="radio"]','[value="instrumentId=NetBanking&isExpired=false&paymentMethod=NB&tfxEligible=false"]')
    }
    selectBank(){
        this.clickDomAndSelect('select',0,'ICICI Bank')
        this.clickOnDomElementWithIndexForce('[name="ppw-widgetEvent:SetPaymentPlanSelectContinueEvent"]',0)
    }

}

export const Address=[
    'Arifa Shaik',
    '7330979910',
    '523001',
    '26-1-11',
    'samatha nagar',
    'balaji temple',
    'ONGOLE'
]  