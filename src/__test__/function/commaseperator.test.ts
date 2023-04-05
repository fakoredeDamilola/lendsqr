import { numberWithCommas } from "../../utils/utilFunction"


describe("Comma check",()=>{
    it("check for commas added to text",()=>{
        expect(numberWithCommas(123747477)).toEqual("123,747,477")
        expect(numberWithCommas()).toEqual("")
        expect(numberWithCommas(1234.567)).toEqual("1,234.567")
        expect(numberWithCommas(1234.5678849)).toEqual("1,234.5678849")
    })
})