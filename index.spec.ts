import accumulate from "./index"

describe("accumulate", () => {
  it("works with a single letter", () => {
    expect(accumulate("a")).toEqual("A")
  })
  it("works with sequential letters", () => {
    expect(accumulate("abcd")).toEqual("A-Bb-Ccc-Dddd")
  })
  it("works with mixed strings", () => {
    expect(accumulate("RqaEzty")).toEqual("R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy")
    expect(accumulate("cwAt")).toEqual("C-Ww-Aaa-Tttt")
  })
})

