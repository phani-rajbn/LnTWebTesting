//Jasmine testing files are saved with a suffix Spec
//Test Suite is a Program that defines one or more Unit Tests. 
describe('Testing the Math Program', ()=>{
    xit('adds 2 numbers', ()=>{
        const res = addFunc(3,2);
        expect(res).toBe(5);
        //if it is prefixed with x , then the test case will be executed. In other words, it wil be excluded from the Test run.
    })

    //The callback function of all the cases should be void and will not take any args...
    xit("should add -ve numbers", ()=>{
        const res = addFunc(-5,-6);
        expect(res).toBe(-11);
    })

    xit("should subtract 2 numbers", ()=>{
        const res = subFunc(13,12);
        expect(res).toBe(1);
    })

    xit("should return the title of the App", ()=>{
        const res = title();
        expect(res).toBe("Welcome to Jasmine training")
    })

    it('Should divide 2 numbers', () => {
        const rs = divFunc(13,7);
        expect(rs).toBe('1.86');
    });

    it('should return infinity', () => {
        const res = divFunc(13, 0);
        expect(res).toEqual('Infinity');//Equals is used to check the match of logical equivalance...
    });
    
    it("should check for number", ()=>{
        const res = checkNumber('12');
        expect(res).toBeTruthy();
    })

    it("should check for non number", () => {
        const res = checkNumber('apple');
        expect(res).toBeFalsy();
    })
});

//Tuesday: How to test objects, arrays and sequential data. How to run test suites in Nodejs environment. intro to Protractor JS.  