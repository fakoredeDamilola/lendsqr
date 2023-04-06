import { checkForError } from "../../utils/utilFunction"
import { testObj1, testObj2, testObj3 } from "../testData"

describe("Error check",()=>{
    it("check for errors in an object",()=>{
        expect(checkForError(testObj1,[])).toEqual([])
        expect(checkForError(testObj2,[])).toEqual(["name"])
        expect(checkForError(testObj2,["name"])).toEqual([])
        expect(checkForError(testObj3,["company","text","name"])).toEqual([])
        expect(checkForError(testObj3,[])).toEqual(["name","company","text"])
    })
})