import { confirmPassword } from "../../utils/utilFunction"

describe("password strength",()=>{
    it("password strength",()=>{
        expect(confirmPassword('aaaaaaaabbbb')).toEqual("weak")
        expect(confirmPassword('aaaaaaaa1234')).toEqual("medium")
        expect(confirmPassword('aaaaaaaaAB')).toEqual("medium")
        expect(confirmPassword('aaaaaaaaAB123')).toEqual("medium")
        expect(confirmPassword('aaaaaaaaAB123***_')).toEqual("strong")
        expect(confirmPassword('aaaaaaaa1AB_?')).toEqual("medium")
    })
})
