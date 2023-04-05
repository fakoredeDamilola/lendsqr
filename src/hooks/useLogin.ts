import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useLogin(){
    const [authenticated] = useLocalStorage("auth",false)


    return {authenticated}
}