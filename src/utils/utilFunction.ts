export const confirmPassword = (value:string) => {
    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  
    const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
  
    if(strongRegex.test(value)){
        return "strong"
    }else if(mediumRegex.test(value)){
        return "medium"
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