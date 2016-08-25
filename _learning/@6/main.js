// Tests // 

(function(vector) {

  var FIXTURE = vector.create(10, 20);

  function expect(val) {
    return { 
      toEql: function (expected) {
        var result = !!(val === expected);
        if (result) {
          console.log('='+result);
        } else {
          throw new Error('\nexpected ' + expected + '\n' +'actual ' + val);
        }
      }
    }
  }

  function describe(description, cb) {
    console.log(description);
    cb();
  }

  function it(description, cb) {
    console.log(description);
    cb()
  }

  describe('Vector', function (){
    describe('getX', function () {
      it('Should get 10', function () {
        expect(FIXTURE.getX()).toEql(9);
      })
    })
    describe('getY', function () {
      it('Should get 20', function () {
        expect(FIXTURE.getY()).toEql(20);
      })
    })
  })

})(vector)