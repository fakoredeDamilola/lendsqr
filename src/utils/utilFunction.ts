export const confirmPassword = (value:string) => {
  // a password must have at least one lowercase letter, one uppercase letter, one digit, and one special character (like !, @, #, $, %, ^, &, *), and it must be at least 8 characters long.
    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  
    // a password must have at least 6 characters and must meet one of the following criteria:
    // It must have at least one lowercase letter and one uppercase letter
    // OR it must have at least one lowercase letter and one digit
    // OR it must have at least one uppercase letter and one digit
    const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
  
    if(strongRegex.test(value)){
        return "strong"
    }else if(mediumRegex.test(value)){
        return "medium"
    }else if(value===""){
        return "empty"
    }else{
      return "weak"
    }
  
    }
  
  
    export const checkForError = (
      inputInfo:any,
      setErrorTable:React.Dispatch<React.SetStateAction<string[]>>,
      excludeInput:string[]
      ) =>{
      let value:keyof typeof inputInfo
        let arr:string[]=[]
      for( value in inputInfo){
        let str = inputInfo[value]
      if(str==="" && !excludeInput.includes(value)){
          arr.push(value)
        }
      }
        setErrorTable([...arr])
        return arr
    }