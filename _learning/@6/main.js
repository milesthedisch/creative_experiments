// Tests // 

(function(vector) {

  var FIXTURE = vector.create(10, 20);

  function expect(val) {
    return { 
      toEql: function (expected) {
        var result = !!(val === expected);
        if (result) {
          console.log('\n\t\t'+result);
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
    console.log('\t' + description);
    cb()
  }

  describe('Vector', function (){
    beforeEach();
    describe('getX', function () {
      it('Should get 10', function () {
        expect(FIXTURE.getX()).toEql(10);
      });
    });

    describe('getY', function () {
      it('Should get 20', function () {
        expect(FIXTURE.getY()).toEql(20);
      });
    });

    describe('setX', function () {
      it('Should set the state to 0', function () {
        FIXTURE.setX(0)
        expect(FIXTURE.getX(0)).toEql(0)
      });
    });

    describe('setY', function () {
      it('Should set the state to 0', function () {
        FIXTURE.setY(1)
        expect(FIXTURE.getY()).toEql(1)
      });
    })

  })

})(vector)