import { BaseEyes, BaseHands } from "../BaseRobot";

export class PrimeRobotEyes extends BaseEyes{

    
}

export class PrimeRobotHands extends BaseHands{
    
    clickOnSecondItemGrid(){
        this.clickOnDomElementsWithIndex('#desktop-grid-1','a',2)
    }
    clickOnPrimeCheckBox(){
        cy.get('body',{timeout:2000}).then(($body)=>{
            if($body.find('.a-icon-prime').length>0){
                this.clickOnDomElement('.a-icon-prime')
            }
            else cy.log('prime checkbox was not rendered.')
        })
    }
    getDeliveryDateForItem(){
        cy.get('body').then(($body)=>{
            if($body.find('ol').length>0){
                cy.get('ol',{timeout:7000}).eq(0).find('li').find('span')
                    .contains('Get it by').children()
                    .invoke('text')
                    .then(function($elem) {
                        cy.log("Estimated delivery date: "+$elem)
                })
            }
            else if($body.find('[data-component-type="s-search-result"]')){
                this.newTabOpening('[data-component-type="s-search-result"]',0,'.a-text-bold',0)
            } 
        })
    }
}