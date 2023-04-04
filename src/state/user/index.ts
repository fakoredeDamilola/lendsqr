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
    user: IUser | null;
    currentPage: number;
    userPerPage:number;
    userListOnPage:IUser[]
    currentSideTab:string
}

export const UserTabs = ["General Details","Documents","Bank Details","Loans","Savings","App and System"]

const initialState : UserState = {
    users: [],
    user:null,
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
        
        const startIndex = state.currentPage ===1 ? 0 : state.currentPage * state.userPerPage
        const endIndex = state.currentPage * state.userPerPage +10
        const miniUsers = action.payload.users.slice(startIndex,endIndex)
        state.userListOnPage = miniUsers
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
    }
   }
});

export const  { updateUsers,changeUserPage,updateUser,switchSideBarTab }  = userSlice.actions
export default userSlice.reducer;
