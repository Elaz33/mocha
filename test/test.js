var assert = require('assert');
// const { assert } = require('chai');
const { describe } = require('mocha');
describe('Math', function () {
    it('Should test if 3*3 = 9',function(){
        assert.equal(9,3*3 )
    })
    it('Should test if (3–4)* 8 = -8',function(){
        assert.equal(-8,(3 - 4)* 8)
    })
});

// describe("Sample Tests",()=>{
//     it("test",() =>{
//         Test.assertEquals(position("a"), "Position of alphabet: 1");
//     })
// })