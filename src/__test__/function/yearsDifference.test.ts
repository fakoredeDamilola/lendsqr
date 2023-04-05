import { diffInYears } from "../../utils/utilFunction"

describe("Year Differences check",()=>{
    it("check for the differences in year to return user activity ",()=>{
       expect(diffInYears(new Date('11/11/2011'))).toEqual({
         "color": "#545F7D",
         "text": "Inactive",
       })
       expect(diffInYears(new Date('11/11/2009'))).toEqual({
         "color": "#545F7D",
         "text": "Inactive",
       })
       expect(diffInYears(new Date('11/11/2034'))).toEqual({
         "color": "#39CD62",
         "text": "active",
       })
       expect(diffInYears(new Date('11/11/1970'))).toEqual({
         "color": "#E4033B",
         "text": "Blacklisted",
       })
    })
})