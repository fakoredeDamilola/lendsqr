import { confirmPassword, formatDate } from "../../utils/utilFunction"

describe("format Date",()=>{
    it("format Date to user friendly date",()=>{
        expect(formatDate('aaaaaaaabbbb')).toEqual("undefined NaN, NaN NaN:NaN AM")
        expect(formatDate('2072-12-27T03:44:22.522Z')).toEqual("Dec 27, 2072 4:44 AM")
        expect(formatDate('2072-10-27T03:44:22.522Z')).toEqual("Oct 27, 2072 4:44 AM")
        expect(formatDate('2072-01-27T03:44:22.522Z')).toEqual("Jan 27, 2072 4:44 AM")
    })
})
