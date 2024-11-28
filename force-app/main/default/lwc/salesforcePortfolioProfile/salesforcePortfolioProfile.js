import { LightningElement, api } from 'lwc';

export default class SalesforcePortfolioProfile extends LightningElement {
    @api profilePhoto;
    @api socialLinks;
    @api userDetails;
}
