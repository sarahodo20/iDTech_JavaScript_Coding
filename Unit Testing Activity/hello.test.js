var utils  = require('course-utilities');
var Greet = utils.load('./hello.js', 'Greet');
var dogName2="Ranger";

describe('test Greet()', function (){
  it('should be called', function() {
    expect(Greet(["Alex","Arsene","Jose","Zidane"])).toEqual("Hello, Alex, Arsene, Jose, Zidane");
  });
});