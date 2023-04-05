import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../utils/interface";



export enum IUserTab {
    GENERAL_DETAILS="General Details",
    DOCUMENTS="Documents",
    BANK_DETAILS="Bank Details",
    LOANS="Loans" ,
    SAVINGS="Savings",
    APP_SYSTEM="App and System"
}

interface UserState {
    users : IUser[];
    filterSearch : IUser[];
    user: IUser | null;
    currentPage: number;
    userPerPage:number;
    userListOnPage:IUser[]
    currentSideTab:string
}

export const UserTabs = ["General Details","Documents","Bank Details","Loans","Savings","App and System"]

const initialState : UserState = {
    users: [
        {
            "createdAt": "2089-05-21T04:15:40.501Z",
            "orgName": "accusamus-minima-repudiandae",
            "userName": "Jaycee15",
            "email": "Veronica_Shanahan93@gmail.com",
            "phoneNumber": "(543) 727-0652",
            "lastActiveDate": "2039-08-13T13:37:10.433Z",
            "profile": {
                "firstName": "Mia",
                "lastName": "Padberg",
                "phoneNumber": "987-749-2057 x6370",
                "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/726.jpg",
                "gender": "Male",
                "bvn": "374229067",
                "address": "Meagan Islands",
                "currency": "NGN"
            },
            "guarantor": {
                "firstName": "Johnathon",
                "lastName": "Hane",
                "phoneNumber": "(573) 413-3844 x9178",
                "gender": "Male",
                "address": "Goyette Trail"
            },
            "accountBalance": "800.80",
            "accountNumber": "TEJOGWC1007",
            "socials": {
                "facebook": "@lendsqr",
                "instagram": "@lendsqr",
                "twitter": "@lendsqr"
            },
            "education": {
                "level": "Bsc",
                "employmentStatus": "Employed",
                "sector": "FinTech",
                "duration": "2 Years",
                "officeEmail": "Kitty.Swaniawski28@gmail.com",
                "monthlyIncome": [
                    "616.57",
                    "295.72"
                ],
                "loanRepayment": "818.12"
            },
            "id": "2"
        },
        {
            "createdAt": "2098-12-19T22:38:57.408Z",
            "orgName": "dignissimos-adipisci-dolores",
            "userName": "Jaylen_Dooley53",
            "email": "Dameon_Hermann18@hotmail.com",
            "phoneNumber": "713.348.2116",
            "lastActiveDate": "1996-10-05T16:26:44.302Z",
            "profile": {
                "firstName": "Lois",
                "lastName": "Zemlak",
                "phoneNumber": "410-745-3032 x358",
                "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/759.jpg",
                "gender": "Male",
                "bvn": "380898916",
                "address": "Gerlach Inlet",
                "currency": "NGN"
            },
            "guarantor": {
                "firstName": "Bette",
                "lastName": "Langosh",
                "phoneNumber": "1-218-781-2618 x673",
                "gender": "Male",
                "address": "Lester Parks"
            },
            "accountBalance": "431.34",
            "accountNumber": "FOUADZD1LIA",
            "socials": {
                "facebook": "@lendsqr",
                "instagram": "@lendsqr",
                "twitter": "@lendsqr"
            },
            "education": {
                "level": "Bsc",
                "employmentStatus": "Employed",
                "sector": "FinTech",
                "duration": "2 Years",
                "officeEmail": "Viviane.Bernier79@hotmail.com",
                "monthlyIncome": [
                    "161.16",
                    "471.42"
                ],
                "loanRepayment": "657.81"
            },
            "id": "14"
        },
        {
            "createdAt": "2022-05-26T16:34:13.492Z",
            "orgName": "qui-quia-et",
            "userName": "Janick.Kozey",
            "email": "Garland_Mayer32@hotmail.com",
            "phoneNumber": "1-935-445-6324",
            "lastActiveDate": "2018-11-22T15:15:43.596Z",
            "profile": {
                "firstName": "Arch",
                "lastName": "Raynor",
                "phoneNumber": "391-402-4689 x5950",
                "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/486.jpg",
                "gender": "Male",
                "bvn": "238380602",
                "address": "Quincy Pass",
                "currency": "NGN"
            },
            "guarantor": {
                "firstName": "Otha",
                "lastName": "Murray",
                "phoneNumber": "565.798.6550 x3035",
                "gender": "Male",
                "address": "Hartmann Tunnel"
            },
            "accountBalance": "293.71",
            "accountNumber": "BDTUCIK1625",
            "socials": {
                "facebook": "@lendsqr",
                "instagram": "@lendsqr",
                "twitter": "@lendsqr"
            },
            "education": {
                "level": "Bsc",
                "employmentStatus": "Employed",
                "sector": "FinTech",
                "duration": "2 Years",
                "officeEmail": "Adriel.Spinka90@yahoo.com",
                "monthlyIncome": [
                    "102.99",
                    "406.00"
                ],
                "loanRepayment": "354.41"
            },
            "id": "19"
        },
        {
            "createdAt": "2036-04-16T13:15:10.466Z",
            "orgName": "consequuntur-expedita-nihil",
            "userName": "Jadon_McKenzie",
            "email": "Jaleel_Runolfsson41@yahoo.com",
            "phoneNumber": "1-524-368-8038",
            "lastActiveDate": "2003-09-13T15:47:52.570Z",
            "profile": {
                "firstName": "Jamarcus",
                "lastName": "Ruecker",
                "phoneNumber": "440.453.2875",
                "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/479.jpg",
                "gender": "Male",
                "bvn": "631096470",
                "address": "Maia Meadows",
                "currency": "NGN"
            },
            "guarantor": {
                "firstName": "Buford",
                "lastName": "Farrell",
                "phoneNumber": "(710) 520-4502 x168",
                "gender": "Male",
                "address": "Candice Streets"
            },
            "accountBalance": "650.52",
            "accountNumber": "TNAASDU1622",
            "socials": {
                "facebook": "@lendsqr",
                "instagram": "@lendsqr",
                "twitter": "@lendsqr"
            },
            "education": {
                "level": "Bsc",
                "employmentStatus": "Employed",
                "sector": "FinTech",
                "duration": "2 Years",
                "officeEmail": "Jaydon.Jerde@yahoo.com",
                "monthlyIncome": [
                    "122.85",
                    "310.72"
                ],
                "loanRepayment": "553.59"
            },
            "id": "24"
        },
        {
            "createdAt": "2032-03-28T14:43:00.369Z",
            "orgName": "voluptatum-sed-neque",
            "userName": "Janis_Grimes20",
            "email": "Guadalupe_Kemmer64@gmail.com",
            "phoneNumber": "782.368.7466 x9037",
            "lastActiveDate": "2006-02-10T14:10:07.618Z",
            "profile": {
                "firstName": "Stacey",
                "lastName": "Rowe",
                "phoneNumber": "261.833.2287",
                "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/831.jpg",
                "gender": "Male",
                "bvn": "654988154",
                "address": "Frida Land",
                "currency": "NGN"
            },
            "guarantor": {
                "firstName": "Maria",
                "lastName": "Grimes",
                "phoneNumber": "724-855-0532 x20705",
                "gender": "Male",
                "address": "Cathryn Summit"
            },
            "accountBalance": "873.85",
            "accountNumber": "LWGUDJY1",
            "socials": {
                "facebook": "@lendsqr",
                "instagram": "@lendsqr",
                "twitter": "@lendsqr"
            },
            "education": {
                "level": "Bsc",
                "employmentStatus": "Employed",
                "sector": "FinTech",
                "duration": "2 Years",
                "officeEmail": "Karelle45@hotmail.com",
                "monthlyIncome": [
                    "616.52",
                    "883.58"
                ],
                "loanRepayment": "445.71"
            },
            "id": "68"
        },
        {
            "createdAt": "2053-12-30T00:10:57.609Z",
            "orgName": "aut-suscipit-porro",
            "userName": "Janick68",
            "email": "Pete30@gmail.com",
            "phoneNumber": "540.480.2910",
            "lastActiveDate": "2031-01-27T15:15:09.355Z",
            "profile": {
                "firstName": "Mathias",
                "lastName": "Schamberger",
                "phoneNumber": "1-752-313-6145",
                "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/888.jpg",
                "gender": "Male",
                "bvn": "507462125",
                "address": "Kulas Place",
                "currency": "NGN"
            },
            "guarantor": {
                "firstName": "Hugh",
                "lastName": "Kuhic",
                "phoneNumber": "1-518-575-9331",
                "gender": "Male",
                "address": "Cheyanne Hollow"
            },
            "accountBalance": "273.28",
            "accountNumber": "FFBAMYC1",
            "socials": {
                "facebook": "@lendsqr",
                "instagram": "@lendsqr",
                "twitter": "@lendsqr"
            },
            "education": {
                "level": "Bsc",
                "employmentStatus": "Employed",
                "sector": "FinTech",
                "duration": "2 Years",
                "officeEmail": "Kenyon.Hermann6@hotmail.com",
                "monthlyIncome": [
                    "363.95",
                    "620.30"
                ],
                "loanRepayment": "379.44"
            },
            "id": "71"
        },
        {
            "createdAt": "2064-06-07T21:53:49.691Z",
            "orgName": "in-voluptatum-consectetur",
            "userName": "Jany.Hammes",
            "email": "Hipolito.Roberts@hotmail.com",
            "phoneNumber": "(969) 668-6705",
            "lastActiveDate": "2045-01-19T17:49:32.788Z",
            "profile": {
                "firstName": "Marlin",
                "lastName": "Luettgen",
                "phoneNumber": "1-593-642-4264 x55391",
                "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1188.jpg",
                "gender": "Male",
                "bvn": "595606825",
                "address": "Jameson Mountains",
                "currency": "NGN"
            },
            "guarantor": {
                "firstName": "Erwin",
                "lastName": "Huel",
                "phoneNumber": "407-260-4129",
                "gender": "Male",
                "address": "Oscar Ville"
            },
            "accountBalance": "602.99",
            "accountNumber": "QDSEGSR1PIM",
            "socials": {
                "facebook": "@lendsqr",
                "instagram": "@lendsqr",
                "twitter": "@lendsqr"
            },
            "education": {
                "level": "Bsc",
                "employmentStatus": "Employed",
                "sector": "FinTech",
                "duration": "2 Years",
                "officeEmail": "Misael.Jacobs@hotmail.com",
                "monthlyIncome": [
                    "624.76",
                    "397.25"
                ],
                "loanRepayment": "379.88"
            },
            "id": "75"
        }
    ],
    filterSearch:[
        {
            "createdAt": "2089-05-21T04:15:40.501Z",
            "orgName": "accusamus-minima-repudiandae",
            "userName": "Jaycee15",
            "email": "Veronica_Shanahan93@gmail.com",
            "phoneNumber": "(543) 727-0652",
            "lastActiveDate": "2039-08-13T13:37:10.433Z",
            "profile": {
                "firstName": "Mia",
                "lastName": "Padberg",
                "phoneNumber": "987-749-2057 x6370",
                "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/726.jpg",
                "gender": "Male",
                "bvn": "374229067",
                "address": "Meagan Islands",
                "currency": "NGN"
            },
            "guarantor": {
                "firstName": "Johnathon",
                "lastName": "Hane",
                "phoneNumber": "(573) 413-3844 x9178",
                "gender": "Male",
                "address": "Goyette Trail"
            },
            "accountBalance": "800.80",
            "accountNumber": "TEJOGWC1007",
            "socials": {
                "facebook": "@lendsqr",
                "instagram": "@lendsqr",
                "twitter": "@lendsqr"
            },
            "education": {
                "level": "Bsc",
                "employmentStatus": "Employed",
                "sector": "FinTech",
                "duration": "2 Years",
                "officeEmail": "Kitty.Swaniawski28@gmail.com",
                "monthlyIncome": [
                    "616.57",
                    "295.72"
                ],
                "loanRepayment": "818.12"
            },
            "id": "2"
        },
        {
            "createdAt": "2098-12-19T22:38:57.408Z",
            "orgName": "dignissimos-adipisci-dolores",
            "userName": "Jaylen_Dooley53",
            "email": "Dameon_Hermann18@hotmail.com",
            "phoneNumber": "713.348.2116",
            "lastActiveDate": "1996-10-05T16:26:44.302Z",
            "profile": {
                "firstName": "Lois",
                "lastName": "Zemlak",
                "phoneNumber": "410-745-3032 x358",
                "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/759.jpg",
                "gender": "Male",
                "bvn": "380898916",
                "address": "Gerlach Inlet",
                "currency": "NGN"
            },
            "guarantor": {
                "firstName": "Bette",
                "lastName": "Langosh",
                "phoneNumber": "1-218-781-2618 x673",
                "gender": "Male",
                "address": "Lester Parks"
            },
            "accountBalance": "431.34",
            "accountNumber": "FOUADZD1LIA",
            "socials": {
                "facebook": "@lendsqr",
                "instagram": "@lendsqr",
                "twitter": "@lendsqr"
            },
            "education": {
                "level": "Bsc",
                "employmentStatus": "Employed",
                "sector": "FinTech",
                "duration": "2 Years",
                "officeEmail": "Viviane.Bernier79@hotmail.com",
                "monthlyIncome": [
                    "161.16",
                    "471.42"
                ],
                "loanRepayment": "657.81"
            },
            "id": "14"
        },
        {
            "createdAt": "2022-05-26T16:34:13.492Z",
            "orgName": "qui-quia-et",
            "userName": "Janick.Kozey",
            "email": "Garland_Mayer32@hotmail.com",
            "phoneNumber": "1-935-445-6324",
            "lastActiveDate": "2018-11-22T15:15:43.596Z",
            "profile": {
                "firstName": "Arch",
                "lastName": "Raynor",
                "phoneNumber": "391-402-4689 x5950",
                "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/486.jpg",
                "gender": "Male",
                "bvn": "238380602",
                "address": "Quincy Pass",
                "currency": "NGN"
            },
            "guarantor": {
                "firstName": "Otha",
                "lastName": "Murray",
                "phoneNumber": "565.798.6550 x3035",
                "gender": "Male",
                "address": "Hartmann Tunnel"
            },
            "accountBalance": "293.71",
            "accountNumber": "BDTUCIK1625",
            "socials": {
                "facebook": "@lendsqr",
                "instagram": "@lendsqr",
                "twitter": "@lendsqr"
            },
            "education": {
                "level": "Bsc",
                "employmentStatus": "Employed",
                "sector": "FinTech",
                "duration": "2 Years",
                "officeEmail": "Adriel.Spinka90@yahoo.com",
                "monthlyIncome": [
                    "102.99",
                    "406.00"
                ],
                "loanRepayment": "354.41"
            },
            "id": "19"
        },
        {
            "createdAt": "2036-04-16T13:15:10.466Z",
            "orgName": "consequuntur-expedita-nihil",
            "userName": "Jadon_McKenzie",
            "email": "Jaleel_Runolfsson41@yahoo.com",
            "phoneNumber": "1-524-368-8038",
            "lastActiveDate": "2003-09-13T15:47:52.570Z",
            "profile": {
                "firstName": "Jamarcus",
                "lastName": "Ruecker",
                "phoneNumber": "440.453.2875",
                "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/479.jpg",
                "gender": "Male",
                "bvn": "631096470",
                "address": "Maia Meadows",
                "currency": "NGN"
            },
            "guarantor": {
                "firstName": "Buford",
                "lastName": "Farrell",
                "phoneNumber": "(710) 520-4502 x168",
                "gender": "Male",
                "address": "Candice Streets"
            },
            "accountBalance": "650.52",
            "accountNumber": "TNAASDU1622",
            "socials": {
                "facebook": "@lendsqr",
                "instagram": "@lendsqr",
                "twitter": "@lendsqr"
            },
            "education": {
                "level": "Bsc",
                "employmentStatus": "Employed",
                "sector": "FinTech",
                "duration": "2 Years",
                "officeEmail": "Jaydon.Jerde@yahoo.com",
                "monthlyIncome": [
                    "122.85",
                    "310.72"
                ],
                "loanRepayment": "553.59"
            },
            "id": "24"
        },
        {
            "createdAt": "2032-03-28T14:43:00.369Z",
            "orgName": "voluptatum-sed-neque",
            "userName": "Janis_Grimes20",
            "email": "Guadalupe_Kemmer64@gmail.com",
            "phoneNumber": "782.368.7466 x9037",
            "lastActiveDate": "2006-02-10T14:10:07.618Z",
            "profile": {
                "firstName": "Stacey",
                "lastName": "Rowe",
                "phoneNumber": "261.833.2287",
                "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/831.jpg",
                "gender": "Male",
                "bvn": "654988154",
                "address": "Frida Land",
                "currency": "NGN"
            },
            "guarantor": {
                "firstName": "Maria",
                "lastName": "Grimes",
                "phoneNumber": "724-855-0532 x20705",
                "gender": "Male",
                "address": "Cathryn Summit"
            },
            "accountBalance": "873.85",
            "accountNumber": "LWGUDJY1",
            "socials": {
                "facebook": "@lendsqr",
                "instagram": "@lendsqr",
                "twitter": "@lendsqr"
            },
            "education": {
                "level": "Bsc",
                "employmentStatus": "Employed",
                "sector": "FinTech",
                "duration": "2 Years",
                "officeEmail": "Karelle45@hotmail.com",
                "monthlyIncome": [
                    "616.52",
                    "883.58"
                ],
                "loanRepayment": "445.71"
            },
            "id": "68"
        },
        {
            "createdAt": "2053-12-30T00:10:57.609Z",
            "orgName": "aut-suscipit-porro",
            "userName": "Janick68",
            "email": "Pete30@gmail.com",
            "phoneNumber": "540.480.2910",
            "lastActiveDate": "2031-01-27T15:15:09.355Z",
            "profile": {
                "firstName": "Mathias",
                "lastName": "Schamberger",
                "phoneNumber": "1-752-313-6145",
                "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/888.jpg",
                "gender": "Male",
                "bvn": "507462125",
                "address": "Kulas Place",
                "currency": "NGN"
            },
            "guarantor": {
                "firstName": "Hugh",
                "lastName": "Kuhic",
                "phoneNumber": "1-518-575-9331",
                "gender": "Male",
                "address": "Cheyanne Hollow"
            },
            "accountBalance": "273.28",
            "accountNumber": "FFBAMYC1",
            "socials": {
                "facebook": "@lendsqr",
                "instagram": "@lendsqr",
                "twitter": "@lendsqr"
            },
            "education": {
                "level": "Bsc",
                "employmentStatus": "Employed",
                "sector": "FinTech",
                "duration": "2 Years",
                "officeEmail": "Kenyon.Hermann6@hotmail.com",
                "monthlyIncome": [
                    "363.95",
                    "620.30"
                ],
                "loanRepayment": "379.44"
            },
            "id": "71"
        },
        {
            "createdAt": "2064-06-07T21:53:49.691Z",
            "orgName": "in-voluptatum-consectetur",
            "userName": "Jany.Hammes",
            "email": "Hipolito.Roberts@hotmail.com",
            "phoneNumber": "(969) 668-6705",
            "lastActiveDate": "2045-01-19T17:49:32.788Z",
            "profile": {
                "firstName": "Marlin",
                "lastName": "Luettgen",
                "phoneNumber": "1-593-642-4264 x55391",
                "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1188.jpg",
                "gender": "Male",
                "bvn": "595606825",
                "address": "Jameson Mountains",
                "currency": "NGN"
            },
            "guarantor": {
                "firstName": "Erwin",
                "lastName": "Huel",
                "phoneNumber": "407-260-4129",
                "gender": "Male",
                "address": "Oscar Ville"
            },
            "accountBalance": "602.99",
            "accountNumber": "QDSEGSR1PIM",
            "socials": {
                "facebook": "@lendsqr",
                "instagram": "@lendsqr",
                "twitter": "@lendsqr"
            },
            "education": {
                "level": "Bsc",
                "employmentStatus": "Employed",
                "sector": "FinTech",
                "duration": "2 Years",
                "officeEmail": "Misael.Jacobs@hotmail.com",
                "monthlyIncome": [
                    "624.76",
                    "397.25"
                ],
                "loanRepayment": "379.88"
            },
            "id": "75"
        }
    ],
    user:{
            "createdAt": "2089-05-21T04:15:40.501Z",
            "orgName": "accusamus-minima-repudiandae",
            "userName": "Jaycee15",
            "email": "Veronica_Shanahan93@gmail.com",
            "phoneNumber": "(543) 727-0652",
            "lastActiveDate": "2039-08-13T13:37:10.433Z",
            "profile": {
                "firstName": "Mia",
                "lastName": "Padberg",
                "phoneNumber": "987-749-2057 x6370",
                "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/726.jpg",
                "gender": "Male",
                "bvn": "374229067",
                "address": "Meagan Islands",
                "currency": "NGN"
            },
            "guarantor": {
                "firstName": "Johnathon",
                "lastName": "Hane",
                "phoneNumber": "(573) 413-3844 x9178",
                "gender": "Male",
                "address": "Goyette Trail"
            },
            "accountBalance": "800.80",
            "accountNumber": "TEJOGWC1007",
            "socials": {
                "facebook": "@lendsqr",
                "instagram": "@lendsqr",
                "twitter": "@lendsqr"
            },
            "education": {
                "level": "Bsc",
                "employmentStatus": "Employed",
                "sector": "FinTech",
                "duration": "2 Years",
                "officeEmail": "Kitty.Swaniawski28@gmail.com",
                "monthlyIncome": [
                    "616.57",
                    "295.72"
                ],
                "loanRepayment": "818.12"
            },
            "id": "2"
        }
    ,
    userPerPage:10,
    currentPage:1,
    userListOnPage:[],
    currentSideTab:"users"
}
const userSlice = createSlice({
    name : "user",
    initialState,
   reducers: {
    updateUsers: (state , action : PayloadAction<{users : IUser[]}>) => {
        state.users = action.payload.users
        state.filterSearch = action.payload.users
        
        // const startIndex = state.currentPage ===1 ? 0 : state.currentPage * state.userPerPage
        // const endIndex = state.currentPage * state.userPerPage +10
        // const miniUsers = action.payload.users.slice(startIndex,endIndex)
        // state.userListOnPage = miniUsers
    },
    updateUser: (state , action : PayloadAction<{user : IUser | null}>) => {
        state.user = action.payload.user
    },
    changeUserPage: (state , action : PayloadAction<{page : number,users:IUser[]}>) =>{
        const startIndex = action.payload.page ===1 ? 0 : (action.payload.page-1) * state.userPerPage
        const endIndex = (action.payload.page * state.userPerPage) + 1
        const miniUsers =action.payload.users.slice(startIndex,endIndex)
        state.userListOnPage = miniUsers
        state.currentPage=action.payload.page
    },
    switchSideBarTab: (state , action : PayloadAction<{sidetab:string}>) => {
        state.currentSideTab = action.payload.sidetab
    },
    changeuserPerPage: (state , action : PayloadAction<{userPerPage:number,users:IUser[]}>) => {
        state.userPerPage= action.payload.userPerPage
        const startIndex = state.currentPage ===1 ? 0 : (state.currentPage-1) * state.userPerPage
        const endIndex = (state.currentPage * state.userPerPage) + 1
        const miniUsers =action.payload.users.slice(startIndex,endIndex)
        state.userListOnPage = miniUsers
        state.currentPage=state.currentPage
    },
    changeFilterSearch:(state , action : PayloadAction<{search:string,users:IUser[],main_users:IUser[]}>) =>{
        const {search,users,main_users} = action.payload
        console.log({search})
        if(search){
            state.filterSearch = users
            
        }else{
            console.log("kejeijekmneknejjjekjekjk")
            console.log({main_users})
            state.filterSearch = main_users
        }
        const startIndex = state.currentPage ===1 ? 0 : (state.currentPage-1) * state.userPerPage
            const endIndex = (state.currentPage * state.userPerPage) + 1
            const miniUsers =users.slice(startIndex,endIndex)
            state.userListOnPage = miniUsers
            state.currentPage=state.currentPage
        // state.filterSearch = users
    }
   }
});

export const  { updateUsers,changeUserPage,updateUser,switchSideBarTab,changeuserPerPage,changeFilterSearch }  = userSlice.actions
export default userSlice.reducer;
