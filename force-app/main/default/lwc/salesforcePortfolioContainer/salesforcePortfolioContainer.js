import { LightningElement, track } from 'lwc';
import * as PORTFOLIO_DATA from './salesforcePortfolioDataContainer';

const HEADERS = {
    overview: {
        title: 'Overview',
        description: 'Welcome to my Salesforce portfolio!',
        icon: 'standard:avatar'
    },
    experience: {
        title: 'Experience',
        description: 'My professional experience with Salesforce.',
        icon: 'standard:work_order_item'
    },
    certifications: {
        title: 'Certifications',
        description: 'My Salesforce certifications and achievements.',
        icon: 'standard:employee_contact'
    },
    projects: {
        title: 'Projects',
        description: 'Some of the Salesforce projects I have worked on.',
        icon: 'standard:lead'
    },
    skills: {
        title: 'Skills',
        description: 'My skill set and expertise in Salesforce.',
        icon: 'standard:education'
    },
};

export default class SalesforcePortfolioContainer extends LightningElement {
    
    PORTFOLIO_DATA = PORTFOLIO_DATA; // Updated line

    selectedPage = 'overview';
    isOverview = true;
    isExperience = false;
    isCertifications = false;
    isProjects = false;
    isSkills = false;

    headerTitle;
    headerIcon;
    headerDescription;

    renderHeader = true;

    handleSelect(event) {
        this.selectedPage = event.detail;
        this.headerTitle = HEADERS[this.selectedPage]?.title;
        this.headerIcon = HEADERS[this.selectedPage]?.icon;
        this.headerDescription = HEADERS[this.selectedPage]?.description;
        this.isOverview = this.selectedPage === 'overview';
        this.isExperience = this.selectedPage === 'experience';
        this.isCertifications = this.selectedPage === 'certifications';
        this.isProjects = this.selectedPage === 'projects';
        this.isSkills = this.selectedPage === 'skills';
    }
}
