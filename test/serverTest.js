const assert = require('chai').assert;
const sayHello = require('../Server').sayHello;
const addNumbers = require('../Server').addNumbers;
describe('Server', function(){
    it('app should return hello', function(){
        let result = sayHello();
        assert.equal(result,'hello',);
    });
    it('sayHello should return type string', function(){
        let result = sayHello();
        assert.typeOf(result, 'string');
    })
    it('result should be above 5', function(){
        let result = addNumbers(3,4);
        assert.isAbove(result,5);
    })
});