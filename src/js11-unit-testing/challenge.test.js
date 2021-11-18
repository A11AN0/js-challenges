import * as challenge from "./js13.js";

describe('greet test', ()=>{
    test('Test to check that greeting is returned', ()=>{
        expect(challenge.greet()).toBe("Hello, nice to meet you");
    })
})

describe('sumTwoNumbers Test', ()=>{

    test('Sum of two positive numbers returned', ()=>{
        expect(challenge.sumTwoNumbers(4, 7)).toBe(11)
    })
    test('Sum of decimal numbers returned', ()=>{
        expect(challenge.sumTwoNumbers(8.77, 7.9)).toBe(16.67)
    })
    test('Sum of negative and positive number returned', ()=>{
        expect(challenge.sumTwoNumbers(-9, 7)).toBe(-2)
    })
})

describe('checkLarger Test', ()=>{

    test('Both numbers equal', ()=>{
        expect(challenge.checkLarger(7, 7)).toBe('Both numbers are equal')
    })
    test('First Number Larger than Second Number', ()=>{
        expect(challenge.checkLarger(8.77, 7.9)).toBe('8.77 is bigger than 7.9')
    })
    test('Second Number Larger than First Number', ()=>{
        expect(challenge.checkLarger(-9, 7)).toBe('7 is bigger than -9')
    })
})


//Still working on this test  
describe('filterByLength Test', ()=>{

    test('Valid names', ()=>{
        expect(challenge.filterByLength(["Jasmine", "Steven", "Lucas", "Eve"])).toMatchObject(["Steven", "Lucas", "Eve"])
    })

    test('No valid names', ()=>{
        expect(challenge.filterByLength(["Jasmine", "Stevenuniverse", "Lucazade"])).toBe("Sorry, no valid names supplied")
    })
    
    test('Strings not entered', ()=>{
        expect(challenge.filterByLength([1, "Stevenuniverse", 18.8])).toBe("Sorry, no valid names supplied")
    })
})


describe('reduceNumbers Test', ()=>{

    test('Normal, decimal and small value', ()=>{
        expect(challenge.reduceNumbers([47, 12.5, 1], 7)).toMatchObject([40, 5.5, 0])
    })

    test('large values', ()=>{
        expect(challenge.reduceNumbers([4547, 2738, 777], 7)).toMatchObject([255, 255, 255])
    })

   
})