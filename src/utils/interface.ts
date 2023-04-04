export interface ITab {
    icon:string;
    text:string;
    count:number;
    color:string;
}

export interface IProfile {
    firstName:string;
    lastName: string;
    phoneNumber: string;
    avatar: string;
    gender: string;
    bvn: string;
    address: string;
    currency: string
}
interface IGuarantor {
firstName:string;
    lastName: string;
    phoneNumber: string;
    gender: string;
    address: string
}
export interface IEducation {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: string[];
    loanRepayment: string
}
export interface Isocials {
    facebook: string;
    instagram: string;
    twitter: string
}
export interface IUser {
    accountBalance:string;
accountNumber:string;
orgName:string;
userName:string;
email:string;
phoneNumber:string;
id:string;
createdAt:string
lastActiveDate:Date;
profile:IProfile;
guarantor:IGuarantor;
education:IEducation
socials:Isocials

}
