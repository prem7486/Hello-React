import { sum } from "../sum.js";


test("this should return 7 ", () =>{
    const result = sum(3,4)

    expect(result).toBe(7);
});
