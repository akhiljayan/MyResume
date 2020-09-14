import { IResumeHeader, IContacts, ISkills, IWorkExperience, IEducation, IProjects, IInvolvements } from './AllInterface';

export class HeaderDetail{
    private nameData: string = "Akhil Jayan";
    private titleData: string = "Full Stack Developer";
    private descriptionData : string = `Full Stack Developer with 4.5 years of industrial experience. 
    Proficient in building and maintaining enterprise application using multiple technologies like Java, C#, JavaScript etc. 
    Has a Post-Graduate Diploma in System Analysis from National University of Singapore and Bachelors of technology from University of Calicut.`;

    public getData(): IResumeHeader{
        let data:IResumeHeader = {
            name: this.nameData,
            title: this.titleData,
            description: this.descriptionData
        };
        return data;
    }
}

export class ContactDetails{
    private mailId : string = "mailtoakhiljayan@gmail.com";
    private phoneNumber: string = "93354578";
    private location: string = "Singapore";
    private linkedin: string = "linkedin.com/in/akhil-jayan";
    private github: string = "github.com/akhiljayan";

    public getData() : IContacts{
        let data:IContacts ={
            mailId: this.mailId,
            phoneNumber:this.phoneNumber,
            location: this.location,
            linkedin: this.linkedin,
            github: this.github
        };
        return data;
    }
}

export class SkillDetails{
    private skills : string = `
    Java,
    Spring-boot,
    C#,
    ASP.NET,
    Javascript,
    Angular,
    React JS,
    PHP,
    Symfony,
    HTML/CSS,
    SCSS,
    SQL,
    ORM Frameworks,
    RDBMS,
    REST API,
    GIT,
    TDD,
    AWS,
    Agile Methodology`;

    public getData() : ISkills{
        let skillarr : Array<string> = this.skills.split(",");
        let data:ISkills = {
            count: skillarr.length,
            skills: skillarr
        }
        return data;
    }
}

export class WorkExperience implements IWorkExperience{
    designation: string;
    company: string;
    startDate: string;
    endDate: string;
    tasks: string[];

    constructor(designation: string, company: string, startDate: string, endDate: string, tasks: string[]){
        this.designation = designation;
        this.company = company;
        this.startDate = startDate;
        this.endDate = endDate;
        this.tasks = tasks;
    }
}

export class  WorkExperienceData{
    workExperience: any =[
        {
            designation: "Senior Associate",
            company: "KPMG Singapore",
            startDate: "09/2019",
            endDate: "Present",
            tasks: [
                "Involvement in development of Incentive Management Systems for Enterprise Singapore",
                "Develop Common UI components to be used through out the application by other Developers",
                "Works with Business Analysts and Quality Control Engineers for user stories elaboration, testing activities and bug ﬁxing",
                "Contribution to system architecture and design"
            ],
        }, 
        {
            designation: "Full Stack Developer",
            company: "PulseSync Pte. Ltd.",
            startDate: "03/2017",
            endDate: "09/2019",
            tasks: [
                "Collaborate with the functional team to analyze collected business requirements",
                "Participate in the discussion to translate requirements into solutions and ensure that identiﬁed solutions meet clients needs and expectations",
                "Communicate with business analyst and project manager on project delivery and Involvement in deciding the project solution architecture and design",
                "Development and Deployment of web applications which include back-end API's, user interface and reports",
                "Testing, troubleshooting and resolving application functionality related issues, technical issues, and technical support",
                "Involve in research on application scalability and enhancement",
            ],
        }, 
        {
            designation: "Software Engineer",
            company: "PIT Solutions Pvt. Ltd.",
            startDate: "03/2016",
            endDate: "07/2016",
            tasks: [
                "Communicate with the users on business requirements and provide technical solutions",
                "Develop and deploy enterprise application as per the collected requirements and provide support for the Released products",
                "Work together with the QA team and deliver the ﬁnished product and to perform code reviews of completed tasks and features"
            ],
        }, 
        {
            designation: "Software Programmer",
            company: "National Informatics Centre",
            startDate: "11/2014",
            endDate: "03/2016",
            tasks: [
                "Developed and released 3 major State Govt. projects for Finance department and Election Commission",
                "Involvement in project designing which includes database design and module architecture",
                "Versioning, deployment and maintenance of application to development and staging environment",
                "Constantly involved in improving the efficiency of applications by carrying out Code review and code Refactoring"
            ],
        }, 
    ];

    getWorkExperienceData() : Array<WorkExperience>{
        let data: Array<WorkExperience> = [];
        this.workExperience.forEach((val : WorkExperience, key: any) => {
            data.push(new WorkExperience(val.designation, val.company, val.startDate, val.endDate, val.tasks));
        });
        return data;
    }
}


export class Education implements IEducation{
    course: string;
    university: string;
    startDate: string;
    endDate: string;
    cgpa: string;
    subjects:  string[];

    constructor(course: string, university: string, startDate: string, endDate: string, cgpa: string, subjects: string[]){
        this.course = course;
        this.university = university;
        this.startDate = startDate;
        this.endDate = endDate;
        this.cgpa = cgpa;
        this.subjects = subjects;
    }
}

export class  EducationData{
    educationData: any =[
        {
            course: "Post Graduate Diploma",
            university: "National University of Singapore",
            startDate: "2016",
            endDate: "2017",
            cgpa: "CGPA: 3.9",
            subjects: [
                "System Analysis",
                "Software Engineering",
                "Software Development"
            ]
        }, 
        {
            course: "Bachelors of Technology",
            university: "Calicut University",
            startDate: "2010",
            endDate: "2014",
            cgpa: "Honors : 1st Class",
            subjects: [
                "Electronics and Communication Enginering",
                "Cryptography and Network Security",
                "Software Engineering"
            ]
        }
    ];

    getEducationData() : Array<Education>{
        let data: Array<Education> = [];
        this.educationData.forEach((val : Education, key: any) => {
            data.push(new Education(val.course, val.university, val.startDate, val.endDate, val.cgpa, val.subjects));
        });
        return data;
    }
}

export class ProjectsData implements IProjects{
    title: string;
    description: string;
    role: string;
    startDuration: string;
    endDuration: string;
    tasks: string[];
    techStacks: string[];

    constructor(title: string, description: string, role: string, startDuration: string, endDuration: string, tasks:string[],  techStacks: string[]){
        this.title = title;
        this.description = description;
        this.role = role;
        this.startDuration = startDuration;
        this.endDuration = endDuration;
        this.tasks = tasks;
        this.techStacks =  techStacks;
    }
    
}


export class Projects{
    projects = [
        {
            title: "Enterprise Singapore Incentive Management System",
            description: `Application that helps applicants to apply and process diffrent insentive schemes offered by Enterprice Singapore. 
            The application also coveres an intranet portel which handles all the backend processes done by diffrent banking institutions and Enterprice Singapore.`,
            role: 'Senior Developer',
            tasks: ['User Story Estimation', 'Sprint Planning', 'Technical Designing', 'Full Stack Development', 'Unit testing, Bug fixing', 'Deployment'],
            startDuration: "05/2019",
            endDuration: "Ongoing",
            techStacks: ['ASP.NET', 'HTML/CSS', 'SASS', 'Javascript', 'Outsystems', 'SQL']
        },
        {
            title: "Ingot Person Centred Care System",
            description: `Multi tenant application aims to de-medicalise care and increase collaboration, coordination and connectivity among care providers, professionals and family caregivers with the help of many features and modules`,
            role: 'Full Stack Developer',
            tasks: ['User story Preperation', 'User Story Estimation', 'Sprint Planning', 'Technical Designing', 'Full Stack Development', 'Unit testing, Bug fixing', 'Versioning', 'Deployment'],
            startDuration: "07/2017",
            endDuration: "05-2019",
            techStacks: ['.NET', 'ASP Boilerplate', 'Angular', 'HTML/CSS', 'Javascript', 'MSSQL']
        },
        {
            title: "RESTO Restaurant",
            description: `POS system targeting new age Restaurants and Bars to manage the end to end functionality of the Business`,
            role: 'Full Stack Developer',
            tasks: ['User story Preperation', 'User Story Estimation', 'Sprint Planning', 'Technical Designing', 'Full Stack Development', 'Unit testing, Bug fixing', 'Versioning'],
            startDuration: "02/2019",
            endDuration: "Ongoing",
            techStacks: ['Java', 'Spring Boot', 'Angular', 'HTML/CSS', 'Javascript', 'MySql']
        },
        {
            title: "Setu - The Money Pot",
            description: `An Application Inspired by Splitwise to manage small group of users to manage chit finanace and to organise savings for certain events and programs`,
            role: 'Full Stack Developer',
            tasks: ['Requirement gathering', 'System design', 'Technical Designing', 'Full Stack Development', 'Unit testing, Bug fixing', 'Versioning'],
            startDuration: "09/2019",
            endDuration: "Ongoing", 
            techStacks: ['ReactJS', 'HTML/CSS', 'Javascript']
        }
    ];

    getProjects(): Array<ProjectsData>{
        let data:Array<ProjectsData> = [];
        this.projects.forEach((val : ProjectsData, key: any) => {
            data.push(new ProjectsData(val.title, val.description, val.role, val.startDuration, val.endDuration, val.tasks, val.techStacks));
        });
        return data;
    }
}

export class Involvements{
    private invol : string []= [
        'Frequent contributor to the open source community',
        'Tweaks and bug fixes for some Libraries like Angular Date-Time Picker, Angular Chart JS, UI-Select etc',
        'Developed Ext.Base plugins for Typo3 for the open source community under GNU license.',
        'Involvement in development of multi tenant boilerplate framework similar to ASP Boilerplate usingSpring boot (JAVA) and Angular',
        'Outsystem Certified Associate'
    ];

    public getData() : IInvolvements{
        let invArr : Array<string> = this.invol;
        let data:IInvolvements = {
            involvements: invArr
        }
        return data;
    }
}
