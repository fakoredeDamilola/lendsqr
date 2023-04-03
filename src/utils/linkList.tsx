import {HiUsers} from "react-icons/hi"
import {FaUsers,FaHandshake,FaUserTimes,FaUserCheck,FaSuitcase,FaScroll} from "react-icons/fa"
import {TbMoneybag,TbPigMoney} from "react-icons/tb"
import {GiReceiveMoney,GiOilySpiral} from "react-icons/gi"
import {GrMoney,GrUserSettings} from "react-icons/gr"
import {VscArrowSwap} from "react-icons/vsc"
import {IoDocumentTextSharp} from "react-icons/io5"
import {AiOutlineBarChart} from "react-icons/ai"


export interface IChild {
    name:string;
    icon:any;
    link:string
}

export interface ILinks {
parent:string;
parentIcon:string;
children: IChild[]
}


const linkLists:ILinks[] = [
    {
        parent:"CUSTOMERS",
        parentIcon:"",
        children:[
            {name:"Users",icon:<HiUsers />,link:"FaUserCheck#"},
            {name:"Guarantors",icon:<FaUsers />,link:"#"},
            {name:"Loans",icon:<TbMoneybag />,link:"#"},
            {name:"Decision Models",icon:<FaHandshake />,link:"#"},
            {name:"Savings",icon:<TbPigMoney />,link:"#"},
            {name:"Loan Requests",icon:<GiReceiveMoney />,link:"#"},
            {name:"Whitelist",icon:<FaUserCheck />,link:"#"},
            {name:"Karma",icon:<FaUserTimes />,link:"#"},
        ]
    },
    {
        parent:"BUSINESSES",
        parentIcon:"",
        children:[
            {name:"Organization",icon:<FaSuitcase />,link:"#"},
            {name:"Loan Products",icon:<GiReceiveMoney />,link:"#"},
            {name:"Savings Products",icon:<TbMoneybag />,link:"#"},
            {name:"Fees and Charges",icon:<GrMoney />,link:"#"},
            {name:"Transactions",icon:<VscArrowSwap />,link:"#"},
            {name:"Services",icon:<GiOilySpiral />,link:"#"},
            {name:"Service Account",icon:<GrUserSettings />,link:"#"},
            {name:"Settlements",icon:<FaScroll />,link:"#"},
            {name:"Reports",icon:<AiOutlineBarChart />,link:"#"},
        ]
    },
    {
        parent:"SETTINGS",
        parentIcon:"",
        children:[
            {name:"Prefences",icon:"",link:"#"},
            {name:"Fees and Pricing",icon:"",link:"#"},
            {name:"Audit Logs",icon:<IoDocumentTextSharp />,link:"#"},
        ]
    }
]


export {linkLists}