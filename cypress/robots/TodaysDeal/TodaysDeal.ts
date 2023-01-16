import { BaseDependencies, BaseEyes, BaseHands } from "../BaseRobot";

export class TodaysDealDependencies extends BaseDependencies {

    visitPage() {
        this.accessUrl(`${Cypress.config().baseUrl}`)
    }
}

export class TodaysDealRobotEyes extends BaseEyes{
    seesItemsOnTodaysDealPage(){
        this.seesDataTestIdVisible("grid-deals-container")
    }
    ItemQtyShouldBeMininumValue(){
        this.seesDomWithIndexAndAttr('input',15,'value',1)
    }
}

export class TodaysDealRobotHands extends BaseHands{

    clickOnTodaysDealButton(){
        this.clickOnTextElement("Today's Deals")
    }
    clickToSelectMinQuantityOfItem(){
        this.clickDomAndSelect('#selectQuantity #quantity',0,0)
    }
    clickOnThirdItem(){
        this.clickOnDataTestIdWithIndex("deal-card",2)
    }
    clickOnAnyItem(){
        cy.get('body').then(($body)=>{
            if($body.find('#imageBlock_feature_div').length>0) return
            if($body.find('[data-component-type="s-search-result"]').length>0){
                this.newTabOpening('[data-component-type="s-search-result"]',0,'a',0)
            } 
            else if($body.find('ul').length>0){
                this.clickOnParentDomUsingChildDomsWithIndexs('ul',2,'li',0,'a',0)
            }
        })
    }
    checkWarrantyCardForItem(){
        cy.get('body',{timeout:4000}).then(($body)=>{
            if($body.find('#attach-accessory-pane').length>0){
                this.clickOnDomElement('#attach-view-cart-button-form .a-button-input') 
            }
            else if($body.find('#attach-warranty').length>0){
                this.clickOnTextWithDomElementForce('#attachSiNoCoverage','Skip')
                this.clickOnTextWithDomElement('#sw-atc-buy-box','Go to Cart') 
            }
            else{
                this.clickOnTextWithDomElement('#sw-atc-buy-box','Go to Cart') 
            }  
        })
    }
    GoTocart(){
        this.checkWarrantyCardForItem()
    }
    clickOnAddToCartBtn(){
        this.clickOnDomElement('#add-to-cart-button')
        cy.wait(6000)
    }
}

