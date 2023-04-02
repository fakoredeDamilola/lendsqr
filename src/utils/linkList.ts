export interface ILinks {
parent:string;
parentIcon:string;
children: {
    name:string;
    icon:string;
    link:string
}[]
}


const linkLists:ILinks[] = [
    {
        parent:"CUSTOMERS",
        parentIcon:"",
        children:[
            {name:"Users",icon:"",link:"#"},
            {name:"Guarantors",icon:"",link:"#"},
            {name:"Loans",icon:"",link:"#"},
            {name:"Users",icon:"",link:"#"},
            {name:"Users",icon:"",link:"#"},
            {name:"Users",icon:"",link:"#"},
            {name:"Users",icon:"",link:"#"},
            {name:"Users",icon:"",link:"#"},
            {name:"Users",icon:"",link:"#"},
        ]
    },
    {
        parent:"BUSINESSES",
        parentIcon:"",
        children:[
            {name:"Users",icon:"",link:"#"},
            {name:"Guarantors",icon:"",link:"#"},
            {name:"Loans",icon:"",link:"#"},
            {name:"Users",icon:"",link:"#"},
            {name:"Users",icon:"",link:"#"},
            {name:"Users",icon:"",link:"#"},
            {name:"Users",icon:"",link:"#"},
            {name:"Users",icon:"",link:"#"},
            {name:"Users",icon:"",link:"#"},
        ]
    }
]


export {linkLists}