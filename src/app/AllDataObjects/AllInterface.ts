export interface IResumeHeader{
    name : string;
    title: string;
    description: string;
}

export interface IContacts{
    mailId : string;
    phoneNumber: string;
    location: string;
    linkedin: string;
    github: string
}

export interface ISkills{
    count: number;
    skills: Array<string>;
}

export interface IWorkExperience{
    designation: string;
    company: string;
    startDate: string;
    endDate: string;
    tasks: Array<string>;
}

export interface IEducation{
    course: string;
    university: string;
    startDate: string;
    endDate: string;
    cgpa: string;
    subjects: Array<string>;
}