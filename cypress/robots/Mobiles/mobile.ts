import { BaseEyes, BaseHands } from "../BaseRobot"

export class MobilesRobotEyes extends BaseEyes{
    scrollBottom(){
        this.scrollToBottom()
    }
}

export class MobilesRobotHands extends BaseHands{

    searchMobiles(){
        this.typeTextWithClassElement('nav-search-field','Mobiles')
    }
    clickOnLastMobile(){
        this.newTabOpening('[data-component-type="s-search-result"]',-1,'a',0)
    }
    clickSideNavBar(){
        this.clickOnDomElementWithIndex('.nav-left',2)
    }
    clickOnMobilePhones(){
        this.clickOnDomElement('[data-menu-id="8"]')
    }
    clickSearchIcon(){
        this.clickOnDomElementWithIndex('input',4)
    }
}