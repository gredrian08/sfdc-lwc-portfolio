import LinkedInLogo from '@salesforce/resourceUrl/LinkedInLogo';
import GitHubLogo from '@salesforce/resourceUrl/GitHubLogo';
import GmailLogo from '@salesforce/resourceUrl/GmailLogo';
import TrailheadLogo from '@salesforce/resourceUrl/TrailheadLogo';
import ProfilePhoto from '@salesforce/resourceUrl/ProfilePicture';
import ProcessAutomationAccreditedProfessional from '@salesforce/resourceUrl/ProcessAutomationAccreditedProfessional';
import SalesforceCertifiedPlatformDeveloperI from '@salesforce/resourceUrl/SalesforceCertifiedPlatformDeveloperI';
import SalesforceCertifiedPlatformAppBuilder from '@salesforce/resourceUrl/SalesforceCertifiedPlatformAppBuilder';
import SalesforceCertifiedAISpecialist from '@salesforce/resourceUrl/SalesforceCertifiedAISpecialist';
import SalesforceCertifiedAdvancedAdministrator from '@salesforce/resourceUrl/SalesforceCertifiedAdvancedAdministrator';
import SalesforceCertifiedAdministrator from '@salesforce/resourceUrl/SalesforceCertifiedAdministrator';
import SalesforceCertifiedAIAssociate from '@salesforce/resourceUrl/SalesforceCertifiedAIAssociate';
import SalesforceCertifiedAssociate from '@salesforce/resourceUrl/SalesforceCertifiedAssociate';
import CurrencyConverterPic from '@salesforce/resourceUrl/CurrencyConverterPic';
import SalesforcePortfolioPic from '@salesforce/resourceUrl/SalesforcePortfolioPic';


export const PROFILE_IMAGE = ProfilePhoto;

export const SOCIAL_LINKS = [
    {
        type: "linkedin",
        label: "LinkedIn",
        link: "https://www.linkedin.com/in/gredrian-cueto",
        icon: LinkedInLogo
    },
    {
        type: "github",
        label: "GitHub",
        link: "https://github.com/gredrian08",
        icon: GitHubLogo
    },
    {
        type: "email",
        label: "Gmail",
        link: "mailto:gredrianc@gmail.com",
        icon: GmailLogo
    },
    {
        type: "trailhead",
        label: "Trailhead",
        link: "https://trailblazer.me/id/gredrianc",
        icon: TrailheadLogo
    }
];

export const USER_DETAILS = {
    NAME: 'GREDRIAN D. CUETO',
    ROLE: 'SALESFORCE DEVELOPER',
    EMAIL: 'gredrianc@gmail.com',
    LOCATION: 'Batangas, Philippines'
};

export const CAREER_SUMMARY = {
    DESCRIPTION: 'As an experienced Salesforce Developer with over 3.5 years in delivering innovative Salesforce solutions, I bring a proven track record of optimizing business processes and enhancing user adoption. With 8 certifications and a deep expertise in Salesforce technologies, I have successfully implemented Apex Classes, Triggers, Batch Apex, Scheduled Apex, Flows, and Lightning Web Components to streamline workflows, automate complex processes, and ensure high system performance. \n\n' +
                'I am adept at leading cross-functional teams and collaborating with stakeholders to develop custom solutions that drive efficiency and align with business goals. My commitment to delivering high-quality, goal-oriented solutions has resulted in significant improvements in system performance, user engagement, and process automation. \n\n' +
                'I am passionate about leveraging my technical skills and analytical mindset to contribute to impactful Salesforce solutions and enhance business operations.',
    KEYS_POINTS: [
        '8 Salesforce Certifications, including Process Automation Accredited Professional, Platform Developer I, Salesforce Certified Advanced Administrator, and Salesforce Certified AI Specialist.',
        'Led the development and optimization of custom Salesforce applications, improving workflow efficiency and business outcomes.',
        'Spearheaded user adoption initiatives, increasing engagement by 50% through intuitive Salesforce UI enhancements.',
        'Expert in Salesforce Flows, Apex, Batch and Scheduled Apex, and Lightning Web Components.',
        'Focused on delivering scalable, cost-effective solutions with an emphasis on user-centric design and system optimization.',
        'Proven ability to lead cross-functional teams to deliver goal-aligned solutions and enhance business performance.'
    ]
};

export const EXPERIENCE_DATA = {
    EXPERIENCES: [
        {
            ROLE: 'Packaged App Development Senior Analyst',
            COMPANY_NAME: 'Accenture Inc., Philippines',
            DURATION: 'September 2023 - Present (1 yr 3 mos)',
            DESCRIPTION_POINTS: [
                'Spearheaded the development of Apex Classes, Triggers, and Lightning Components to streamline workflows and boost efficiency.',
                'Optimized system performance with Batch Apex and Scheduled Apex.',
                'Managed a team to design and deploy Salesforce Flows, enhancing process automation.',
                'Delivered best practices workshops to enhance Salesforce use.',
                'Worked closely with cross-functional teams for goal-aligned solutions.',
                'Enhanced user adoption by 50% by implementing a custom home page that guided users on platform tasks, reducing confusion and improving engagement with Salesforce.',
            ],
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used',
                LIST: ['Apex', 'Batch Apex', 'Scheduled Apex', 'Lightning Components', 'Salesforce Flows'],
            }
        },
        {
            ROLE: 'Application Development Analyst',
            COMPANY_NAME: 'Accenture Inc., Philippines',
            DURATION: 'June 2022 - September 2023 (1 yr 4 mos)',
            DESCRIPTION_POINTS: [
                'Developed and maintained custom Salesforce applications, improving business process efficiency.',
                'Automated complex business processes using Salesforce Flows and Apex.',
                'Led user training and implemented change management strategies.',
            ],
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used',
                LIST: ['Salesforce Flows', 'Apex']
            }
        },
        {
            ROLE: 'Application Development Associate',
            COMPANY_NAME: 'Accenture Inc., Philippines',
            DURATION: 'March 2021 - June 2022 (1 yr 4 mos)',
            DESCRIPTION_POINTS: [
                'Assisted in the development of Salesforce applications and components.',
                'Contributed to the optimization of existing business processes using Salesforce solutions.',
                'Supported user training and ensured high-quality deliverables.',
            ],
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used',
                LIST: ['Salesforce Solutions']
            }
        }
    ]
};


export const CERTIFICATION_DATA = {
    HEADING: 'Certifications',
    LIST: [
        {
            name: 'Process Automation Accredited Professional',
            icon: ProcessAutomationAccreditedProfessional,
            issuer: 'Salesforce',
            description: 'Accredited Process Automation Professionals have skills and knowledge in designing, configuring, building, and implementing Process Automation.',
            issuedDate: 'Issued On Mar 2023'
        },
        {
            name: 'Salesforce Certified Platform Developer I',
            icon: SalesforceCertifiedPlatformDeveloperI,
            issuer: 'Salesforce',
            description: 'Certified Platform Developer I (PDI) developers understand how to develop and deploy custom business logic and custom interfaces using the programmatic capabilities of the Lightning Platform. They know when to use declarative versus programmatic methods, and can extend the Lightning Platform using Apex and Visualforce.',
            issuedDate: 'Issued On Jan 2023'
        },
        {
            name: 'Salesforce Certified Platform App Builder',
            icon: SalesforceCertifiedPlatformAppBuilder,
            issuer: 'Salesforce',
            description: 'Certified Platform App Builders have the skills and knowledge to design, build, and implement custom applications using the declarative customization capabilities of the Salesforce Platform.',
            issuedDate: 'Issued On Oct 2022'
        },
        {
            name: 'Salesforce Certified AI Specialist',
            icon: SalesforceCertifiedAISpecialist,
            issuer: 'Salesforce',
            description: 'Certified AI Specialists have experience implementing out-of-the-box AI capabilities, and enhancing them with Einstein Copilot, Prompt Builder, and Model Builder.',
            issuedDate: 'Issued On Nov 2024'
        },
        {
            name: 'Salesforce Certified Advanced Administrator',
            icon: SalesforceCertifiedAdvancedAdministrator,
            issuer: 'Salesforce',
            description: 'Certified Advanced Administrators are seasoned Salesforce Administrators who can harness the power of advanced features and functionality to solve a variety of business problems.',
            issuedDate: 'Issued On Sep 2023'
        },
        {
            name: 'Salesforce Certified Administrator',
            icon: SalesforceCertifiedAdministrator,
            issuer: 'Salesforce',
            description: 'Certified Administrators are Salesforce pros who are always looking for ways to help their companies get even more out of the Salesforce Platform through additional features and capabilities.',
            issuedDate: 'Issued On Oct 2021'
        },
        {
            name: 'Salesforce Certified AI Associate',
            icon: SalesforceCertifiedAIAssociate,
            issuer: 'Salesforce',
            description: 'Certified AI Associates should be able to provide informed strategies and guide stakeholder decisions based on Salesforce\'s Trusted AI Principles.',
            issuedDate: 'Issued On Oct 2024'
        },
        {
            name: 'Salesforce Certified Associate',
            icon: SalesforceCertifiedAssociate,
            issuer: 'Salesforce',
            description: 'Certified Associates have a fundamental awareness of how an integrated CRM platform solves the challenge of connecting departments and customer data, and may have up to 6 months of Salesforce user experience.',
            issuedDate: 'Issued On Dec 2022'
        }
    ]
};

export const SKILLS_DATA = {
    LIST: [
        'Salesforce Administration',
        'Salesforce Development',
        'Salesforce DX',
        'Salesforce Lightning Web Components',
        'Apex Programming Language',
        'Process Automation',
        'Declarative Customization',
        'Salesforce AI Capabilities',
        'Einstein Copilot',
        'Prompt Builder',
        'Model Builder',
        'Advanced Reporting',
        'Security and Access Control',
        'User Management',
        'Data Management',
        'Salesforce AI Principles',
        'AI Strategy',
        'Stakeholder Guidance',
        'CRM Platform Integration'
    ]
}

export const PROJECTS_DATA = {
    PROJECTS: [
        {
            NAME: 'LWC Currency Converter',
            DESCRIPTION: 'A Lightning Web Component that allows users to convert currencies. This project demonstrates the use of Lightning Web Components, Apex, and integration with an external API to fetch live currency exchange rates.',
            IMAGE: CurrencyConverterPic,
            GITHUB_REPO: 'https://github.com/gredrian08/sfdc-lwc-currency-converter-app'
        },
        {
            NAME: 'Salesforce Portfolio Project',
            DESCRIPTION: 'A comprehensive portfolio project showcasing various implementations using Lightning Web Components (LWC), HTML, JavaScript, and CSS.',
            IMAGE: SalesforcePortfolioPic, 
            GITHUB_REPO: 'https://github.com/gredrian08/sfdc-lwc-portfolio' 
        }
    ]
};
